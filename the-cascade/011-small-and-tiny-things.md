---
layout: layouts/cascade-post.njk
title: Small and tiny things
date: 2024-01-14T18:42:16-08:00
city: San Francisco
country: California
extract: And a warm mountain bath.
---

E-pals!

One of my favorite things about the web is how the addition of  a tiny and almost insignificant new property can delete hundreds of lines of extraneous code that we’ve had to write for a decade or more. I strongly believe that replacing a whole bunch of CSS with a single line of HTML is more comforting than taking a long hot bath on a mountain top.


## i.

Here, let me prepare your bath this morning:

```html
<input type="checkbox" switch>
```

This—oh sorry for intruding, take a lemon-scented towel—is a native switch element and I spotted it first in [Anthony Ricaud’s demo](https://codepen.io/Rik/pen/gOEYZgE?editors=1000) before the holidays. If you click that link in  Safari Technology Preview then it’ll look something like this: 

 ![examples-radio.png](https://assets.buttondown.email/images/45795e09-674d-4276-acd2-58e34b8e59aa.png?w=960&fit=max) 

Heck yeah! I want this thing in more browsers right away! I don’t want to write 100 lines of CSS to override the browser styles for a checkbox! 


## ii. 

In a similar vein, another tiny, tiny CSS thing I spotted before the break was this post from Rachel Andrew about how to use [the align-content property in a block layout](https://rachelandrew.co.uk/archives/2023/12/19/align-content-in-block-layout/), like this:

```css
.element {
	display: block;
	align-content: center;
}
```

What this means is that you don’t need to use `display: flex` to vertically align elements which at first made no sense to me but the more I think about it the more I want this, too. Sometimes I want to center an element without having the parent force children side by side as `display: flex` would do. 

(Right now it appears this feature is only available in Chrome 122.)


## iii.

More small things! 

Ben Myers wrote about [why we need a native way to visually hide elements](https://benmyers.dev/blog/native-visually-hidden/):

> One of the strangest artifacts of web accessibility to me is the `.visually-hidden` utility class. You might also know it as `.sr-only` (or possibly as `.screen-reader-text`, `.element-invisible`, or any number of other names throughout the ages)
> 
> Conventional ways to hide elements include the styles `display: none` or `visibility: hidden`, or using HTML's hidden attribute. When you use any of these approaches, the browser assumes no one is meant to access those elements, and it won't expose that content to assistive technologies. This makes for a bit of a conundrum: what if you want to hide something visually, but still expose it to assistive technologies such as screenreaders? 

Ben’s walkthrough of the problem is great because I’m always confused about the best way to hide something and, I expect, this leads to all sorts of folks hiding important content accidentally from screen readers. He goes through a number of options for what could solve this problem today, from adding a new HTML prop to something like this in CSS:

```css
.element {
	display: visually-hidden;
}
```

I like this! But I especially love how Ben tries to confront his proposal with all the quirks and nuances of the CSS language. Adding an additional CSS key or value, I realize now, is like building a giant puzzle inside of a giant puzzle.

I am...not hopeful about this changing any time soon though since [Sara Soueidan proposed something similar](https://github.com/w3c/csswg-drafts/issues/560) way back in 2016 (!).


## iv.

One last note before I leave you: Raymond Camden wrote up an example he made of [an image dialog component](https://www.raymondcamden.com/2023/12/13/an-image-dialog-web-component)—click an image to see it expand—and it feels great to me. Lightweight, small, concise—I’ll probably reference this post 223 times when I come to build my next web component.

Until next week! <br/>
Robin