---
layout: layouts/note.njk
title: backdrop-filter
date: 2018-05-19 23:57:00 -07:00
tags:
  - css
extract: A new CSS property that looks pretty handy.
city: San Francisco
country: California
---

I wrote a quick thing the other day for CSS-Tricks all about [the `backdrop-filter` CSS property](https://css-tricks.com/the-backdrop-filter-css-property/) which, although not particularly well supported today, highlights just how powerful CSS is becoming. `backdrop-filter` allows us to add a filter to the background of an element such as blurring it or changing its saturation without changing the styles of the content.

Here’s one demo I made where you can see all the different types of backdrop side by side:

![backdrop.gif](/images/backdrop.gif)

Combine this with the [filter](https://css-tricks.com/almanac/properties/f/filter/) and [mix-blend-mode](https://css-tricks.com/almanac/properties/m/mix-blend-mode/) properties and we’ll soon have a bonafide Photoshop in the browser.
