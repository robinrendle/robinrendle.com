---
title: In defense of webfonts
date: 2016-03-18 17:26:00 +00:00
tags:
- typography
- web fonts
- css
extract: A web font, just like any other visual stimulus, has work to accomplish and
  it has a value and a position in the designer’s toolkit which is one of the most
  effective ways to display the intent of the text. Perhaps we need to spend more
  time thinking about web fonts as web designers, we need to think about their goals,
  about their shortcomings.
City: Plymouth
Country: UK
---

Yesterday Adam Morse wrote about [webfonts](http://mrmrs.io/writing/2016/03/17/webfonts/), which, well...the gist is that webfonts are bad for usability and performance so we should effectively ditch them:

> I’ve heard a lot of arguments about why to use webfonts. In none of those arguments, have I heard about a single problem users have that is solved by using webfonts. And well, I’m only really interested in solving problems for users.

I think his arguments can be summarised into two main points which I’d like to tackle, one by one:

1. Web fonts aren’t predictable.
2. Web fonts are very expensive in time, money and resource size.


## Problem #1: Web fonts are unpredictable

Adam continues his argument:

> Typography is not about aesthetics, it’s about serving the text. If even a small percentage of people don't consume your content due to a use of webfonts, your typography is failing.

I want to move away from any argument about semantics so I won’t address what typography is or isn’t (many have done [an admirable job on that front](http://practicaltypography.com/what-is-typography.html)). As to Adam’s second point: I agree! But if a web font fails to load for whatever then that’s a relatively simple problem to solve and it has nothing to do with the font file itself.

We can smooth out the rough edges of a font request by using [the proper technique](https://css-tricks.com/loading-web-fonts-with-the-web-font-loader/); a poorly designed front-end architecture is hardly a reason to suggest we abandon web fonts altogether.

There’s another suggestion here in Adam’s argument which I might be reading a little too much into, but it appears that he argues we should use a “web-safe” or a system font because they’re more predictable. However, I would argue that there’s no such thing as a “web-safe” font. Take a look at the support for [Helvetica](http://fontfamily.io/helvetica), [Georgia](http://fontfamily.io/georgia), [Times](http://fontfamily.io/times) or heck, even the [sans-serif](http://fontfamily.io/sans-serif) keyword. If predictability is what we’re looking for then I’m afraid we’ve picked the wrong network to design things on top of.


## Problem #2: Web fonts are expensive

This is where Adam states that:

> Webfonts come with a number of costs. They cost money to license. They cost time to implement.

Sure, but how much time do we spend on other aspects of a design? On the quality of the photography, on the editing of text? On the unnecessarily large custom frameworks we build and ship? How often have we re-written code that could be copy and pasted from Bootstrap? Good design takes a certain amount of time and great design is about figuring out the best way to spend our limited resources. 

If licensing a web font is a problem, then there are plenty of [free web fonts](https://www.google.com/fonts) out there,  although personally I would avoid using them because they’re likely to not be as intricate as a licensed font.

Continuing with Adam’s post, he writes that *“fonts cost time to download, and with some mobile data plans they can cost money to download as well.”* But if we find that a web font takes too much time to download then we can set a reasonable timeout on the web font loader we’re using. Or we can subset the font by a specific language, or remove certain OpenType features. Or perhaps we can even redesign the piece of text to require less fonts altogether (although this is probably not a great solution). Or maybe we can compromise even more on the design and remove a single image, which ought to make up for the request of a font.

## The Value of a Webfont

All of these points lead to Adam’s vitriolic condemnation of web fonts as being lazy, useless things; they’re not worth the effort to implement or stress over because they have no value whatsoever. On this point I heartily disagree.

Although Adam does make some good points towards the end:

> System fonts can be beautiful.
> Webfonts are not a requirement for great typography.

I entirely agree with this sentiment and, in certain circumstances, system or “web-safe” fonts should be used instead. When we download a typeface that is almost identical to Georgia or Helvetica then there’s not much of an advantage that can be had from requesting a large font file.

With that said, I don’t believe that all of human experience can be elegantly communicated via Helvetica, Times, Georgia, or San Francisco. And when I read that “typography is not about aesthetics” then I sigh deeply, heavily and come to the conclusion that 1. yes it is and 2. aesthetics *is* a problem for the reader. The more ugliness that is pressed upon us, the more lazy we become. Beauty, legibility, subtlety, these are the qualities that are possible with the help of web fonts and without them we are left with a dismal landscape devoid of visual grace or wit.

The [text is more important than the font](https://robinrendle.com/essays/new-web-typography/), but an unusual letter form adds a value which is difficult to quantify with words alone. If we’re requesting something like Proxima Nova then sure, I feel that the designer has made an error of sorts because that typeface has been used so frequently as to be bland, it registers not a single emotion from the reader. But what about other letters? Are we truly naive enough to believe that everything can be said with such unnecessary restrictions to our typographic palette? What are letterforms truly capable of?

![Image of text set in SignPainter by House Industries](/uploads/oldsmobile.png)

What is the value of one shape over another? How can they draw us into the information? How can they help shine a light on the differences between an old car model built for a certain age and a modern film that finds its inspiration in the offbeat kilter of jazz?

<svg width="506" height="110" viewBox="0 0 506 110" xmlns="http://www.w3.org/2000/svg"><title>BIRDMAN</title><path d="M31.4 110c20.4 0 29.85-12 29.85-28.35 0-10.35-6.3-19.65-14.7-22.35v-.75c4.65-2.4 12.9-9.6 12.9-22.5 0-13.05-9-25.5-30.15-25.5H.5V110h30.9zm-2.85-40.35c5.85 0 8.7 3.75 8.7 9.45 0 5.25-2.85 9-8.25 9h-4.65V69.65h4.2zm-4.2-36.9h3.9c5.4 0 7.95 3 7.95 8.55 0 5.4-2.7 8.7-8.7 8.7h-3.15V32.75zM73.1 110h24V10.55h-24V110zM72.95 4.1h24.3V.35h-24.3V4.1zM136.7 110V72.65h4.2c6 0 8.1 3.3 8.1 9.9V110h24V81.95c0-14.25-7.35-20.4-14.25-22.35V59c6.3-3.6 13.2-10.95 13.2-22.2 0-12.9-7.2-26.25-30.3-26.25H112.7V110h24zm0-78.15h3.9c5.4 0 7.95 3 7.95 9s-2.4 10.2-8.4 10.2h-3.45v-19.2zM185.15 110h22.8c24.15 0 36.75-7.65 36.75-36.45V47c0-28.8-12.6-36.45-36.75-36.45h-22.8V110zm35.4-33.3c0 6.75-2.55 9.15-8.1 9.15h-3.3V34.7h3.3c5.55 0 8.1 2.25 8.1 9.15V76.7zM294.2 110h17.25l12.75-56.7h.9V110h22.5V10.55h-30.3L303.2 63.2h-.9l-13.95-52.65h-30.3V110h22.5V53.3h.9L294.2 110zm62.1 0h23.85l3.45-18.45h18.75L405.8 110h24.6l-22.8-99.45h-27.9L356.3 110zm37.35-69.45l4.95 30.15h-10.95l5.1-30.15h.9zM481.1 110h24.3V10.55h-22.2V56.9h-.9l-17.85-46.35H439.1V110h22.35V58.7h.9L481.1 110z" fill="#57B78C" fill-rule="evenodd"/></svg>

A web font, just like any other visual stimulus, has work to accomplish. It does have a value and a position in the designer’s toolkit because a web font is one of the most effective ways to display the intent of the text. 

Perhaps we need to spend more time thinking about font files as web designers and we need to think about their goals, about their shortcomings. 

And then we need to go to work and fix them.