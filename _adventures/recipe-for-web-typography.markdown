---
title: A Recipe for Setting Type
date: 2016-11-05 15:09:00 -07:00
Country: CA
City: San Francisco
---

I’m thinking of a simple set of instructions, like a guidebook or an illustration, that details how to make a website with accessible and engaging typography. I’m thinking beyond tips or tricks such as “use this typeface,” instead I want something along the lines of a cook book: *‘Here are the ingredients you need’* says the chef, ‘*but feel free to experiment and learn with these rules in mind.*’

So, what would a recipe for good typography on the web look like?

The answer to that question is always going to be a rather complex and long-winded one, but I think there are a few simple relationships at work here. Just like a fire that requires heat, fuel and oxygen, there are three components that a paragraph of text requires, with each component dependent on and influencing the others: `line-height`, `font-size`, and the `max-width` CSS properties. 

We can argue about which typeface might be the best in this case or that, however for a while now I’ve believed that discussions involving the correct mixture of these three ingredients are far more lucrative and useful for the reader.

On this note, a while back [Tim Brown](https://twitter.com/nicewebtype) mentioned that in web typography there can be a certain amount of *pressure* applied to a block of text for various reasons. For example, the width of a component will change due to the width of the viewport or device, however the other properties, such as line-height and font-size, can’t really adapt to this change without requiring us to write a lot more CSS.

There’s a natural bond here, between these relationships, that’s mostly being ignored when it comes to web development and I think the difficulty lies in the design of CSS itself. Since we don’t have [element queries](https://www.smashingmagazine.com/2013/06/media-queries-are-not-the-answer-element-query-polyfill/) just yet we have to sort of guess which is the least-worst combination of these three properties or we have to customise each element by hand, with a million media queries inside to help us ease that pressure.

But now that an interest in responsive typography has serious traction in the community with variable fonts, I’d like to see a simpler approach to ensuring that this relationship isn’t ever under too much pressure.

Anyway, that’s what I’ve been thinking for the last week as I design a new typography framework for our team: how do I make that relationship obvious and easy to apply to a specific view? How can we ensure a clear system in CSS that provides just enough flexibility without being too demanding and obtuse for everyone?
 

## New Type Releases

The Frere-Jones foundry announced [Retina](https://frerejones.com/families/retina) a short while ago which comes in two styles: Standard and the horrifying, Frankenstein-esque MicroPlus:

![Screenshot 2016-11-05 15.15.20.png](/uploads/Screenshot%202016-11-05%2015.15.20.png)

Retina’s MicroPlus sizes are designed for smaller bits of text and once you start looking closely, it’s here that things start to get interesting and beautiful. From the specimen site:

> Retina MicroPlus uses exaggerated proportions and details to preserve the identity of each letter and word. Deep-cut notches absorb ink in print and further reinforce the gesture of each shape, on screens as well as paper.

This work is the result of years of careful research into setting type for small print sizes. Here’s how it works: when the MicroPlus series of letterforms are riddled with grooves and freakish bends in the shapes but when you scale the letters down to small sizes those irregularities disappear:

![retina-fd8689.gif](/uploads/retina-fd8689.gif)

And, as [Tim described in more detail](http://blog.typekit.com/2016/10/05/retina-from-frere-jones-type-available-to-host-on-typekit/), Retina can now be licensed for use with Typekit, too. More on this in a bit.

***

A couple of weeks ago there was an awful lot of talk about [Noto](https://fonts.google.com/specimen/Noto+Sans) and its companion [Noto Serif](https://fonts.google.com/specimen/Noto+Serif). This is an ongoing project by both Monotype and Google, but on the surface of things not much seems to be going on in terms of pure eye-candy:

![Screenshot 2016-11-05 15.20.34.png](/uploads/Screenshot%202016-11-05%2015.20.34.png)

If I were to imagine what sort of typeface would be created in a boardroom then Noto would be the first image to be conjured. I see many previous designs buried within and so I can’t help but think of Stephen Coles’ rant on the [Frankenfont](http://typographica.org/on-typography/roboto-typeface-is-a-four-headed-frankenstein/) when I think of Noto.

However, the Noto project wasn’t intended to make a beautiful typeface at all. Instead, the goal was to make a collection of typefaces that can fully support every language on Earth:

> When text is rendered by a computer, sometimes characters are displayed as “tofu”. They are little boxes to indicate your device doesn’t have a font to display the text.
> 
> Google has been developing a font family called Noto, which aims to support all languages with a harmonious look and feel. Noto is Google’s answer to tofu. The name noto is to convey the idea that Google’s goal is to see “no more tofu”. Noto has multiple styles and weights, and is freely available to all.

Commonly, many typefaces only support a tiny fraction of the more than six thousand languages that are spoken today and so this is a gift to those that can speak a language that is not fully representing their culture. And it’s important to remember that the most important goal of text is to be read, first and foremost, rather than it just be pleasing to us armchair typographers.

The team made a cute video that describes the design process and challenge that lay ahead of them:

<div class="preserve-aspect">
    <iframe class="preserve-aspect__element" src="https://player.vimeo.com/video/185700918" frameborder="0" allowfullscreen></iframe>
</div>

***

The Department of Typography and Graphic Communication at the University of Reading’s have updated their website with [work from the type design class of 2016](http://typefacedesign.net/typefaces/year/2016/) and oh boy oh boy oh boy. 

That’s 14 new typefaces to gawk at all at once:

![ikkatmultilingual-1024x470.png](/uploads/ikkatmultilingual-1024x470.png)

<small>Above: Ikkat by Rob Pratley</small>

Look at the italics of [Byron](http://typefacedesign.net/typefaces/year/2016/byron/) or [Marjolein](http://typefacedesign.net/typefaces/year/2016/marjolein/): 

![Byron8-1024x1024.png](/uploads/Byron8-1024x1024.png)

Or gasp and wonder at the Arabic glyphs of [Labiba](http://typefacedesign.net/typefaces/year/2016/dialogue/) and [Jali](http://typefacedesign.net/typefaces/year/2016/jali/). Or take a look at the Greek forms in [Amikal](http://typefacedesign.net/typefaces/year/2016/amikal/), the Latin, Sinhala and Tamil shapes in [Maname](http://typefacedesign.net/typefaces/year/2016/maname/):

![maname.jpg](/uploads/maname.jpg)
<small>Above: Maname by Pathum Egodawatta</small>

***

Victoria Rushton just published [Embury Text](https://store.typenetwork.com/foundry/victoriarushton/fonts/embury-text): 

[Embury_R_Nepotism.svg](/uploads/Embury_R_Nepotism.svg)

[Victoria also wrote about her process](http://victoriarushton.typenetwork.com/news/article/embury-text) and wonderfully walks through the design:

> Part of what formed Embury is that I had aspired to make a text face before, but didn’t make it text-face-like enough—tall enough x-height, simple enough serifs, wide open counters—to work. So I was determined to do that this time, and the pendulum swung to super sturdiness; very wide with very high x-heights and fairly tall small caps. There would be no mistaking, by myself or by you, that this could be used small for reading.

I can’t wait to use Embury in an upcoming project.

***

I’m not sure if this is a recent release, but OhNo Type has published [Vulf Mono](http://www.ohnotype.co/product/vulf-mono), designed specifically for the band [Vulfpeck](http://vulfpeck.com/).

![1-UsrpdcQ-z1KyFfVHOhKlLg.png](/uploads/1-UsrpdcQ-z1KyFfVHOhKlLg.png)

The designer James Edmondson wrote about the story behind the type family and [the whole design process](https://medium.com/art-marketing/the-process-of-vulf-mono-e29b3971a014#.lph6d6aci). It’s lovely to hear that James worked on constructing musical dingbats in all four weights for the occasion, too.

![1-lla9QqswCfRpc1GLqLa7HQ.png](/uploads/1-lla9QqswCfRpc1GLqLa7HQ.png)

As a side note, I kinda think of Vulf Mono as [Nitti’s](https://www.boldmonday.com/typeface/nitti/) cooler, weirder step brother.

***

Commercial Type published [Robinson](https://commercialtype.com/catalog/robinson/) by Greg Gazdowicz: 

![Screenshot 2016-11-05 15.36.11.png](/uploads/Screenshot%202016-11-05%2015.36.11.png)

From the specimen page:

> Robinson is evocative of American book cover lettering from the middle of the 20th century while feeling cleanly contemporary. The romans are plainspoken, with proportions more typical of a grotesque than written forms. The italics show a more explicit connection to calligraphy, but have the same dry and stripped down approach to details seen in the romans.

***

[Sharp Grotesk](https://sharptype.co/typefaces/sharp-grotesk/) by the [Sharp Type](https://sharptype.co/about-us/) foundry is loud and boisterous, full of bold forms with a striking lack of white space between each character:

![Screenshot 2016-11-05 16.16.36.png](/uploads/Screenshot%202016-11-05%2016.16.36.png)

***

The website for the [GT America typeface](http://gt-america.com/) is one of the most beautiful type specimen sites I’ve ever seen. In fact, it’s such a good website that it’s a little difficult to appreciate the type it’s trying to sell:

![Screenshot 2016-11-05 16.25.01.png](/uploads/Screenshot%202016-11-05%2016.25.01.png)

***

R-Typography, the type foundry by Rui Abreu, released [Pathos](http://r-typography.com/12_pathos/): 

> Pathos is a robust slab serif typeface that follows a simple design idea - to make serifs as large as possible. Because there are obvious limits to how much serifs can grow, for instance the space available between and inside letters, Pathos’ huge serifs test the physical limits to their size.

![Screenshot 2016-11-05 16.33.37.png](/uploads/Screenshot%202016-11-05%2016.33.37.png)

***

In early October Hoefler & Co. announced [Chronicle Hairline](http://www.typography.com/blog/introducing-chronicle-hairline):

> To offer designers a new voice to work with, we’ve taken our Chronicle Display family, a smart and newsy design in the ‘Scotch’ style, and extended it into this new collection of bright and graceful typefaces for creating grand, expressive, and picturesque typography.

![chronicle_hairline_specimen4.png](/uploads/chronicle_hairline_specimen4.png)

***

And last but certainly not least, type designer CJ Dunn released [Dunbar](http://cjtype.com/dunbar/):

![Screenshot 2016-11-05 16.44.48.png](/uploads/Screenshot%202016-11-05%2016.44.48.png)

Dunbar’s stylistic alternates are worth looking at, particularly for their cuteness:

[alt_dieresis-01.svg](/uploads/alt_dieresis-01.svg)








