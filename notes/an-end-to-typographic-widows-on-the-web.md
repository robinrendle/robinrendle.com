---
layout: layouts/note.njk
title: An end to typographic widows on the web 
date: 2023-03-07T08:41:22-08:00
city: San Francisco
country: California
extract: Coming to a CSS near you.
---

Here’s a handy new thing coming to a CSS near you:

```css
h1, h2, h3, h4, h5, h6 {
  text-wrap: balance;
}
```

Richard Rutter [has the scoop](https://clagnut.com/blog/2424/) and explains how this bit of CSS will help ensure that titles and large headings don’t break weirdly and leave a word on a line all by itself.

It doesn’t help in all cases though, as Richard notes:

> Balancing left-aligned headings is not always preferable. I would love to have a value for text-wrap whose sole purpose is to prevent widows, without any other formatting involved.

Same! Although there’s a bunch of reasons why this doesn’t exist in CSS today, I’ll still take this one small improvement as a temporary stop gap before we can get to properly justified text on the web.