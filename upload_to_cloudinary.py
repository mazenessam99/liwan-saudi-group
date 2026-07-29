import os
import re
import cloudinary
import cloudinary.uploader
from dotenv import load_dotenv


# ==========================
# CONFIG
# ==========================

ENTITY = "destinations"
# hotels
# restaurants
# resorts
# attractions

INPUT_FILE = f"src/data/{ENTITY}.ts"
OUTPUT_FILE = f"src/data/{ENTITY}.ts"


ID_PREFIX = {
    "hotels": "hotel",
    "restaurants": "restaurant",
    "resorts": "resort",
    "destinations": "attraction",
}[ENTITY]


# ==========================
# CLOUDINARY CONFIG
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


# ==========================
# MATCH DATA
# Supports:
# image only
# image + gallery
# ==========================

pattern = re.compile(
    rf'id:\s*"({ID_PREFIX}-\d+)".*?image:\s*"([^"]*)"(?:.*?gallery:\s*\[(.*?)\])?',
    re.DOTALL,
)


new_content = content


# ==========================
# UPLOAD FUNCTION
# ==========================

def upload_image(url: str, public_id: str):

    if not url:
        return url

    # لو الصورة Cloudinary بالفعل تجاهلها
    if "cloudinary.com" in url:
        print(f"SKIP => {public_id}")
        return url


    print(f"Uploading => {public_id}")


    result = cloudinary.uploader.upload(
        url,
        public_id=public_id,
        overwrite=True,
        folder=ENTITY,
    )


    return result["secure_url"]



# ==========================
# PROCESS ITEMS
# ==========================

for match in pattern.finditer(content):

    item_id = match.group(1)
    image_url = match.group(2)
    gallery_block = match.group(3) or ""


    print("\n===================")
    print(item_id)
    print("===================")


    # ----------------------
    # MAIN IMAGE
    # ----------------------

    if image_url:

        new_image = upload_image(
            image_url,
            f"{ENTITY}/{item_id}/main"
        )


        new_content = new_content.replace(
            f'"{image_url}"',
            f'"{new_image}"',
            1
        )



    # ----------------------
    # GALLERY
    # ----------------------

    gallery_urls = re.findall(
        r'"([^"]*)"',
        gallery_block
    )


    for index, old_url in enumerate(gallery_urls, start=1):

        if not old_url:
            continue


        new_gallery = upload_image(
            old_url,
            f"{ENTITY}/{item_id}/gallery-{index}"
        )


        new_content = new_content.replace(
            f'"{old_url}"',
            f'"{new_gallery}"',
            1
        )



# ==========================
# SAVE FILE
# ==========================

with open(
    OUTPUT_FILE,
    "w",
    encoding="utf-8"
) as f:

    f.write(new_content)



print("\n==========================")
print("DONE ✅")
print(f"Updated : {OUTPUT_FILE}")
print("==========================")