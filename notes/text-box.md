---
layout: layouts/note.njk
title: text-box
date: 2024-12-27T07:54:29-08:00
city: San Francisco
country: California
extract: Goodbye, magic numbers.
---

I’m real excited about `text-box`, a new CSS property that helps with text alignment and layout. You might remember whispers about [`leading-trim`](https://css-tricks.com/leading-trim-the-future-of-digital-typesetting/) from a few years back and this new syntax has replaced all that.

I first spotted this bad boy on [the Webkit blog](https://webkit.org/blog/16301/webkit-features-in-safari-18-2/) the other day:

```css
h2 {
  text-box: trim-start cap;
}
```

This will trim the space above headings so that we no longer have to do any weird `margin-top: -3px` shenanigans to align some text with an image. Over on Piccalilli, Jason Bradberry has an in-depth walkthrough of [text boxes on the web](https://piccalil.li/blog/why-im-excited-about-text-box-trim-as-a-designer/) where he shows how handy this property might be in the case of buttons, too.

Like this:

```css
button {
  text-box: cap alphabetic;
}
```

I’m always fighting the text-box when it comes to buttons in an interface and so hopefully this property fixes all that. Also, this is so handy as a default for some elements that I can see this fitting into CSS resets in the future.

`text-box` is shorthand for two other properties though: `text-box-trim` and `text-box-edge` and although I’ve spent twenty minutes now trying to understand their relationship with one another...I’m coming up short. It all feels super confusing to me! So for now I’m gonna stick with the simple `text-box` shorthand and ignore the complexities of how those other properties overlap.

Oh and Jan Nicklas has collected [more examples](https://github.com/jantimon/text-box-trim-examples?tab=readme-ov-file) that are worth taking a look at, too.
