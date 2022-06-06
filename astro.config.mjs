// export default {
//   projectRoot: ".", // Where to resolve all URLs relative to. Useful if you have a monorepo project.
//   pages: "./src/pages", // Path to Astro components, pages, and data
//   dist: "./dist", // When running `astro build`, path to final static output
//   public: "./public", // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
//   buildOptions: {
//     site: "http://robinrendle.com", // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
//     // sitemap: true,      // Generate sitemap (set to "false" to disable)
//   },
//   devOptions: {
//     port: 1234, // The port to run the dev server on.
//     // tailwindConfig: '', // Path to tailwind.config.js if used, e.g. './tailwind.config.js'
//   },
// };
import { defineConfig } from "astro/config";

export default defineConfig({
  root: ".",
  srcDir: "src",
  publicDir: "./public",
  outDir: "./dist",
  site: "https://robinrendle.com",
  // base: ,
  server: { port: 1234, host: true },
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "material-darker",
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: ["js", "css", "html"],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
});
