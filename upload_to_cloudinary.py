import os
import re
import cloudinary
import cloudinary.uploader
from dotenv import load_dotenv

# ==========================
# CONFIG
# ==========================

ENTITY = "resorts"
# restaurants
# hotels
# resorts
# attractions

INPUT_FILE = f"src/data/{ENTITY}.ts"
OUTPUT_FILE = f"src/data/{ENTITY}.ts"

ID_PREFIX = {
    "hotels": "hotel",
    "restaurants": "restaurant",
    "resorts": "resort",
    "attractions": "attraction",
}[ENTITY]

# ==========================
# CLOUDINARY
# ==========================

load_dotenv()

cloudinary.config(
    cloud_name=os.getenv("CLOUDINARY_CLOUD_NAME"),
    api_key=os.getenv("CLOUDINARY_API_KEY"),
    api_secret=os.getenv("CLOUDINARY_API_SECRET"),
)

# ==========================
# READ FILE
# ==========================

with open(INPUT_FILE, "r", encoding="utf-8") as f:
    content = f.read()

pattern = re.compile(
    rf'id:\s*"({ID_PREFIX}-\d+)".*?image:\s*"([^"]*)".*?gallery:\s*\[(.*?)\]',
    re.DOTALL,
)

new_content = content


def upload_image(url: str, public_id: str) -> str:
    """
    Upload image to Cloudinary
    """
    if not url:
        return url

    print(f"Uploading -> {public_id}")

    result = cloudinary.uploader.upload(
        url,
        public_id=public_id,
        overwrite=True,
    )

    return result["secure_url"]


# ==========================
# LOOP
# ==========================

for match in pattern.finditer(content):

    item_id = match.group(1)
    image_url = match.group(2)
    gallery_block = match.group(3)

    gallery_urls = re.findall(r'"([^"]*)"', gallery_block)

    print(f"\n====== {item_id} ======")

    # Main Image
    if image_url:
        new_main = upload_image(
            image_url,
            f"{ENTITY}/{item_id}/main",
        )

        new_content = new_content.replace(
            f'"{image_url}"',
            f'"{new_main}"',
            1,
        )

    # Gallery
    for i, old_url in enumerate(gallery_urls, start=1):

        if not old_url:
            continue

        new_gallery = upload_image(
            old_url,
            f"{ENTITY}/{item_id}/gallery-{i}",
        )

        new_content = new_content.replace(
            f'"{old_url}"',
            f'"{new_gallery}"',
            1,
        )

# ==========================
# SAVE
# ==========================

with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    f.write(new_content)

print("\n==========================")
print("DONE ✅")
print(f"Output File : {OUTPUT_FILE}")
print("==========================")