import logging
import subprocess
from os import path
import os
import sys
import shutil
import assets_renamer

logging.basicConfig(level=logging.INFO)

LOG = logging.getLogger()
OWNER = "Igor"
ROOT_DIR = path.split(os.getcwd())[0]
# TODO: proper directory
DEPLOY_ROOT_DIR = ROOT_DIR
DEPLOY_LOCAL_ROOT_DIR = path.join(ROOT_DIR, "_deploy")
SITE_DIR = path.join(ROOT_DIR, "site")
DOCKER_DIR = path.join(ROOT_DIR, "nginx")


def rendered_menu():
    return '\n'.join([f'{e} - {OPTIONS[e][OPTION_NAME]}' for e in OPTIONS])


def build():
    LOG.info("Clearing build directory...")
    if path.exists(DEPLOY_LOCAL_ROOT_DIR):
        shutil.rmtree(DEPLOY_LOCAL_ROOT_DIR)

    LOG.info("Copying static content...")
    shutil.copytree(SITE_DIR, DEPLOY_LOCAL_ROOT_DIR)

    LOG.info("Renaming assets...")
    assets_renamer.execute(DEPLOY_LOCAL_ROOT_DIR)


def build_and_run_locally():
    LOG.info("Building site...")
    build()

    LOG.info("Building and running docker")
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
