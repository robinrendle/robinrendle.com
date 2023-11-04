---
layout: layouts/cascade-post.njk
title: What Would HTML Do?
date: 2023-10-21T09:53:08-07:00
city: San Francisco
country: California
extract: And a world without faff.
---

Friends!

This weekend I’ve come down with a bad cough/flu so I’m going to keep typing and then stop when I stop. Apologies in advance if this whole thing is more of a surrealist poem than a typical newsletter. Okay, let’s do this!

_(cough)_

## i.

Last weekend we talked about [colors in CSS](https://robinrendle.com/the-cascade/002-color-me-curious/) but I missed some important notes about oklch() and [uniform perceived brightness](https://robinrendle.com/notes/design-systems-color-spaces-and-css/). That’s kind of a big deal since you usually want your colors to have a similar lightness and that’s especially useful for creating colors in [a design system](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl):

> OKLCH is better for color modifications and palette generation. It uses perceptual lightness, so no more unexpected results, like we had with darken() in Sass.

So from here on out I’m gonna try and stick with oklch() when choosing colors and oklab() when using gradients in CSS. If neither of those work, I’ll resort to experimenting with alternative color spaces. Phew.

## ii.

Chris wrote [a great response](https://chriscoyier.net/2023/10/20/more-oklch-musings/) about the benefits and disadvantages of using oklch:

> ...it lacks the copy and pasteablity of HEX, and I feel like that alone hampers any color model because we are creatures of convenience. Just as big: virtually no design tooling, or even color-specific tooling (e.g. “color pickers”) support OKLCH, so just getting a color into your CSS is a non-trivial adventure.

Most design tools default to HEX, color pickers default to HEX, too. That difficulty alone is enough to slow adoption, even if OKLCH is better in a ton of other ways.

(There are some [neat tools](https://oklch.com/#70,0.1,245,100) to help though.)

## iii.

Here’s a bit of CSS weirdery that I’d never seen before: a few weeks ago I was styling a form and using a tutorial when I spotted this bit of curious CSS...

```css
input[type="range" i] {
}
```

Huh, I thinks to meself. What’s that `i` doing at the end? I’ve never seen that before. A few weeks later and I spotted it again in Michelle Barker’s post about [styling external links with attribute selectors](https://css-irl.info/styling-external-links-with-attribute-selectors/):

```css
/* Case sensitive */
a[href*="css-irl" s] {
}

/* Case insensitive */
a[href*="css-irl" i] {
}
```

So that’s what it does! Adding an `s` makes the selector case-sensitive and `i` makes it case-insensitive. Usually we can slap a class on things and be done with it, but on the rare occasions we can’t style HTML with a class, this might come in handy in the future.

### iv.

I just started a new gig at [Retool](https://retool.com) and it’s super interesting because when you’re making internal tools you likely just want to drag and drop a bunch of components, pull in your data, and be done with things. So Retool has it’s own big [component library](https://retool.com/components) where you can do just that.

During some work that was being shown about updates to these components, I couldn’t help but think “what would HTML do?”

It’s a question that always helps me whenever I’m working on design systems problems, like how to structure or expose a component or how to name props. And asking that question – WWHD – always makes me want to simplify things, to make it so that you don’t have to go read the darn docs, in the hope that these components can easily snap into each other without much faff.

And now that I think about it in my flu-induced haze, that’s really the magic of HTML isn’t it? Not so much the simplicity of each element on its own but the magic of HTML is really the marvelous complexity we can create when we combine these humble pieces together.

Okay, I’m not sure that made any sense since my flu appears to be getting worse. I’m gonna go back to bed and I’ll see you all next week.

See you in the _cough_ Cascade _cough_, <br />
🤒 Robin

<br />
<br />
