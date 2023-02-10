---
layout: layouts/note.njk
title: CSS Nesting
date: 2023-02-09T20:08:04-08:00
city: San Francisco
country: California
extract: The perfect kind of upgrade to a language you can make.
---

We used to write CSS like this:

```css
a {
  color: blue;
}

a:hover {
  color: lightblue;
}
```

This kinda sucked for a lot of reasons. First, it means that our code is split up and disassociated from itself a bit. Second, because it gets harder to read larger chunks of code. So languages like Sass and Less came out which allowed us to nest blocks of CSS together like this:

```css
a {
  color: blue;

  &:hover {
    color: lightblue;
  }
}
```

And it was beautiful. But, alas, for years this was only possible in those extension languages which at some point felt a bit silly. Writing CSS the old way, without nesting, felt wrong.

So I almost fell out of my seat yesterday when I caught wind of the announcement that [CSS nesting has landed](https://webkit.org/blog/13813/try-css-nesting-today-in-safari-technology-preview/) in actual browsers and if you want to play around with them then you can do that in the latest version of [Safari Technology Preview](https://webkit.org/downloads/). This means it’s half a step away from landing in real browsers very soon.

This is so exciting! From that announcement blog post, they write about it all in a lot more detail and it gets even more exciting:

> You can mix Nesting with Container Queries, Feature Queries, Media Queries, and/or Cascade Layers however you want. Anything can go inside of anything.

This is no half-assed implementation! This thing can do media queries! Hallelujah! When I’ve worked on my essays that’s the one thing I’ve craved from CSS after container queries—the ability to nest like this:

```css
.card {
  @media screen and (min-width: 500px) {
  }
  @media screen and (min-width: 750px) {
  }
  @media screen and (min-width: 900px) {
  }
  @media screen and (min-width: 1200px) {
  }
}
```

(That’s what you’d write in Sass but from what I can tell here it looks like you’ll have to use the `&` to get each media query working right.)

Anyway, Chrome [has implemented the same syntax](https://caniuse.com/css-nesting) here too so it’s not like this is a one-off browser hack for the Safari cool kids; CSS Nesting is an actual standard and agreement across browsers here. That’s amazing!

So thanks to everyone who worked on this; the browser folks and the standards folks and the folks writing tutorials and complaining in blog posts. Because, in a few short months, I expect we’ll all have forgotten that nesting was once impossible.

And that’s the perfect kind of upgrade to a language you can make.
