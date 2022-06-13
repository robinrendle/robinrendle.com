---
layout: layouts/post.njk
title: Building a UI Kit in Figma
date: 2019-03-17 13:01:00 -07:00
tags:
  - design
extract: A few notes on how we built the UI Kit at Gusto.
city: San Francisco
country: California
---

I’ve been working on our UI Kit at Gusto for a couple of months now – this is a project in Figma that lets other designers on our team examine our components and get a better picture of what’s available to use in their own designs. There’s buttons and forms, typographic styles and colors, a verifiable cornucopia of icons and illustrations to reuse and, in time, improve.

The other day I changed one symbol in our UI Kit though and watched as hundreds of components updated their colors, fonts, and other styles, saving me about a whole day of work. And I realized that being slow and considerate – putting all this effort into how things are built – really pays off in the long run.

Here’s some very rough notes about that process, how I went about organizing the kit, and all the challenges I encountered along the way.

## Understanding the problem

Before I opened up Figma I jotted down a quick list of all the things that our team needed to make great work. After a bit of interviewing and research I found that our designers need to:

- learn what components exist
- have a single source of truth where all the documentation lives
- learn about our shared brand and UX patterns
- figure out where and how to install our fonts
- understand the limitations of the system (so that could be typography, colors, and our grid)

With that in mind I spent a ton of time looking through different UI Kits, such as the [Android GUI](<https://www.figma.com/file/divF7pYDKIMDfrOH0rQbRa/Android-GUI-by-Great-Simple-Studio-(Copy)?node-id=0%3A4160>) or how the team at Shopify has designed their kit for [Polaris](https://polaris.shopify.com/resources/polaris-ui-kit). This all gave me a ton of inspiration as to how to structure things so after that research I believed that our kit could be broken up into four pages in a Figma doc; Getting Started, Components, Patterns, and Symbols.

## Getting started

This page would inform designers what the UI Kit is and how to go about using it as well as any setup stuff they need to know. Today that page happens to look like this:

<div class="m-wrapper--full">
  <img class="cell-b40" src="/images/getting-started-page.jpg"/>
</div>

Ideally this page should kind of act as an FAQ for design systems questions – who the team is, how to contact us, and the basics of how to use Figma.

## Components

This would be a list of all the components that are available to our design team as well as default typography styles, colors, and icons. Pretty standard stuff that you’ve likely seen a million times before already:

<div class="m-wrapper--full">
  <img class="cell-b40" src="/images/components-page.jpg"/>
</div>

I spent a ton of time ordering this page and thinking about how designers might quickly skim read this doc to find a specific section – like Alerts. But the cool thing about Figma is that you can send links to specific frames in a project which I find super helpful when I’m pointing designers to a component via Slack.

(I think the hyperlinkability of Figma is the single greatest reason why I would recommend it to anyone else out there starting a design system.)

## Patterns

We needed a section of the kit where designers could learn about our common UX patterns and learn how to combine certain components together. This page would show templates and more complete UI examples:

<div class="m-wrapper--full">
  <img class="cell-b40" src="/images/patterns-page.jpg"/>
</div>

## Symbols

We also needed a `Symbols` page which (much like in other kits) would be where I make all the Master Components that those three pages above inherit from. What we needed was a private space that other designers don’t interact with but is where I can have all the different variants of buttons and forms.

In Shopify’s Polaris design system they have their own web UI kit which happens to be in Sketch and they have a dedicated page for this that’s pretty nearly organized:

<div class="m-wrapper--full">
  <img class="cell-b40" src="/images/aegouahepiguaeg.jpg"/>
</div>

The other nifty thing about Figma is that you can move that `Symbols` page into a separate document entirely and make it private. This means that other designers won’t be able to accidentally edit or destroy those components as they’re looking through our kit.

Anyway, here’s a zoomed-in version of just one section of our symbols:

<div class="m-wrapper--full">
  <img class="cell-b40" src="/images/symbols-figma.jpg"/>
</div>

## Naming components

If you look closely at the image above you might notice that weird naming convention for the components: `Input/Default`, `Input/Focus` and `Input/Error`. That `/` is a hack that helps Figma identify which components are instances of one another and I only found out about this after watching [a video tutorial](https://help.figma.com/article/66-components) (and I highly recommend that before you start working with Figma that you go through all of these).

So wait – how do you use instances and why are they neat? Well, if you were in a new Figma doc and threw in our `Input/Default` component you’ll notice that on the right hand side there’s an `Instances` menu and by selecting that dropdown you’ll see that you can easily switch between the error and focus inputs we setup with that `/`:

<div class="m-wrapper--full">
  <video autoplay autostart loop class="cell-b40">
    <source src="/images/error-states-animation.mp4" type="video/mp4" />
  </video>
</div>

Neat, huh? I wrote a little bit more about [nesting components in Figma](https://css-tricks.com/nesting-components-in-figma/) a while back but I think the main benefit is that folks on our design team can easily see what all the variations of a component are and manipulate components and their various subcomponents.

You could set this up in your own kit to switch between different themes of a component, such as `ButtonPrimary/Darkmode` or something. But at Gusto we use this in a couple of clever ways: we have a few user profiles where the UI will change depending whether you’re an employee or an employer. And so I created a `Layout` component that lets folks switch between the different UIs:

<div class="m-wrapper--full">
  <video autoplay autostart loop class="cell-b40">
    <source src="/images/paoeoiaeg.mp4" type="video/mp4" />
  </video>
</div>

So as you can see we have different kinds of `PageTitle` – a regular old title as well as tabs and a progress bar for flows. Ideally designers shouldn’t have to keep dragging in new components and aligning them all over the place and figuring out spacing each time – with Instances we can stop some of those repetitive tasks.

The reason why I’m bragging about this is because I’ve found it’s saved me a TON of time drawing these things. And toggling these components on and off and replacing them with variants feels like working with a space-age design tool.

## A Note on Styles

At Gusto we have a color palette that can be used to design new components or make slight adjustments to existing ones. It’s what we call a CSS “helper” where you can write code like this in React to change the color of some text:

```
<p className='c-water-500'>This is some text</p>
<p className='c-salt-1000'>This is some more text</p>
```

Ideally we probably shouldn’t be using it like that but that just gives you an idea of what’s possible with these utility classes. My point is that we have a strict set of color variables and in Figma I set up Color Styles to match them. In the right hand side of every new doc made at Gusto you’ll see our default text styles (which matches our default HTML styles) and our variables (that matches our Sass map with those hex values added):

![color-styles-figma.jpg](/images/color-styles-figma.jpg)

This is great because often I don’t think designers will even need to view our UI Kit at all – once they start a new doc they can just select a color or a text style from the side bar without moving away from their design.

To make this color palette I had to go through our front-end and understand our system and make sure that the variable names match up exactly – and that’s when I discovered a lot of this work requires constantly diving into the front-end, looking at what’s currently possible, and then making a system in Figma to reflect that.

Anyway, when a designer starts a new Figma doc (it would be so neat if you could do this by typing in http://figma.com/new or something like how Google Docs does things) they can immediately use the component from our design system by toggling `option` + `2`.

On the left hand side there’ll be a list of all the components available to them which they can also drag and drop into their designs without having to head over to our kit.

## Onboarding designers is pretty dang easy

I think perhaps the second greatest advantage of using Figma over other design tools is that I don’t have to worry about which version of the UI Kit, or even which version of Figma to that extent, is being used by our design team. Everyone is constantly on the latest version and so I don’t have to manage software versions or bug folks to update things.

On day one of starting Gusto we can just point them to figma.com and they’re off to the races!

Although one thing we have to make sure is that everyone on our team is familiar with Figma’s way of doing things. Using a component library directly in a design tool is still a pretty novel concept for many and so we have to sit down with designers during onboarding to make sure they have a firm grasp of this stuff. A short while ago we started onboarding our designers and familiarizing them with our design system so that we get to chat to them about how Figma works. The neat thing is that this gives us an opportunity to get to introduce ourselves and explain how our design systems team can work with them and their design process, too.

## Random note: overlays are super neat

One pattern that I really like is the concept of [Overlays](https://www.figma.com/blog/introducing-overlays-taking-prototyping-to-the-next-layer/) in Figma, as they noted on their blog:

> We reimagined the basic delivery of overlays. Now after you add a prototype link to connect two frames, you will see a new option in the property panel. This option will allow you to set the destination frame as an overlay. Once selected, you can customize where the overlay is placed and how it should appear.

So with this functionality in mind I drew our modal, drawer and popover components as a series of Overlays that designers can more easily use to mockup their ideas:

  <img class="cell-b40" src="/images/Screenshot%202019-03-17%2015.34.12.jpg"/>

Anything I can do to make their prototyping experience just a little bit better is worth it in my opinion. However! In Figma there are a ton of things I haven’t figured out yet...

## A lot of stuff is missing from the Kit today

I could probably do a much better job of styling the Kit and the components that house things by making them feel a bit more Gusto-y and improve the overall visual fidelity of things. For now, and out of a lack of time, I think things are fine enough though.

I guess the important part to remember here is that – even if a kit isn’t exactly the pinnacle of quality – having a half-baked UI Kit is better than nothing at all.

Also I think our design patterns need a ton of love and this is the space where we’ve currently spent the least amount of time. Ideally we could give detailed guidance around typographic hierarchy and form design as well as how to position things in our templates or modals and drawers. I reckon this will slowly improve over time as our team leaves refactoring mode and starts to think more holistically about ways to improve the user experience in our app.

## Buttons are for nerds

Okay so I don’t know why I typed that, I guess I just assumed that at this point no-one is reading this thing and I can type whatever I want. But also seriously, buttons are kinda hard to work with in Figma because when you import a symbol you often want to change the text inside it – but! – the button can’t increase depending on the content within it.

In some cases this means that designers have had to detach a component from its Master before changing the text inside and increasing the width/height of the component manually – and that’s kinda frustrating.

At Gusto we’re not so worried about updating old designs with new styles but I can see why encouraging designers to unlink their design from the core symbols is a no-deal thing for other companies.

## Keeping things in sync is tough

It’s really easy for the UI Kit and the front-end to get out of sync with one another and it feels like a lot of repetitive work to change a front-end thing like the :focus state of something and then have to boot up Figma to change that style in the kit, too. It requires that someone like me is intimately familiar with our front-end code and our design.

For now the way I’m justifying all this extra work is that 1. designers need to use these components in their designs and if I save them 10 minutes drawing things then I’m okay with that and 2. I can’t think of a better solution for now.

This is why I’m eyeing Framer X and wondering if I can just pipe in our Component Library directly into it. But I don’t think that’s going to be possible for our team anytime soon.

## Making symbols responsive is also ugh

Also I’m not sure how to name or handle responsive components. For example, our Table component has one style on desktop but another one on mobile: at smaller screen sizes we break each row into a separate card so that it’s easier to scan and the user doesn’t have to scroll all over the place to read a single row.

However – how should I name these components in Figma? Should I create a `Table/Desktop` and a `Table/Mobile` component and style each uniquely? In an ideal world if you decreased the horizontal width of a regular `Table` component it would snap between these two components automatically just like a media query. My point is that I _really_ don’t want to have to draw two versions of every component we have. It’s hard enough maintaining one desktop version of everything.

The more I think about this stuff the more I realize that the codebase has to be your real source of truth and all design tools will have to in some way pipe into your component library. I can definitely see how at larger orgs and design teams that this could simply be impossible.

## Aligning things in a grid with Figma is still kinda annoyin’ too

One thing I always want to do is make a new grid in Figma. Whether that’s aligning a ton of icons next to each other or placing components in a grid.

In an ideal world I want to set the number of columns and rows and let Figma place things inside that ruleset, just like CSS Grid. And maybe that’s possible today but the current way that the grid system appears to work is that it’s kinda just outlines that you can align things next to. And [Smart Selection](https://www.figma.com/blog/introducing-smart-selection/) is great but it’s also pretty unpredictable about where things will go when I click that button. It’s nice to quickly move items in a group like this and saves a bunch of time but I’d still like a ton of grid and alignment improvements to be made.

Basically the less time I have to manually move things with my mouse or trackpad, the better.

## Organizing components is difficult

This is more of a problem of time than a problem with Figma itself, as I’m still not entirely happy with the UX of large parts of our Kit. For example we have one section called “Information organizers” which is really confusing (and isn’t that what pretty much all UI does anyway – organize information?).

Looking at other UI Kits, they seem to struggle with this stuff too.

## The UI Kit is not our design system

There are tons of things in the front-end that can’t be reflected in our UI Kit today which I find difficult, too. Things like our CSS helpers and how components will change their styles based on the width of the viewport. And this isn’t a criticism of Figma at all by the way, it’s just a good reminder of how difficult it is to represent front-end constraints and design in something that isn’t a browser.

Anyway, everything I’ve mentioned here is only how we are currently do things today – all of this is likely to change the more we work with our design team and understand what they need to do their work. And I would heartily recommend checking out other UI Kits to learn about how they go about doing that stuff.

But it’s important to note that the components that are in our UI Kit are not a reflection of our design system. I think when people say “design system” they think of something visual – the buttons, the forms, the cards and modals. But the more I learn about design systems is it’s not about this technical or visual representation of our code. Neither is a design system a series of cool tools or a repo or a bunch of technologies combined together, as much as we might use those things in our design system work on a day to day basis.

A design system is a mirror, reflecting how our design team communicates with one another and how we then translate that relationship between us into front-end code. If our relationships suck then our code will suck and our users will have a sucky experience overall.

And so it’s important to remember that a design system is not a series of tools, but a community instead.

---

Anyway, here’s a copy of [our UI Kit](https://www.figma.com/file/IxdCArrBNi8mVPXgCwXqwN/UI-Kit-Public?node-id=1736%3A1646) that you can play around with!
