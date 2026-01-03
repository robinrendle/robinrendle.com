---
layout: layouts/cascade-post.njk
title: CSS is a liberal art
date: 2023-10-07T09:53:08-07:00
city: San Francisco
country: California
extract: It’s also terrifying.
---

Friends!

Welcome to The Cascade, a newsletter about the past, present, and future of CSS. I’m your host, [Robin Rendle](https://robinrendle.com), and to kick things off we’re gonna talk about what scares me most about CSS in 2023.

Lots of newish things in CSS mostly are mostly cool and not scary at all. Take nesting for instance, now available in [Safari Technology Preview](https://webkit.org/blog/14571/css-nesting-and-the-cascade/), where soon enough we’ll be able to write CSS like this:

```css
ul {
  padding: 2rem 1rem;

  li {
    margin-bottom: 1rem;
  }
}
```

Heck yeah! Nesting!

This doesn’t feel scary to me though since we’ve all been nesting our CSS since 2006 (!) when the likes of Sass and Less took the front-end world by storm. In fact, these sorts of features feel like they’re not introducing something new but rather fixing a long-standing bug in the language and it’s just sorta annoying we can’t already use nesting today. Although we sure are [getting close](https://caniuse.com/?search=nesting).

What _does_ feel scary is CSS like this that I spotted from [Roman Komarov](https://front-end.social/@kizu/111149465410618074) earlier this week:

```css
:not(:has(> .foo)) + :has(> .foo):not(:has(+ * > .foo)) {
}
```

[Translation](https://front-end.social/@fildon@strangeobject.space/111149897670061208)?

> Something that has a direct child with class "foo", but neither the immediately prior nor immediately following siblings have a direct child with class "foo".

My brain refuses to parse any of this and even after I made an example in Codepen it still remains spooky and alien and un-CSS-like to me.

Then things felt even scarier this week when I was reading Tyler Gaw’s post about [CSS functions](https://tylergaw.com/blog/css-typed-om-thread/). I thought I knew everything there was to know about the subject. You know, you’ve got your handy clamp() and min() or max(), and then there’s other handy functions like transform() and rotate().

So I was pretty shocked to learn that trig functions–sin(), cos(), and tan()—are now available in browsers! And have been for [quite some time](https://web.dev/css-trig-functions/)!

Okay, trigonometry is scarier to this here English student than any movie monster but, setting that aside, what do trig functions in CSS make possible? Well, the idea is that you want to calculate space, as Math is Fun describes [why trigonometry is important](https://www.mathsisfun.com/sine-cosine-tangent.html):

> - Because they let us work out angles when we know sides.
> - And they let us work out sides when we know angles.

My first lazy thought before I saw any code was “wow, I will never use any of this stuff” but my second thought was “I bet Ana Tudor could do something punk rock with this.” And [I was right!](https://codepen.io/thebabydino/pen/wvybyMo)

Back in March, Bramus also wrote a great piece [with a bunch of examples](https://web.dev/css-trig-functions/) and it seems like trig functions in CSS are great for moving elements on a circular path or more video-gamey applications rather than common interface problems that we bump into every day. I can see it being super useful for fancy animations and data visualization, too.

One example of this is Mads Stoumann’s nifty [animated clock](https://css-tricks.com/creating-a-clock-with-the-new-css-sin-and-cos-trigonometry-functions/):

Another another example I spotted whilst sweating bullets trying to understand what impact this has on the language was this post by Dan Wilson on [improving CSS shapes](https://danielcwilson.com/posts/css-shapes-with-trig-functions/). He argues that it’s not easy to create shapes with curves in CSS and that’s where trig functions come in handy.

It almost feels like the underlying rectangle-ness of web design—where everything you make with HTML and CSS has always been a rectangle or a square under the hood—is sort of challenged by all this trig stuff. Weird!

And that’s scary to me because, for this here English major, CSS was always a liberal art instead of a rational programming language. There’s something linguistic about CSS, even in the way it fails; when you type the wrong comma or omit a certain bit of code then CSS doesn’t care. It’ll skip over it and try and understand the next bit. Just like spoken language, where you can still understand someone if you only hear 90% of what they say.

Seeing all these math things inside CSS then makes it harder to see what CSS even is now, where the edges of it are, and what I can do with it all nowadays. But this lack of clarity is also exciting because CSS is a fun language for me to do weirdo liberal art things with, but also it has enough space for math folks who want to build an interstellar grav drive in CSS with nothing but the :before pseudo element or something equally cursed.

CSS can be a liberal art OR a real honest to goodness programming language now. And I reckon we need both kinds of skills to build, contribute to, and conjure punk rock websites into existence.

That’s what makes CSS, well, CSS.

See you in the cascade, <br />
Robin
