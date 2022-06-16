---
layout: layouts/note.njk
title: Ampersand 2015
date: 2015-11-14 10:11:00 -08:00
tags:
  - design
extract:
  This year’s Ampersand was a perfect cavalcade of typographic misadventures
  which has left me buzzing with ideas.
update:
city: Brighton
country: UK
---

This year’s [Ampersand](http://2015.ampersandconf.com) was a perfect cavalcade of typographic misadventures which has left me buzzing with ideas. First up was [Indra Kupferschmid](http://kupferschrift.de)’s fascinating talk about web typography and I jotted down a couple of useful points she made that I often tend to ignore when designing an interface:

- We shouldn’t justify text if we can’t control hyphenation and on the web we currently have very little control (unless we use a lot of hacks).
- We should remember that whitish text on a dark background probably requires a typeface of a lighter weight.
- Think about the motivations of the reader: are they really dedicated to the information on your website, or do they need a little visual nudge to help them understand what you want them to know?
- How much work do we want the reader to do? Should they have to scroll so much to find the information they’re looking for?

Indra’s discussion about the design of the [Benton Modern website](http://bentonmodern.webtype.com) was particularly insightful, too.

<p class="full">
<img src="/images/ampersand.jpg" class="full" />
</p>

Next, [Marcin Wichary](https://medium.com/@mwichary) gave a talk about his typographic monomania at Medium. It was interesting to learn about the sheer number of hacks that are required to [get proper underlines for links](https://medium.com/designing-medium/crafting-link-underlines-on-medium-7c03a9274f9), [or the Chrome dictionary bug that almost drove him insane](https://medium.com/@mwichary/fixing-a-chrome-dictionary-issue-bbd7c5314f01). I’ve been following his work for the last year or so and each time I’m always astonished by his perseverance (also this was one of the most technically and visually impressive talks I’ve ever seen).

After the first break [Jen Simmons](https://twitter.com/jensimmons) talked about how design on the web is pretty mundane and boring by print standards. This led to her examining the latest additions to the CSS spec which might help us make bigger, brighter things.

Jen mentioned how _the medium shapes the medium_ and how designers see the work of others and continue to imitate their layout solutions. Lately I’ve only really seen the web as a delivery mechanism for text documents and I realise that this limits what I can make and how I contribute to the community. At XOXO, I remember talking to a developer and he mentioned that he was working on building a comic book series in the browser and he talked about how he had to deal with all these strange bugs and layout problems that I had no idea even existed, mostly because I’ve only built websites with boxes of text.

As a presiding member of the NSSFC (the [Nick Sherman](https://twitter.com/NickSherman) Super Fanboy Club) I found that Nick’s talk was just as interesting as I hoped it would be. He began talking about how web fonts in 2015 are mostly static and he complained that they can’t change weight or width depending on their environment; the glyphs inside are more like pictures than the responsive micro-systems we really need for setting complex text on the web. This led to a discussion about multiple masters.

In type design there’s a practice called interpolation where you have two designs, say a light weight and a black weight, and then you can use a tool to generate a design between these two extremes. In this case you might want to generate a regular weight and so using this tool would save a lot of time designing everything by hand. Although, in practice these algorithmically generated fonts require a lot of fine tuning.

<figure>
		<img src="/images/interpolate.gif" />
</figure>

We can interpolate an almost infinite combination of weights and widths that we need. But what if we take this practice of type design and move it over to the web? What might this mean for developers and designers? Well, it would be helpful because we’d only be making a request for a single font, instead of the multiple fonts we need today for book, medium and bold weights or thin, compressed and wide fonts. Secondly, we’d have a lot more control; sometimes tiny adjustments to an interface, like beefing up the font-weight of some text when it’s placed on a light background, can have a big impact on usability.

Here’s how this might work in CSS:

<p data-height="450" data-theme-id="20935" data-slug-hash="aea26c94e5d8a9ea003c748ae324dc86" data-default-tab="css" data-user="robinrendle" class='codepen'>See the Pen <a href='http://codepen.io/robinrendle/pen/aea26c94e5d8a9ea003c748ae324dc86/'>aea26c94e5d8a9ea003c748ae324dc86</a> by Robin Rendle (<a href='http://codepen.io/robinrendle'>@robinrendle</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Wouldn’t this be really helpful? I can think of a dozen situations where this might improve the interfaces I’ve been working on.

This isn’t the code Nick used in his example, but I think it’s close enough to get an idea of his suggestions. After the talk I talked to the type designer [Bruno Maag](https://www.daltonmaag.com/) and he seemed a little hesitant to agree that this would be a good idea in practice for type designers—but I think that Nick’s experiment suggests that the idea of a new variable font format is certainly worth exploring in the short term.

Next was Bruno Maag’s talk about [Bookerly](http://www.amazon.com/b?node=11624010011), the new type family for the Kindle platform. He talked about the constraints that helped shape the design process, how to deal with certain resolutions and e-ink screen formats. Bruno reminded me that type design has to be a business before it can be an art form; the introduction of many features like small caps, multiple weights and widths, all of these features take time and, well, time is money.

[Lu Yu’s](https://twitter.com/lugotype) talk made this idea of typography-as-a-business really sink in. As she mentioned, Chinese fonts can have up to 10,000 different glyphs which means that it’s very difficult to produce a quality type system, but it also means that a single Chinese webfont can be as large as 10mb in size (!). These kinds of problems led to Typekit’s [subsetting features](http://blog.typekit.com/2015/06/15/announcing-east-asian-web-font-support/).

It’s also surprising to learn that Chinese dialects, of which there are many, don't have italic variations. Also also, considering there are so many different Chinese dialects—where people can't communicate across different parts of the country— I wondered whether it even make sense to call them by the same name? That term blurs all the complex traditions and distinct typographic variations between these groups. Saying _Asian scripts_ is annoying for the same reason. Does Burmese sound/look/work like Japanese or Thai? These umbrella terms mask the complexity that designers need to confront.

Next, [Matthew Young](http://mymymy.co.uk/book-covers/) made a deep dive into his work at Penguin and the design of [Pelican Books](https://www.pelicanbooks.com/). This project seems to be a test bed for [Craig Mod’s](http://craigmod.com) ideas; they made the web version of Pelican just as important as the series of physical books and oh boy does it show. Matthew’s work might be the very manifestation of what my friend [Paulo](https://twitter.com/paulozoom?lang=en) fondly describes as a “website that look like a website.”

After the final break of the day [Sarah Hyndman’s](http://www.sarahhyndman.com/) talk was about her playful tests in typography. She questioned how people _feel_ about certain categories of typefaces and why that might be. She also made predictions about how the audience would feel about a particular font and that was kind of spooky. Although, at the end of the talk I was left wondering whether these typographic dating games and brand-association puzzles that Sarah talked about would ever prove to have a useful scientific impact on the practice of typesetting and type design.

Finally, [Marko Dugonjić’s](http://www.maratz.com/) talk about the design of the [Benton Modern website](http://bentonmodern.webtype.com) closed the day of talks. He appeared to support a lot of what Jen Simmons mentioned and walked through the little bits of CSS that really makes the website shine. Also, he dived into the tools he’s made, such as [Type Tester](http://typetester.org/), which could become a useful part of the web designer’s tool belt as it sits in the helpful middle-ground between code and GUI.
