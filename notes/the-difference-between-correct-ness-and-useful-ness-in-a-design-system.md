---
title: The difference between correct-ness and useful-ness in a design system
date: 2022-02-01T07:36:02.997Z
city: San Francisco
country: California
extract: Just when I thought I was out...they pull me back in.
layout: layouts/note.njk
tags:
  - design
  - systems
  - storybook
  - figma
---

When it comes to drawing a design system in Figma or Sketch or what have you, there’s a question we have to ask ourselves all the time: what should we document? And what should we leave out?

So we want to have our icons and colors in there, right? We don’t want to keep remaking those over and over again. Oh and we definitely want buttons and form components, too. That’s a no brainer. I guess we want our modals and our main layout or page designs with all the navigation and what not. Definitely don’t want to have to keep doing that either.

But at some point it gets tricky to decide what should be in the Figma library vs. what should be in something that lives in Storybook. Do we put all our guides about how to use these components in Figma? Or what about the does and dont’s? What about props and component names—do we follow precisely what’s in Storybook even if it’s bad or something we’re embarrassed by?

When documenting a design system the goal is clear communication and efficiency. We don’t want designers to open up Figma and then ask “what do our popovers look like?” and then have to go into the app to find out. They don’t want to go into Figma and find a component called Pagination and then be told by a developer there is no such thing, that it’s the infamously named NumberedFlorpfSwitcher.

You can’t put your entire design system in [Storybook](https://storybook.js.org/) because that’s not where most of the design work happens. So we have to make a decision: use Pagination and be correct for the future once we fix it or live with the horrid NumberedFlorpfSwitcher?

The second option is always better in my opinion. Not because it’s the most correct, but because it’s the most useful.

Let me explain.

Sometimes you need to make concessions or create Figma components that just don’t exist in the front-end at all and are instead useful tools for the team just to get shit done. For example: a state prop on a Button component with hover, focus, active, and disabled. Now, in the `<Button>` component all those things are not part of the state React prop, and so isn’t it more correct to document the component in Storybook precisely?

I’d say no, even though it’s more correct.

Because this is the true challenge of design systems work: the difference between correct-ness and useful-ness. We could document everything—every disabled button hover state and every possible combination of components—within Figma. We could name them precisely as we do in the front-end. That’s correct-ness. I see a ton of design systems within Figma that are desperately trying to be correct. But if we want our design system to be _useful_ to our team then we need to cut things out. We really don’t need everything in Figma, only what will speed us up as designers.

Here’s another example: in the Sentry design system in Figma I made an Avatar component. All it does is let you choose between user, organization, and team icons. Now does a component like that exist in the front-end? Nope. It’s a bit bonkers down there right now. But it saves me so much time when doing design so that I don’t have to import 3 separate icons to make 1 simple table.

So: clear communication and efficiency. They’re the two qualities of a design system that we have to constantly keep in balance. And if we put too much focus on one end of that spectrum then we might neglect the other in the process.

If we want to be correct, okay, let’s have components of everything and an enormous Figma library of stuff we need to maintain. But if we want to be useful to designers who want to get an understanding of the system, let’s be brief. No designer will ever need the hover state of a disabled button and if we want to do an audit then we should absolutely do that in the front-end, not within Figma. Stuff changes too much to ever expect 100% correctness within Figma.

So we gotta be useful instead.
