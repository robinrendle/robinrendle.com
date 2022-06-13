---
layout: layouts/post.njk
title: Huh
date: 2020-09-17T16:15:19.177Z
city: San Francisco
country: California
extract: Here’s a weird bug.
---

Here’s a weird bug. The other day I shipped a toggle that sits in the top right of the nav that lets you change the theme of this here website. I want to eventually copy what [Jeremy’s built](https://adactio.com) on his website where there’s all sorts of buck wild designs you can choose from.

But! This little toggler chap today is breaking the layout on smaller screens. The whole nav is using flexbox with `overflow: hidden` but yet somehow it _still_ breaks the layout. This might be a small bug but I spent 30mins the other day trying to debug it and yet still came up short.

I can’t remember the last time I tried to figure out a bug and I was so thoroughly stumped. Is this a problem with flexbox? Am I not hiding the overflow of the right container? Is this some other problem with the width of the togglers? I have absolutely no idea. Huh.
