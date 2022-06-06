import rss from "@astrojs/rss";

const postImportResult = import.meta.globEager("./notes/*.md");
const posts = Object.values(postImportResult);

export const get = () =>
  rss({
    title: "Robin Rendle",
    description: "Ramblings and incoherent rants",
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: post.url,
      title: post.frontmatter.title,
      pubDate: post.frontmatter.date,
    })),
  });
