---
layout: layouts/post.njk
title: Ubiquity and consistency
date: 2017-12-23 10:49:00 -08:00
tags:
  - design
city: Plymouth
country: UK
extract: A note from Jeremy Keith on under/over engineering.
---

I really like this post by Jeremy Keith on [the difference between under and over-engineering](https://adactio.com/journal/13229):

> Ubiquity; universality; accessibility—however you want to label it, it’s what lies at the heart of the World Wide Web. It’s the idea that anyone should be able to access a resource, regardless of technical or personal constraints. It’s an admirable goal, and what’s even more admirable is that the web succeeds in this goal! But sometimes something’s gotta give, and that something is control.
>
> [...] Take page navigations. That’s literally what browsers do. Click on a link, and the browser fetches that URL, displaying progress at it goes. The alternative, as exemplified by single page apps, is to do all of that for yourself using JavaScript: figure out the routing, show some kind of progress, load some JSON, parse it, convert it into HTML, and update the DOM.
>
> Personally, I tend to go for the first option. Partly that’s because I like to apply the rule of least power, but mostly it’s because I’m very lazy (I also have qualms about sending a whole lotta JavaScript down the wire just so the end user gets to do something that their browser would do for them anyway). But I get it. I understand why others might wish for greater control, even if it comes with a price tag of fragility.

I’ve been thinking along similar lines when someone suggests using a third party tool or framework at work (for example [a spreadsheet component](https://github.com/felixrieseberg/React-Spreadsheet-Component)); if we want complete control then we should make our own, but if we want the ubiquity of that design and subsequently we’re okay with limiting ourselves by the original codebase then that’s fine.
