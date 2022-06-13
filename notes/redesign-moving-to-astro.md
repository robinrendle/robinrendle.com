---
layout: layouts/post.njk
title: "Redesign: Moving to Astro"
date: 2021-07-10
city: San Francisco
country: California
extract: Sorry in advance.
---

Okay, so we’re moving the ol’ site from Eleventy to Astro. I think what finally convinced me to make the switch was, of all things, gulp.

gulp is an important tool to automate stuff like image optimization, JavaScript minification, and Sass processing. But lately I’ve found myself increasingly frustrated by having to build a pipeline of tasks to do that stuff.

Every six months or so I’d have to devote a day to fixing whatever I’ve broken — dependencies would break, things would bust randomly. Instead of writing stuff or improving things I would constantly have to keep up as the foundations of things shifted over time.

I want to avoid all dependency management on my personal site.

And I wanted to play around with Astro, any who. We’ve been talking about it a lot over on CSS-Tricks lately and for good reason: [it’s extremely nifty](https://css-tricks.com/a-look-at-building-with-astro/).

The problem with switching to Astro is that I have to move over a thousand plus blog posts and a half dozen essays with custom CSS for each. It’s not too much work but it’s a bit of a faff.

For instance I had to go through each markdown file and let Astro know which layout to use. So I had to use bash to do that (hence [my rant last night](https://www.robinrendle.com/notes/why-is-file-manipulation-so-hard)):

```
---
layout: layouts/post.njk
title: A Blog Post
// other stuff
---

// Blog post content goes here
```

Just adding that first line to a thousand files is way harder than it ought to be. I’m probably doing something wrong here but _man_ it’s annoying to have to use the command line to manipulate text docs. Feels like the 1960s to me. This was the command I used:

```
find . -maxdepth 1 -type f -exec sed -i.bk '2i \
layout: ../../layouts/post.astro
' {} \;
```

ANYWAY. I gotta make sure that I move all the content correctly with this change. URLs are the most important thing to preserve, but I want to make sure that I move over all the fonts and nothing in my deploy to Netlify breaks. Oh, and I’m 1000% certain I’m gonna break the RSS feed, too.

Wish me luck. And sorry in advance.
