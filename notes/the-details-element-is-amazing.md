---
layout: layouts/note.njk
title: The details element is amazing
date: 2023-04-14T15:21:24-07:00
city: San Francisco
country: California
extract: The fifth planet in the solar system.
---

Have you seen those fancy cards that pop open when ya click em and reveal more info? I think I saw em on Apple dot com not so long ago although now I can’t find a good example. Well, this morning I realized we don’t need a ton of JavaScript and CSS fanciness to get those big beautiful cards and here’s the proof: the ever-so-powerful and perfect `<details>` element can be used to make this effect.

Here, click this lil card to expand it:

<p class="codepen" data-height="600" data-default-tab="result" data-slug-hash="RwerqaV" data-user="robinrendle" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/robinrendle/pen/RwerqaV">
  Details Card</a> by Robin Rendle (<a href="https://codepen.io/robinrendle">@robinrendle</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

It’s not responsive or polished yet but isn’t this super neat? All of this is running off the magic of a few humble HTML tags:

```html
<details>
  <summary>
    <!-- title -->
  </summary>
  <!-- paragaphs -->
</details>
```

I’ll figure out why the animations aren’t working each time but besides that, I love this pattern and had no idea you could use `<details>` in this way.
