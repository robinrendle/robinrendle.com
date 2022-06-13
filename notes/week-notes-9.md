---
layout: layouts/post.njk
title: "Week notes #9"
date: 2015-03-27 12:59:00 -07:00
tags:
  - design
extract:
  The reason why a styleguide is an invaluable asset is that it immediately
  sets up the team’s expectations. The designer must make compromises for the sake
  of normalising the system programmatically whilst developers are forced to acknowledge
  that their shitty code just won’t cut it anymore. They have to think beyond whacky
  hacks and short-term tricks.
update:
city:
  - Somewhere between Nottingham and London
country:
  - UK
---

This week I’ve been in Nottingham working with the team at [Kind](http://madebykind.com/) on a freelance gig. What’s particularly interesting is that this is the first project I’ve worked on that’s been styleguide-first—so before a single mockup is visible in the browser we’ve normalised the design into a programmatic language, written clear documentation for developers and considered the many various ways in which this codebase might change over time. It also forces me to write that code to a much higher standard than I might otherwise.

At the moment we’re using a fairly customised version of [Hologram](http://trulia.github.io/hologram/) to help us plan this system of front-end components and I’m sure we’ll be sharing the final design at a later stage. Here’s what it looks like right now:

![Styleguide made with Hologram](/images/styleguide.png)

The menu at the top displays all the different types of component and I’m still not happy with the naming conventions as I really dig the [namespacing idea that Harry Roberts described](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/) earlier this month. But anyway, we have the name of the current breakpoint in the top right which is useful for debugging things. And one really useful part of our styleguide is the ability to add a renderer that appends `contenteditable="true"` to the markup of an example. This is handy if we need to double-check the line-height of a heading, for example:

![Editable headings in the styleguide](/images/headings.gif)

---

Styleguide-first design and development makes sense for a host of reasons, most of which I tried to outline in [my talk last year](https://speakerdeck.com/robinrendle/a-visual-lexicon). I’m not sure I did a particularly great job at the time but there was one theme that emerged which still interests me:

![A website is a service](/images/a-website-is-a-service.jpg)

I wish I took a closer look at this idea back then because the slide makes it sound kinda self-helpy. What I was trying to say was that a website is a service for users (it’s a tool that changes over time) but it’s also a service for designers and developers (they have to keep coming back to the codebase and making adjustments). This is what makes a website different to a book or a newspaper or television.

[gov.uk](https://www.gov.uk/) is one excellent example of a _website as a service_.

One reason why a styleguide is an invaluable asset for those services is the way it immediately sets up the team’s expectations. The designer must make compromises for the sake of normalising the system programmatically whilst developers are forced to acknowledge that their shitty code just won’t cut it anymore. They have to think beyond whacky hacks and short-term tricks.

Perhaps I’m preaching to a very bored and unenthusiastic choir, so I apologise if you’ve heard this all before, yet I feel that this cant be the case when I see lots of folks still calling themselves _product_ designers without a hint of sarcasm. All their beautiful, pixel-perfect products are merely next year’s half-assed, poorly implemented services that another designer and developer must unfortunately inherit.

What it comes down to is this: there are no products on the web. It’s services all the way down.
