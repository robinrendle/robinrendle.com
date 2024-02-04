---
layout: layouts/cascade-post.njk
title: Give me pseudos or give me death
date: 2024-02-04T13:50:47-08:00
city: San Francisco
country: California
extract: I mean it.
---


Pals! Comrades! 

This week I have two links that pair well together. First, here’s Stephanie Eckles’s excellent post about [12 modern CSS upgrades](https://moderncss.dev/12-modern-css-one-line-upgrades/) where I just learned about the `outline-offset` property, which I had no idea existed at all:

```css
.element {
  outline: 2px dashed blue;
  outline-offset: 0.5em;
}
```

This lets us effectively add padding around an element and move the outline which is often why I stopped using outlines altogether and chose borders —controlling them with CSS was either too annoying or sometimes impossible. So this is great and might help us make more aesthetically pleasing `:focus` states.

Another property that Stephanie mentions in that post is `overscroll-behavior` that looks especially handy as you can use it like this:

```css
.sidebar, .article {
  overscroll-behavior: contain;
}
```

Stephanie describes the problem of scrolling that I’ve encountered so often that I’ve just gotten used to it and given up trying to fix:

> The default behavior of contained scroll regions - areas with limited dimensions where overflow is allowed to be scrolled - is that when the scroll runs out in the element, the scroll interaction passes to the background page. This can be jarring at best, and frustrating at worst for your users.

Most of the highlights in Stephanie’s post I remember waiting years and years for, `aspect-ratio` and `object-fit` being the prime examples there. I remember blog posts pitching these properties and detailing all the limitations of CSS at the time before these were even in developer previews of browsers. So it’s exciting to see just how many small nitpicks are simply gone now, as if they were never there at all, driving us all insane over the years.

This brings us to the second link I’d like to share, from way back in 2020, where [Tyler Sticka dreams of a future CSS](https://cloudfour.com/thinks/some-imaginary-css/). Tyler asks: what properties would help us out, make our day to day lives better when it comes to writing CSS? 

Some of the problems and ideas that Tyler mentions have been mostly fixed now — the elusive and unicorn-like container queries have shipped in browsers and nice gradients are way easier to make with improved color spaces. But some of Tyler’s suggestions haven’t gotten any traction as far as I can tell and I like a lot of them!

Perhaps my favorite one is this:

```css
.button {
  pointer-box-offset: 0.5rem;
}
```

Tyler suggests that this would allow us to make the clickable area of elements expand beyond their bounding box, which could be especially helpful on touch-screens. In fact, I hit this problem just the other day when I was designing a dismissible action for a notification — I wanted it to be small enough to not be distracting but easy enough to click. And I couldn’t! I had to make the whole action bigger and wonkier and ugh.

If I could add my own suggestions here, I think one common problem with CSS that I bounce into on a daily basis is the limitation of only having two pseudo elements:

```css
.element:before {}
.element:after {}
```
For developers who have been working with CSS I assume they’ll read this and roll their eyes so far back into their head that it’s painful because they’ve heard this complaint ten million times already. But why can’t I have more pseudos? Give them to me! Why are we limited to just these two? 

I really wish I could so something like this instead:

```css
.element:after(1) {}
.element:after(2) {}
.element:after(3) {}
.element:after(4) {}
```

And yes yes yes I get that folks like Lynn Fisher can make unbelievable and brilliant things with that limitation. I strongly believe that [a.singlediv.com](https://a.singlediv.com) should be added to the Library of Congress. But still.

![The single div website](/images/single-div.png) 

When it comes to interface design this limitation has always bugged me. Heck, Chris Coyier was writing about this very problem [back in 2012](https://css-tricks.com/use-cases-for-multiple-pseudo-elements/)! Take a cursory glance around the web and you’ll find hundreds of blog posts and threads in forums from grieving developers, begging to add more pseudo elements so they can handle this one tiny annoying thing.

After searching for a while, I can’t seem to find any work being done on this problem at the moment. It looks like Adobe was pitching [a similar idea](https://opensource.adobe.com/css-pseudo-elements/) a decade ago? But from there the trail goes cold. Maybe I missed all the drama though and there’s a very good performance or accessibility reason why I will never get my pseudos.

(But if we did get our psuedos maybe then I could start a cheeky website like way.toomanydivs.com where I try to recreate the simplest image possible with ten thousand pseudo elements.)

Until next week, <br/>
Robin 

<br/>
<br/>
<br/>