---
layout: layouts/note.njk
title: Setting type with Sass maps
date: 2014-03-16 13:11:00 -07:00
tags:
  - design
extract:
  Last week I wrote about a new method for setting type by using Sass maps.
  In summary I argued that font-size and line-height settings can be tied to specific
  fonts for ease of use when writing a lot of code.
update:
city: Nottingham
country: UK
---

Last week I wrote about [an interesting method](http://erskinedesign.com/blog/setting-typographic-scale-with-sass-maps/) for setting type by using a brand new feature in [Sass 3.3](http://blog.sass-lang.com/posts/184094-sass-33-is-released) called maps. This essentially lets you store lots of data in nested lists which can then be accessed via a mixin or a function. In that post on the Erskine blog I ultimately argued for font-size and line-height settings to be tied to specific fonts in these Sass maps because it’s far easier to read, write and, of course, maintain in the long run.

Yesterday it was great to see that Tim Brown made some [neat additions](http://codepen.io/timbrown/pen/uqgJj) to this idea whereby font fallbacks can have settings assigned to them with their own scale. If a font cannot be loaded for whatever reason then the fallback scale will be used and so I think that’s some lovely progressive enhancement right there.

Considering that this is a project that all of us at the Erskine team have contributed to I’ve made [a public repo](https://github.com/ultimate-package/tools.font-scale) where we’ll be experimenting with this idea in the future. It’s certainly not finished and the documentation is sure to be found lacking here and there but I think it’s worth sharing these ideas as they are, even if they’re unfinished.
