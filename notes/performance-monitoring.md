---
layout: layouts/post.njk
title: "Performance Monitoring "
date: 2020-07-15T01:02:38.707Z
city: San Francisco
country: California
extract: A new feature from Sentry.
---

Chris wrote about [the analytics that matter](https://css-tricks.com/the-analytics-that-matter/) earlier this month:

> I’ve long been skeptical of quoting global browser usage percentages to justify their usage of browser features. It doesn’t matter what global usage of a browser is, other than nerdy cocktail party fodder. The usage that matters is what users on your site are using, and that can be wildly different from site to site.
>
> That idea of tracking real usage of your actual site concept has bounced around my head the last few days. And it’s not just “I can’t use CSS grid because IE 11 has 1.42% of global usage still” stuff, it’s about measuring metrics that matter to your site, no matter what they are.

This is true not just for browser stats, but also for performance, too. So if we’re using Lighthouse scores to figure out the performance of our sites then that’s surely better than nothing at all _but_ it doesn’t show us what is actually happening: how are our customers experiencing our websites? What pages and transactions are slow? How big is the problem? And then, crucially: how do we go about fixing these issues?

On this note, the other day I was talking to [Dora](https://twitter.com/doralchan?lang=en) and she broke this down into two types of data: field and lab. Field metrics are real, user data. The stuff that gives us a clear insight into what our customers and doing and how we can make their lives easier. Whereas lab metrics come from a hypothetical environment, like Lighthouse scores, or even testing that you yourself have experienced. Lab metrics sure are helpful, and they’ll most certainly lead us in the right direction, but they’re not _real_. Lab metrics always have a certain degree of bias in them, which again is okay if we know that.

As Dora mentioned to me in that chat: “bias is inevitable.”

All this stuff has been rolling about in my head for the last couple of months whilst I’ve been watching the team at Sentry work on a new feature called...wait for it...[Performance](https://sentry.io/for/performance/)! It allows you to see which transactions in your app are slow but, not only that, Sentry does something pretty smart: we tie those slow transactions to specific releases in your codebase and we even point to preexisting issues—errors that we bundle together into groups to help you debug things—and it’s this magical stuff that gives you the ability to hop into your codebase, find the thing that’s a problem, and fix it right away.

I didn’t work on this feature at all, I’m only mentioning it here because I’m a big fan of the team and the project, and I’m especially a giant fan of where all this is going.

Also with this feature the team is introducing a new way to measure performance with a term they’ve started calling “User Misery.” It shows how many of your customers are experiencing slowness whilst using your app. This lets you prioritize tackling _this_ performance issue over _that_ one based on what your customers are actually experiencing and the scale of the problem itself. Nifty, huh? When they were showing me this stuff I realized that that’s the power of field metrics when it comes to performance.

You can learn more about all this stuff in the [announcement post](https://blog.sentry.io/2020/07/14/see-slow-faster-with-performance-monitoring) and I am most certainly going to rant more about this work here in the future. Because oh boy golly gee whizz.
