---
layout: layouts/post.njk
title: Future of Web Design 2014
date: 2014-04-14 03:16:00 -07:00
tags:
  - design
extract:
  Earlier this week I headed off to the Future of Web Design conference in
  London to give a talk about systems, language and maintainable interface design
  which was adapted from an essay I wrote back in December called A Visual Lexicon.
  Overall it was a fantastic event with some wonderful talks about JavaScript performance,
  non-linear storytelling, masking shapes in CSS and so much more. It was certainly
  a diverse string of interesting talks.
update:
city: Nottingham
country: UK
---

Earlier this week I headed off to the [Future of Web Design](http://futureofwebdesign.com/london-2014/) conference in London to give a talk about systems, language and maintainable interface design which was adapted from an essay I wrote back in December called _[A Visual Lexicon](http://robinrendle.com/essays/a-visual-lexicon/)_. Overall it was a fantastic event with some wonderful talks about JavaScript performance, non-linear storytelling, masking shapes in CSS and so much more. It was certainly a diverse string of interesting talks.

The conference kicked off with a series of workshops on a variety of topics including one that caught my eye: _CSS architecture for big front ends_ with [Harry Roberts](http://twitter.com/csswizardry). Throughout the day he covered all sorts of interesting topics from communicating with other developers to creating well structured and documented systems for the web, during which I made a lot of notes – but these certainly don’t cover everything in the workshop, since these are just the points that grabbed my attention.

## 1. Designers don’t always know what developers need.

As developers we often require more information from designers than they provide in the initial handover stages. _We can only fix this if we start asking better questions_, so it might be necessary to ask which systematic values we’ll need to repeat in the future (say, the values that might go into a [global color palette tool](https://github.com/ultimate-package/tools.color-palette) or all of the settings of [a typographic scale](https://github.com/ultimate-package/tools.font-scale)).

It might be useful to consider which other global variables can be used throughout the system, too. Defaults are especially handy but are frequently left out; link styles and hover states, alternative button modifiers and navigational items might be examples of these styles that slip through the cracks.

In other cases it’s often necessary to ask for mockups of a single component (like every button in the entire codebase) without any contextual styling around it. In complex design systems we might need to print these components out and then break them down with the design team in person.

A lot of designers hand over insufficient design mockups because developers have let this sorry state of affairs carry on for such a long time. _We need to fix this._

## 2. Design systems ought to be normalised.

_“Are there are any visual inconsistencies that we can remove entirely?_” Developers should question designs that have superfluous styles added to them – do we really need red buttons with square corners _and_ green buttons with rounded ones? We can simplify this system if we start thinking a little bit more pragmatically about how each decision really effects someone’s experience of the website.

In this case _“there are some things we shouldn’t build”_. Every design decision has a benefit cost involved so if a new component doesn’t dramatically improve usability then we should probably reconsider building it in the first place.

This sort of thinking reminds me of the designers from [gov.uk](https://www.gov.uk/) where they discussed [the implications of adding share buttons](https://insidegovuk.blog.gov.uk/2014/02/20/gov-uk-social-sharing-buttons-the-first-10-weeks/) to the site – they only did so when they had received enough research and data to justify the expense in time and energy.

## 3. Build for systems, not for pages.

Duh, but this still happens all the time in agency life. Mocking up whole pages might be useful for designers and UX folk to get a feel for the system – they absolutely do have some practical purposes, for sure. However, for developers these mockups are next to useless. Instead we need component styles first and then those extra, contextual styles to be applied afterwards, once we’ve set the initial foundations.

## 4. Developers should be more confrontational during the handover process.

OK, so I guess it’s not about being _confrontational_ per se, but there should be a different sort of balance during the conversations that team members are having right now. This is not about designers/developers being right or wrong though – it’s all about the quality of the end product.

_“I can make this work – I can build this, no problem. But if we change the design ever so slightly then we won’t have to use all this hacky CSS.”_

This is why the waterfall workflow process doesn’t work. It suggests that designer’s decisions can’t be influenced by the limits of technology or more programmatic concerns. (On a side note: I’ve heard stories about some people having four hour handover meetings where they go over each design component in excruciating detail and this makes me spit-take so very hard).

## 5. “We haven’t had a profound change to front-end architecture since the early 2000s.”

It looks like we need a new wave of web standards which concentrates on naming these components and changing the current design/dev workflow. I’m not sure if this involves more focus on ‘web standards’ specifically though – I think the challenges seem to come more from poor organisational structure and a lack of clear communication between team members in general.

## 6. Describing content with semantic classes is completely redundant.

In this case the `.about-box` module sucks as class name, a better name for it would describe the sort of visual changes that these components effect (like `.box` or `.island` instead).

In a personal project I recently went _crazily_ overboard with this OOCSS thinking and added modules like `.bordered` and `.font--tisa-bold` to the framework, so when the pendulum swings too far in this direction then it can cause just as many problems as not using objects and modules at all.

## 7. “The hardest thing about managing a codebase is managing the people that use it.”

This was the key point that I took away from the day, the idea that designing a maintainable front-end architecture is not really about technology. Creating a manageable codebase is only possible if developers are willing to communicate effectively with one another and challenge the status quo.
