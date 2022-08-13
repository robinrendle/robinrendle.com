---
layout: layouts/note.njk
title: Media Query Ranges
date: 2022-08-13
city: San Francisco
country: California
extract: A rant about CSS media queries.
---

I was trawling through the interweb the other night and I saw someone mention “ranged media queries.” My immediate thought was how dare anyone ship ranged media queries without consulting me and then my second thought was what the heck is that?

Bramus has, of course, written an excellent piece already describing [what media query ranges are](https://www.bram.us/2021/10/26/media-queries-level-4-media-query-range-contexts/) but effectively they’re a kind of shorthand.

So here’s an example of what we’d write today:

```css
@media (min-width: 700px) {
  div {
    background: red;
  }
}
```

When the browser window is larger than 700px the `div` will have a red background. Simple enough. But this is where ranged media queries come in:

```css
@media (width => 700px) {
  div {
    background: red;
  }
}
```

How strange! Soon we’ll be able to use mathematical operators to set the conditions which is a tiny bit nicer but it also means you can do something a bit more complicated, just like in Bramus’s example:

```css
@media (300px <= width <= 750px) {
  /* styles go here */
}
```

What this’ll do is only turn these styles on in the range between 300px and 750px. That’s kinda neat! I’m not sure how often I’d need to do that because I only believe in writing mobile styles first and then adding `min-width` media queries progressively to support larger screens but this is definitely a nice to have.

What I really want though is to be able to nest media queries because today I have to write this...

```css
@media (min-width: 700px) {
  div {
    background: red;
  }
}

@media (min-width: 900px) {
  div {
    background: blue;
  }
}
```

...but what I really want to write is something like what Sass let’s you do, but in native CSS:

```css
div {
  @media (min-width: 700px) {
    background: red;
  }
  @media (min-width: 900px) {
    background: blue;
  }
}
```

Gah that’s so much nicer to me and I’d take this in a heart beat over all those complicated [CSS nesting selectors](https://www.bram.us/2019/03/17/the-future-of-css-nesting-selectors/), but maybe it’s part of the same spec? I’m not sure. I’ve been a bit out of the loop when it comes to the latest CSS features although this weekend I would have used this a dozen times to help me tidy up this here website.

Either way, I’m excited about these small but significant changes to the CSS language.
