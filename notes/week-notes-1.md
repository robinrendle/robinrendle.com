---
layout: layouts/note.njk
title: "Week notes #1"
date: 2015-01-30 11:12:00 -08:00
tags:
  - design
extract:
  This is the beginning of a new side project in which every Friday evening
  I’ll write for thirty minutes about what I’ve been working on over the past seven
  days. For a while I’ve been stashing these notes in private but I’ve finally decided
  to start publishing them because I want to recognise what I’ve accomplished, what
  I’ve screwed up and what I can do better come Monday morning.
update:
city: Plymouth
country: UK
---

This is the beginning of a new side project in which every Friday evening I’ll write for thirty minutes about what I’ve been working on over the past seven days. For a while I’ve been stashing these notes in private but I’ve finally decided to start publishing them because I want to recognise what I’ve accomplished, what I’ve screwed up and what I can do better come Monday morning.

So to kick things off, this is what I’ve been working on:

## strtr

At the beginning of each web design project I often return to the project I just finished, copying and pasting bits of code as I go. This feels haphazard and unorganised to say the least; I want to spend more of my time building a website rather than dealing with the tedious interlinking of dependencies that I commonly have to work with.

This is where [strtr](https://github.com/robinrendle/strtr) comes in. It’s a simple, relatively neutral strting™ point for small-to-medium sized websites. It contains the following:

- An `index.html` file with best practices for writing clean, semantic markup.
- A CSS reset is imported with regular ol’ Sass.
- Gulp tasks which ought to: - compile Sass - minimise the CSS output - optimise images + SVGs

For this [Barebones](https://github.com/paulrobertlloyd/barebones)-esque project I’m hoping to avoid tools such Compass or Bourbon as ideally this should give me the autonomy to pick whichever Sass or JS framework or CMS or templating system I’ll need for a particular project.

We’ll see how this goes but for now it’s already saved me about an hour of fiddling with dependencies.

## .dotfiles

As I was messing around with strtr I tried to run a command that basically gave my laptop [a heart attack](https://twitter.com/robinrendle/status/560113019251077120). It was nothing serious but it gave me the incentive to run a fresh copy of Yosemite with everything set to their natural defaults. Pruning your operating system with a fine tooth comb feels really good and thanks to Backblaze I didn’t lose any data in the process (get yourself a backup, y’all).

Anyway, in the past I’ve stuck to using [THE dotfiles](https://github.com/mathiasbynens/dotfiles) without any personal customization and this led to an awful amount of developer-guilt. So I decided to get [my own dotfiles](https://github.com/robinrendle/dotfiles) sorted out once and for all.

[This tutorial on Tuts+](http://code.tutsplus.com/tutorials/setting-up-a-mac-dev-machine-from-zero-to-hero-with-dotfiles--net-35449) was particularly helpful for understanding the nitty gritty details of which file does what and how to get started making your own.

## A better JavaScript

In my spare time I worked on a dummy project to play around with [jspm](http://jspm.io/) and oh boy does it feel like a nice way to write JavaScript. The complexity of modules and using AMD and incorporating jQuery into a project has always felt like an uncertain, hazy and complicated mess to me. However with Traceur and System.js added to a project, writing classes and using ES6 feels glorious in comparison. On the next project I’m going to try this out for sure.

## Picture problems

I also tried a weird thing with the `picture` element which was pretty dumb.

Let’s say we have 3 images visible on a small viewport and on desktop sizes there should be 5 images on display. Instead of hiding those images with CSS (where the files will still load in many browsers despite their invisibility) or writing whacky JS I wanted to figure out a way to do this with markup and [Picturefill](https://github.com/scottjehl/picturefill).

So if you include the `source` element and fill in the necessary `media` attributes BUT remove the `src` tag of the image inside the `picture` element then images are not present on mobile yet they are progressively loaded in at wider viewports. Euruka!

Let’s just go ahead and ignore the fact that Chrome happens to be the only browser that supports this behaviour. In this instance hiding the `img` tags that didn’t load properly in other browsers made a cool idea unforgivably disgusting. Although, I am surprised I couldn’t find anything written about loading inline images like this elsewhere.

## Talk ideas

I’ve begun work on my next talk which I’ve decided to call _A brief and scattered history of letters_. In a single evening I had the intro, the end and the title pop into my head out of nowhere and I realised that over the next year what I really want to accomplish, as a sort of personal goal, is to set a firm timeline as to which events were important in the history of communication. I can recount the work of figures such as Gutenberg and Fournier or Benton and Haultin but fitting them onto a timeline is impossible without a search engine; dates smudge together and I often realise that I’ve mistaken one figure for another.

So I want to explore these odd, printed shapes that we call letters and how they influence our daily lives yet I also want to figure out how they influenced each other, in a particular order, too.

## Books, etc.

I’ve been rereading [Counterpunch](https://hyphenpress.co.uk/products/books/978-0-907259-42-8), perhaps my favourite book on design in general, and on returning to [my review](http://robinrendle.com/reading/counterpunch/) I can see that I got pretty damn close to describing just how good it really is.

As a side note I picked up [Tigerman](http://www.nickharkaway.com/books/tigerman/) a couple of days ago and I immediately fell in a deep and insatiable love for the world Nick Harkaway imagines. And now I discover that he has an honest to goodness WEBSITE with a BLOG where he LINKS to things like the Force Awakens trailer with the crazy lightsaber, or what he describes as the ”Wibbly Sword Of Evil Flames.”

This is undoubtedly where I’ll be camped out for the next week or so.
