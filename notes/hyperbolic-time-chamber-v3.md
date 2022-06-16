---
layout: layouts/note.njk
title: Hyperbolic Time Chamber v.3
date: 2020-04-13 20:18:58
tags:
  - personal
extract: 8/10
country: California
city: San Francisco
---

<div class="m-wrapper--full">
  <figure class="m-wrapper--unpadded" style="margin-top: 0; margin-bottom: 10px;"> 
    <img alt="The Hyperbolic Time Chamber" src="/images/htc.jpg"/>
  </figure>
</div>

San Francisco is now warmer with each passing day, the winter chill almost tuned out from the evenings. It’s the sort of weather that I completely adore, the very cusp between winter and summer, and it’s the reason why I can’t imagine living anywhere else whilst I’m sat here in my kitchen with the window open listening to [Monoliths](https://open.spotify.com/track/4dBt1RkjxNFGdEVSw7UfrU?si=B7McJJT7SxSFMbqSKAFBwg).

The exercise? Oh, that’s getting ever so slightly easier and I’ve started to incorporate more weight training into each day, although it is growing increasingly difficult to avoid baking endless mountains of cake and I have a packet of biscuits in my cupboard that I can hear screaming my name. But despite that, and for the first time since I started trying to fix my health, I’ve now begun to feel happy…ish.

There’s no progress to speak of, it’s still far too soon for that, but there’s _hope_ for progress to be made. And that’s enough for me.

<div class="m-wrapper--full">
  <figure class="m-wrapper--unpadded">
    <img alt="Workout stats for this week" src="/images/htc-week3.png" loading="lazy"/>
  </figure>
</div>

---

This morning I went down one heck of a rabbit hole with my website. I noticed that I had a performance score of 88 when I threw my website into [Pagespeed Insights](https://developers.google.com/speed/pagespeed/insights). It reminded me of when Dave Rupert mentioned last month about the difficulty of [maintaining performance](https://daverupert.com/2020/03/maintaining-performance/):

> This story is less about webfont performance and is actually framing for another point I’m trying to make. I, Dave Rupert, a person who cares about web performance, a person who reads web performance blogs, a person who spends lots of hours trying to keep up on best practices, a person who co-hosts a weekly podcast about making websites and speak with web performance professionals… somehow goofed and added 33 SECONDS to their page load.

Somehow performance of this here website slipped whilst I wasn’t paying enough attention, too. And although I’m certainly not as experienced as Dave, I do tend to rant about why making websites fast is [so dang important](https://css-tricks.com/accessibility-and-web-performance-are-not-features-theyre-the-baseline/).

So: I dug through the report and noticed a couple of things. First off, I found that I should be inlining all the styles of my site into the `<head>` of the document — that way I don’t need to make a round trip just to grab the styles. Also, I knew that I could replace the image for the custom cursor with a [data URI](https://css-tricks.com/data-uris/), so I could get rid of that server-round-trip, too.

With the Eleventy docs I discovered [how to inline CSS relatively easily](https://www.11ty.dev/docs/quicktips/inline-css/), although it required that I had to figure out a bit more about how templating languages worked. I decided to switch everything over to using Nunjucks in the process and with all that work (about 2 hours of faffing about) I bumped the score up to 96/98. All this does have me looking at my fonts and wondering if I should ditch them just to get the perfect score.

But no! The fonts are worth something, surely.

Anyway, thanks to Andy Bell’s [Hylia](https://hylia.website/) project for giving me some great tips on how to improve things. On that note, I’m really looking forward to [Andy’s course all about Eleventy](https://piccalil.li/course/learn-eleventy-from-scratch/).

---

I chatted with my pal [Lucy Bellwood](https://www.patreon.com/LucyBellwood) earlier today. Her work and feedback and thoughts about publishing are always stupidly inspiring and her Patreon (which yes I will link to [again](https://www.patreon.com/LucyBellwood) and [again](https://www.patreon.com/LucyBellwood)) is the perfect example of working in public, and just the sort of thing that I aspire to.

Whenever we talk my phone tends to fill up with notes for books to read and websites to surf. In fact, I can always tell how much I completely adore someone, and it’s this: whenever I walk away and I’m genuinely excited for all the homework.

---

I’ve been playing Final Fantasy 7 for the past couple of days and dear lord I couldn’t love it more if I tried. The original game was such an important part of my childhood and I swear that it’s what made me want to become a writer. Sure, the game involves a yellow haired boy and his giant sword but the bulk of the game is made up of thousands upon thousands of lines of text. The art is special, but it’s the story that won me over.

Also, there’s a brief moment early on when the Aerith theme tune kicks in and I was dragged back to the summer of ‘99—I’m shirtless, sitting on the bunk-bed, refusing to give the controller to my brother, praying for the sun to go down so that I can see the tiny television screen more clearly. And yes those are tears in my eyes, I fear nothing!

---

Speaking of which, Paddington and Paddington 2 thoroughly wrecked me this week. The second film is a damn masterpiece and Hugh Grant should’ve won every Oscar for every category of 2017. Woof.
