---
layout: layouts/post.njk
title: Why is CSS frustrating?
date: 2020-03-10 12:36:29
tags:
  - design
extract: Ask me one about fonts.
country: California
city: San Francisco
---

I wrote a piece for CSS Tricks the other day about [why the CSS language is frustrating](https://css-tricks.com/why-is-css-frustrating/):

> I reckon the biggest issue that engineers face — and the reason why they find it all so dang frustrating — is that CSS forces you to face the webishness of the web. Things require fallbacks. You need to take different devices into consideration, and all the different ways of seeing a website: mobile, desktop, no mouse, no keyboard, etc. Sure, you have to deal with that when writing JavaScript, too, but it’s easier to ignore. You can’t ignore the layout of your site being completely broken on a phone.

I have more random thoughts about this, so please bear with me.

First up, the difficulty of CSS reminds me of the difficulty of book design because we’re always at arm’s length from the object we’re making. When designing a book we have to treat the InDesign file as a sort of best guess, it’s not until we print the dang thing that we begin to see all the problems. The type is too big! The colors are too dark! Ugh!

So the best thing to remember when designing a book is the same as when designing a website: the screen is a lie.

What we’re seeing on screen and what the final product will become are two very different things. We need to constantly remind ourselves that there are invisible edge cases, problems that in this context, on this screen, are made utterly invisible to us. And the only way to combat that is to change the context; to always be looking at our websites from multiple angles, moving them about, shaking them up. Whether that happens to be a bad connection, a phone, a screen reader, or a lo-res screen.

In other words, good web design requires empathy. And I get it, that sucks. I’m sorry. (I remember talking to a senior engineer about why accessibility is worthy of our time and attention and this conversation still bums me out to this day. Some things you should do out of kindness, simply because it’s right, and not because it affects the bottom line. Ugh.)

Secondly, CSS is frustrating because you have to actually think of a website like a website and not an app. That mental model is what everyone finds so viscerally upsetting. And so engineers do what feels best to them; they try to make websites work like apps, like desktop software designed in the early naughts. Something that can be controlled. Something where the JavaScript works more like Python or C++. Something where the CSS begins to look like a tightly wound clock with intricate parts controlled by lasers and the buzzing of diamond quartz.

So I think everyone hates CSS for forcing them to be empathetic but also because the web is so messy—despite that being the single best thing about it.

(This also reminds me of something that Paul Ford said many moons ago, that if a company asks for a magazine design or a giant billboard poster then that’s relatively easy. You do the design and it doesn’t necessarily change the organization at all. But if they ask for a website then suddenly this bleeds into all other parts of their organization. The website will ask questions of them that require a fundamental change in how they work, how they think about their business.)

(Our proximity to the web changes us.)

Anyway, CSS has had it rough for a long time because it’s seen as an easy language, as a dumb language, as a broken system with poor browser support. But I think it’s important to note that it’s not just a technology problem though! Engineers are tasked with [more work than they should be](https://www.robinrendle.com/notes/i-dont-believe-in-full-stack-engineering), the field of web design is seen as embarrassing (“I’m not a web designer, I’m a ~product~ designer”), everyone says [yes to everything](https://css-tricks.com/no-absolutely-not/), folks don’t see [the difference between software and websites](https://adactio.com/journal/13229), designers are not taught [the basics of typesetting](https://www.robinrendle.com/notes/the-smallest-difference) or designing for [complex systems](/essays/systems-mistakes-and-the-sea), and [the hard work often isn’t visible](https://css-tricks.com/design-systems-and-portfolios/).

Also also? CSS is frustrating because we treat it like something it just isn’t.
