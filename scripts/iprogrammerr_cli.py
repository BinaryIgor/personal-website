import logging
import subprocess
from os import path
import os
import sys
import shutil
import assets_renamer
import re

logging.basicConfig(level=logging.INFO)

LOG = logging.getLogger()
OWNER = "Igor"
ROOT_DIR = path.split(os.getcwd())[0]
# TODO: proper directory
DEPLOY_ROOT_DIR = ROOT_DIR
DEPLOY_LOCAL_ROOT_DIR = path.join(ROOT_DIR, "_deploy")
SITE_DIR = path.join(ROOT_DIR, "site")
JS_DIR = path.join(SITE_DIR, "js")
DOCKER_DIR = path.join(ROOT_DIR, "nginx")

IMAGES_LINKS_JS_FILE_NAME = "images"

TO_EXCLUDE_FROM_ASSETS_RENAMING_PATTERS = []


def rendered_menu():
    return '\n'.join([f'{e} - {OPTIONS[e][OPTION_NAME]}' for e in OPTIONS])


def build():
    print("Clearing build directory...")
    if path.exists(DEPLOY_LOCAL_ROOT_DIR):
        shutil.rmtree(DEPLOY_LOCAL_ROOT_DIR)

    print("Copying static content...")
    shutil.copytree(SITE_DIR, DEPLOY_LOCAL_ROOT_DIR)

    print()
    print("Renaming assets...")
    old_new_images = assets_renamer.execute(
        DEPLOY_LOCAL_ROOT_DIR, TO_EXCLUDE_FROM_ASSETS_RENAMING_PATTERS)

    js_images_links_file = images_links_file_path(JS_DIR)
    if js_images_links_file:
        print()
        print(f"Replacing images links from {js_images_links_file} file")
        replace_images_links_in_js_file(js_images_links_file, old_new_images)
    else:
        raise Exception(
            f"{IMAGES_LINKS_JS_FILE_NAME} file can't be found in {JS_DIR} directory")


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
    image_pattern = re.compile("(.*)\\.(png|jpeg|jpg)")

    with open(js_file_path) as f:
        for l in f.readlines():
            match = re.search(image_pattern, l)
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
    js_file_path = images_links_file_path(
        path.join(DEPLOY_LOCAL_ROOT_DIR, "js"))

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


def build_and_run_locally():
    print("Building site...")
    build()

    print()
    print("Building and running docker")
    execute_script(f"""
        cd {DOCKER_DIR}
        export SITE_DIR={DEPLOY_LOCAL_ROOT_DIR}
        chmod 755 run.sh
        ./run.sh
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
