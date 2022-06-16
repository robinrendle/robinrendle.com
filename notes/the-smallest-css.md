---
layout: layouts/note.njk
title: The Smallest CSS
date: 2022-06-13
city: San Francisco
country: California
extract: And 15 lines of CSS.
---

What’s the smallest amount of CSS that you can write to make HTML look halfway decent? I took a crack at that today after I removed all the styles from my website and went back to Eleventy. Here’s what I’ve got so far.

First up you gotta have those responsive images...

```css
img {
  max-width: 100%;
}
```

And secondly...

```css
html {
  color-scheme: light dark;
}
```

...that’s what’s required for dark mode these days? [This is amazing](https://web.dev/color-scheme/):

> The color-scheme property [...] allows an element to indicate which color schemes it is comfortable being rendered with. These values are negotiated with the user's preferences, resulting in a chosen color scheme that affects user interface (UI) things such as the default colors of form controls and scroll bars, as well as the used values of the CSS system colors.

Not so fast! Looks like there’s a gnarly [bug in Safari](https://bugs.webkit.org/show_bug.cgi?id=209851) where the link colors are pretty dang inaccessible:

![A screenshot of this website in Safari, showing the inaccessible colors when the color-scheme CSS property is enabled](/images/website-safari-example.webp)

So, for now, I can’t use this `color-scheme` stuff to toggle dark mode automatically. Shucks. But okay, onto the text. We use system fonts to give ourselves a baseline because almost every device now has pretty amazing system fonts these days:

```css
body {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
```

Then we can add a tiny bit of padding just to beef up the margins on smaller devices:

```css
body {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	padding: 0 15px;
```

...we can then set a max-width on the body element to prevent things from stretching out too wide on larger devices:

```css
body {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	padding: 0 15px;
	max-width: 650px;
```

And finally we can set a bigger font-size and pair that with a slightly bigger line-height for legibility:

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  padding: 0 15px;
  max-width: 650px;
  font-size: 115%;
  line-height: 1.4;
}
```

Oh wait finally for real this time:

```css
pre code {
  white-space: pre-wrap;
}
```

...I noticed the code blocks are unreadable since they don’t wrap by default, so I slapped this on at the last minute.

But that’s about it! I think I’ll leave it like this tonight. But it’s kind of amazing what you can do with less than 15 lines of CSS.
