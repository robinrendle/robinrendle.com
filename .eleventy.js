const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginFeedbin = require("eleventy-plugin-feedbin");
const CleanCSS = require("clean-css");
const slugify = require("slugify");
const dateFilter = require('./_11ty/date-filter.js');
const w3DateFilter = require('./_11ty/w3-date-filter.js');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginFeedbin);

  eleventyConfig.addLayoutAlias("about", "layouts/about.html");
  eleventyConfig.addLayoutAlias("likes", "layouts/likes.html");
  eleventyConfig.addLayoutAlias("essays", "layouts/essays.html");
  eleventyConfig.addLayoutAlias("default", "layouts/default.html");
  eleventyConfig.addLayoutAlias("home", "layouts/home.html");
  eleventyConfig.addLayoutAlias("vote", "layouts/vote.html");
  eleventyConfig.addLayoutAlias("adventures", "layouts/adventures.html");
  eleventyConfig.addLayoutAlias("adventure", "layouts/adventure.html");
  eleventyConfig.addLayoutAlias("projects", "layouts/projects.html");
  eleventyConfig.addLayoutAlias(
    "projects-detail",
    "layouts/projects-detail.html"
  );
  eleventyConfig.addLayoutAlias("notes", "layouts/notes.html");
  eleventyConfig.addLayoutAlias("posts", "layouts/default.html");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("uploads");
  eleventyConfig.addPassthroughCopy("admin");

  ////////////////////////
  // Markdown
  ////////////////////////
  let md = require("markdown-it");
  let mdFootnote = require("markdown-it-footnote");

  let options = {
    html: true
  };

  let mdLib = md(options).use(mdFootnote);
  eleventyConfig.setLibrary("md", mdLib);

  ////////////////////////
  // Filters
  ////////////////////////
  eleventyConfig.addFilter('dateFilter', dateFilter);
  eleventyConfig.addFilter('w3DateFilter', w3DateFilter);
  eleventyConfig.addNunjucksFilter("limit", function (array, limit) {
    return array.slice(0, limit);
  });

  eleventyConfig.addFilter("slug", input => {
    const options = {
      replacement: "-",
      remove: /[&,+#;()$~%.’”“‘'":*?<>{}]/g,
      lower: true
    };
    return slugify(input, options);
  });

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  })

  ////////////////////////
  // Collections
  ////////////////////////
  eleventyConfig.addCollection("blogposts", collection => {
    return collection.getFilteredByGlob("_posts/*.md");
  });

  eleventyConfig.addCollection("projects", collection => {
    return collection.getFilteredByGlob("_projects/*.md");
  });

  eleventyConfig.addCollection("adventures", collection => {
    return collection.getFilteredByGlob("_adventures/*.md");
  });

  eleventyConfig.addCollection("essays", collection => {
    return collection.getFilteredByGlob("_essays/*.md");
  });

  eleventyConfig.addCollection("essaysFeed", collection => {
    return collection
      .getFilteredByGlob("_essays/*.md")
      .reverse()
      .slice(0, 3)
      .reverse();
  });

  eleventyConfig.addCollection("tagList", require("./_11ty/getTagList"));

  eleventyConfig.addCollection("feed", collection => {
    return collection
      .getFilteredByGlob("_posts/*.md")
      .reverse()
      .slice(0, 3)
      .reverse();
  });

  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: "./",
      includes: "_includes",
      output: "./_site"
    },
    passthroughFileCopy: true
  };
};
