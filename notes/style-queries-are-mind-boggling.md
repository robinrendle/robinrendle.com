---
layout: layouts/note.njk
title: Style Queries are Mind Boggling
date: 2022-12-22T19:29:24-08:00
city: San Francisco
country: California
extract: CSS is getting weird now.
---

Ahmad Shadeed wrote [a fantastic thing about style queries](https://ishadeed.com/article/css-container-style-queries/) the other day that I’m still trying to wrap my head around:

> Recently, the Chrome team released experimental support for a new proposed CSS spec, style queries. In short, they let us query the style of a container, rather than the size only.

So the idea is that you might want to style something whether or not another chunk of CSS is enabled, like a display property or a variable. With this experimental feature you can check to see if a property exists like this:

```css
@container style(display: flex) {
  .element {
    padding: 10px;
  }
}
```

So, if this `.element` has `display: flex`, then add some padding.

That’s...weird! Even looking at Shadeed’s examples I can’t think of a time when I would ever want to do that instead of writing a new CSS class. But maybe I’m still trying to wrap my head around this thing. Although this is where things make more sense to me...

```css
@container style(--theme: dark) {
  .section {
    background-color: #222;
    color: #fff;
  }
}
```

...check if the dark theme has been enabled and then turn styles on and off, which opens up a lot more options to us than just changing the style via variables alone.

But I think this is where I’m confused: testing to see if the properties of another element are enabled, and _then_ do something. Like say we have a nav class:

```html
<nav>
  <!-- List of nav items -->
</nav>
```

And now we want to make that list of items horizontal with a class...

```html
<div class="nav-horizontal">
  <nav>
    <!-- List of nav items -->
  </nav>
</div>
```

...and _then_ in my CSS I could do something like this I guess?

```css
.nav-horizontal {
  --horizontal: true;
}

@container style(--horizontal: true) {
  nav {
    display: flex;
  }
}
```

If I don’t want this nav to be horizontal, then I can just remove the parent class. But maybe this is a bad example cus I would just make another class here anyway and that doesn’t really make things much clearer to me what the relationship is between all these things.

Anyway, just thinking out loud here. This currently hurts my brain but it feels like it opens up a ton of doors so I needed to jot this down and curse you all with my confusion.
