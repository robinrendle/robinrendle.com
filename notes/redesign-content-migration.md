---
layout: layouts/post.njk
title: "Redesign: Content Migration"
date: 2021-07-12
city: San Francisco
country: California
extract: Eek!
---

Well, moving everything over from Eleventy to Astro is a little trickier than I first imagined. I’ve spent the last two days moving content around, updating the frontmatter, learning about Astro’s approach to CSS. It certainly is liberating to write a bunch of CSS in a file and it be automatically scoped to the HTML in that same file, without it leaking out into other things.

Like if I write...

```
body { background: red; }
```

Then only the `<body>` element on that page will be red. That’s just neato.

There have been some cases where the styles accidentally bleed into other pages but I expect that’s a bug? This is definitely a project that’s in early access.

But I do worry that buying into the Astro ecosystem is not a great long term solution for my site. If this project dies or goes away, I’ll have to migrate all this content again to whatever _new_ way of building a blog is. There’s a lot of trust I’m putting into the folks building this thing.
