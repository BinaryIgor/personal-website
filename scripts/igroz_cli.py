import logging
import subprocess
from os import path
import os
import sys
import shutil
import assets_renamer
import image_resizer
import re
from PIL import Image

logging.basicConfig(level=logging.INFO)

LOG = logging.getLogger()
OWNER = "Igor"
ROOT_DIR = path.split(os.getcwd())[0]
# TODO: proper directory
DEPLOY_ROOT_DIR = ROOT_DIR
DEPLOY_LOCAL_ROOT_DIR = path.join(ROOT_DIR, "_deploy")
DEPLOY_LOCAL_ROOT_CONTENT_DIR = path.join(DEPLOY_LOCAL_ROOT_DIR, "site")
OUTPUT_JS_DIR = path.join(DEPLOY_LOCAL_ROOT_CONTENT_DIR, "js")

SITE_DIR = path.join(ROOT_DIR, "site")
JS_DIR = path.join(SITE_DIR, "js")
ASSETS_DIR = path.join(SITE_DIR, "assets")
DOCKER_DIR = path.join(ROOT_DIR, "nginx")
NGINX_CONF_FILE = "nginx.conf"
NGINX_CONF_PATH = path.join(ROOT_DIR, "nginx", NGINX_CONF_FILE)

DEPLOY_LOCAL_NGINX_CONF_PATH = path.join(
    DEPLOY_LOCAL_ROOT_DIR, NGINX_CONF_FILE)

DEPLOY_HOST = "igor@igor.roztropinski.com"
DEPLOY_HOST_SSH_PORT = "44"
DEPLOY_REMOTE_NGINX_CONF_PATH = "/etc/nginx/conf.d/default.conf"
DEPLOY_REMOTE_SITE_DIR = "/usr/share/nginx/site"

IMAGES_LINKS_JS_FILE_NAME = "images"
IMAGE_NAME_OR_PATH_PATTERN = re.compile("(.*)\\.(png|jpeg|jpg)")

TO_IGNORE_IN_DEPLOY_FILE_PATTERNS = re.compile("(.*)original(.*)")

TO_EXCLUDE_FROM_ASSETS_RENAMING_PATTERNS = []

MAX_IMAGE_WIDTH = 300
MAX_IMAGE_HEIGHT = 300
RESIZED_IMAGE_PREFIX = "thumb"


def rendered_menu():
    return '\n'.join([f'{e} - {OPTIONS[e][OPTION_NAME]}' for e in OPTIONS])


def build():
    def to_ignore_files(src, names):
        to_ignore = []

        for n in names:
            full_path = path.join(src, n)
            if re.match(TO_IGNORE_IN_DEPLOY_FILE_PATTERNS, full_path):
                to_ignore.append(n)

        return to_ignore

    print("Clearing build directory...")
    if path.exists(DEPLOY_LOCAL_ROOT_DIR):
        shutil.rmtree(DEPLOY_LOCAL_ROOT_DIR)

    print()
    print("Copying static content...")
    shutil.copytree(SITE_DIR, DEPLOY_LOCAL_ROOT_CONTENT_DIR,
                    ignore=to_ignore_files)

    print()
    print("Renaming assets...")
    old_new_images = assets_renamer.execute(
        DEPLOY_LOCAL_ROOT_DIR, TO_EXCLUDE_FROM_ASSETS_RENAMING_PATTERNS)

    js_images_links_file = images_links_file_path(JS_DIR)
    if js_images_links_file:
        print()
        print(f"Replacing images links from {js_images_links_file} file")
        replace_images_links_in_js_file(js_images_links_file, old_new_images)
    else:
        raise Exception(
            f"{IMAGES_LINKS_JS_FILE_NAME} file can't be found in {JS_DIR} directory")

    create_js_bundles()

    print()
    print("Copying nginx config...")
    shutil.copyfile(NGINX_CONF_PATH, path.join(
        DEPLOY_LOCAL_ROOT_DIR, NGINX_CONF_FILE))


def images_links_file_path(dir):
    return first_file_in_dir_containing(dir, IMAGES_LINKS_JS_FILE_NAME)


def first_file_in_dir_containing(root_dir, string):
    for f in os.listdir(root_dir):
        f_path = path.join(root_dir, f)
        if path.isdir(f_path):
            found = first_file_in_dir_containing(f_path, string)
            if found:
                return found
        elif string in f_path:
            return f_path

    return None


def to_resize_images_paths(dir):
    images = []

    for subdir, _, files in os.walk(dir):
        for f in files:
            if re.match(IMAGE_NAME_OR_PATH_PATTERN, f):
                images.append(path.join(subdir, f))

    return images


def replace_images_links_in_js_file(js_file_path, old_new_images_paths):
    old_new_images_names = {}
    for k, v in old_new_images_paths.items():
        _, old_name = path.split(k)
        _, new_name = path.split(v)

        old_new_images_names[old_name] = new_name

    new_lines = new_js_file_lines(js_file_path, old_new_images_names)

    if new_lines:
        override_js_links_file(new_lines)
    else:
        print("No new changes to override")


def new_js_file_lines(js_file_path, old_new_images_names):
    new_lines = []
    changed = False

    with open(js_file_path) as f:
        for l in f.readlines():
            match = re.search(IMAGE_NAME_OR_PATH_PATTERN, l)
            if not match:
                new_lines.append(l)
                continue

            current_names_or_paths = all_in_quotes(l)
            if not current_names_or_paths:
                new_lines.append(l)
                continue

            changed = True
            new_line = line_with_replaced_images(
                l, current_names_or_paths, old_new_images_names)
            new_lines.append(new_line)

    return new_lines if changed else []


def line_with_replaced_images(line, current_names_or_paths, old_new_images_names):
    new_line = line

    for current_name_or_path in current_names_or_paths:
        _, current_name = path.split(current_name_or_path)
        new_name = old_new_images_names.get(current_name, None)
        if new_name:
            new_line = new_line.replace(current_name, new_name)

    return new_line


def override_js_links_file(new_lines):
    js_file_path = images_links_file_path(OUTPUT_JS_DIR)

    print(f"Overriding links in {js_file_path} file")

    with open(js_file_path, "w") as f:
        f.writelines(new_lines)


def all_in_quotes(string):
    quotes_chars = ['"', "'", "`"]
    in_quotes = []
    collecting = False
    chars = []

    for c in string:
        if c in quotes_chars:
            collecting = not collecting

            if not collecting:
                in_quotes.append("".join(chars))
                chars = []
        elif collecting:
            chars.append(c)

    return in_quotes


def create_js_bundles():
    print("Creating js bundles..")

    root, last = path.split(OUTPUT_JS_DIR)
    tmp_path = path.join(root, f'_{last}')

    os.rename(OUTPUT_JS_DIR, tmp_path)

    for f in os.listdir(tmp_path):
        if "app" in f:
            print(f"Creating bundle starting in {f}...")
            scattered_path = path.join(tmp_path, f)
            bundle_path = path.join(OUTPUT_JS_DIR, f)
            execute_script(
                f"rollup {scattered_path} --format iife --file {bundle_path}")
            print(f"File bundled to {bundle_path}")

            print()
            print("About to minify...")
            execute_script(
                f"terser {bundle_path} --mangle --compress --output {bundle_path}")
            print("Bundle minified")

    shutil.rmtree(tmp_path)


def resize_images():
    print(f"Searching for images in {ASSETS_DIR} dir...")
    images_paths = to_resize_images_paths(ASSETS_DIR)

    print()
    print("Removing previous, resized versions...")
    for p in images_paths:
        if is_image_thumb(p):
            os.remove(p)

    print()
    print(f"Creating resized versions for {len(images_paths)} images")
    for p in images_paths:
        if not is_image_thumb(p):
            image_resizer.execute(p, MAX_IMAGE_WIDTH, MAX_IMAGE_HEIGHT)

    print()
    print("Images resized")


def is_image_thumb(image_path):
    _, name = path.split(image_path)
    return name.startswith(RESIZED_IMAGE_PREFIX)


def build_and_run_locally():
    print("Building site...")
    build()

    print()
    print("Building and running docker")
    execute_script(f"""
        cd {DOCKER_DIR}
        export SITE_DIR={DEPLOY_LOCAL_ROOT_CONTENT_DIR}
        chmod 755 run.sh
        ./run.sh
    """)


def build_and_deploy():
    print("Building site...")
    build()

    print()
    print("Site built, copying content and nginx conf...")

    execute_script(f"""
        echo "Removing previous directory, if exists"
        ssh {DEPLOY_HOST} -p {DEPLOY_HOST_SSH_PORT} 'rm -f -r {DEPLOY_REMOTE_SITE_DIR}'

        echo
        echo "Copying content..."
        scp -P {DEPLOY_HOST_SSH_PORT} -r {DEPLOY_LOCAL_ROOT_CONTENT_DIR} {DEPLOY_HOST}:{DEPLOY_REMOTE_SITE_DIR}

        echo
        echo "Copying nginx config..."
        scp -P {DEPLOY_HOST_SSH_PORT} -r {DEPLOY_LOCAL_NGINX_CONF_PATH} {DEPLOY_HOST}:{DEPLOY_REMOTE_NGINX_CONF_PATH}

        echo
        echo "Restarting nginx"
        ssh {DEPLOY_HOST} -p {DEPLOY_HOST_SSH_PORT} 'sudo systemctl restart nginx'

        echo
        echo "Deploy finished, head on to https://igor.roztropinski.com!"
    """)


def execute_script(script):
    code = subprocess.call(f"""
        set -e
        {script}
        """, shell=True)
    if code != 0:
        raise Exception(f"Fail to run, return code: {code}")


OPTION_NAME = 'name'
OPTION_FUNCTION = 'function'
OPTIONS = {
    '1': {
        OPTION_NAME: 'build',
        OPTION_FUNCTION: build
    },
    '2': {
        OPTION_NAME: "build and run locally",
        OPTION_FUNCTION: build_and_run_locally
    },
    '3': {
        OPTION_NAME: "build and deploy to remote",
        OPTION_FUNCTION: build_and_deploy
    },
    '4': {
        OPTION_NAME: "resize images",
        OPTION_FUNCTION: resize_images
    }
}

try:
    print(f"Welcome {OWNER}!")
    print("We are operating on...")
    print(f'ROOT_DIR: {ROOT_DIR}, DEPLOY_ROOT_DIR: {DEPLOY_ROOT_DIR}')
    print(
        f'Deploy package will be created in {DEPLOY_LOCAL_ROOT_DIR} directory')
    print()
    print("There are a couple of options...")
    print(rendered_menu())
    in_option = input('What would you like to do? ')
    option = OPTIONS.get(in_option, None)
    if option:
        print(f"{option[OPTION_NAME]}...")
        option[OPTION_FUNCTION]()
        print()
        print("Success!")
    else:
        print(f"{in_option} is not a valid option")
except Exception as e:
    LOG.exception(f'Exception occurred')
except KeyboardInterrupt:
    pass
finally:
    print()
    print("Farewell.")
    sys.exit()
