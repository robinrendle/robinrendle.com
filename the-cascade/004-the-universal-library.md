---
layout: layouts/cascade-post.njk
title: The Universal Library
date: 2023-11-26T09:05:45-08:00
city: San Francisco
country: California
extract: More notes on colors in CSS.
---

Friends!

This week, two things.

## i.

It took me a long time to figure out why color-mix() is so neat and why I’d need it as a developer. But it wasn’t until I spotted [this demo on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix) where it made a lot more practical sense to me — mixing a splash of white into a color.

![lololol.png](https://assets.buttondown.email/images/b0cf4e6c-9c88-4b04-a2a5-8e2e4152a107.png?w=960&fit=max)

Often I want to tweak a color by opacity, but being able to mix a dash of white or black into a color seems really helpful and feels like something I would want to do from time to time. On this note, I spotted Lea Verou’s demo about color-mix a few weeks ago and I knew it was cool but it took me ages to figure out precisely why and how.

[Here’s Lea’s Pen](https://codepen.io/leaverou/pen/gOZZQZb?editors=1100) where you can see a series of colorful buttons on a big white page...

![aegaeg-examples.png](https://assets.buttondown.email/images/9a00e310-d576-4826-8522-b31b14b0545a.png?w=960&fit=max)

So far this doesn’t look all that impressive but if we look at the HTML for each button we’ll see this:

```html
<button style="--color: skyblue">Click me</button>
```

All the colors for these buttons are defined by this --color variable and then passed down into the CSS, where Lea sets the background, color, and border but—and here’s the magic—Lea uses the color-mix function to make each property lighter or darker.

Like this:

```css
button {
  background: linear-gradient(
    color-mix(in oklch, var(--color) 0%, oklch(0.92 none none)),
    color-mix(in oklch, var(--color) 0%, oklch(0.8 none none))
  );
  border: 1px solid color-mix(in oklch, var(--color) 0%, oklch(0.5 none none));
  color: color-mix(in oklch, var(--color) 0%, oklch(0.32 none none));
}
```

What’s happening here is that first Lea is transforming whatever color we pass in as oklch then changing the lightness (.92, .9, .32).

This is extremely cool because what this makes clear to me is that we're able to set relationships between these CSS properties. That's sort of mind boggling since now we can make an honest to goodness design system without having to define variables like this:

```css
:root {
  --button-primary-bg: #000;
  --button-primary-text: #000;
  --button-primary-border: #000;
  --button-secondary-bg: #000;
  --button-secondary-text: #000;
  --button-secondary-border: #000;
}
```

We can just tweak how the relationships between color, background, and border work and then feed the component any number of colors in whatever color format (rgb, hex, lch) that we want.

So with Lea’s buttons you can quickly make a red, blue, or yellow button just by changing the variable you pass into the button:

```html
<button style="--color: red">Click me</button>
<button style="--color: blue">Click me</button>
<button style="--color: yellow">Click me</button>
```

I find this so very, very nifty.

And the even niftier thing about it is that color-mix() is already [well supported in browsers](https://caniuse.com/?search=color-mix), too.

## ii.

I’ve always dreamt of a universal library.

Instead of searching for react-date-picker or whatever, I’ve always wanted a framework-agnostic components where I can search for “time” or “clock” and see all the ways we might represent time as a web component and I can throw that into whatever project I’m working on. Sure, it could be a clock or a calendar or a timeline or ten million other things.

From there, I wanna copy and paste that code right into my website/bloated web app and never, ever install or manage a hellish amount of dependencies and security vulnerabilities that I simply don’t have the time or skill to understand. I want this universal library of components to feel like super-powered HTML and CSS, not like I’m tryna get my browser to become a particle accelerator.

There’s a few reasons for this.

First, I have made a lifetime’s worth of tab components and I never, ever want to think about tabs ever again.

Second, it’s always felt particularly foolish that us web developers tend to rebuild every component and pattern for every framework over and over again. vue-datepicker and react-datepicker and bootstrap-datepicker etc. etc. etc. The whole point of design systems is _not_ to redo work so having multiple libraries of competing components that all really do the same thing seems, well, _wrong_. We want variations, improvements, and different takes of how to build a component—but different implementations that do the same darn thing for every framework in the world has always felt silly and wasteful to me.

And this is particularly painful when there’s multiple design systems in an organization! Why do we have four buttons in three different languages! Why do they all work and look different! And now we want a new one! Aggggh!

Enter web components.

I’ve been particularly ignorant about web components, mostly out of confusion (but there are [some legit reasons](https://daverupert.com/2023/07/why-not-webcomponents/), too). Now in 2023 it feels a bit embarrassing that I don’t know how web components work or how to build them, especially as over the last few weeks I’ve seen a constant stream of great examples that seem pretty handy:

- Zach Leatherman’s [browser-window](https://zachleat.github.io/browser-window/demo.html)
- Mayank’s [the-tabs](https://www.mayank.co/blog/tabs)
- Dave Rupert’s [fit-vids](https://github.com/davatron5000/fit-vids)

So next week I’m gonna walk through what web components are, why they’re useful, and how to get started. All the tutorials I’ve seen tend to jump right to the most complicated examples first and this hurts my brain. Instead, we’re gonna start from the beginning with the simplest, most useful examples, and build up in complexity from there.

See you next week, <br/>
`<robin-rendle>`

 <br/>
 <br/>
 <br/>
 <br/>
