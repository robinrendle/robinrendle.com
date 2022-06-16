---
layout: layouts/note.njk
title: "Redesign: Measure Once"
date: 2021-07-07T02:50:23.068Z
city: San Francisco
country: California
extract: Let’s talk about the measure.
---

The most important thing about any website is the measure. Okay, so that’s a lie. It’s not the most important thing but it most certainly is a _thing_. The measure is the fancy typesetting word for the width of a paragraph. Ah!—that reminds me—years ago I wrote a piece called [Six tips for better web typography](https://css-tricks.com/six-tips-for-better-web-typography/) where I talked about all this stuff:

> For some reason, a lot of folks tend to think that paragraphs on smaller devices require a larger line-height value — but this isn’t the case! Because the width of paragraphs are smaller, line-height can be even smaller than you might on desktop displays. That’s because on smaller screens, and with smaller paragraphs, the reader’s eye has a much shorter distance to hop from the end of one line to the beginning of the next.

This post reminds me that line-height, font-size, and measure are really 3 sides of the same coin when it comes to typesetting; if you change one then you must plan on fixing the other two. With that in mind, let’s go ahead and fix the measure temporarily with the `max-width` CSS property. I’m gonna do that from within [my default layout](https://github.com/robinrendle/robinrendle.com/blob/a4c230d0d089b80bf2d51008a9a7ea57796118d4/_includes/layouts/default.html) which is the template that Eleventy uses for blog posts (like the one you’re reading right now).

The default layout consists of a `<header>` and an `<article>`. Should the `<header>` go inside the `<article>`? [According to MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header):

> The `<header>` HTML element represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements.

Mmmmm. Okay so I guess I should only use a single header on the page? Years ago there was a ton of hubbub about having a `<hgroup>` element but that sort of disappeared as far as I can remember. Looks like a header should only contain the main navigation and the logo.

So no `<header>` in my default layout, got it. All I need then is something like this:

```
<article>
  <!-- time goes here -->
  <h1>Title of blog post</h1>
  <!-- blog post content -->
</article>
<!-- links and what not -->
```

That makes sense to me. I guess the question now is: do we add the container that will set our max-width on the `article` or wrap the whole page? I think for now let’s just wrap the whole page since as the design of the site matures a bit and I start to think more about grids I can fix that separately.

Mmmmm...if I do that then not all pages in the site will be affected. Ya know what? Let’s just set this on the body for now and be done with it.

```
body {
  padding: 0 10px;
  max-width: 45rem;
}
```

With `padding: 0 10px;` we now have a bit of padding on mobile devices (which is what I want to focus on right now). But how did I come up with `45rem`? I just made it up and eyeballed it quickly on desktop. Eh, it looks good enough for now.

None of this is likely to stay though because I’ll be sure to focus more on visual design later. Let’s just make things easier to read first and then make them fancy afterwards.
