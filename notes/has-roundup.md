---
layout: layouts/note.njk
title: :has roundup
date: 2024-03-24T17:24:24-07:00
city: San Francisco
country: California
extract: A million smart and handy examples.
---

Smart idea [via Jim Nielsen](https://mastodon.social/@jimniels/112152312510326541) here:

```css
body:has(dialog[open]) {
  overflow: hidden;
}
```

I still haven’t used :has outside of little demos and screwing around in Codepen but there’s been a growing chorus over the last few months about all the tiny yet amazing things that :has can do for us.

A few years ago Ahmad Shadeed wrote [the canonical post](https://ishadeed.com/article/css-has-parent-selector/) on all this stuff and showed the most common example right out the gate:

```css
.card:has(.card__image) {
  display: flex;
  align-items: center;
}
```

Or: change the styles of the parent selector whether or not there’s a child inside. Eye-opening and wondrous stuff still, even 2 years later. The list of examples Shadeed adds at the end of his post are excellent too but it all pales in comparison to this [interactive guide](https://ishadeed.com/article/css-has-guide) he published back in February.

In late 2021, [Bramus noted](https://www.bram.us/2021/12/21/the-css-has-selector-is-way-more-than-a-parent-selector/) that :has isn’t a parent selector but we should see it as [a family selector](https://developer.chrome.com/blog/has-m105/) instead and used this example:

```css
h1:has(+ p) {
  background: red;
}
```

This h1 will only have a red background if it has a `<p>` tag right after it. Very neat! But also these three lines of code have to make me completely rethink my mental model of what’s possible with CSS today. If someone showed me a mock and said “can you do this with CSS?” I would probably get all sweaty and then disappear in a cloud of smoke.

The other day Andy Bell wrote a great piece about [some little ways he’s using :has](https://piccalil.li/blog/some-little-ways-im-using-css-has-in-the-real-world/) and I particularly like how he’s used it here (I’ve changed the code slightly):

```css
.post p {
  max-width: 600px;
}

.post p:has(span.codepen) {
  max-width: unset;
}
```

Set a width on your paragraphs and then when you’ve got iframes and stuff inside, undo those styles. Smart!

[Way back in 2021 again](https://css-irl.info/has-has-landed-in-safari/), Michelle Barker noted that you could use this family selector to detect when an element inside a form is invalid and then throw up an error state, too:

```css
form:has(input:invalid) {
  border: 2px solid red;
}
```

All this is extremely interesting and I expect over the coming years there’s going to be a million more handy examples to add to this list.
