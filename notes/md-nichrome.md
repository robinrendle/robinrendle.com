---
title: MD Nichrome
date: 2021-08-18T03:23:39.002Z
city: San Francisco
country: California
layout: layouts/note.njk
extract: A damn fine typeface by Mass-Driver.
---

[MD Nichrome](https://nichrome.mass-driver.com/) is a new type family from Mass-Driver and boy howdy does it look wondrous. I love the marketing website for it with all the flashy-as-hell animations showing just how flexible Nichrome is. Some of those animations are made with a python library called [Cold Type](https://coldtype.goodhertz.com/). Never heard of it before, but sure looks neat.

Gah! If you scroll down the page to the blue section the background starts to fuzz a bit like an old TV which I absolutely adore. It gives this sense of texture and age, which basically all websites lack. It’s a small detail but it’s perfect for the look and feel of Nichrome.

Double gah! Look at that footer.

Of course I hit Inspect Element and scrolled around a bit, noticing that—_huh_—isn’t it neat that today you can see the design tokens of modern websites like this?

```css
:root {
  --black: #000000;
  --night: #112233;
  --cobalt: #3050ff;
  --rhubarb: #d46379;
  --tangerine: #fa935e;
  --straw: #dccc9c;
  --sage: #cccec3;
  --off-white: #eeeae5;
  --v-margin: 100px;
  --h-margin: 75px;
  --gutter: 25px;
  --text: var(--black);
  --background: var(--off-white);
  --wght: 92;
  --slnt: 0;
}
```

These are CSS custom variables and I just wrote about [how neat they are for the CSS-Tricks newsletter](https://css-tricks.com/newsletter/264-inline-css-custom-properties-and-handy-dandy-tools/)—but!—I didn’t think about how it’s like a sneak peek into the visual rules of a website.

You can take a look at mine on this very website, too:

```css
:root {
  --color-background: #111;
  --color-border: #222;
  --color-title: #fff;
  --color-text: #bbb;
  --color-subtext: #777;
  --color-faded: #444;
  --color-link: #fe7b53;
  --color-backgroundNav: #000;
  --spacing: 20px;
  --base-font-size: clamp(100%, 1rem + 0.5vw, 21px);
  --font-fallback: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif;
  --header-height: 45px;

  @media screen and (min-width: 767px) {
    --header-height: 50px;
  }
}
```

I’m doing some whacky stuff I shouldn’t be doing with the `--header-height` variable in my `global.scss` file. But it’s neat you can do even that in the first place (even if I shouldn’t be because it makes for some weird-lookin’ and fragile CSS)!

Anyway. MD Nichrome rules. CSS custom properties rule. That is all.
