---
layout: layouts/cascade-post.njk
title: CSS is not a natural disaster
date: 2023-11-26T09:16:18-08:00
city: San Francisco
country: California
extract: Gaslighting works (when it comes to blogging).
---

First a quick note, then some excellent feedback from readers.

Then, finally, the future.

## i.

This week I spotted a great reminder from Michelle Barker about how [CSS nesting is widely available](https://css-irl.info/css-nesting-is-here/):

> In case you missed it, nesting is now supported natively in CSS in all major browsers! Nesting is a popular feature of preprocessors like Sass and has been, in my opinion, on of the main reasons to keep using preprocessors. But with nesting supported natively, it might soon be time to consider dropping a preprocessor altogether.

I’ve written about this before but I’m most excited about nesting media queries, as shown in one of Michelle’s examples:

```css
div {
  @media (min-width: 600px) {
    display: flex;
  }

  @media (min-width: 800px) {
    display: block;
  }
}
```

This is just so much easier to read and follows the correct flow of logic compared to what we’ve had to do up until now:

```css
@media (min-width: 600px) {
  div {
    display: flex;
  }
}

@media (min-width: 800px) {
  div {
    display: block;
  }
}
```

Ugly! Despicable! Gross! Boo!

At some point in the coming Thanksgiving rush and flurry of small fixes that I’ll make to my website, I think refactoring all my media queries into this format would make for a good change.

## ii.

In [last week’s edition](https://buttondown.email/cascade/archive/006-shadow-dom-is-not-a-good-default/) I was befuddled as to why you need the the constructor() and super() functions when making a web component, like this:

```javascript
class ThanksGivingButton extends HTMLElement {
  constructor() {
    super();
  }
}
```

Every blog post and tutorial I found said that you don’t need them 99% of the time but failed to say why precisely. Thankfully, Lee Reamsnyder wrote [an excellent tutorial](https://www.leereamsnyder.com/web-component-and-somehow-also-js-101) in response that walks through the nitty gritty details of JavaScript classes.

I won’t quote anything from Lee here because you sort of need all the context but the point I’m trying to make here is that I must remember to gaslight folks into blogging more often because this is cool as hell.

## iii.

One final thing about web components (for now). I also mentioned last week towards the end that I wish I could nest styles within a HTML web component without them leaking out and affecting my global styles. So writing something like the following...

```html
<thanksgiving-button>
  <style>
    button {
      background: red;
    }
  </style>
  <button>Click me</button>
</thanksgiving-button>
```

...won’t work because any buttons outside of this web component will also be affected. Hence why last week I bemoaned the need to use the Shadow DOM stuff or something like [WebC](https://www.11ty.dev/docs/languages/webc/#why-use-webc) (which looks great but this stuff shouldn’t require a build step).

Miriam Suzanne mentioned that this is where CSS @scope comes in and then I found [this excellent doc](https://css.oddbird.net/scope/explainer/) that explains everything in meticulous detail. Before now, I’d certainly read up on the subject but perhaps too lightly where I didn’t really understood the examples I’d seen.

Here’s one I’d seen a few times:

```css
@scope (.media-block) {
  img {
    border-radius: 50%;
  }
}
```

And I was like huh? Why wouldn’t I just write:

```css
.media-block img {
  border-radius: 50%;
}
```

It basically does the same thing, right? Look at all these silly CSS people, out there making the language more complicated than it needs to be! I am a genius!

I’d even seen examples where @scope is used in an inline style tag like this:

```html
<div>
  <style>
    @scope {
      p {
        color: red;
      }
    }
  </style>
  <p>this is red</p>
</div>
<p>not red</p>
```

Sure? Okay? That’s more interesting but in the past I just scrolled right by that example without thinking of the implications. That was, until I really understood HTML web components because that’s when it all started to click for me.

Of course `@scope` would be super handy! I want this now! Gimme!

With @scope I could write my little component, add a style tag, and not worry that any of my styles would bleed out:

```html
<fancy-button>
  <style>
    @scope {
	  button { background: red; }
	}
  <style>
  <button>This is red</button>
</fancy-button>

<button>This button is not red</button>
```

Right now, support for [@scope](https://caniuse.com/css-cascade-scope) isn’t amazing so I would perhaps avoid it? Not sure.

At this point I am literally just stealing everything that Miriam already mentions in that excellent post. But I am now thoroughly excited for @scope in the future if it means I can make my dinky little web components and copy and paste them around different projects and I don’t have to worry about their styles leaking out all over the place. That connects a lot of dots for me!

Also, somewhat relatedly, this post reminds me of all the extraordinary work that goes into the web platform. Most days I think of CSS as the weather, sometimes a natural disaster, as if it’s a totally random thing, rather than a language that’s been designed and tested and engineered into what we know today. I shake my fist at the sky when it can’t do what I want it to do and I forget how much agency and responsibility I have to try and make things better.

This document from Miriam is a great reminder then that CSS is loved by many but only stewarded by a careful and meticulous few.

And, perhaps if we're careful enough, we can join them.

See you in the cascade! <br/>
✌️ Robin

<br/>
<br/>
<br/>
