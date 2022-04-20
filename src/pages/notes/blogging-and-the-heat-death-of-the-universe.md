---
layout: ../../layouts/notes.astro
title: Blogging and the heat death of the universe
date: 2022-04-20
city: San Francisco
country: California
extract: Or the place that all websites go.
---

Here’s a fun thing: the other day [Matthias linked](https://twitter.com/m_ott/status/1516136120198836224) to an [old essay](https://www.robinrendle.com/essays/new-web-typography/) of mine—please do not read it because _yikes_—but I noticed that it looks very different now; the layout is busted in a few places, the animations have stopped altogether, and [Nocturno](https://www.typotheque.com/fonts/nocturno) has been replaced with sturdy, reliable, good-ol’ Georgia.

What happened here?

Well, some things were lost in the shuffle from one build process to another but these regressions also happened because I was using a lot of third party scripts and, dearest of readers, [you should avoid them altogether](https://css-tricks.com/aint-no-party-like-a-third-party/). It wasn’t until a few years ago that I started to bundle all of my essays up into pure HTML. Inject the CSS into them, save it as a .html file, and make sure that even if I change build processes nothing can ever really break (like there’s no dependencies on some weird markdown plugin only available through the Liquid templating language or some such thing I’ll forget in 5 years).

The way that this essay has slowly regressed over the years isn’t something I lament though. Sure, it’s a bit embarrassing maybe, but it’s also a sign of something important: all websites want to be HTML. Regardless of all the complexity, the kick-flip JavaScript you write, or the fancy fonts you throw in there, eventually all that stuff will fade away.

Eventually, if we’re lucky, only the HTML will be left.

The lesson here (I think) is that this is the fate of all websites. If it’s not link rot that gets you then it’s this heat death of the universe problem with entropy setting in slowly over time. And the only way to really defend against it is to build things progressively, to make sure that you’re not tied to one dependency or another. That complex build process? That’s a dependency. Your third party link to some third party font service that depends on their servers running forever? Another dependency.

Thankfully, because of the way the web was built, these dependencies don’t have to end up in absolute failure. Like, the fact that a website I made back in 2016 still exists at all is a complete wonder. But it’s also kinda funny to me that the thing that lasts longest with our websites is probably the part that we spend the least time thinking about—the markup. We spend so long on the animations and the cool grid CSS layout and ultimately all that will slip away (unless you are extremely careful about how you build your website which, dearest of readers, you are absolutely not ever careful enough).

This is the second law of thermodynamics made clear on the web: the entropy of any isolated system always increases and, at some point or another, all that’s left of a website is the markup.
