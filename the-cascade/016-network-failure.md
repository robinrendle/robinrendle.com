---
layout: layouts/cascade-post.njk
title: Network failure
date: 2024-02-25T21:28:16-08:00
city: San Francisco
country: California
extract: Web docs are critical infrastructure.
---

Pals! Friends! Future Acquaintances Whomst I Shall Inevitably Disappoint! 

Last week I was working on the new introduction to [my website](https://robinrendle.com) and I was having a blast. It’s a mini-manifesto in the style of HyperCard that describes what I hope to do with my career and my website. Look at all those illustrations and icons! I found an archive of things that came bundled with macOS—before Jobs shuttered the HyperCard project—and I had a whole lot of fun tweaking and editing them into something that feels familiar but new:

![A screenshot of the project, showing a white card on a pixelated marble background](/images/manifesto.png)

The page is a big carousel where you can click forwards and backgrounds through cards but as I was building it I realized something truly dreadful: how does `background` work again in CSS? I know that I can stretch that cool, marbled texture to fit the page but what’s the right value I need to do that again? 

```css
.carousel {
	background: ???;
}
```

Okay, fine. Annoying, but sure. There are a million CSS properties like this that no matter how many times I write them I always forget the correct syntax. (For some reason I can keep grid and flex in my noggin’ but anything to do with CSS animations falls into a giant memory hole.) So I searched for all the ways to use the `background` property and all I came across was MDN (helpful but the demos and write-ups aren’t stellar in my opinion), Medium thinkicles (god why), and a few random questions in forums like StackOverflow (the absolute worst place to learn anything about CSS in depth and I’ve seen tons of answers that are out of date). 

I had this horrible pang in my chest. I missed CSS-Tricks dreadfully, missed seeing Chris’s posts—or any of the great contributors to the site—at the top of search results where I knew that this one tiny subject has likely been written about ten thousand times every which way. But I couldn’t find it. I had to really hunt for a blog post that covered this stuff and explained it in a way that clicked with me.

This ten second bout of difficulty reminded me that although I haven’t done much front-end work professionally for a while, search results for CSS questions are now full of junk. The web is now chock full of confusing links and threads about CSS that consistently lead me in the wrong direction even with the most simplest of questions.

CSS is now noticeably harder to write in 2024 because of this.

So when I stumbled on Andy Bell’s blog post about [a global documentation platform](https://piccalil.li/blog/a-global-documentation-platform/) my ears perked up and I bolted upright in my chair:

> I want to start an earnest and serious conversation about how we, the web community, can fight back and preserve some of the most valuable content we need to do our jobs.

Andy’s argument here is that [MDN](https://developer.mozilla.org/en-US/) is a wonderfully helpful service but leadership at Mozilla can’t be trusted to run the site. Documentation for the languages that power the web is simply too important to be left in their hands. And so we need something new.

Andy continues:

> I think I’m going to get shouted at on the internet for this suggestion, but I think MDN core documentation content needs forking and an alternative platform needs to develop from that forked, attributed content that has a sustainable funding and leadership model. Mozilla ain’t providing that.

As Andy notes, [Open Web Docs](https://openwebdocs.org/) does exist and they contribute to MDN alongside Mozilla but considering who funds it, perhaps it all rests on very shaky ground.

To be fair, I don’t know much about the politics behind MDN or how it’s run. I’m sure there’s a bunch of folks doing their best to continue to build the site and I’m sure there’s a ton of folks at Mozilla who feel that it’s being underfunded. I also know much to nothing about Open Web Docs, so take all this with a grain of salt. 

However! As a person who writes CSS, I think Andy is onto something—we need an alternative to MDN, a trustworthy source for every CSS or JavaScript question, funded directly by developers. We need a new kind of organization that will build easy to find answers to common questions, with great demos and examples to tie it all together.

What this looks like exactly and how it all works I’m not sure. Maybe open sourcing this kind of thing is impossible and you need another Chris Coyier type to steward the whole project in the right direction. But as search results slip, as MDN continues to falter, and the spread of junk content proliferates on the web, I worry that CSS is becoming increasingly difficult to learn.

Docs like this might be very unglamorous and boring. But as Andy notes in his post, web documentation is critical infrastructure. It’s like living in a country with trains that run on time. Or knowing that the streetlights will turn on at night. 

Without that kind of infrastructure, everyone suffers. 

Until next week!
✌️ Robin 