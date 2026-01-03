const fs = require("fs");
const path = require("path");

const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

const pluginBundle = require("@11ty/eleventy-plugin-bundle");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("photos");
  eleventyConfig.addPassthroughCopy({ "public/robots.txt": "/robots.txt" });

  eleventyConfig.addPassthroughCopy({
    "./public/": "/",
  });

  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(pluginBundle);

  // Image transform plugin for all images (photos, notes, etc.)
  // In dev mode: processes images on-demand (fast rebuilds)
  // In build mode: processes all images upfront (for production)
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    extensions: "html",
    formats: ["webp", "jpeg"],
    widths: ["auto"],
    urlPath: "/img/",
    outputDir: "./_site/img/",
    defaultAttributes: {
      loading: "lazy",
      decoding: "async",
      alt: "", // Default empty alt if none provided
    },
    errorOnMissing: false, // Don't fail build on missing images
    transformOnRequest: process.env.ELEVENTY_RUN_MODE === "serve", // On-demand in dev, upfront in production
  });

  // Global data: simple photo directory listing
  eleventyConfig.addGlobalData("photoNav", () => {
    const photosDir = path.join(__dirname, 'photos');
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

        photos.push({
          filename: file,
          title: file,
          url: `/photos/${folder}/${slug}/`,
          src: `/photos/${folder}/${file}`
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
  });

  // Global data: flatten all photos from all folders
  eleventyConfig.addGlobalData("allPhotos", () => {
    const photoNav = eleventyConfig.globalData.photoNav();
    const allPhotos = [];

    photoNav.forEach(folder => {
      folder.photos.forEach(photo => {
        allPhotos.push({
          ...photo,
          folderSlug: folder.slug,
          folderName: folder.name
        });
      });
    });

    return allPhotos;
  });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy",
    );
  });

  eleventyConfig.addFilter("projectsDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy");
  });

  eleventyConfig.addFilter("fullDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "MMMM d, yyyy",
    );
  });

  eleventyConfig.addFilter("yearDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy");
  });

  eleventyConfig.addFilter("shortDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("MM/dd/yyyy");
  });

  eleventyConfig.addFilter("time", (dateObj) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(dateObj);
  });

  eleventyConfig.addFilter("dinkyDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("MM.dd.yyyy");
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  eleventyConfig.addFilter("gitCommitHash", function (filePath) {
    // Access gitHashes from global data
    const gitHashes = this.ctx.gitHashes || {};
    const info = gitHashes[filePath] || gitHashes["./" + filePath];
    if (info && typeof info === "object") {
      return info.hash || "unknown";
    }
    return info || "unknown";
  });

  eleventyConfig.addFilter("gitCommitDate", function (filePath) {
    // Access gitHashes from global data
    const gitHashes = this.ctx.gitHashes || {};
    const info = gitHashes[filePath] || gitHashes["./" + filePath];
    if (info && typeof info === "object" && info.date) {
      return new Date(info.date);
    }
    return null;
  });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if (!Array.isArray(array) || array.length === 0) {
      return [];
    }
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  eleventyConfig.addFilter("isActive", function (currentUrl, linkUrl) {
    const normalize = (url) => (url.endsWith("/") ? url : url + "/");
    currentUrl = normalize(currentUrl);
    linkUrl = normalize(linkUrl);

    return currentUrl === linkUrl ? "active" : "";
  });

  eleventyConfig.addFilter("min", (...numbers) => {
    return Math.min.apply(null, numbers);
  });

  function filterTagList(tags) {
    return (tags || []).filter(
      (tag) => ["all", "nav", "post", "posts"].indexOf(tag) === -1,
    );
  }

  eleventyConfig.addFilter("filterTagList", filterTagList);

  eleventyConfig.addCollection("notes", function (collection) {
    return collection.getFilteredByGlob("notes/*.md");
  });

  eleventyConfig.addCollection("stories", function (collection) {
    return collection.getFilteredByGlob("stories/*.md");
  });

  eleventyConfig.addCollection("featured", function (collection) {
    return collection
      .getAll()
      .filter(function (item) {
        return (item.data.tags || []).includes("featured");
      })
      .sort(function (a, b) {
        return a.date - b.date; // ascending order (oldest first)
      });
  });

  eleventyConfig.addCollection("newsletter", function (collection) {
    return collection.getFilteredByGlob("newsletter/*.md");
  });

  eleventyConfig.addCollection("adventures", function (collection) {
    return collection.getFilteredByGlob("adventures/*.md");
  });

  eleventyConfig.addCollection("projects", function (collection) {
    return collection.getFilteredByGlob("projects/*.md");
  });

  eleventyConfig.addCollection("cascade", function (collection) {
    return collection.getFilteredByGlob("the-cascade/*.md");
  });

  eleventyConfig.addCollection("photos", function (collection) {
    return collection.getFilteredByGlob("photos/**/*.njk").filter((item) => {
      return (
        !item.inputPath.includes("photos/index.njk") &&
        !item.inputPath.includes("plymouth.njk") &&
        item.data.photo
      );
    });
  });

  eleventyConfig.addCollection("photoFolders", function (collection) {
    const allPages = collection.getAll();
    const folderResult = {};

    allPages.forEach((page) => {
      // Find photo detail pages (not index pages)
      if (
        page.url &&
        page.url.startsWith("/photos/") &&
        !page.url.endsWith("/photos/") &&
        page.url.split("/").filter((p) => p).length === 3 &&
        page.data.photo
      ) {
        const urlParts = page.url.split("/").filter((p) => p);
        const folderName = urlParts[1];

        if (!folderResult[folderName]) {
          folderResult[folderName] = {
            name: folderName.charAt(0).toUpperCase() + folderName.slice(1),
            slug: folderName,
            photos: [],
          };
        }
        folderResult[folderName].photos.push(page);
      }
    });

    return Object.values(folderResult);
  });

  // Create an array of all tags
  eleventyConfig.addCollection("tagList", function (collection) {
    let tagSet = new Set();
    collection.getAll().forEach((item) => {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    });

    return filterTagList([...tagSet]);
  });

  // Customize Markdown library and settings
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: "after",
      class: "direct-link",
      symbol: "#",
      level: [1, 2, 3, 4],
    }),
    slugify: eleventyConfig.getFilter("slug"),
  });

  eleventyConfig.setLibrary("md", markdownLibrary);

  return {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: ["md", "njk", "html", "liquid"],

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: "njk",

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: "njk",

    // -----------------------------------------------------------------
    // If your site deploys to a subdirectory, change `pathPrefix`.
    // Don’t worry about leading and trailing slashes, we normalize these.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // Best paired with the `url` filter: https://www.11ty.dev/docs/filters/url/

    // You can also pass this in on the command line using `--pathprefix`

    // Optional (default is shown)
    pathPrefix: "/",
    // -----------------------------------------------------------------

    // These are all optional (defaults are shown):
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
