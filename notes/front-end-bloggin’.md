---
layout: layouts/post.njk
title: Front-end Bloggin’
date: 2020-11-19T17:19:21.303Z
city: San Francisco
country: California
extract: Some things I’ve written for CSS-Tricks lately.
---

Over the past few weeks I’ve made a few notes about some front-end things for CSS-Tricks. First up, I wrote about the `flex-grow`, `flex-shrink`, and `flex-basis` CSS properties and a [simple trick to understand](https://css-tricks.com/understanding-flex-grow-flex-shrink-and-flex-basis/) the `flex` shorthand that you see like this:

```
.child {
  flex: 0 1 auto;
}
```

This scared me for the longest time but once you sit down and actually learn how the other CSS properties work then this is certainly less scary.

After that I wrote about [Measuring Core Web Vitals](https://css-tricks.com/measuring-core-web-vitals-with-sentry/) and how we let folks do that with [Sentry](https://sentry.io/):

> What’s the most important performance problem with your app right now? This is a trickier question than we might like to admit. Perhaps a First Paint of five seconds isn’t a dealbreaker on the settings page of your app but three seconds on the checkout page is unbearable for the business and customers alike.

Sentry lets you monitor a bunch of fancy new performance metrics in order to understand what the most important issues in your app are today. Like I say in the post, I’m not trying to advertise Sentry here—my point is that the tools in our industry are getting better and better at showing us what customers are actually experiencing. I just hope we get to see improvements here because performance is _bad_ on the web today.

Also I somehow stumbled upon an old post of mine when it comes to performance and web dev called [No, Absolutely Not](https://css-tricks.com/no-absolutely-not/). And I still like that one.

Anywho, I also wrote about the [`grid-auto-flow`](https://css-tricks.com/grid-auto-flow-css-grid-flex-direction-flexbox/) CSS property the other day. It’s _sort of_ like `flex-direction` but for Grid. It’s kinda neat and a good CSS property to have in your back pocket.
