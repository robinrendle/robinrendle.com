---
title: An incoherent rant about design systems
date: 2022-02-28T05:33:40.978Z
city: San Francisco
country: California
extract: What your design system is and isn’t
layout: layouts/post.njk
tags:
  - designsystems
  - web
  - frontend
---

No matter how fancy your Figma file is or how beautiful and lovingly well organized that Storybook documentation is; the front-end is always your source of truth. You can hate it as much as you like—all those weird buttons, variables, inaccessible form inputs—but that right there is your design system.

You can’t cherry pick what is and isn’t your design system just because it might make you feel icky inside. Why? If we can’t look at the thing clearly, or if we pretend it’s better than it is, then we’ll never fix the tech debt, the inaccessibility problems, or the confusion that haunts engineers and designers every day.

Sometimes this is tough because a lot of folks don’t want to acknowledge how bad the design system is. It feels like you’re throwing the engineers and designers under the bus or it sounds cynical. You’re insulting all that hard work that went into this...ahem...“system”.

Anyway, the front-end is the source of truth. All of the front-end. The component library you have divvied up into neat little buckets but also the rest of the app. Your design system is the eight inconsistent select inputs.

So being honest about this is the first step to fixing it.

But wait, if designers are looking at Figma or Sketch all day, then isn’t Figma the design system? Shouldn’t our design system be _aspirational_, _delightful_?

Nope! Screw delight. The delightful part of any design system is simply the lack of confusion, the ease of use. And pretending that Figma is the source of truth is only going to add to the confusion. I’ve worked with folks who want the design system in Figma to be this beautiful, aspirational thing. They want it to be the shining city on the hill, the place that engineers can one day hope to build. “What if our buttons looked like this? What if our imaginations were let loose and we used font-weights like that?”

Great. But now I’m confused as hell. What are the font-sizes of a tables? What icons should I be using? What’s actually available in the front-end for my engineers to take and run with? What do they have to build from scratch?

Here’s my advice: take all that aspirational stuff out of your Figma design system file. Put it somewhere else. Your Figma docs should be a mirror of the front-end (because that’s really the source of truth) and when an update is made then you should update Figma immediately after the fact.

Look. I don’t want to go into Figma and try to parse what is and isn’t usable right now. Like when I’m driving a car, I don’t want a button that is _aspirationally_ useful. I want a button that works when I click it. I want to drag and drop in a component and then an engineer see that and know that it’s available in Storybook under the same name as it was in Figma.

But this is hard! You may be refactoring buttons, icons, and all sorts of other great things in the front-end all the time, but if you don’t spend just as much time in Figma making sure everything is correctly documented then you could cause things to be out of sync, and more confusion will appear.

But Figma will _always_ be out of sync with the front-end and that’s okay. We have to pick and choose which parts of the front-end we should make a mirror-image of. Do we need all the form styles? Nah, just what most designers need each day to get their work done.

The hard truth is this; your Figma docs should be treated like a sketch on the back of a napkin. It should be _somewhat_ accurate but it’s a tool that reflects the front-end, but: it ain’t your design system.
