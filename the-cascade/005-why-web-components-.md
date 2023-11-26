---
layout: layouts/cascade-post.njk
title: Why Web Components
date: 2023-11-26T09:08:15-08:00
city: San Francisco
country: California
extract: What’s the hubbub, bub?
---

Friends!

I’m a few days late with this edition so let’s jump straight in.

## i.

Sometimes text can look _weird_ and, depending on how many lines and the length of the words in a sentence, the text can look unbalanced. [Widows and orphans, etc.](https://en.wikipedia.org/wiki/Widows_and_orphans) Thankfully, there’s two handy tools we have for controlling these things in CSS: `text-wrap: balance;` and `text-wrap: pretty;`.

To be perfectly honest I had forgotten that these exist—probably because they’ve been in an experimental state for some time—so here’s a great reminder from Stephanie Stimac about [when to use them](https://blog.stephaniestimac.com/posts/2023/10/css-text-wrap/):

> With `text-wrap: balance;`, because there's a limit to how many lines the browser will wrap, this should only be used on headlines, headings, and subheadings. Applying it to large paragraphs will have no effect and comes at a performance cost because the browser is trying to calculate optimal balance even though it won't apply anything.

> Use `text-wrap: balance;` on headings and subheadings. And use `text-wrap: pretty;` on paragraphs of text to get rid of orphans on the last line.

This `text-wrap` stuff feels perfect for a CSS reset and it looks like Andy Bell even included it in his [(more) modern reset](https://andy-bell.co.uk/a-more-modern-css-reset/).

## ii.

I finally got around to reading Jason Grigsby’s post about [hero image loading](https://cloudfour.com/thinks/stop-lazy-loading-product-and-hero-images/) and why we have to stop that:

> I see a recurring performance problem on many ecommerce sites—the most important images on the page are being lazy loaded when they shouldn’t be. It impacts user experience, Core Web Vitals, and by extension search engine optimization. You’re better off not implementing lazy loading at all than implementing it incorrectly.

I felt real bad reading this because I’ve sort of made the same mistake before with [an old essay](https://robinrendle.com/essays/newsletters/). When you scroll you’ll see each image snap into focus and I think it’s super distracting and sort of ruins the _feel_ of things. Lazy loading all these images in the essay is good for performance on the first paint, sure, but it makes for a snappy and annoying reading experience overall.

I know that’s not what Jason is saying here, but all I mean to say is that we can’t just slap this attribute at the end of our image like...

```html
<img src="cat.png" loading="lazy" />
```

...and be done with it. Image performance requires a lot of care and attention to detail! And, as Jason wisely puts it: “Lazy loading every image does more harm than good.”

So this is a good reminder for me not to make the same mistake again because it’s worse to half-ass image performance then it is not to ass it at all.

## iii.

I’ve been playing around with Web Components this week, trying to figure out what they’re for and how they tick.

And: I think I’ve got it.

For a long time I was confused by the whole concept of web components though. Why do we need them if we have frameworks, like React or Vue or the ten thousand alternatives that have popped up this week alone? What problems does that solve for us web developers?

Well, I think my confusion was with the name “web components.” See, after reading up on them I don’t think we should see web components like the ones you might find in a huge monolithic React app: your Button or Table or Input components. Instead, I’ve started to come around and see Web Components as filling in the blanks of what we can do with hypertext: they’re really just small, reusable chunks of code that extends the language of HTML.

Once you start to think of them in that way they become pretty handy.

But let’s start with an example. [In this walkthrough with Kevin Powell](https://www.youtube.com/watch?v=Sq5oiHjwFxI), Dave Rupert points to the `<two-up>` component that you can use like this in your markup after you’ve imported it (we’ll dig into that later):

```html
<two-up>
  <div><h1>The Dark Side</h1></div>
  <div><h1>The Light Side</h1></div>
</two-up>
```

And it will allow you to see two images or two of anything, side-by-side, and compare them with a slider, [like these handy examples](https://codepen.io/developit/pen/qBdbNLK):

![2023-11-07 08.02.00.gif](https://buttondown-attachments.s3.us-west-2.amazonaws.com/images/ef0728eb-82fd-4ba6-9e4f-dd7f60343816.gif?w=960&fit=max)

This `<two-up>` component is fantastic because if the browser doesn’t know what the heck `<two-up>` means and can’t parse that script for whatever reason, it’ll just render the images on the page. That’s HTML, baby!

I think this is the correct way to think about web components, generally. You start with your markup for everyone, then you can wrap a web component around it and apply your scripts and styles to that. That way you’re extending the language.

It’s also a different way to think of components than in React land. I see Web Components as a bit of markup (with a light dazzle of JavaScript) that I can copy and paste into my project and then style and build on top of. Whereas with framework-dependent components they’re designed to do everything out of the box.

Okay, okay. Enough yapping. Let’s make our own web component. To begin, we can head over to our HTML and start by writing some markup like this:

```html
<spooky-button>
  <button>Click me</button>
</spooky-button>
```

So long as it has a `-` in the element’s name then it’s a valid web component and can be as silly or as spooky as you like. Tis the season. You can also put whatever HTML you want inside, from buttons and divs to forms and entire pages of markup if that’s what you need.

With this, you don’t get much. Sure, you can style this new element just like any HTML...

```css
spooky-button button {
  background: blue;
}
```

...but you could also just use a class here to the same effect. Styles aren’t encapsulated by default, so any global styles will be inherited by any markup you put in your web component.

So why do we need web components?

Well, the story for web components doesn’t get interesting until you start to customize things with JavaScript. And to do that we have to create a new class like this:

```javascript
class SpookyButton extends HTMLElement {
  constructor() {
    super();
  }
}

customElements.define("spooky-button", SpookyButton);
```

If you put a gun to my head and asked my what constructor() and super() does then I’d very quietly waffle something about how “it just has to be there, man” and “it allows us to use the `this` keyword, right?” My knowledge of prototypes and what not in JavaScript is pretty slim.

Right now I’m starting to think of this snippet of JavaScript as the real foundations of a web component because from here on out we can do some cool things. We have a few functions available to us, like `connectedCallback()`, that Caleb Williams [described in detail way back in 2019](https://css-tricks.com/creating-a-custom-element-from-scratch/):

> The `connectedCallback` is separate from the element’s constructor. Whereas the constructor is used to set up the bare bones of the element, the `connectedCallback` is typically used for adding content to the element, setting up event listeners or otherwise initializing the component.

So let’s say that with our spooky button we want to log a scream when we click it, that’s when we’d use `connectedCallback()`, just like this:

```javascript
class SpookyButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.addEventListener("click", this.scream);
  }

  scream() {
    alert("Aagh!");
  }
}

customElements.define("spooky-button", SpookyButton);
```

This is where Web Components start to make a lot more sense to me. Tiny, encapsulated snippets of code – and if this script never runs for whatever reason then our button is still a button.

Now we can do all sorts of much more impressive things with web components from here on out, such as setting the props of a component which you have to do with HTML attributes like this:

```html
<spooky-button size="large" color="red">
  <button>Click me</button>
</spooky-button>
```

And now this is where I begin to nod furiously, where even if you don’t understand every function or part of the spec that makes up web components, you can begin to see the value here.

Next week we’ll talk about styling web components because that’s where things start to get a little strange. But I think even from this small example the value of web components starts to get less foggy to me. Slowly. Piece by piece.

More on that next week.

Until then, <br/>
✌️ Robin

<br/>
<br/>
<br/>
