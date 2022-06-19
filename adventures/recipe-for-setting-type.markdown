---
layout: layouts/note.njk
title: A Recipe for Setting Type
date: 2016-11-05 15:09:00 -07:00
Country: CA
City: San Francisco
tags:
  - typography
---

I’m thinking of a simple set of instructions, like a guidebook or an illustration, that details how to make a website with accessible and engaging typography. I’m thinking beyond tips or tricks such as “use this typeface,” instead I want something along the lines of a cook book: _‘Here are the ingredients you need’_ says the chef, ‘_but feel free to experiment and learn with these rules in mind._’

So, what would a recipe for good typography on the web look like?

The answer to that question is always going to be a rather complex and long-winded one, but I think there are a few simple relationships at work here. Just like a fire that requires heat, fuel and oxygen, there are three components that a paragraph of text requires, with each component dependent on and influencing the others: `line-height`, `font-size`, and the `max-width` CSS properties.

We can argue about which typeface might be the best in this case or that, yet for a while now I’ve believed that discussions involving the correct mixture of these three ingredients are far more lucrative and useful for the reader.

On this note, [Tim Brown](https://twitter.com/nicewebtype) mentioned a while back that in web typography there can be a certain amount of _pressure_ applied to a block of text for various reasons. For example, the width of a component will change due to the width of the viewport or device, however the other properties, such as line-height and font-size, can’t really adapt to this change without requiring us to write a lot more CSS.

There’s a natural bond here, between these relationships, that’s mostly being ignored when it comes to web development and I think the difficulty lies in the design of CSS itself. Since we don’t have [element queries](https://www.smashingmagazine.com/2013/06/media-queries-are-not-the-answer-element-query-polyfill/) just yet we have to sort of guess which is the least-worst combination of these three properties or we have to customise each element by hand, with a million media queries inside to help us ease that pressure.

But now that an interest in responsive typography has serious traction in the community with variable fonts, I’d like to see a simpler approach to ensuring that this relationship isn’t ever under too much pressure.

Anyway, that’s what I’ve been thinking for the last week as I design a new typography framework for our team: how do I make that relationship obvious and easy to apply to a specific view? How can we ensure a clear system in CSS that provides just enough flexibility without being too demanding and obtuse for everyone?

## New Type Releases

The Frere-Jones foundry announced [Retina](https://frerejones.com/families/retina) a short while ago which comes in two styles: Standard and the horrifying, Frankenstein-esque MicroPlus:

![Screenshot 2016-11-05 15.15.20.png](/uploads/Screenshot%202016-11-05%2015.15.20.png)

Retina’s MicroPlus sizes are designed for smaller bits of text and once you start looking closely, it’s here that things start to get interesting and beautiful. From the specimen site:

> Retina MicroPlus uses exaggerated proportions and details to preserve the identity of each letter and word. Deep-cut notches absorb ink in print and further reinforce the gesture of each shape, on screens as well as paper.

This work is the result of years of careful research into setting type for small print sizes. But here’s how it works: because the MicroPlus series of letterforms are riddled with grooves and freakish bends in the shapes our eyes will fill in the gaps when you scale those letters down to small sizes. Suddenly those irregularities disappear:

![retina-fd8689.gif](/uploads/retina-fd8689.gif)

And, as [Tim described in more detail](http://blog.typekit.com/2016/10/05/retina-from-frere-jones-type-available-to-host-on-typekit/), Retina can now be licensed for use with Typekit, too. More on this in a bit.

---

A couple of weeks ago there was an awful lot of talk about [Noto](https://fonts.google.com/specimen/Noto+Sans) and its companion [Noto Serif](https://fonts.google.com/specimen/Noto+Serif). This is an ongoing project by both Monotype and Google, but on the surface of things not much seems to be going on in terms of pure eye-candy:

![Screenshot 2016-11-05 15.20.34.png](/uploads/Screenshot%202016-11-05%2015.20.34.png)

If I were to imagine what sort of typeface would be created in a boardroom then Noto would be the first image to be conjured. I see many previous designs buried within and so I can’t help but think of Stephen Coles’ rant on the [Frankenfont](http://typographica.org/on-typography/roboto-typeface-is-a-four-headed-frankenstein/) when I think of Noto.

However, the Noto project wasn’t intended to make a beautiful typeface at all. Instead, the goal was to make a collection of typefaces that can fully support every language on Earth:

> When text is rendered by a computer, sometimes characters are displayed as “tofu”. They are little boxes to indicate your device doesn’t have a font to display the text.
>
> Google has been developing a font family called Noto, which aims to support all languages with a harmonious look and feel. Noto is Google’s answer to tofu. The name noto is to convey the idea that Google’s goal is to see “no more tofu”. Noto has multiple styles and weights, and is freely available to all.

Commonly, many typefaces only support a tiny fraction of the more than six thousand languages that are spoken today. And it’s important to remember that the most important goal of text is to be read, first and foremost, rather than it just be pleasing to us armchair typographers.

The team made a cute video that describes the design process and challenges that lay ahead of them:

<div class="preserve-aspect">
    <iframe class="preserve-aspect__element" src="https://player.vimeo.com/video/185700918" frameborder="0" allowfullscreen></iframe>
</div>

---

The Department of Typography and Graphic Communication at the University of Reading has updated their website with [work from the type design class of 2016](http://typefacedesign.net/typefaces/year/2016/) and oh boy oh boy oh boy.

That’s 14 new typefaces to gawk at all at once:

<figure>
  <img src='/images/ikkatmultilingual-1024x470.png' />
</figure>

Look at the italics of [Byron](http://typefacedesign.net/typefaces/year/2016/byron/) or [Marjolein](http://typefacedesign.net/typefaces/year/2016/marjolein/):

<figure>
  <img src='/uploads/Byron8-1024x1024.png'/>
</figure>

Or gasp and wonder at the Arabic glyphs of [Labiba](http://typefacedesign.net/typefaces/year/2016/dialogue/) and [Jali](http://typefacedesign.net/typefaces/year/2016/jali/). Or take a look at the Greek forms in [Amikal](http://typefacedesign.net/typefaces/year/2016/amikal/), the Latin, Sinhala and Tamil shapes in [Maname](http://typefacedesign.net/typefaces/year/2016/maname/):

<figure>
  <img src='/uploads/maname.jpg' />
</figure>

---

Over on the TypeNetwork, Victoria Rushton just published [Embury Text](https://store.typenetwork.com/foundry/victoriarushton/fonts/embury-text), which is a beautiful text face:

<figure>
<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1359.25 326.02">
  <defs>
    <style>.cls-1{fill:#fffbee;}.cls-2{fill:#fdee91;}</style>
  </defs>
  <title>Embury_Lede</title>
    <rect class="cls-1" width="1358.42" height="326.02"/>
      <g id="text">
      <circle class="cls-2" cx="894.72" cy="220.39" r="31.74"/>
      <circle class="cls-2" cx="1287.54" cy="220.39" r="31.74"/>
      <circle class="cls-2" cx="1036.26" cy="125.8" r="31.74"/>
      <path d="M119.18,237.24H48.85v-13l20.49-5.28V125.61L48.85,113.73v-15L93.16,96l4.15,37.65c13.58-24.39,34.88-38.78,57.32-38.78,20.49,0,37.08,11.06,37.08,37.65v86.11l19.67,5.53v13h-70V224.23l20.49-5.28V137.55c0-15-3.33-18.86-13.83-19.11-27.15-.57-48.71,23.82-48.71,60.09V218.7l19.92,5.53-.06,13Z"/><path d="M293.41,240.25c-33.81,0-65.05-23.82-65.05-64,0-48.71,36.58-81.71,75.3-81.71,31.55,0,53.74,30.17,53.74,66.18a59.24,59.24,0,0,1-.57,10H260.16c1.95,30.73,20.49,45.13,45.13,45.13,11.88,0,26.84-4.71,37.08-16.59l10.5,8.86C340.48,230,318.3,240.25,293.41,240.25Zm-33-85.54,63.42-1.13c-2.51-32.93-21.31-42.93-33.81-42.93a16.94,16.94,0,0,0-9.43,2.77C271.54,119,262.67,133.66,260.41,154.71Z"/><path d="M452.36,294H379V281.23l21.31-5.85v-150l-20.49-11.63v-15l44.06-3,5,40.16c10.24-23.57,29.92-41,49.59-41,29.35,0,54.81,28.53,54.81,68.95,0,44.88-31.3,76.18-70.9,76.18-12.76,0-24.39-2.51-32.43-5.85v41l22.44,6.1.06,12.7Zm47.08-119.61c0-38-13-57.32-26.59-57.32-21.06,0-42.93,28.22-42.93,77.56v12.76c8,9.43,24.39,14.71,35.45,14.71C490,222,499.44,203.74,499.44,174.38Z"/><path d="M556.76,174.64c0-47.08,31.87-79.51,74.79-79.51,31.3,0,65.37,25,65.37,66.18,0,48.21-32.93,79.19-75,79.19C586.36,240.57,556.76,211.22,556.76,174.64Zm33.19-11.38c0,36,19.11,59,42.36,59,15.52,0,31-10.81,31-46.51,0-38-16.09-62.6-41.55-62.6C604.4,113.17,589.95,129.51,589.95,163.26Z"/><path d="M755,240.25c-23.57,0-35.2-13.26-28-38.21l25.77-86.11H720.93l5.28-16.34,29.6-7.23,23-37.4h21.87L787.93,98.14h40.73l-5.28,17.72H783l-27.15,92.2c-2.51,8.3-.57,10.81,6.91,10.81,13.26,0,26.59-4.4,36.83-8.86l5.85,11.88C794.59,229.76,775.8,240.25,755,240.25Z"/><path d="M840,210.9,864.67,125l-22.12-11.38,4.4-15,55.94-3-35.2,121.87a132.28,132.28,0,0,0,33.5-8.61c3.58,22.44-20.74,31-34.32,31C845,240,835.07,228.06,840,210.9ZM918.41,49.75c0,14.14-12.44,25.2-25,25.2-10.24,0-18.54-6.35-18.54-18,0-14.14,13.26-25,25.77-25C910.93,32,918.41,39.25,918.41,49.75Z"/><path d="M919.8,211.47c-.25-11.06,8.61-18.29,19.36-21.62,7.48,22.12,24.39,34.63,42.93,34.63,10.5,0,19.36-6.91,19.36-18.86,0-16.34-22.69-25-36.83-35.7-11.06-8.3-19.11-17.16-19.11-30.17,0-28.22,29.1-45.44,62-45.44,24.64,0,39,10,39.35,19.92s-8,18-20.24,21.62c-9.11-16.91-24.39-25.46-37.65-25.46a16,16,0,0,0-15.78,16.09c0,15.78,22.44,24.64,34.32,33.25,13.58,9.43,24.07,19.11,24.07,34.63,0,30.17-33.81,45.95-62,45.95C934.75,240.25,920,226.68,919.8,211.47Z"/><path d="M1236,210.9l22.12-77.56c3.58-11.88,1.38-15.52-7.73-15.52-22.12,0-47.08,21.31-61.47,70.65l-14.14,48.71H1144.3l30.17-103.83c3.58-11.88,1.63-15.52-7.73-15.52-23,0-47.33,23.82-62.6,76.68l-12.19,42.68h-30.48l33.25-111.88-22.44-11.63,4.71-15,46.51-2.51-5,40.73c20.49-30.73,37.65-41.55,57.89-41.55,18.86,0,31.87,12.76,27.72,37.08,18.86-26.84,34.88-37.08,55.12-37.08,20.74,0,35.7,15.21,27.72,42.68l-23,79.51c17.72-2.51,26.84-5.85,34.07-8.61,3.58,22.44-20.74,31-34.32,31C1242.1,240,1231,228.06,1236,210.9Z"/>
      <polygon class="cls-2" points="118.81 92.93 161.36 49.56 197.18 98.58 157.14 84.25 118.81 92.93"/>
      <polygon class="cls-2" points="111.07 161.19 148.72 135.16 145.45 181.3 131.63 165.52 111.07 161.19"/>
      <polygon class="cls-2" points="473.1 81.11 531.81 65.27 537.78 125.8 510.56 93.12 473.1 81.11"/>
      <polygon class="cls-2" points="441.8 168.66 471.78 127.62 485.17 177.15 464.93 165.71 441.8 168.66"/>
    </g>
  </svg>
</figure>

In a wonderful [write up about her process](http://victoriarushton.typenetwork.com/news/article/embury-text), Victoria also walks through the design:

> Part of what formed Embury is that I had aspired to make a text face before, but didn’t make it text-face-like enough—tall enough x-height, simple enough serifs, wide open counters—to work. So I was determined to do that this time, and the pendulum swung to super sturdiness; very wide with very high x-heights and fairly tall small caps. There would be no mistaking, by myself or by you, that this could be used small for reading.

I can’t wait to use Embury in an upcoming project.

---

I’m not sure if this is a recent release, but OhNo Type has published [Vulf Mono](http://www.ohnotype.co/product/vulf-mono), designed specifically for the band [Vulfpeck](http://vulfpeck.com/).

![1-UsrpdcQ-z1KyFfVHOhKlLg.png](/images/1-UsrpdcQ-z1KyFfVHOhKlLg.png)

The designer James Edmondson wrote about the story behind the type family and [the whole design process](https://medium.com/art-marketing/the-process-of-vulf-mono-e29b3971a014#.lph6d6aci). It’s lovely to hear that James worked on constructing musical dingbats in all four weights for the occasion, too.

![1-lla9QqswCfRpc1GLqLa7HQ.png](/images/1-lla9QqswCfRpc1GLqLa7HQ.png)

As a side note, I kinda think of Vulf Mono as [Nitti’s](https://www.boldmonday.com/typeface/nitti/) cooler, weirder step brother.

---

The Commercial Type foundry published [Robinson](https://commercialtype.com/catalog/robinson/) by Greg Gazdowicz and I particularly adore the italics:

![Screenshot 2016-11-05 15.36.11.png](/images/Screenshot%202016-11-05%2015.36.11.png)

From the specimen page:

> Robinson is evocative of American book cover lettering from the middle of the 20th century while feeling cleanly contemporary. The romans are plainspoken, with proportions more typical of a grotesque than written forms. The italics show a more explicit connection to calligraphy, but have the same dry and stripped down approach to details seen in the romans.

---

[Sharp Grotesk](https://sharptype.co/typefaces/sharp-grotesk/) by the [Sharp Type](https://sharptype.co/about-us/) foundry was released a couple of weeks ago and it’s just as loud and boisterous as a grotesk ought to be, full of bold forms with a striking lack of white space between each character:

![Screenshot 2016-11-05 16.16.36.png](/images/Screenshot%202016-11-05%2016.16.36.png)

---

Speaking of grotesks, the website for the [GT America typeface](http://gt-america.com/) is one of the most beautiful type specimens I’ve ever seen. In fact, it’s such a good website that it’s a little difficult to appreciate the type it’s trying to sell.

![Screenshot 2016-11-05 16.25.01.png](/images/Screenshot%202016-11-05%2016.25.01.png)

---

R-Typography, the type foundry by Rui Abreu, released [Pathos](http://r-typography.com/12_pathos/):

> Pathos is a robust slab serif typeface that follows a simple design idea - to make serifs as large as possible. Because there are obvious limits to how much serifs can grow, for instance the space available between and inside letters, Pathos’ huge serifs test the physical limits to their size.

![Screenshot 2016-11-05 16.33.37.png](/images/Screenshot%202016-11-05%2016.33.37.png)

---

In early October Hoefler & Co. announced [Chronicle Hairline](http://www.typography.com/blog/introducing-chronicle-hairline):

> To offer designers a new voice to work with, we’ve taken our Chronicle Display family, a smart and newsy design in the ‘Scotch’ style, and extended it into this new collection of bright and graceful typefaces for creating grand, expressive, and picturesque typography.

![chronicle_hairline_specimen4.png](/images/chronicle_hairline_specimen4.png)

---

And last but not least, type designer CJ Dunn released [Dunbar](http://cjtype.com/dunbar/), a geometric sans. It comes in two styles: Tall and Low, with the height of the descenders changing in relation to the capital letters depending on your needs:

![Screenshot 2016-11-05 16.44.48.png](/images/Screenshot%202016-11-05%2016.44.48.png)

Dunbar’s stylistic alternates are certainly worth looking at too since I find them strangely cute:

<figure>
<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 661.78 313.07"><defs><style>.cls-1{fill:#231f20;}.cls-2{fill:#a7a9ac;}.cls-3{fill:#f1573a;}</style></defs><title>alt_dieresis_unoutlined_v3</title><path class="cls-1" d="M3.48,59.44H14c10.17,0,19.59,6.18,19.59,18.83,0,12.81-9.31,18.93-19.54,18.93H3.48V59.44Zm7.24,31.23h3.54c6.38,0,12.1-4.15,12.1-12.4S20.64,66,14.26,66H10.72v24.7Z"/><path class="cls-2" d="M77.88,78.27c0,11.13-9.16,20.14-20.8,20.14s-20.8-9-20.8-20.14,9.11-20,20.8-20S77.88,67.19,77.88,78.27Zm-34.32,0A13.51,13.51,0,1,0,57.08,64.86,13.54,13.54,0,0,0,43.56,78.27ZM54.5,56.36H48.27V51H54.5v5.36Zm11.39,0H59.66V51h6.23v5.36Z"/><path class="cls-1" d="M88.81,71.59V97.2H81.57V59.44h7.14L107,84.9V59.44h7.24V97.2h-7Z"/><path class="cls-1" d="M119.23,59.44h20.65v6.38H126.46v8.86h12.2V80.6h-12.2V90.82h13.82V97.2H119.23V59.44Z"/><path class="cls-1" d="M152.53,83.38H152V97.2h-7.24V59.44h9.82c7.74,0,13.92,3.39,13.92,12,0,5.42-3.54,9.06-8,10.78L172.27,97.2h-8.76ZM152,65.92V77.51h2.68c4,0,6.63-2.33,6.63-5.92,0-3.39-2.33-5.67-6.58-5.67H152Z"/><path class="cls-3" d="M196.86,91.94v-0.4l11.08-11H182.54V73.62h25.41l-11.08-11v-0.4h8.76L220.15,76.7v0.71L205.62,91.94h-8.76Z"/><path class="cls-1" d="M233.76,59.44h10.53c10.17,0,19.59,6.18,19.59,18.83,0,12.81-9.31,18.93-19.54,18.93H233.76V59.44ZM241,90.67h3.54c6.38,0,12.1-4.15,12.1-12.4S250.92,66,244.54,66H241v24.7Z"/><path class="cls-1" d="M287.36,98.42c-11.69,0-20.8-9-20.8-20.14a19.64,19.64,0,0,1,4.76-12.86h-4v-6h6.88v3.24a21.65,21.65,0,0,1,26.37.05V59.44h6.88v6h-4.1a19.42,19.42,0,0,1,4.81,12.86C308.16,89.41,299,98.42,287.36,98.42ZM273.84,78.27a13.51,13.51,0,1,0,13.51-13.41A13.54,13.54,0,0,0,273.84,78.27Z"/><path class="cls-1" d="M319.09,71.59V97.2h-7.24V59.44H319L337.31,84.9V59.44h7.24V97.2h-7Z"/><path class="cls-1" d="M349.51,59.44h20.65v6.38H356.74v8.86h12.2V80.6h-12.2V90.82h13.82V97.2H349.51V59.44Z"/><path class="cls-1" d="M382.81,83.38H382.3V97.2h-7.24V59.44h9.82c7.74,0,13.92,3.39,13.92,12,0,5.42-3.54,9.06-8,10.78L402.55,97.2h-8.76ZM382.3,65.92V77.51H385c4,0,6.63-2.33,6.63-5.92,0-3.39-2.33-5.67-6.58-5.67H382.3Z"/><path class="cls-1" d="M20.94,231.79a10.93,10.93,0,0,0-6-2.18c-3.34,0-4.61,1.62-4.61,3.29,0,2.23,1.87,3.75,5.82,7,6.28,5.26,8.45,8.5,8.45,12.45,0,6.48-5.52,10.38-12.55,10.38a22.12,22.12,0,0,1-10.48-2.83l2.73-5.67a15.65,15.65,0,0,0,7.79,2.53c3.39,0,5.16-2.07,5.16-4.2,0-2.33-1.87-4.25-6.12-7.74-6-5-8.3-7.54-8.3-11.89,0-4.76,3.69-9.31,12-9.31a19,19,0,0,1,8.86,2.48Z"/><path class="cls-1" d="M35.62,248.75v13.41H28.38V224.4H38.71c8,0,14.27,2.78,14.32,12.2-0.05,8.5-7.39,12.15-14.53,12.15H35.62Zm0-17.87v11.49h3.59c3.95,0,6.63-2.18,6.63-5.77-0.05-3.44-1.92-5.72-6.63-5.72H35.62Z"/><path class="cls-2" d="M76.87,255.63H60.11l-2.48,6.53H50.14L65,224.4h7.19l14.88,37.76H79.3ZM65.93,221.31H59.71v-5.37h6.23v5.37Zm2.58,11.94-6.23,16.55h12.4Zm8.81-11.94H71.1v-5.37h6.23v5.37Z"/><path class="cls-1" d="M91.9,230.88H85.27V224.4h20.5v6.48H99.14v31.28H91.9V230.88Z"/><path class="cls-1" d="M106.37,262.16l-0.15-.86,18.17-30.67H108.5l2.73-6.23h24.35l0.15,0.91-18.27,30.62h19.28l-2.58,6.23H106.37Z"/><path class="cls-1" d="M147,224.4v31.23h13.21v6.53H139.78V224.4H147Z"/><path class="cls-1" d="M163.41,224.4h20.65v6.38H170.65v8.86h12.2v5.92h-12.2v10.22h13.82v6.38H163.41V224.4Z"/><path class="cls-3" d="M210.58,256.89v-0.4l11.08-11H196.26v-6.88h25.41l-11.08-11v-0.41h8.76l14.53,14.53v0.71l-14.53,14.53h-8.76Z"/><path class="cls-1" d="M264.94,231.79a10.93,10.93,0,0,0-6-2.18c-3.34,0-4.61,1.62-4.61,3.29,0,2.23,1.87,3.75,5.82,7,6.28,5.26,8.45,8.5,8.45,12.45,0,6.48-5.52,10.38-12.55,10.38a22.12,22.12,0,0,1-10.48-2.83l2.73-5.67a15.65,15.65,0,0,0,7.79,2.53c3.39,0,5.16-2.07,5.16-4.2,0-2.33-1.87-4.25-6.12-7.74-6-5-8.3-7.54-8.3-11.89,0-4.76,3.69-9.31,12-9.31a19,19,0,0,1,8.86,2.48Z"/><path class="cls-1" d="M279.61,248.75v13.41h-7.24V224.4H282.7c8,0,14.27,2.78,14.32,12.2-0.05,8.5-7.39,12.15-14.53,12.15h-2.88Zm0-17.87v11.49h3.59c3.95,0,6.63-2.18,6.63-5.77-0.05-3.44-1.92-5.72-6.63-5.72h-3.59Z"/><path class="cls-1" d="M320.86,255.63H304.11l-2.48,6.53h-7.49L309,224.4h7.19l14.88,37.76h-7.79Zm-15.34-25.26h-7v-6h7v6Zm7,2.88-6.23,16.55h12.4Zm14.17-2.88H319.6v-6h7.09v6Z"/><path class="cls-1" d="M335.89,230.88h-6.63V224.4h20.5v6.48h-6.63v31.28h-7.24V230.88Z"/><path class="cls-1" d="M350.37,262.16l-0.15-.86,18.17-30.67H352.49l2.73-6.23h24.34l0.15,0.91-18.27,30.62h19.28l-2.58,6.23H350.37Z"/><path class="cls-1" d="M391,224.4v31.23h13.21v6.53H383.77V224.4H391Z"/><path class="cls-1" d="M407.41,224.4h20.65v6.38H414.64v8.86h12.2v5.92h-12.2v10.22h13.82v6.38H407.41V224.4Z"/><path class="cls-1" d="M3.48,180V142.2H15.37C24,142.2,27,146.5,27,151.92a9.76,9.76,0,0,1-4.61,8.1,10.61,10.61,0,0,1,6.07,9.67c0,5.21-3.64,10.27-12,10.27h-13Zm7.24-31.89V158h2.94c4.25,0,6.73-2.08,6.73-5.16,0-2.78-1.52-4.76-6.53-4.76H10.72Zm0,15.13v10.88h3.75c5.16,0,6.68-2.43,6.68-5.26,0-3.49-2.48-5.62-6.83-5.62H10.72Z"/><path class="cls-1" d="M32.38,142.2h7.24V180H32.38V142.2Z"/><path class="cls-1" d="M44.63,142.2H65.28v6.38H51.86v8.86h12.2v5.92H51.86v10.22H65.68V180H44.63V142.2Z"/><path class="cls-1" d="M77.93,166.14H77.42V180H70.18V142.2H80c7.74,0,13.92,3.39,13.92,12,0,5.42-3.54,9.06-8,10.78L97.67,180H88.91Zm-0.51-17.46v11.59H80.1c4,0,6.63-2.33,6.63-5.92,0-3.39-2.33-5.67-6.58-5.67H77.42Z"/><path class="cls-1" d="M121.15,153.43L113.71,180h-6.93L95.95,142.2h7.59l7.24,27.13L118,142.2h6.58l7.19,27.13L139,142.2h7.24L135.42,180h-7Z"/><path class="cls-2" d="M163.71,181.17c-9.62,0-14.88-6.28-14.88-16.85V142.2h7.24v23.64c0,5.77,3.69,8.76,7.64,8.76s7.69-3,7.69-8.76V142.2h7.24v22.12C178.65,174.89,173.48,181.17,163.71,181.17Zm-2.58-42.06h-6.23v-5.36h6.23v5.36Zm11.39,0H166.3v-5.36h6.23v5.36Z"/><path class="cls-1" d="M191.35,166.14h-0.51V180H183.6V142.2h9.82c7.74,0,13.92,3.39,13.92,12,0,5.42-3.54,9.06-8,10.78L211.09,180h-8.76Zm-0.51-17.46v11.59h2.68c4,0,6.63-2.33,6.63-5.92,0-3.39-2.33-5.67-6.58-5.67h-2.73Z"/><path class="cls-1" d="M230.67,149.59a10.92,10.92,0,0,0-6-2.18c-3.34,0-4.61,1.62-4.61,3.29,0,2.23,1.87,3.75,5.82,7,6.28,5.26,8.45,8.5,8.45,12.45,0,6.48-5.52,10.38-12.55,10.38a22.12,22.12,0,0,1-10.48-2.83l2.73-5.67a15.65,15.65,0,0,0,7.79,2.53c3.39,0,5.16-2.07,5.16-4.2,0-2.33-1.87-4.25-6.12-7.74-6-5-8.3-7.54-8.3-11.89,0-4.76,3.69-9.31,12-9.31a19,19,0,0,1,8.86,2.48Z"/><path class="cls-1" d="M241.3,148.68h-6.63V142.2h20.5v6.48h-6.63V180H241.3V148.68Z"/><path class="cls-1" d="M258.1,142.2h20.65v6.38H265.34v8.86h12.2v5.92h-12.2v10.22h13.82V180H258.1V142.2Z"/><path class="cls-3" d="M305.27,174.69v-0.4l11.08-11H290.95v-6.88h25.41l-11.08-11v-0.4H314l14.53,14.53v0.71L314,174.69h-8.76Z"/><path class="cls-1" d="M342.17,180V142.2h11.89c8.66,0,11.59,4.3,11.59,9.72A9.76,9.76,0,0,1,361,160a10.61,10.61,0,0,1,6.07,9.67c0,5.21-3.64,10.27-12,10.27h-13Zm7.24-31.89V158h2.94c4.25,0,6.73-2.08,6.73-5.16,0-2.78-1.52-4.76-6.53-4.76H349.4Zm0,15.13v10.88h3.75c5.16,0,6.68-2.43,6.68-5.26,0-3.49-2.48-5.62-6.83-5.62H349.4Z"/><path class="cls-1" d="M371.07,142.2h7.24V180h-7.24V142.2Z"/><path class="cls-1" d="M383.31,142.2H404v6.38H390.55v8.86h12.2v5.92h-12.2v10.22h13.82V180H383.31V142.2Z"/><path class="cls-1" d="M416.61,166.14h-0.51V180h-7.24V142.2h9.82c7.74,0,13.92,3.39,13.92,12,0,5.42-3.54,9.06-8,10.78L436.35,180H427.6Zm-0.51-17.46v11.59h2.68c4,0,6.63-2.33,6.63-5.92,0-3.39-2.33-5.67-6.58-5.67h-2.73Z"/><path class="cls-1" d="M459.84,153.43L452.4,180h-6.93L434.63,142.2h7.59l7.24,27.13,7.24-27.13h6.58l7.19,27.13,7.24-27.13h7.24L474.11,180h-7Z"/><path class="cls-1" d="M494.76,147.56h-7.24V142.2h7.24v5.37Zm7.64,33.61c-9.62,0-14.88-6.28-14.88-16.85V148.58h7.24v17.26c0,5.77,3.69,8.76,7.64,8.76s7.69-3,7.69-8.76V148.58h7.24v15.74C517.33,174.89,512.12,181.17,502.4,181.17Zm14.93-33.61h-7.24V142.2h7.24v5.37Z"/><path class="cls-1" d="M530,166.14h-0.51V180h-7.24V142.2h9.82c7.74,0,13.92,3.39,13.92,12,0,5.42-3.54,9.06-8,10.78L549.77,180H541Zm-0.51-17.46v11.59h2.68c4,0,6.63-2.33,6.63-5.92,0-3.39-2.33-5.67-6.58-5.67h-2.73Z"/><path class="cls-1" d="M569.36,149.59a10.92,10.92,0,0,0-6-2.18c-3.34,0-4.61,1.62-4.61,3.29,0,2.23,1.87,3.75,5.82,7,6.28,5.26,8.45,8.5,8.45,12.45,0,6.48-5.52,10.38-12.55,10.38A22.12,22.12,0,0,1,550,177.73l2.73-5.67a15.65,15.65,0,0,0,7.79,2.53c3.39,0,5.16-2.07,5.16-4.2,0-2.33-1.87-4.25-6.12-7.74-6-5-8.3-7.54-8.3-11.89,0-4.76,3.69-9.31,12-9.31a19,19,0,0,1,8.86,2.48Z"/><path class="cls-1" d="M580,148.68h-6.63V142.2h20.5v6.48h-6.63V180H580V148.68Z"/><path class="cls-1" d="M596.79,142.2h20.65v6.38H604v8.86h12.2v5.92H604v10.22h13.82V180H596.79V142.2Z"/><path class="cls-3" d="M191.88,50.14a3.93,3.93,0,0,0-1.63-.38c-0.83,0-1.16.34-1.16,0.72s0.44,0.84,1.33,1.61c1.46,1.26,2,2,2,3,0,1.55-1.37,2.47-3.13,2.47a6.66,6.66,0,0,1-2.12-.36l0-1.66a5.11,5.11,0,0,0,2.11.49,1.06,1.06,0,0,0,1.24-.9c0-.5-0.43-0.95-1.4-1.75-1.43-1.21-2-1.81-2-2.84s0.94-2.25,3-2.25a5.35,5.35,0,0,1,1.75.28Z"/><path class="cls-3" d="M198.21,50.14a3.93,3.93,0,0,0-1.63-.38c-0.83,0-1.16.34-1.16,0.72s0.44,0.84,1.33,1.61c1.46,1.26,2,2,2,3,0,1.55-1.37,2.47-3.13,2.47a6.66,6.66,0,0,1-2.12-.36l0-1.66a5.11,5.11,0,0,0,2.11.49,1.06,1.06,0,0,0,1.24-.9c0-.5-0.43-0.95-1.4-1.75-1.43-1.21-2-1.81-2-2.84s0.94-2.25,3-2.25a5.35,5.35,0,0,1,1.75.28Z"/><path class="cls-3" d="M206.76,52.59v0.62c0,2.93-1.46,4.44-3.45,4.44s-3.43-1.51-3.43-4.44V52.59c0-3,1.48-4.46,3.43-4.46S206.76,49.63,206.76,52.59Zm-1.74,0c0-2-.7-3-1.71-3s-1.7,1-1.7,3v0.62c0,2,.73,3,1.7,3s1.71-.95,1.71-3V52.6Z"/><path class="cls-3" d="M207.89,57.21V55.73a3.93,3.93,0,0,0,1.76.49c1.36,0,2.28-.64,2.28-1.54s-0.89-1.46-2.1-1.46h-0.62l0.06-1.39h0.56a1.45,1.45,0,0,0,1.62-1.22,1.28,1.28,0,0,0-1.51-1.07,3.51,3.51,0,0,0-1.54.32l0.11-1.5a5.31,5.31,0,0,1,1.75-.24c1.66,0,2.91,1,2.91,2.25a2.43,2.43,0,0,1-1.21,2,2.57,2.57,0,0,1,1.68,2.37c0,1.67-1.43,2.91-3.51,2.9A5.32,5.32,0,0,1,207.89,57.21Z"/><path class="cls-3" d="M207,215.22a3.93,3.93,0,0,0-1.63-.38c-0.83,0-1.16.34-1.16,0.72s0.44,0.84,1.33,1.61c1.46,1.26,2,2,2,3,0,1.55-1.37,2.47-3.13,2.47a6.65,6.65,0,0,1-2.12-.36l0-1.66a5.1,5.1,0,0,0,2.11.49,1.06,1.06,0,0,0,1.24-.9c0-.5-0.43-0.95-1.4-1.75-1.43-1.21-2-1.81-2-2.84s0.94-2.25,3-2.25a5.34,5.34,0,0,1,1.75.28Z"/><path class="cls-3" d="M213.36,215.22a3.93,3.93,0,0,0-1.63-.38c-0.83,0-1.16.34-1.16,0.72s0.44,0.84,1.33,1.61c1.46,1.26,2,2,2,3,0,1.55-1.37,2.47-3.13,2.47a6.65,6.65,0,0,1-2.12-.36l0-1.66a5.1,5.1,0,0,0,2.11.49,1.06,1.06,0,0,0,1.24-.9c0-.5-0.43-0.95-1.4-1.75-1.43-1.21-2-1.81-2-2.84s0.94-2.25,3-2.25a5.34,5.34,0,0,1,1.75.28Z"/><path class="cls-3" d="M221.91,217.67v0.62c0,2.93-1.46,4.44-3.45,4.44s-3.43-1.51-3.43-4.44v-0.62c0-3,1.48-4.46,3.43-4.46S221.91,214.71,221.91,217.67Zm-1.74,0c0-2-.7-3-1.71-3s-1.7,1-1.7,3v0.62c0,2,.73,3,1.7,3s1.71-.95,1.71-3v-0.62Z"/><path class="cls-3" d="M223,222.29v-1.48a3.93,3.93,0,0,0,1.76.49c1.36,0,2.28-.64,2.28-1.54s-0.89-1.46-2.1-1.46h-0.62l0.06-1.39H225a1.45,1.45,0,0,0,1.62-1.22,1.28,1.28,0,0,0-1.51-1.07,3.52,3.52,0,0,0-1.54.32l0.11-1.5a5.33,5.33,0,0,1,1.75-.24c1.66,0,2.91,1,2.91,2.25a2.43,2.43,0,0,1-1.21,2,2.57,2.57,0,0,1,1.68,2.38c0,1.67-1.43,2.91-3.51,2.9A5.32,5.32,0,0,1,223,222.29Z"/><path class="cls-3" d="M299.58,131.63a3.93,3.93,0,0,0-1.63-.38c-0.83,0-1.16.34-1.16,0.72s0.44,0.84,1.33,1.61c1.46,1.26,2,2,2,3,0,1.55-1.37,2.47-3.13,2.47a6.66,6.66,0,0,1-2.12-.36l0-1.66a5.11,5.11,0,0,0,2.11.49,1.06,1.06,0,0,0,1.24-.9c0-.5-0.43-0.95-1.4-1.75-1.43-1.21-2-1.81-2-2.84s0.94-2.25,3-2.25a5.35,5.35,0,0,1,1.75.28Z"/><path class="cls-3" d="M305.9,131.63a3.93,3.93,0,0,0-1.63-.38c-0.83,0-1.16.34-1.16,0.72s0.44,0.84,1.33,1.61c1.46,1.26,2,2,2,3,0,1.55-1.37,2.47-3.13,2.47a6.66,6.66,0,0,1-2.12-.36l0-1.66a5.11,5.11,0,0,0,2.11.49,1.06,1.06,0,0,0,1.24-.9c0-.5-0.43-0.95-1.4-1.75-1.43-1.21-2-1.81-2-2.84s0.94-2.25,3-2.25a5.35,5.35,0,0,1,1.75.28Z"/><path class="cls-3" d="M314.46,134.08v0.62c0,2.93-1.46,4.44-3.45,4.44s-3.43-1.51-3.43-4.44v-0.62c0-3,1.48-4.46,3.43-4.46S314.46,131.11,314.46,134.08Zm-1.74,0c0-2-.7-3-1.71-3s-1.7,1-1.7,3v0.62c0,2,.73,3,1.7,3s1.71-.95,1.71-3v-0.62Z"/><path class="cls-3" d="M315.59,138.69v-1.48a3.93,3.93,0,0,0,1.76.49c1.36,0,2.28-.64,2.28-1.54s-0.89-1.46-2.1-1.46h-0.62l0.06-1.39h0.56a1.45,1.45,0,0,0,1.62-1.22,1.28,1.28,0,0,0-1.51-1.07,3.51,3.51,0,0,0-1.54.32l0.11-1.5a5.31,5.31,0,0,1,1.75-.24c1.66,0,2.91,1,2.91,2.25a2.43,2.43,0,0,1-1.21,2,2.57,2.57,0,0,1,1.68,2.37c0,1.67-1.43,2.91-3.51,2.9A5.32,5.32,0,0,1,315.59,138.69Z"/></svg>
</figure>

## The Week in Type

Typekit announced the [Typekit Marketplace](https://typekit.com/marketplace), an additional service where you can license fonts from a host of foundries separately from the fonts that they offer in Typekit’s subscription plans. In the past there’s been a bunch of times where I wanted to use a typeface from Typekit but pair it with another outside the Typekit library, with one from another foundry. Previously that meant I would have to load these fonts in a weird way and all that information isn’t in the same place.

There’s already a lot of great foundries on board, such as Frere Jones, Type Together, and Dalton Maag. The team also made some cool [promotional videos](https://www.youtube.com/channel/UCmmwb1v48LX3TAKbE6QRExg) that interview the foundries that have signed up so far.

---

Myles Maxfield wrote about variable fonts on the web for the Webkit blog:

> There are four CSS properties which affect which fonts are selected to be used in the document: font-weight, font-stretch, font-style, and font-size. With font variation support, each of these four properties will accept a numerical value which will both affect font selection as well as be applied to the font after it is selected. Therefore, a web site declaring font-weight: bold may cause a variable font to be selected, and then bold applied to that variable font. Naturally, CSS animations are supported in all these properties, because the values can be smoothly interpolated. These properties are expected to match the most common variation axes, so most CSS authors won’t need to learn any new properties.

One thing to note here: I find it terribly exciting that web designers might not even know that they’re using variable fonts at all. They don’t need to learn any new CSS properties and they don’t really need to know anything about the font file for things to work properly.

## Letter of the Week

[Escrow Display’s](https://store.typenetwork.com/foundry/fontbureau/series/escrow) lowercase _x_ caught my eye this week:

![x](/images/x.png)

In fact, the whole family of upper case characters are delightful, oozing with charm and finesse:

![escrow](/images/escrow.png)
