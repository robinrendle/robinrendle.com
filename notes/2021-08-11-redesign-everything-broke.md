---
title: "Redesign: Everything Broke"
date: 2021-08-11T16:41:22.802Z
city: San Francisco
country: California
extract: Astro was harder to work with than I first thought.
layout: layouts/note.njk
---

Okay, so. I spent far too long trying to push my build of Astro via Netlify.

Netlify is where I host my site and it automatically detects when a commit is made in GitHub. It’ll then run a build command which will tell Astro to do it’s magic and turn a bunch of Markdown files into plain ol’ HTML.

But each time I pushed my code to GitHub, Netlify would detect that and then try to auto-deploy those changes and something would break.

What broke? No idea. The logs were impossible to read. That’s one problem with Astro right now: just trying to understand what you broke is difficult to see.

I’m sure this will be fixed eventually but it means I have to cautiously make any change, no matter how small. Change the markup, watch the command line. Change the font, watch the command line; because the slightest thing might break.

When I started this redesign project I wasn’t so cautious and when I tried to push my site to Netlify it broke in the most calamitous way imaginable. Perhaps things weren’t building right because I’m on the wrong version of Astro, I thought. So I updated to the latest version of Astro in my package.json.

Now, I’m not really familiar with juggling dependencies but it only took me thirty seconds to realize this was a really bad idea after I hit `npm install`. This is because a ton of breaking changes had been made since I updated the version of Astro I was on.

And I only started this project a few weeks ago!

There were tons of changes I had to make, and some substantial ones that didn’t make any sense to me at the time. Now the rather simple component structure required that I know more JavaScript than I really do (TypeScript – ah!). So I had to spend another couple of days reading the changelog and then updating everything to compensate for the changes.

This made me real mad at the time because I thought I had finished what’s a relatively simple blog redesign. But ultimately this is the price you have to pay for choosing a technology like Astro that’s still shifting under your feet. Everything is certainly getting better all the time! But — and here’s the real kicker — what looks like an obvious improvement to you is an incredibly annoying waste of time for, well, me.

I was mad at myself, really. I hadn’t taken into consideration that Astro is not even at v1 yet and so of course everything about it is likely to change whilst I’m building my website. Thankfully I’ve got to a point where I’m feeling okay-ish about it all now. I’m still confused about how to create feeds and adding Typescript to my blog feels like overkill.

But it reminded me that for really important stuff (my website is more important than almost everything I own), you need to pick a technology on firm ground. No big changes, nothing that rocks the boat. You want your software to be predictable and not punk rock because being punk rock means that you have to keep up with stuff breaking and not making sense and half-written documentation for stuff.

All of this is not an inditement against Astro. It’s more a criticism of my own expectations; I looked at a shiny box full of technology and assumed it would fix all my problems. Whereas, really, it just shifted those problems about.

When I picked Astro I thought I’d get all the benefits of 11ty and then some. But this really isn’t the case. Astro doesn’t let you make a single unified RSS feed (easily) and then create a very specific file at the root of your website (like `feed.xml`). So something that’s fundamental to my website is now busted with no workaround I can think of other than doing a bunch of 301 redirects that I have to add to Netlify. This broke my RSS feed and made it look like I had a very productive evening of blogging.

As I was struggling with my website I read this piece by Jeremy about [building complicated websites](https://adactio.com/journal/18337):

> You can choose to make it really complicated. Convince yourself that “the modern web” is inherently complex and convoluted. But then look at what makes it complex and convoluted: toolchains, build tools, pipelines, frameworks, libraries, and abstractions. Please try to remember that none of those things are required to make a website.

Ugh. This is how Astro now feels to me. I sort of regret doing all this work to shift my website over from 11ty only to realize that I don’t think I need all the extra superpowers that Astro unlocks. I mean, I still love Astro. It’s incredible and cool and shiny. But for my website...I need something with strong foundations. I need boring technology to encourage me to write, to mess around with words on the internet.

For now I’ll sit on any big changes, despite my current mopeyness, and keep Astro here until v1.0. But this was a good and rather painful lesson to learn.
