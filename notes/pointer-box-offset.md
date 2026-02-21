---
layout: layouts/note.njk
title: pointer-box-offset
date: 2026-02-21T09:44:35-08:00
city: San Francisco
country: California
extract: 
---

It all began with the nav. Notice how in the sidebar of this here blog where you can open and close folders to reveal more entries? Well, the tappable area of the arrow was way too small and I kept miss-clicking and selecting folders instead. So, I tried to fix it and realized the only way to do so was by tweaking the element like this:

```css
.list-group-item::before {
	padding: 1rem;
}
```

Alas! This increased the tappable area of the arrow but broke the surrounding layout, so I was forced to write all sorts of screwy CSS and hacks to account for it.

I _think_ it was [Chris Coyier](https://frontendmasters.com/blog/author/chriscoyier/) the other day who mentioned that there’s nothing left on his wish list for big CSS features but I realize that this is now at the top of mine: I wish in CSS there was something like an ~interactive-size~ property so instead of having to add padding to small elements to make them clickable we could just tell the browser “trigger events when I tap/hover/whatever 15px around this element”. 

Despite being a genius with an uncompromising intellect, folks much smarter than me have already thought about this! [Christopher Kirk Nielsen](https://chriskirknielsen.com) pointed me to [a proposal](https://github.com/w3c/csswg-drafts/issues/4708) by [Tyler Sticka](https://tylersticka.com) for a new CSS property:

```css
.button {
  pointer-box-offset: 0.5rem;
}
```

The idea is to give us control: let developers draw the target area around elements without effecting the surrounding elements or forcing us to make all those gnarly layout hacks. _Precisely_ the thing I was looking for!
