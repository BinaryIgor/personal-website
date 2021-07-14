
from PIL import Image
from os import path
import sys

DEFAULT_RESIZED_IMAGE_PREFIX = "thumb"


def execute(image_path, max_width, max_height, resized_prefix=DEFAULT_RESIZED_IMAGE_PREFIX):
    img = Image.open(image_path)

    if img.width <= max_width and img.height <= max_height:
        scale = 1
    elif img.width > img.height:
        scale = max_width / img.width
    else:
        scale = max_height / img.height

    _, image_name = path.split(image_path)
    output_image_path = image_path.replace(
        image_name, f"{resized_prefix}_{image_name}")

    print(f"For {image_path} saving as {output_image_path}")

    if scale == 1:
        print("Image is in the limits already, not need to resize")
        img.save(output_image_path)
        return

    print(
        f"Applying scale: {scale} to get max_width: {max_width} and max_height: {max_height}")

    new_width = int(scale * img.width)
    new_height = int(scale * img.height)

    img = img.resize((new_width, new_height), Image.ANTIALIAS)
    img.save(output_image_path)


if __name__ == "__main__":
    if len(sys.argv) <= 3:
        print(
            f"At least 3 arguments are required: image path, max_width, max_height and (optionally) output image prefix (default is {DEFAULT_RESIZED_IMAGE_PREFIX})")
        sys.exit(1)

    image_path = sys.argv[1]
    max_width = int(sys.argv[2])
    max_height = int(sys.argv[3])
    resized_image_prefix = sys.argv[4] if len(sys.argv) > 4 else DEFAULT_RESIZED_IMAGE_PREFIX

    execute(image_path, max_width, max_height, resized_image_prefix)
