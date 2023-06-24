---
layout: layouts/note.njk
title: Update
date: 2023-06-23T16:57:28-07:00
city: San Francisco
country: California
extract: New day, new website.
---

Fixed a few things around these parts today; I started using [Fakir](https://www.underware.nl/fonts/fakir/preface) for headings and tidied up a lot of stuff on smaller screens. The biggest change is that the headings now change size depending on the width of the container that they’re in, like this:

```css
.title-wrapper {
  container-type: inline-size;
}

.title-wrapper h1 {
  font-size: 15cqw;
}
```

One of the problems with this type of responsive heading is that I want the size of the text to change depending on the number of words in the title. So if a title is small—like “Analog”—then I want that to be enormous, but if the title is real long—“Questionable Best Practices in Modern Front-end Development”—then I want the text to scale down a bit and fit in a reasonable space.

But after all these years, it looks there’s no good way to responsively set the font-size of big headings without knowing the exact number of words or letters in them. We’ve got `rem`, `vw`, and now `cqw` units but none of them work precisely the way I want them to.

So I’m kinda forced to write a bunch of logic that takes into consideration...

- Small, one-word titles that need to be monstrously big
- Long, one word titles that need to be medium-sized
- Real long sentences that need to be smallish-sized to fit

That convinced me that I should just write a whole bunch of hacky JavaScript that detects how many words and letters are in the `h1` and then slaps a CSS class on it:

```javascript
const title = document.querySelectorAll("#heading")[0];
const titleLetters = title.textContent.length;
const titleWords = title.textContent.trim().split(/\s+/).length;

if (titleLetters > 15) {
  title.classList.add("title-long");
}

if (titleLetters > 10) {
  title.classList.add("title-medium");
}

if (titleLetters > 8 && titleWords < 2) {
  title.classList.remove("title-short");
  title.classList.remove("title-medium");
  title.classList.add("title-quite-long");
}
```

I’m sure there’s a better way to do this but, hey, it works fine for now.

I had a lot of hacky fun making the headings work across different screen sizes although it’s a bit frustrating that there’s no way in CSS to make a relationship between the number of words in a sentence and the size of the text. Also, having so many ways length values to set the font-size definitely adds to [that feeling of overwhelmingness](/newsletter/the-staggering-frontiers-of-css/) when it comes to writing CSS.

I don’t want yet another value in CSS—`cqw` works well enough for me. But I really wish there was some way to do this CSS alone. Something like...

```css
.element:letters(<5) {
  font-size: 10cqw;
}

.element:words(> 2) {
  font-size: 15cqw;
}
```

`:letters()` and `:words()` is perhaps a little silly and maybe it’s super not performant to do this with CSS alone but the idea is sound to me. It’s sorta like a media query, I guess.

Anyway, lemme know what ya think about the new design of this here website. I’m sure there’s all sorts of kinks I’ll need to smooth out this weekend.
