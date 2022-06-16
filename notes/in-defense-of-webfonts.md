---
layout: layouts/note.njk
title: In Defense of Webfonts
date: 2016-03-18 10:26:00 -07:00
tags:
  - design
city: Plymouth
country: UK
extract:
  A web font, just like any other visual stimulus, has work to accomplish and
  it has a value and a position in the designer’s toolkit which is one of the most
  effective ways to display the intent of the text. Perhaps we need to spend more
  time thinking about web fonts as web designers, we need to think about their goals,
  about their shortcomings.
---

Yesterday Adam Morse wrote about [webfonts](http://mrmrs.io/writing/2016/03/17/webfonts/), which, well...the gist is that webfonts are bad for usability and performance so we should effectively ditch them:

> I’ve heard a lot of arguments about why to use webfonts. In none of those arguments, have I heard about a single problem users have that is solved by using webfonts. And well, I’m only really interested in solving problems for users.

I think his arguments can be summarised into two main points which I’d like to tackle, one by one:

1. Web fonts aren’t predictable.
2. Web fonts are very expensive in time, money and resource size.

## Problem #1: Web fonts are unpredictable

Adam continues his argument:

> Typography is not about aesthetics, it’s about serving the text. If even a small percentage of people don't consume your content due to a use of webfonts, your typography is failing.

I want to move away from any argument about semantics so I won’t address what typography is or isn’t (many have done [an admirable job on that front](http://practicaltypography.com/what-is-typography.html)). As to Adam’s second point: I agree! But if a web font fails to load for whatever reason then that’s a relatively simple problem to solve and it has nothing to do with the font file itself.

We can smooth out the rough edges of a font request by using [the proper technique](https://css-tricks.com/loading-web-fonts-with-the-web-font-loader/); a poorly designed front-end architecture is hardly a reason to suggest we abandon web fonts altogether.

There’s another suggestion here in Adam’s argument which I might be reading a little too much into, but it appears that he argues we should use a “web-safe” or a system font because they’re more predictable. However, I would argue that there’s no such thing as a “web-safe” font. Take a look at the support for [Helvetica](http://fontfamily.io/helvetica), [Georgia](http://fontfamily.io/georgia), [Times](http://fontfamily.io/times) or heck, even the [sans-serif](http://fontfamily.io/sans-serif) keyword. If predictability is what we’re looking for then I’m afraid we’ve picked the wrong network to design things on top of.

## Problem #2: Web fonts are expensive

This is where Adam states that:

> Webfonts come with a number of costs. They cost money to license. They cost time to implement.

Sure, but how much time do we spend on other aspects of a design? On the quality of the photography, on the editing of text? On the unnecessarily large custom frameworks we build and ship? How often have we re-written code that could be copy and pasted from Bootstrap? Good design takes a certain amount of time and great design is about figuring out the best way to spend our limited resources.

If licensing a web font is a problem, then there are plenty of [free web fonts](https://www.google.com/fonts) out there, although personally I would avoid using them because they’re likely to not be as intricate as a licensed font.

Continuing with Adam’s post, he writes that _“fonts cost time to download, and with some mobile data plans they can cost money to download as well.”_ But if we find that a web font takes too much time to download then we can set a reasonable timeout on the web font loader we’re using. Or we can subset the font by a specific language, or remove certain OpenType features. Or perhaps we can even redesign the piece of text to require less fonts altogether (although this is probably not a great solution). Or maybe we can compromise even more on the design and remove a single image, which ought to make up for the request of a font.

## The Value of a Webfont

All of these points lead to Adam’s vitriolic condemnation of web fonts as being lazy, useless things; they’re not worth the effort to implement or stress over because they have no value whatsoever. On this point I heartily disagree.

Although Adam does make some good points towards the end:

> System fonts can be beautiful.
> Webfonts are not a requirement for great typography.

I entirely agree with this sentiment and, in certain circumstances, system or “web-safe” fonts should be used instead. When we download a typeface that is almost identical to Georgia or Helvetica then there’s not much of an advantage that can be had from requesting a large font file.

With that said, I don’t believe that all of human experience can be elegantly communicated via Helvetica, Times, Georgia, or San Francisco. And when I read that “typography is not about aesthetics” then I sigh deeply, heavily and come to the conclusion that 1. yes it is and 2. aesthetics _is_ a problem for the reader. The more ugliness that is pressed upon us, the more lazy we become. Beauty, legibility, subtlety, these are the qualities that are possible with the help of web fonts and without them we are left with a dismal landscape devoid of visual grace or wit.

The [text is more important than the font](https://robinrendle.com/essays/new-web-typography/), but an unusual letter form adds a value which is difficult to quantify with words alone. If we’re requesting something like Proxima Nova then sure, I feel that the designer has made an error of sorts because that typeface has been used so frequently as to be bland, it registers not a single emotion from the reader. But what about other letters? Are we truly naive enough to believe that everything can be said with such unnecessary restrictions to our typographic palette? What are letterforms truly capable of?

![Image of text set in SignPainter by House Industries](/images/oldsmobile.png)

What is the value of one shape over another? How can they draw us into the information? How can they help shine a light on the differences between an old car model built for a certain age and a modern film that finds its inspiration in the offbeat kilter of jazz?

![Image of text set in JeanLuc](/images/birdman.svg)

A web font, just like any other visual stimulus, has work to accomplish. It does have a value and a position in the designer’s toolkit because a web font is one of the most effective ways to display the intent of the text.

Perhaps we need to spend more time thinking about font files as web designers and we need to think about their goals, about their shortcomings.

And then we need to go to work and fix them.
