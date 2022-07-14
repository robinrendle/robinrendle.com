---
layout: layouts/note.njk
title: A playground, a wellspring
date: 2022-07-11
city: San Francisco
country: California
extract: And a dev tool.
tags:
  - websites
---

Whenever I open up DevTools and inspect a website I feel this overwhelming sense of lost potential. Here’s just one example: today I wanted to buy a pillow so I went to casper dot com, and saw this lovely animated gradient on a banner trying to sell me something. Interesting! I popped open Chrome’s DevTools to see how they were doing it with CSS and this is what I could see...

![An example of Chrome’s DevTools highlighting a CSS keyframe animation](/images/devtools-1.webp)

...where is the animation? It’s called `gradientKeyframe` here but...where is it? What if I wanted to click into it and start experimenting, editing, copy and pasting it into my own website? I’m sure I can do this somewhere, right? But it’s not clear to me and I’d probably have to go digging through the CSS file itself and search for the keyframe.

In this example DevTools feels like...a dead end?

Another dead end I see in DevTools is anything to do with fonts. It’s sort of maddening that it’s 2022 and Google’s browser cannot tell me what font is currently used in this particular element, in the same way that Firefox can so easily.

![An example of Firefox’s Developer Tools displaying the Fonts tab where you can see each of the fonts that a website has been using](/images/devtools-2.webp)

Here’s Firefox showing me which element is using which font and then a big list of all the fonts that are available on the site. This is a marvelous feature! And considering how difficult it is sometimes to see visually which fonts have loaded, this info gives me confidence I’m doing something right when I build my own website.

But regardless of missing features, the biggest disappointment of all developer tools in every browser is the unanswered question that lies at the very heart of them all: what about the fun? Because today I see DevTools as merely a command line for the web (the web developers won whilst the cypher punks and the dark web hacker dweebs lost). There’s just no joy or incentive to experiment or play in this interface, no push and pull to learn something new about how this website did this one cool weird thing.

(I remember talking to [Marcin](https://aresluna.org/) many moons ago about the disappointment we both felt with DevTools and how it doesn’t give new web developers a kick in the right direction, it doesn’t explain how a website works but just...shows you the code.)

Take a look at what the Arc browser is doing with [Boosts](https://www.loom.com/share/55e80c00d4444579b5d0de49d9ffc650) as an example of what DevTools could be; experimental, fun, and downright cool. In Arc’s vision of the web, websites aren’t this thing you build in between meetings with your manager, but are instead toys that you can mold and reshape in the palm of your hand. Arc brings back the spirit of learning what a `<br />` tag is for your dorky MySpace profile.

So DevTools requires reimagining. Away with the tools for developers! Let’s bring back the weirdness and experimentation and the joy of building a website again! Give us software to peel back all the layers of HTML and CSS and customize them, remix them, riff on code that we barely understand.

I think that’s what’s required to build great websites and teach the next generation of web folk. Ultimately we need to unthink of these things as tools for developers and see them for what they really are; a playground, a wellspring, for making websites.

Because DevTools isn’t that.

DevTools is a dead end.
