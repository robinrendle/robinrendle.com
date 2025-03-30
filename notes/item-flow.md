---
layout: layouts/note.njk
title: item-flow
date: 2025-03-30T08:56:25-07:00
city: San Francisco
country: California
extract: An elegant solution.
---

The Webkit team is pitching [a new idea called `item-flow`](https://webkit.org/blog/16587/item-flow-part-1-a-new-unified-concept-for-layout/):

> The suggestion isn’t to combine all of Flexbox with all of Grid — but rather to create a new set of properties and values to “replace” specifically the `flex-flow` and `grid-auto-flow` properties. (You will always be able to use the older syntax if you prefer.) Think how originally the [Alignment properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment) and the [gap](https://developer.mozilla.org/en-US/docs/Web/CSS/gap) property were defined to work only in one layout system, and then later got modified and extended to work in multiple layout contexts.
>
> Several of us here at Apple got together and started figuring out how a such unified system for layout `*-flow` could work. We decided to tentatively name the shorthand item-flow. It’d be the main property from which the longhands and values follow. Together, the new rules would all control the direction of flow, how items wrap, how items pack, whether or not there’s “slack” in the layout, and more.

I really, really like this idea. All of the flow-like properties of Flexbox and Grid today feel overwhelming and unnecessarily complicated whereas this proposal tidies things up precisely in the same way that `gap` did a few years ago. This is one of those rare ideas that makes me bolt upright because of how obviously straightforward and simple it is!

During [the drama](https://webkit.org/blog/16026/css-masonry-syntax/) about masonry-styled layouts with CSS, neither approach felt right to me. Both sides had good points but I felt like I had to pick a side and yet I didn’t really care enough to think through the messy details of it all. But what I think `item-flow` proves here is that both sides were wrong! Both arguments were trying to bolt masonry layouts onto existing CSS layout systems in the wrong way, instead of cleaning and consolidating the mess we already have.

Thankfully, `item-flow` cleans things up in an elegant way that I’m real excited about.
