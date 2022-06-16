---
layout: layouts/note.njk
title: What the Redesign
date: 2021-05-02T18:14:57.113Z
city: San Francisco
country: California
extract: How do I prevent future problems?
---

I’m redesigning the homepage right now (it’s so dang hard introducing yourself on the web!) and I’m bumping into tons of weird, old decisions I made whilst writing the CSS maybe four or five years ago. I try hard not to rewrite things from scratch when it comes to my personal site but the styles are starting to creak and moan under the weight of so many tiny bug fixes and what-if-I-just-change-this-one-thing moments.

It’s getting to the point where burning it all to the ground and starting again would be _so much faster_ than just continuing to type over it all.

For example: what the heck is this `.m-longform` CSS class? Why did I think that wrapping every typographic element in that was a sensible thing to do? Why are all the font-sizes way, way too big? Why did I use all these link mixins for Sass and why did I add all these spacing utility classes when I don’t really need them? Why did I tie all these design components together in such a dependent way?

It’s easy to hate your old work but all of these things were attempts to fix one problem or another. And it’s important to remember that every system, given enough time, becomes bloated and unwieldy. It’s impossible to build a website without tech debt, or without problems. But now I’m thinking about longer term solutions to these issues I’m bumping into.

Would variable fonts, adaptive typography, container queries fix this? Are these problems technology based? Or is it a problem with the way that I approached my work in the past?

In short: how do I prevent future problems? And how do I avoid redesigns of the system five years from today?
