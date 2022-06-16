---
title: "Redesign: The Source of Truth"
date: 2021-08-12T05:00:29.652Z
city: San Francisco
country: California
extract: And the future loss of all those images.
layout: layouts/note.njk
---

One of the things I regret with my website is using a third party newsletter service for Adventures. Or, at least not archiving things properly.

For years I used Buttondown—an excellent service that lets you write email newsletters—and I still love it to death, but I’d get lazy about migrating content out of it. Every so often I’d copy and paste the markdown into a new file with Eleventy and then duplicate the post for my site at /adventures.

But lately, as I started migrating all my content from Eleventy to Astro, I realized that all the links to images just aren’t going to stick around:

```
<img src="https://buttondown.s3.us-west-2.amazonaws.com/images/4834578b" />
```

Buttondown would upload my image to S3 and then when I exported it I didn’t think about the images at all. So now I’m kinda stuck with a ton of blog posts that are going to die eventually. An S3 thingy will change and all these blog posts will become cryptic and basically useless without the images.

Whenever I start a new writing project I need to make sure that I can export whatever content I make here into a third party thing like Buttondown, rather than the other way round. Because I hope my personal website will be around longer than basically every other service or platform or what have you.

This website should be the source of truth, not the other way around.
