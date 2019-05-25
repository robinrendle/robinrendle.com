module.exports = function(eleventyConfig)  {
  eleventyConfig.addLayoutAlias('about', 'layouts/about.html');
  eleventyConfig.addLayoutAlias('essays', 'layouts/essays.html');
  eleventyConfig.addLayoutAlias('default', 'layouts/default.html');
  eleventyConfig.addLayoutAlias('home', 'layouts/home.html');
  eleventyConfig.addLayoutAlias('adventures', 'layouts/adventures.html');
  eleventyConfig.addLayoutAlias('projects', 'layouts/projects.html');
  eleventyConfig.addLayoutAlias('notes', 'layouts/default.html');
  eleventyConfig.addPassthroughCopy('assets');


  return {
    dir: {
      input: "./",
      output: "./_site"
    },
    passthroughFileCopy: true
  };
};
