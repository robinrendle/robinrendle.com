---
layout: layouts/note.njk
title: Design systems, color spaces, and CSS
date: 2023-10-14T20:31:33-07:00
city: San Francisco
country: California
extract: OK…lch.
---

Earlier today I wrote a thing for the ol’ newsletter about [which color space you should use in CSS](https://robinrendle.com/the-cascade/002-color-me-curious/) and I mostly focused on background gradients just to explain the core concepts to myself. However! I totally missed this post about [why oklch() is a great go-to choice](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl), written by Andrey Sitnik last year:

> Unlike rgb() or hex (#ca0000), OKLCH is human readable. You can quickly and easily know which color an OKLCH value represents simply by looking at the numbers. OKLCH works like HSL, but it encodes lightness better than HSL.
>
> [...] OKLCH, LCH, HSL have values we can set that are much closer to the way people naturally think about colors. OKLCH and LCH contain 3 numbers which, respectively, represent the following: lightness, chroma (or saturation), and hue.

So that would look something like this:

```css
.element {
  color: oklch(0% 0 0 / 50%); /* black with 50% opacity */
}
```

After playing around with it in Codepen a bit, I can see why folks love HSL so much. You can quickly change the hue there without having to go into your color picker or back into a design app or DevTools.

But oklch() has a big advantage over hsl():

> HSL is bad for color modification. Many teams have asked the community to [avoid HSL](https://wildbit.com/blog/accessible-palette-stop-using-hsl-for-color-systems) for design system palette generation. Additionally, like RGB and hex, HSL can’t be used to define P3 colors.

I’m just gonna quote Eugene Fedorenko’s post from that link above:

> While HSL and HSV are fine choices for choosing a single color, they’re not suitable for building a color system, as they simply transform the RGB model and ignore the complexities of human perception. To see what’s wrong with them and find an alternative, we need to look at color theory and consider other color spaces.

Aaand back to that first post:

> OKLCH doesn’t deform the space; it shows the real color space with all its complexity. On one hand, this feature allows us to have predictable lightness values after color transformations and P3 color definition.

Great, wonderful, okay! oklch() seems perfect for creating a color palette in a design system since it’s easier to modify, easier to read, plus it gives you p3 colors to boot.
