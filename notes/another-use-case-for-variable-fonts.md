---
layout: layouts/post.njk
title: Another use case for variable fonts
date: 2020-05-23T16:03:02.322Z
city: San Francisco
country: California
extract: What if we combined multiple type families together?
---

There’s a lot of nifty things you can do with variable fonts. You can make [small design adjustments](https://css-tricks.com/dark-mode-and-variable-fonts/), or you can get a bunch of performance benefits..._kinda_. If you load a giant variable font with a ton of different axes then your users are going to have a bad time. But! Loading one font like Newzald.woff2 is likely going to be faster than loading Newzald-bold.woff2, Newzald-italic.woff2, Newzald-regular.woff2, etc. Lots of folks like [Mandy Michael](https://codepen.io/collection/XqRLMb/) have written a ton of stuff about this before so I won’t retread those thoughts.

But what if we could combine fonts together easily? So say we have a display font (Display.woff2) and it has one weight we want to use for our headings. Then we have a body text font (Body.woff2) and it has multiple styles—italic, bold, regular, etc. Instead of loading two separate fonts here it would be great to combine two very different type families into a single file (Project.woff2) (and I’m imagining an interface similar to ImageOptim here for some reason).

I [mentioned this](https://twitter.com/robinrendle/status/1245066797897809921) not so long ago and [Nick Sherman replied](https://twitter.com/NickSherman/status/1245082954579263492) that [OpenType Collections](https://docs.microsoft.com/en-us/typography/opentype/spec/otff#collections) are designed for just this very thing.

Nifty! I’ll be sure to dig into that at one point or another.
