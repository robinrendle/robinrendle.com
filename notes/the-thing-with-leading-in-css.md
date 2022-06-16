---
layout: layouts/note.njk
title: The Thing with Leading in CSS
date: 2020-08-29T04:53:52.821Z
city: San Francisco
country: California
extract: And a micro-rant about styling on the web.
---

Matthias Ott has made some notes about the upcoming [leading-trim CSS property](https://matthiasott.com/notes/the-thing-with-leading-in-css) which is the best intro I’ve read of this thing so far:

> The spacing between individual elements of a website and, in particular, the vertical spacing, has been a regular matter of debate between web designers and developers. Designers insist that what they see in the browser doesn’t look at all like the layout they originally designed. Developers respond that all the margins in the style sheets exactly match the margins in the layout. So who is right? The tricky thing is: In a way, they are both right.

This CSS property hasn’t landed in browsers yet—right now it’s just a spec—but it does solve a real problem that I’ve simply gotten used to: spacing blocks of text on the web is either impossible, annoying, or requires tons of hacks to make it mathematically correct. To this day I don’t really care about pixel perfect interfaces—I’ll eye things up and if they look okay then I sort of don’t care about the math.

`leading-trim` takes all of the guesswork and eyeballing out of it by letting you take out the space within the letters themselves, so thaat now it’s possible to accurately align two bits of text together on the web. It doesn’t sound like a big deal but I sort of reckon it could become something like `box-sizing: border-box;`. We use it all the time, and so frequently, that we forget it’s not the default in browsers.

The other day [Robin](http://robinsloan.com) mentioned that CSS has now gathered this massive collection of tools into this big beautiful thing, and I would most certainly agree. CSS is actually, yes, awesome now. Over the past 5-10 years styling things has _exponentially_ improved. And not just with tacked-on features, but the whole infrastructure underlying the language; the foundations of CSS itself. So much so that the way we think about CSS must change with these improvements.

I’ve mentioned this before somewhere but years ago I was talking to a fantastic web developer whose work I admired a great deal and they didn’t know what a clearfix was. Flexbox had existed for such a long time that they hadn’t need to learn about floats or clearfixes or any of the bonkers stuff tied to laying out websites in that way.

And `leading-trim`? Well, it contributes to that future where everything I know is sort of irrelevant. But in a good way!
