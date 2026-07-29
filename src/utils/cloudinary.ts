export function optimizeImage(url: string, width = 800, height = 600) {
    if (!url.includes("cloudinary.com")) return url;

    return url.replace(
        "/upload/",
        `/upload/f_auto,q_auto,w_${width},h_${height},c_fill/`
    );
}