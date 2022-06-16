---
layout: layouts/note.njk
title: Loading fonts with the Web Font Loader
date: 2015-11-17 05:17:00 -08:00
tags:
  - design
extract:
  Several years ago the consensus on font loading in the community was that,
  as a website loads, all fonts should be hidden until the correct resources have
  been downloaded. Many designers and developers argued that the default font loading
  method called the “Flash of Unstyled Text”, or FOUT, was an annoyance to users.
  This is when the fallback web font, say Georgia, is shown on screen first then replaced
  by a custom font when it loaded. They argued that it would make for a more cohesive
  browsing experience if users simply waited for everything to download instead of
  experiencing this flash from one typeface to another.
update:
city: Plymouth
country: UK
---

[Over on CSS-Tricks](https://css-tricks.com/loading-web-fonts-with-the-web-font-loader/) I've written an intro to font loading and discussed the problems with the Flash of Unstyled Text approach that many designers today still prefer:

> Several years ago the consensus on font loading in the community was that, as a website loads, all fonts should be hidden until the correct resources have been downloaded. Many designers and developers argued that the default font loading method called the “Flash of Unstyled Text”, or FOUT, was an annoyance to users. This is when the fallback web font, say Georgia, is shown on screen first then replaced by a custom font when it loaded. They argued that it would make for a more cohesive browsing experience if users simply waited for everything to download instead of experiencing this flash from one typeface to another.
