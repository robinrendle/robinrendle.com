---
layout: ../../layouts/notes.astro
title: I wish I could control CSS scroll-snap with Javascript
date: 2022-04-30
city: Hollywood
country: Florida
extract: Or, I hate arrows on websites.
---

So I love CSS scroll-snap. I think it’s really, truly amazing.

Sure, yes, it lets you make [carousels](https://codepen.io/robinrendle/full/YzyqNJK) that aren’t janky JavaScript nightmares—but I think they’re more than that because now we can make webpages feel more like, well, Powerpoint. And that’s an extremely exciting thing for writers! You can make websites behave like pages or comic books or photo books! You can control the _pace_ of your work with nothing more than just a sliver of CSS.

To get started you’ll need to make a container with some slides:

```html
<div class="container">
  <div class="slide">
    <!-- content goes here -->
  </div>
  <div class="slide">
    <!-- content goes here -->
  </div>
</div>
```

And then some CSS...

```css
.wrapper {
  display: flex;
  gap: 10px;
  overflow-y: scroll;
  scroll-snap-type: x mandatory;
  width: 100vw;
  height: 100vh;
}

.slide {
  scroll-snap-align: start;
}
```

And then you’re basically done! In this example, `x mandatory` will force this carousel to snap left->right when you move horizontally with your mouse (and heck, in Chrome you can even use the directional keys to move back and forth between slides!).

Check out this [quick demo I made last night](https://codepen.io/robinrendle/pen/xxYxVbK/02cef110b3f5feb4601797d321af7960?editors=1100)—and try scrolling to the right:

<p class="codepen" data-height="500" data-default-tab="result" data-slug-hash="xxYxVbK" data-user="robinrendle" data-token="02cef110b3f5feb4601797d321af7960" style="height: 600px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/robinrendle/pen/xxYxVbK/02cef110b3f5feb4601797d321af7960">
  X100v</a> by Robin Rendle (<a href="https://codepen.io/robinrendle">@robinrendle</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

But! One problem with this design is that users here won’t know that they can scroll right. I could put a big arrow or something on the first slide but what would be even neater is if I could use JavaScript to hijack the scroll maybe. So that when folks scroll down then it pushes folks to the next slide in the series. Maybe that would be disorienting as heck but I think it would be better than just doing...nothing, right?

The problem here is that I don’t think we can do this with JS today. As far as I can tell there’s no scroll-snap API where I can order JS to skip to slide 4 (which could be handy if this website had a table of contents). And I can’t hijack the scroll and say “next slide please”!

Alas, there’s only [this proposal from Adam Argyle](https://github.com/argyleink/ScrollSnapExplainers/tree/main/js-scrollToOptions_Snap-Additions) which looks like it would perfectly solve this problem:

```javascript
container.scrollTo({
  left: "snap-first",
  top: "snap-first",
  behavior: "instant",
});
```

Wonderful! This is _exactly_ what I want. Shame that I can’t use it today though.
