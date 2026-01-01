const Image = require("@11ty/eleventy-img");
const path = require("path");
const fs = require("fs");

module.exports = {
  tags: "photos",
  eleventyComputed: {
    processedImages: async (data) => {
      const dirPath = path.dirname(data.page.inputPath);
      const files = fs
        .readdirSync(dirPath)
        .filter((file) =>
          [".jpg", ".jpeg", ".png", ".webp"].includes(
            path.extname(file).toLowerCase(),
          ),
        );

      return Promise.all(
        files.map(async (file) => {
          const fullPath = path.join(dirPath, file);

          let metadata = await Image(fullPath, {
            widths: [600, 1200],
            formats: ["webp", "jpeg"],
            outputDir: "./_site/img/",
            urlPath: "/img/",
          });

          return {
            filename: file,
            metadata: metadata,
          };
        }),
      );
    },
  },
};
