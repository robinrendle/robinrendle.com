---
layout: layouts/note.njk
title: The Staggering Frontiers of CSS
date: 2023-06-17
city: San Francisco
country: CA
extract: Or, welp.
---

Friends! Pals! CSS deviants!

One thing I’ve always loved about CSS, besides its obvious and immediate effect on a webpage—wow this table is now red!—is that it prods, pokes, and questions you over the years. CSS never sits still, not just in terms of small properties and browser quirks that get pushed out over time, but big philosophical things about CSS too.

And since [I quit my job last week](https://buttondown.email/robinrendle/archive/the-risks-of-staying-put/), I’ve been tryna catch up on all the CSS drama that’s been happening lately. There’s so much news! But here’s a few things that I reckon are gonna change how I make websites in the near future.

## 1.

First up, [View Transitions](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) looks like its gonna have a big impact on how websites _move_. The TL;DR is that this API gives us control over how new pages load when you click a link. Before you’d have to use a JavaScript framework to control how things animate between page loads but now the browser lets us animate _between_ loads. [Tyler Graw’s example](https://tylergaw.com/blog/view-transitions-first-experiments-mpa/) for multi-page apps is what makes me most excited about this...

![b38a000f-102d-4147-a0c5-34e311fc2043.gif](https://buttondown-attachments.s3.us-west-2.amazonaws.com/images/ff0233ba-54aa-43df-92ad-fa00297fcf47.gif?w=960&fit=max)

It reminds me of how indie game design extraordinaire [Joni Korpi](https://jonikorpi.com/) was rethinking website navigation beyond “scroll down to see more”: Zoomable user interfaces! Animations that grounds content in time and space! So the View Transitions API lets us ask these questions all over again but now we can make real, browser-optimized answers for them.

## 2.

Next up: anchor positioning. Roman Komarov had [a mind-bending blog post](https://kizu.dev/anchor-positioning-experiments/) about this recently. As far as I understand things, anchor positioning lets us bind two elements together in space so that if you move one of them, the other can adapt to it. Or, as Roman says:

> ...anchor positioning augments absolute positioning by allowing us to use the positions and dimensions of elements other than the element’s usual positioning context.

According to Jhey Thompkins this’ll be especially handy for [tooltips in the future](https://developer.chrome.com/blog/tether-elements-to-each-other-with-css-anchor-positioning/), which have been notoriously annoying when you click something and a menu appears somewhere, only for it not to respond in the way you might expect to the element that you clicked.

But Roman blew my mind when he showed how small things in CSS have always been impossible because we haven't been able to make relationships between elements. Take hover states on nav items for example, like this one below:

![anchor-positioning-1-2.gif](https://buttondown-attachments.s3.us-west-2.amazonaws.com/images/63c806cd-6ff7-4681-ad0c-614228a1603d.gif?w=960&fit=max)

Stuff like this is now possible with anchor positioning but the philosophical and mind-boggling bit was this section, where Roman writes:

> It becomes possible to highlight something in a completely different place on the page, allowing elements to “know of each other”.

!!!

This is sort of what I mean when the underlying philosophy of CSS changes in just a few brief years because there’s _tons_ of things in UI design that we’ve had to rely on JavaScript for in the past. But now? I can imagine this anchor positioning stuff taking over in a big way. This is fantastic! And exciting! And...scary?

## 3.

Next next: Dynamic Viewport units. This fixes that age-old bug with `vh ` units that I kept bumping into on side projects where writing something like this...

```css
.hero {
  height: 100vh;
}
```

...wouldn’t take into consideration the browser chrome so stuff would always be cut off. Now I can basically always replace it with this:

```css
.hero {
  height: 100dvh;
}
```

Neato!

## 4.

Finally: subgrid. I had an idea for a side project that’s gonna explain subgrid in more detail so I won’t rant too much here for now. Ideally though, subgrid allows us to have a single grid on a webpage which is a BIG deal. It’ll makes grid systems so much easier to build in the future.

---

And that’s about it! There’s ten million other new features in CSS that Chris covers in [Modern CSS in Real Life](https://chriscoyier.net/2023/06/06/modern-css-in-real-life/) and I feel like I sort of share Paul Robert Lloyd’s thoughts about how [CSS is spiraling out of control](https://paulrobertlloyd.com/2023/162/a1/css_day/). There’s just an overwhelming number of new features to keep track of and remember now.

Back in May, Una Kravets, Bramus, and Adam Argyle wrote about [everything new in CSS](https://developer.chrome.com/blog/whats-new-css-ui-2023/) just this year alone and it’s pretty staggering: there’s nesting and cascade layers, a wider color gamut, scoped CSS, the popover API, selectmenu, scroll-driven animations, trig functions and that’s not even half of it all. Jen Simmons also has a great video from WWDC about [what’s new in CSS](https://developer.apple.com/videos/play/wwdc2023/10121/?time=353) and its equally mind-unravelling.

This is thoroughly exciting to me, and I don’t wanna whine about improvements in CSS, but it’s a bit concerning since I feel like what the web is now capable of is slipping through my fingers. And I guess that’s what I’m worried about; I no longer have a good idea of how these things interact with each other, or where the frontier is now.

The map of CSS in my mind is real messy, confused, and teetering with details that I can’t keep straight in my head.

It feels like we’ve entered this new phase in the life of CSS where just keeping up with what’s shipping each year is too much for any one person to keep track of, let alone take advantage of. And maybe that’s a good thing! It’s certainly better than the decade of stagnation we had when one browser dominated everything.

Yet the frontiers of CSS are moving so fast that it’s certainly hard to keep up. Perhaps that’s the whole point of a frontier though; this unattainable, unknowable thing that’s always around the corner but never fully in reach.

See you next Saturday. <br/>
