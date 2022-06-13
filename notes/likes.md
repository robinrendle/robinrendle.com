---
layout: layouts/post.njk
title: RSS favorites
date: 2020-02-16 14:27:55
country: California
city: San Francisco
tag:
  - blog
extract: How to make a list of your favorites from Feedbin.
---

Dave Rupert mentioned the other day that he had made a page on his website that gathers his most recent [favorites from Feedbin](https://daverupert.com/likes/) and lets you scroll through them or even subscribe to them. I thought this was such a great idea that I decided to rip it off entirely!

First up, you’ll need to head to `Feedbin` `>` `Settings` `>` `Starred article feed` and toggle that on. This will create a feed of every post that you star and it’ll then give you a link. Next up you’ll need to write a script that parses that feed URL with JavaScript and this had me a bit stumped as I’ve never done anything like this before. After fiddling around with DevTools I figured out how Dave did it but he mentioned that [this post by Chris is where he got the idea from](https://css-tricks.com/how-to-fetch-and-parse-rss-feeds-in-javascript/).

Here’s [the final script](https://codepen.io/robinrendle/pen/a1c68736d5df9451992441e9f1c142e6?editors=1010) but, as Chris mentions in that post, it’s probably best to cache this stuff. Although for now I think this is fine, I’ll figure that step out later.

For now you can head to [/likes](/likes.html) to see my favorites or you can use [this link](https://feedbin.com/starred/aLWF-kwUgSwGZ_pDRzeM4w.xml) to subscribe to them if that’s your jam.
