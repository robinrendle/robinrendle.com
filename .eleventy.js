module.exports = function(eleventyConfig)  {
  eleventyConfig.addLayoutAlias('about', 'layouts/about.html');
  eleventyConfig.addLayoutAlias('essays', 'layouts/essays.html');
  eleventyConfig.addLayoutAlias('default', 'layouts/default.html');
  eleventyConfig.addLayoutAlias('home', 'layouts/home.html');
  eleventyConfig.addLayoutAlias('adventures', 'layouts/adventures.html');
  eleventyConfig.addLayoutAlias('projects', 'layouts/projects.html');
  eleventyConfig.addLayoutAlias('notes', 'layouts/notes.html');
  eleventyConfig.addPassthroughCopy('assets');

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
