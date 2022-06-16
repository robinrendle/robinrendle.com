---
layout: layouts/note.njk
title: CSS is Awesome
date: 2018-01-04 17:48:00 -08:00
tags:
  - link
city: San Francisco
country: California
extract:
  Despite how much you might want to control it, or bury the language in a
  mountainous rubble of JavaScript, the weirdness of the web will still be there,
  baked into the language itself. You can’t escape it.
---

Ever since Brandon Smith’s post about how [CSS is Awesome](https://css-tricks.com/css-is-awesome/) was published in mid-2017 I’ve been entirely obsessed with it. I think it puts into words something significant that hasn’t really been said before about the language:

> CSS is hard because its properties interact, often in unexpected ways. Because when you set one of them, you're never just setting that one thing. That one thing combines and bounces off of and contradicts with a dozen other things, including default things that you never actually set yourself.
>
> One rule of thumb for mitigating this is, _never be more explicit than you need to be_. Web pages are responsive by default. Writing good CSS means leveraging that fact instead of overriding it. Use percentages or viewport units instead of a media query if possible. Use `min-width` instead of `width` where you can. Think in terms of rules, in terms of what you really mean to say, instead of just adding properties until things look right. Try to get a feel for how the browser resolves layout and sizing, and make your changes and additions on top of that judiciously. Work with CSS, instead of against it.

Over the course of 2017 this post changed how I write CSS, especially that bit about `min-width` and `width`. That’s because what Brandon is really trying to do is get us to think in a very abstract way when it comes to designing things for the web. Whenever we’re building a feature for a project we really need to consider how to make that extra leap, that little intellectual abstraction, which ought to help us write better CSS; designing interfaces that are less error prone and more responsive (not just to screen or viewport size, but also other elements that might appear).

I think it also helps us understand the concept of what designing for the web really means. For example, as pixel-perfect designs bled in from the print world (where being precise is vital to printing a good book), we suddenly found ourselves in a world that begs for imprecision. To design things flexibly. To say “this isn’t perfect, but it works best under all circumstances, rather than optimized for one.”

This is why CSS is a useful toolbox for designers who work on the web to learn more about – because it encourages us to think in that abstract way, to consider all the variables regardless of how messy they might be. And I think that despite how much you might want to control it, or bury the language in a mountainous rubble of JavaScript, the weirdness of the web will still be there, baked into the language itself. You can’t escape it.

The peculiarity and straight-up weirdness of the CSS language reminds us all that the web is not a platform owned by a single corporate entity, but rather a weird (despite [a little broken](https://robinrendle.comnotes/an-incomplete-list-of-mistakes/)) and lively (despite [a little difficult](https://robinrendle.comnotes/in-defense-of-webfonts/)) network that we’re free to experiment with as we see fit. And that’s why CSS is awesome for me.
