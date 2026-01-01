const Image = require("@11ty/eleventy-img");
const path = require("path");
const fs = require("fs");

module.exports = async function() {
  const photosDir = path.join(__dirname, '../photos');
  const folders = fs.readdirSync(photosDir).filter(item => {
    const fullPath = path.join(photosDir, item);
    return fs.statSync(fullPath).isDirectory();
  });

  const result = [];

  for (const folder of folders) {
    const folderPath = path.join(photosDir, folder);
    const imageFiles = fs.readdirSync(folderPath).filter(file =>
      [".jpg", ".jpeg", ".png", ".webp"].includes(
        path.extname(file).toLowerCase()
      )
    );

    const photos = [];
    for (const file of imageFiles) {
      const basename = path.basename(file, path.extname(file));
      const slug = basename.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const fullPath = path.join(folderPath, file);

      let metadata = await Image(fullPath, {
        widths: [600, 1200],
        formats: ["webp", "jpeg"],
        outputDir: "./_site/img/",
        urlPath: "/img/",
      });

      photos.push({
        filename: file,
        title: file,
        url: `/photos/${folder}/${slug}/`,
        metadata: metadata
      });
    }

    if (photos.length > 0) {
      result.push({
        name: folder.charAt(0).toUpperCase() + folder.slice(1),
        slug: folder,
        photos: photos
      });
    }
  }

  return result;
};
