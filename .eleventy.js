module.exports = function(eleventyConfig)  {
  eleventyConfig.addLayoutAlias('about', 'layouts/about.html');
  eleventyConfig.addLayoutAlias('essays', 'layouts/essays.html');
  eleventyConfig.addLayoutAlias('default', 'layouts/default.html');
  eleventyConfig.addLayoutAlias('home', 'layouts/home.html');
  eleventyConfig.addLayoutAlias('adventures', 'layouts/adventures.html');
  eleventyConfig.addLayoutAlias('projects', 'layouts/projects.html');
  eleventyConfig.addLayoutAlias('notes', 'layouts/notes.html');
  eleventyConfig.addLayoutAlias('posts', 'layouts/default.html');
  eleventyConfig.addPassthroughCopy('assets');


  ////////////////////////
  // Markdown
  ////////////////////////
  let md = require('markdown-it');
  let mdFootnote = require('markdown-it-footnote');

  let options = {
    html: true
  };

  let mdLib = md(options).use(mdFootnote);
  eleventyConfig.setLibrary("md", mdLib);



  ////////////////////////
  // Collections
  ////////////////////////
  eleventyConfig.addCollection('blogposts', collection => {
    return collection.getFilteredByGlob('_posts/*.md');
  });

  eleventyConfig.addCollection('essays', collection => {
    return collection.getFilteredByGlob('_essays/*.md');
  });

  return {
    dir: {
      input: "./",
      output: "./_site"
    },
    passthroughFileCopy: true
  };
};
