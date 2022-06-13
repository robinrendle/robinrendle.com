---
layout: layouts/post.njk
title: Intrinsic Ratios and SVGs
date: 2013-09-21 10:08:00 -07:00
tags:
  - design
extract:
  'This week I came across an interesting design problem: how do you make an
  <abbr title="Scalable vector graphics">SVG</abbr> that’s being used as a background-image
  respond to the width of its container, yet also scale its height depending on the
  child elements within?'
city: Nottingham
country: UK
---

This week I came across an interesting design problem: how do you make an <abbr title="Scalable vector graphics">SVG</abbr> that’s being used as a background-image respond to the width of its container, yet also scale its height depending on the child elements within?

For example this could be a strange shape that might be difficult or impossible to emulate with CSS and appears behind content that fluctuates; buttons, long columns of text or titles that break onto multiple lines. We want that background image to stretch horizontally to the width of the viewport but also stretch vertically depending on the content that will likely change inside.

But if you simply attach an <abbr title="Scalable vector graphics">SVG</abbr> background image to an element and remove its dimensions within the file then the image will scale its height and width proportionately – this likely means that the edges of the image will be cut off from view but also means that any extra content we might want to add in the future simply won’t fit.

The fix is easy enough though; open up the <abbr title="Scalable vector graphics">SVG</abbr> in a text editor and add <code>preserveAspectRatio="none"</code> to the <abbr title="Scalable vector graphics">SVG</abbr> element itself whilst also making sure to remove all width and height parameters that might have been automatically set by an app such as Illustrator. I’ve hooked up <a href="http://cdpn.io/JdnCA">a quick example of this on Codepen</a>, and it seems to work relatively well across various browsers. Remember though that this is obviously only suitable for browsers that support <abbr title="Scalable vector graphics">SVG</abbr>, but with [Modernizr](http://modernizr.com/) we can test for this and give them appropriate fallbacks.

But what about serving these <abbr title="Scalable vector graphics">SVG</abbr>s _only_ to browsers that can support them? Well&hellip;that’s [another issue altogether](http://daverupert.com/2013/06/ughck-images/).
