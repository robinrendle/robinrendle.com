---
layout: layouts/note.njk
title: Container Queries and Typography
date: 2023-01-26T08:13:23-08:00
city: San Francisco
country: California
extract: The end of an era.
---

Back in 2013 when I started my career there were a few big problems with CSS:

1. We had to rely on Sass to get variables which made everything a lot more complicated than necessary (build environments and the like).
2. We had to rely on a complex series of `display:float`s and there were endless books and tools and blog posts dedicated to making these complex hacks understandable.
3. We only (just!) had media queries and so we could adapt our layouts to the size of the browser window, but we couldn’t adapt components to the container you put them in which is likely what you want to do at least 50% of the time.

Sure, there were all sorts of other irritants like browser inconsistencies and what not but these were the major problems that led to daily annoyances and grumbling with CSS. They slowed us down and added unnecessary time and complexity to our work.

But now, in 2023, look:

1. We have [custom properties](https://css-tricks.com/a-complete-guide-to-custom-properties/)! I’ve written plain CSS for years now and am extremely happy without adding yet another thing to my build process just to get variables in Sass.
2. [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) exists! And then, even better, [subgrid](https://ishadeed.com/article/learn-css-subgrid/) is well supported in browsers!
3. And last but not least, container queries!

This is why I get particularly annoyed when folks shit-talk CSS. Just look how much it’s grown! The infinite cosmic power of CSS in 2023!

That last item though—_container queries_—has finally been checked off my CSS bucket list which is wild to me because just a few years ago folks spoke of them as if they were alchemy or self-driving cars; an impossible future that we should just give up dreaming about. But now? Here they are, available in [every major browser](https://caniuse.com/?search=container%20queries).

So I’ve been thinking about this bucket list and what kind of impact container queries will have on me as a designer and developer since each big change in CSS requires us to adapt how we work, how we think about websites.

What do container queries make possible then?

To answer that question we have to start at the beginning. Back in 2013 us web designers could only detect the width of the browser window. This was especially problematic when it comes to typography; let’s say you have a heading like this...

```html
<h2>This is a heading</h2>
```

...most of the time you want this heading to have a font-size of `22px` and a line-height of `23px`. The good developer thing to do is start with your smaller-screen styles first and then build up to your desktop styles like this:

```css
h2 {
  font-size: 18px;
  line-height: 20px;
}

@media screen and (min-width: 700px) {
  h2 {
    font-size: 22px;
    line-height: 23px;
  }
}
```

(Ideally we shouldn’t be using pixels at all, but we’re sticking to that here for simplicity’s sake.)

Great, cool. We have our type styles for our heading. That’s ten lines of CSS for a single heading and two media queries though. In a lot of websites and apps I’ve worked on there’s at least 3 separate media queries for each heading from `h1` to `h6`. So this can easily lead to hundreds of lines of CSS just for your typography styles.

What makes things worse is this: imagine a designer on our team has now given us a mockup where that same content needs to be in the sidebar or in a card or in any other situation where things are smaller or larger. Well, dammit, our media query styles up there aren’t going to cut it now. That h2 is going to look far too large and janky in the sidebar. So what options do we have?

Hacks like this, sure...

```css
.sidebar h2 { } /* ew */
.sidebar-heading { } /* also ew */
```

...or, perhaps even worse...

```html
<h3>A heading that should be a h2.</h3>
```

...either way, we had to use some kind of hack because we had no choice but to bind the font-size and line-height with the size of the browser window. As cool as they are, that’s all that media queries allow.

What we’ve always needed is for that heading to scale based on the container you put it in. If you throw a h2 or a paragraph into a container that’s too wide or too short then we need our typographic styles to adjust in kind. This is especially true of the `line-height` CSS property which has always been a nightmare because we couldn’t make this relationship work.

Look at any codebase in any app and search for `line-height`. You’re bound to see hundreds of tiny hacks where folks are adjusting it over and over again:

```css
line-height...
line-height...
line-height...
line-height...
line-height...
line-height...
line-height...
```

Folks are just trying to make the text work in whatever container they’ve thrown a heading or a `<p>` tag in and the easiest thing to do is to add a class on the parent and be done with it.

This is because in typography the font-size, the line-height, and the measure (the width of the text) are all linked together. If you change one of these variables, you likely have to change the others in response.

Okay, so this is where container queries comes in; now in 2023 we no longer have to make hacks like those above since we can finally make the right kind of typographic relationship: between the text and the container you put it in. Let’s make an example to explain how container queries can help us.

To kick things off let’s write some good ol’ HTML:

```html
<div class="container large">
  <h2>Yosemite National Park</h2>
  <!-- blah blah blah -->
</div>

<div class="container">
  <h2>Yosemite National Park</h2>
  <!-- blah blah blah -->
</div>
```

So here we have our two options, our content in a main body area and the sidebar content which we can style like so...

```css
body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
}

.large {
  grid-column-start: 1;
  grid-column-end: 4;
}
```

Great – we now have two containers that look something like this:

<p class="codepen" data-height="500" data-default-tab="result" data-slug-hash="BaPramd" data-user="robinrendle" data-token="9bd01dd8b5f990cfc84c30310bf92495" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/robinrendle/pen/BaPramd/9bd01dd8b5f990cfc84c30310bf92495">
  Container Queries + Typography</a> by Robin Rendle (<a href="https://codepen.io/robinrendle">@robinrendle</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Look at the sidebar; things don’t look right since our line-height is wrong and the font-sizes are all too large. Something must be done about this! The horror!

To start using container queries we first need to tell the container to buckle up and pay attention, we’re going to start watching it’s size from here on out:

```css
.container {
  container-type: inline-size;
}
```

In my dumb brain this “activates” container queries but this also does a bunch of other stuff I don’t want to dive into just yet. Don’t worry about that for now, it basically means we can now do something like this with our CSS:

```css
@container (max-width: 480px) {
  h2 {
    color: red;
  }
}

@container (min-width: 480px) {
  h2 {
    color: blue;
  }
}
```

Look closely! That’s not a media query there, checking to see if the width of the browser window is a certain size. That right there is a container query; if the parent elements of our `h2` is less than 480px it’ll turn red or if it’s more than 480px then it’ll turn blue.

This seems like absolute magic to me, someone who fondly remembers the clearfixes of yesteryear, but it actually works in browsers today:

<p class="codepen" data-height="500" data-default-tab="result" data-slug-hash="GRBxRyW" data-user="robinrendle" data-token="dde1a12e19afda52fce3f18e363baa8f" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/robinrendle/pen/GRBxRyW/dde1a12e19afda52fce3f18e363baa8f">
  Container Queries + Typography 3</a> by Robin Rendle (<a href="https://codepen.io/robinrendle">@robinrendle</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Now, with `@container`, we can begin to customize our type styles in whatever way we’d like—and we’ll get to that—but I think all this container stuff is actually more powerful when you start to use _container query units_ like this:

```css
h2 {
  font-size: 50cqw;
}
```

What the what? This looks like some evil space magic.

`1cqw` here equals 1% of our parent element’s width and what that means is that we can finally make our typography proportional to the size of its container but in a much tidier way. This is amazing! There’s all sorts of other values that we can use, too:

```css
cqw, cqh, cqi, cqb, cqmin, cqmax
```

I’m not gonna dig into those since I’m still wrapping my head around all the things that the humble `cqw` unit unlocks.

Anyway, let’s get back to our example with the main content area and the sidebar. How do these units help us there? Well, we can set our paragraph font-size and line-height to expand and contract depending on the size of the container like this:

```css
p {
  font-size: clamp(1rem, 2.5cqw, 2rem);
  line-height: clamp(1.35rem, 3.5cqw, 1.9rem);
}
```

Do you hear angels singing or is that just me? Here’s a quick example that shows the heading and body text adapt to the width of the parent...

(You might need to open this up on a bigger screen to see the full effect.)

<p class="codepen" data-height="500" data-default-tab="result" data-slug-hash="vYaOyLp" data-user="robinrendle" data-token="09e61af4c82e13d6e49ee349ad55a3b9" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/robinrendle/pen/vYaOyLp/09e61af4c82e13d6e49ee349ad55a3b9">
  Container Queries + Typography 3</a> by Robin Rendle (<a href="https://codepen.io/robinrendle">@robinrendle</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>


That code above might look like odd if you’re unfamiliar with this stuff but what we’re doing is setting a min font-size in `rem`, then we’re using that middle value of the `clamp()` function to tell the browser our ideal size in `cqw`, then finally a maximum font-size. That means our text will never get too big or too small and if a dev throws that paragraph into a sidebar or a card or something then our text will always look good.

Here’s an example of what hundreds of lines of CSS hacks could be cut down to with container queries:

```css
h1 {
  font-size: clamp(...);
  line-height: clamp(...);
}

h2 {
  font-size: clamp(...);
  line-height: clamp(...);
}

h3 {
  font-size: clamp(...);
  line-height: clamp(...);
}

h4 {
  font-size: clamp(...);
  line-height: clamp(...);
}

h5 {
  font-size: clamp(...);
  line-height: clamp(...);
}

h6 {
  font-size: clamp(...);
  line-height: clamp(...);
}

p {
  font-size: clamp(...);
  line-height: clamp(...);
}
```

(Side note: this is just an example so I’ve removed the values, but also I have no idea how bad this is for performance. Feel free to shout at me here and I’ll add a note later.)

This stuff is beautiful to me, the perfect compliment to the CSS language. Container queries makes decades of typographic hacks irrelevant and so this kinda feels like the end of an era for me. I’m sure there are ten thousand other problems with CSS that I’m not aware of and a hundred amazing features coming in the near future but now my CSS bucket list is complete.

I feel like we need a name for this era, when CSS started getting real good. There’s a clear cut off point somewhere in the Before Times and the period we live in now, The Great CSS-ing. Perhaps it started with flexbox, or when CSS Grid launched, maybe that’s when things began to really accelerate. But typography is no longer a series of cool hacks and instead now a fully fledged citizen in the browser as of 2023. Us web typographers can finally create the relationships that we’ve always needed: font-size, line-height, measure.

My endless grumbles have come to an end.
