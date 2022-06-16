---
layout: layouts/note.njk
title: Random Button
date: 2020-11-05T05:33:54.707Z
city: San Francisco
country: California
extract: And a few small website fixes.
---

Election anxiety has led to a small website cleanup today. To the ol’ blog I added a reply link that lets you pop open an email directly to me — emails I get from here are a pure delight and I want to encourage many more conversations like that.

I also added a random link button to the bottom of a post. It’s partly inspired by that [NYT election distractor](https://www.nytimes.com/interactive/2020/10/30/style/election-stress-relief.html) but also by older blogs where there’s no rhyme or reason to the organization of things. You just get thrown in the deep end and have to figure out what the hell is going on. We’ll see how long it stays but it’s fun to see random and weird posts where I was writing about nonsense.

(Thanks to Raymond Camden for [his walkthrough](https://www.raymondcamden.com/2020/10/26/selecting-random-posts-in-eleventy) on how to create random links with Eleventy.)

Still no luck on fixing the iOS/Safari flexbox `overflow: scroll` bug on mobile. I looked into it a bit and it absolutely _must_ be a bug at this point, so I should probably file a ticket. Basically on mobile there’s an annoying horizontal scroll which is caused because of the header. But! The header has `overflow: scroll` applied to it and other browsers respect my CSS, as they darn well should. It’s so very rare for me to encounter browser bugs like this anymore so it’s both annoyin’ and suprisin’.

Finally, I tidied up the fonts. I’m now using [Greta Sans](https://www.typotheque.com/fonts/greta_sans) by Typotheque. It has a bit more of a formal feel but I much prefer reading it on smaller screens now. Oh, that reminds me — I also improved the light theme of the site which had been bugging me for a bit.

Yay for anxiety!
