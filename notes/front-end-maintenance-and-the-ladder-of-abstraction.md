---
layout: layouts/post.njk
title: Front-end Maintenance and the Ladder of Abstraction
date: 2013-09-04 14:12:00 -07:00
tags:
  - design
extract:
  This is a summary of my talk from our first Erskine Breakfast, a new kind
  of event where we invite two speakers round for a quick chat about web design and
  development. This week we discussed modularity, both in terms of designing components
  instead of pages and the best practices behind creating front-end interfaces.
update:
  This is a summary of my talk from our first [Erskine Breakfast](http://breakfast.erskinesocials.com/),
  a new kind of event where we invite two speakers round for a quick chat about web
  design and development. This week we discussed modularity, both in terms of designing
  components instead of pages and the best practices behind creating front-end interfaces.
city: Nottingham
country: UK
Project:
  - endsleigh
---

There’s been various discussions about [atomic design](http://bradfrostweb.com/blog/post/atomic-web-design/), OOCSS and BEM for several years now, but in all the ideas that gravitate around these topics there’s one in particular that hasn’t been fully recognised. As many developers cite _efficiency, coding speed and legibility_ as the driving impetus behind breaking down these large scale design systems into reusable components, I think there’s this other key problem that our community has left floundering on the outskirts.

[Nicolas Gallagher](http://twitter.com/necolas), a front-end developer at Twitter, summarised this problem wonderfully however:

> Replace “can you build this?” with “can you maintain this without losing your minds?”

Anyone that’s worked on a relatively large front-end system has probably experienced that nauseous feeling whilst navigating all of those partials, files and directories that make up [this interface](http://coding.smashingmagazine.com/2013/08/02/other-interface-atomic-design-sass/) and so every developer should be able to empathise with this idea of maintenance.

As I’ve flipped between the text editor to the web inspector, from the web inspector and back to the browser again, just to understand how a particular aspect of this system works, I’ve wondered how we can fix these interconnected problems. But it isn’t CSS or Sass specifically that’s slowing us down when we write code, it isn’t what’s driving us mad.

What we struggle with on a day-to-day basis is the complex web of relationships between all of these very simple, yet flawed, dependencies within the CSS. As we switch between the code editor to the web inspector back to the browser and find that, unfortunately, something completely unrelated has been broken on another template, we realise that something here is amiss; the system wasn’t designed to scale.

![image](/images/image.jpg)

When Nicolas talks about modularity he obviously suggests that websites shouldn’t break in the future. But I think he means something a lot more than that. I think he’s talking about adaptation here; truly responsive systems that can scale over time. And not just visually, where text and boxes flow into containers of varying sizes depending on the dimensions of the browser, but systematically. Layout modules and components should be added to the system without the natural code bloat and psychological issues that tend to follow.

If modularity is the solution to our problems, then _maintenance is the key problem_ that we’re trying to solve here. That’s the goal.

Say a client comes back to you in six months time and asks for a new component to be added to the site. First you have to remember how this site works. You have to remember all of those little hacks you performed to _just make it work_, as well as the areas where documentation is sure to be found wanting.

Next you have to add code to this system that probably wasn’t designed to be built on top of in the first place. Generally our front-end interfaces are not designed to have different types of forms or new sorts of layout modules slapped onto them in the future.

And these are just the problems we face when working within our own projects, imagine the troubles that a foreign developer faces when scrolling through our work. _Hell is someone else’s code_, right?

In order to make sure that these websites can grow almost organically then we need to guarantee that they can be maintained. Our code needs to be human readable, and if this is the case then maintenance is primarily about interface design; with developers being the users in this example.

## So how do we make maintainable systems?

Well, first we need to think about design a little bit. As I’ve worked at Erskine I’ve learnt a ton about the best sorts of processes and mindsets to get into before undertaking complex projects.

When we begin the design of a website we tend to think of it in steps. We go from a text editor or from a Google Docs file to a sitemap perhaps. Then we begin wireframing – at this stage there is no colour, there’s no fancy typefaces or ‘long-shadows’. Decisions aren’t primarily aesthetic because we know that if we jumped into designing the delicate little buttons and border-radiuses of input fields, before we tackle the vagueness of the whole thing in general, then we’d end up in a world of pain and confusion later. This way we allow for all of the variables that are out there to be systematically dealt with in an orderly fashion and hopefully this lets us confront the needs of many users in the process.

This is the [ladder of abstraction](http://worrydream.com/LadderOfAbstraction/). A common design process that starts at 3,000 feet up in the air where you can get an overview of the system and then creep your way down into the details.

If we take this design process and focus again on the front-end interface then we realise that _we should organise code by its intended effect on the rest of the system_. We ought to gather the pieces of code that are global in scope and then zoom in on the specifics. Things like reset.css and normalise.css should be collected together and placed into a separate directory. This way a developer in the future can scan this interface and get that immediate view from 3,000 feet. Then, once we need to fix a bug or add that new module, they can dig in deeper and code without damaging the rest of this complicated system.

Generally, I think that we should spend more time on these sorts of problems. If we start to consider how the developers that follow us will tidy up the things we break, or perhaps even add new components to the site, then perhaps we’ll answer Nicolas’ question after all; in the end we won’t lose our minds.

<hr />
*The image above is this glorious [bird’s eye view](http://commons.wikimedia.org/wiki/File:Atlanta_Koch_map_1892.jpg) of Atlanta in 1892 by Augustus Koch.*
