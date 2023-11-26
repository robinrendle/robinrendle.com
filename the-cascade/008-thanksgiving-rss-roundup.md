---
layout: layouts/cascade-post.njk
title: Thanksgiving RSS Roundup
date: 2023-11-26T09:24:00-08:00
city: San Francisco
country: California
extract: Hyperlinks for days.
---

This weekend is a quick one with just five things to read since I’m still recovering from all the pies and baked goods of Thanksgiving. The brisk and biting cold air has returned to San Francisco and so I’m writing this from a cafe whilst bundled in the biggest sweater you can possibly imagine. It is glorious. I am happy.

Okay, onwards! Let’s get this show on the road.

## i.

Josh Comeau’s [interactive guide to CSS Grid](https://www.joshwcomeau.com/css/interactive-guide-to-grid/) is so good that it hurts. I simply wish I had a resource like this when I was learning Grid years ago! The demos are especially good in this post and really help parse the somewhat intimidating language of properties like `grid-template-columns` and what not.

One neat trick here that’s worth pointing out, and one I’ve used a few times before, is this:

```css
.parent {
  display: grid;
}

.child {
  grid-column: 1 / -1;
}
```

The child element here will take up all the available columns — that `-1` counts from the end of the columns. And that’s really handy for [full bleed layouts](https://www.joshwcomeau.com/css/full-bleed/).

## ii.

I’ve been thinking a lot about Chris Coyier’s post on [SEO and how everything about it is obnoxious](https://chriscoyier.net/2023/11/08/everything-about-seo-is-obnoxious/). Chris writes:

> This is what SEO should be:
>
> 1. Write content on the internet.
> 2. Make sure it is output in semantic, accessible HTML.
> 3. Make sure the performance on the site isn’t a disaster.
> 4. Play no games. Do no tricks.
> 5. Do that over a long period of time on the same domain to build trust.
>
> And to be fair, that does work. That’s all I did at CSS-Tricks and was rewarded with decent traffic from Google for quite a long time.

For the longest time I’ve seen SEO along similar lines as Chris and I’ve always looked down upon any kind of analytics-SEO-shenanigans. It just seems like such a short-sighted approach, to write for Google instead of writing for people. Anyway, this is a good reminder that the slow and steady approach to writing online always pays dividends in the end.

## iii.

I’ve mentioned it a few times in the past but I truly believe that the `snap-scroll` CSS property is a game changer and hasn’t been fully explored yet. There are so many possibilities for changing the reading experience of a webpage! And I find that real exciting.

But! There are a few problems with it. One of the things that bugged me about it last time I used it was how it’s only a CSS property without any JavaScript hooks. But now it looks like soon we’ll be able to write something like the following...

```js
document.addEventListener("snapchanged", (e) => {
  console.log("changed", e.snapTargets);
});
```

This `snapChanged` event is exactly what I was looking for! Oh and make sure to check out [this video](https://front-end.social/@argyleink/111450779294496273) by Adam Argyle to see how that bit of code returns the element you scrolled to.

Right now I can see this being very handy for animations—say you scroll to section 3 in a big carousel and want to trigger some movement or transform. With this `snapchanged` event you can do just that. Handy stuff.

## iv.

Sawyer Hollenshead wrote about using [ffmpeg to create looping videos](https://www.sawyer.soy/blog/create-looping-videos-with-ffmpeg) which makes for a nifty bookmark. ffmpeg is a command line tool that lets you quickly convert audio and video formats, like this:

```html
ffmpeg -i input.mp4 output.avi
```

Sawyer does something quite a bit more complicated though: he reverses a video, combines the reversed and regular versions of it to make a loop, and then creates a webm version of that mp4.

I always use the impossibly useful [Permute.app](https://software.charliemonroe.net/permute/) for converting video and audio formats but it looks like ffmpeg can do a lot more magic.

## v.

Finally, I’ve been thinking a bit about this post I saw a while back from Adam Tuttle on [the accessibility issue](https://adamtuttle.codes/blog/2021/tabs-vs-spaces-its-an-accessibility-issue/) at the heart of the tabs vs. spaces debate.

The TL;DR here is that tabs are better because folks can customize them much more easily. If someone needs more spacing and more indentation then that’s a setting in their code editor that they can flip. With spaces, it’s just a lot harder to do that. And since reading is always an accessibility issue, tabs are just better all-round.

That’s it for this week!

See you in the cascade, <br/>
✌️ Robin

<br/>
<br/>
<br/>
