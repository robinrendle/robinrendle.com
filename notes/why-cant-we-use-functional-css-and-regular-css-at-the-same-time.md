---
layout: layouts/post.njk
title: Why can’t we use functional and regular CSS at the same time?
date: 2018-11-19 22:41:00 -08:00
city: San Francisco
country: California
extract: Surprise! I blogged about CSS again. Sorry.
---

Over on CSS-Tricks I’ve written a bit about [how we write CSS today at Gusto](https://css-tricks.com/why-cant-we-use-functional-css-and-regular-css-at-the-same-time/) and how I’ve been thinking about the whole “functional vs. regular CSS” debate. I apologize profusely in advance for all the nuance because here’s the thing: I think using both systems is actually what we need to write maintainable CSS.

I break down the problem of writing CSS into three neat chunks:

1. Readability
2. Managing dependencies
3. Avoiding the painful fact that visual design doesn’t like math

Here’s a bit more about that last point that I don’t hear enough discussions about:

> A lot of visual design requires imperfect numbers that don’t properly scale. With a functional CSS system, you’ll probably want a system of base 10, or base 8, where each value is based on that scale. But when you’re aligning items together visually, you may need to do so in a way that it won’t align to those values. This is called optical adjustment and it’s because our brains are, well, super weird. What makes sense mathematically often doesn’t visually. So, in this case, we'd need to add more bottom padding to the button to make the text feel like it’s positioned in the center. With a functional CSS approach it’s harder to do stuff like that neatly, at least in my experience.
>
> In those cases where you need to balance readability, dependencies, and optical adjustments, writing regular CSS in a regular old-fashioned stylesheet is still my favorite thing in the world. But functional CSS still solves a ton of other problems very eloquently.

I have a ton of other stuff to write about on this subject of writing CSS at scale but I think this post is a good summary of what I’ve learned over the last two years or so.
