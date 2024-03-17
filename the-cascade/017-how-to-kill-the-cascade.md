---
layout: layouts/cascade-post.njk
title: How to Kill the Cascade
date: 2024-03-17T21:28:16-08:00
city: San Francisco
country: California
extract: Let’s do a crime.
---

I love the `<style>` tag and I love CSS. I still think the way that styles cascade and can’t error out is ingeniously resilient. But, in this blogger’s opinion, the cascade has always had this glaring, terrible flaw.

Let me explain: many years ago, I decided to avoid creating any more CSS files. These projects are admittedly very small but as soon you go down the path of creating a bunch of CSS files you then end up creating dozens more until you’re spending the majority of your time thinking about this enormous system of files you’ve created instead of the interface you’re trying to build. You’re then encouraged to add a fragile build system to compile all these CSS files together—and whenever I returned to a project after a few years I’d find that everything would break because of some update. Then, to be a good performance boy, you really ought to minify all those files into your HTML and sweet heck all I wanted to do was style a `<p>` tag!

Instead, there is nothing more blissful, simple, and humble as combining CSS and HTML together, like this:

```html
<my-component>
  <style>
    p {
      background: red;
    }
  </style>
  <p>This text is now red.</p>
</my-component>
```

Is it scalable? No. Is it useful for me and all the projects I work on? Absolutely. Whenever I want to create a new page in my website I usually just throw a style tag at the top of the page and use the code above for a component I might want to share across projects.

Just slam some styles right into your HTML! Now you don’t have to go scrolling through an enormous `.css` file where it’s easy to get lost in and write confusing, disconnected bits of logic 1000 lines apart. You can copy and paste this into another project and it’ll just work. This is great if you use one-off components a lot which, in my projects, I most certainly do.

Except, well.

This has only worked out in some very rare cases for me because...

```html
<my-component>
  <style>
    p {
      background: red;
    }
  </style>
  <p>This text is red</p>
</my-component>

<p>This text will also now be red :(</p>
```

As you can see in [this demo](https://codepen.io/robinrendle/pen/LYvNPpr?%3Feditors=1010), whenever you add a style tag to a page you’re adding to the global styles that will impact any element in the markup. This is annoying! And isn’t how this code _feels_ like it should work. What we want to do is control how styles bleed in and out of some markup so that we can move these semantic and presentational blocks around without having to undo styles or add more convoluted class names, etc.

Well, the time is nigh. This problem no longer exists thanks to the glorious, beautiful `@scope` selector and over the last few days I couldn’t agree more when Mayank described it as ["life-changing shit”](https://hachyderm.io/@hi_mayank/110480720270917909).

Here’s an example:

```html
<my-component>
  <style>
    @scope {
      p {
        background: red;
      }
    }
  </style>
  <p>This text is red.</p>
</my-component>

<p>This text is not red!!!</p>
```

In [this demo](https://codepen.io/robinrendle/pen/PogZMLL) I’m modifying the example from [Safari’s release notes](https://webkit.org/blog/15063/webkit-features-in-safari-17-4/) a little bit but isn’t this incredibly neat? The style tag now works as I expect it would!

With `@scope` you can isolate styles in a single component without them bleeding out into the rest of the page. This little bit of CSS prevents us from having to write a bunch of hacky styles or adding a new class name to this bad boy _or_ doing some Shadow DOM style encapsulation stuff.

That’s. Pure. Magic. And I genuinely think that the whole language of CSS is dramatically improved by the introduction of `@scope`.

Now, this is one of those CSS things that comes around every once in a while where I sort of can’t comprehend all the opportunities this opens up. I’m certain that in the coming months there’ll be a sea of blog posts that explain all the amazing things you can do with `@scope` outside of this. But it doesn’t stop there!

With the `:scope` pseudo-class, you can throw a style tag into an element and style the parent element, too. Okay, that’s difficult to describe. Here, lemme prove it with code:

```html
<article>
  <style>
    @scope {
      :scope {
        background: red;
      }
    }
  </style>
  <p>The article element has the red background.</p>
</article>

<article>
  <p>This ain’t red!!!</p>
</article>
```

Isn’t this grand?

“But! Robin! Robin! Robin!” You might annoyingly chant at me whilst circling my house with pitchforks and torches raised. “This scope stuff isn’t particularly helpful because what about this situation where we’ve got existing global styles for similar HTML...”

```html
<style>
  article p {
    color: blue;
    font-size: 2rem;
  }
</style>
```

That’s all fine and dandy but now when we wanna slam in a “component” with similar markup and structure—say maybe even the same class name—and we don’t want it to inherit any of the page styles. Kinda like this:

```html
<style>
  article p {
    color: blue;
    font-size: 2rem;
  }
</style>

<article>
  <p>This text is blue and big.</p>
</article>

<!-- We want to isolate everything below -->
<article>
  <style>
    @scope {
      :scope p {
        color: red;
      }
    }
  </style>
  <p>Ugh this text is red but also big!</p>
</article>
```

We can see that our article “component” is red because of the cascade and it overrides that blue style from the global styles but it’s _also_ going to inherit that annoying font-size property too. We could add another hacky CSS class and undo these styles and be done with it but...isn’t there a better way here?

Well, maybe!

Whilst I was reading through the Safari release notes I had a weird idea. What if we simply used `all: unset`, like this:

```html
<article>
  <style>
    @scope {
      :scope p {
        all: unset;
        color: red;
      }
    }
  </style>
  <p>This text is now red and small!</p>
</article>
```

This would “reset” all the previous styles and we could safely import this component into our markup. All the styles wouldn’t leak out or any page-level styles for this paragraph could leak in. And [it works](https://codepen.io/robinrendle/pen/KKYzPgg?editors=1010)!

“ROBIN ROBIN ROBIN” I hear you all chant louder and louder as you kick in my front door and interrupt my morning coffee and trample all over my nice rug. “WE DON’T WANT ANY STYLES LEAKING INTO THIS COMPONENT, EVER. AND IF WE DON’T KNOW WHAT STYLES EXIST ON THE PAGE WE’RE IMPORTING THIS COMPONENT INTO THEN HOW CAN WE KNOW WHAT STYLES TO RESET???”

Jeez. Fine. Calm down, everybody.

My first thought was what if for every little HTML and CSS component like this we simply add the following CSS right at the very top:

```html
<article>
  <style>
    @scope {
      * {
        all: unset;
      }
    }
  </style>
  <p>This text is not red and small!</p>
</article>
```

Now, dear pitchforked readers, I think this is the coolest, most punk rock idea I’ve ever had but unfortunately `* { all: unset; }` doesn’t work. Instead, as Mayank points out in [a fantastic article](https://www.mayank.co/blog/revert-layer), you have to use `revert-layer` instead.

Let’s turn this into a more realistic example though. We have some random styles on our page like this:

```html
<style>
  p {
    color: blue;
    font-size: 2rem;
  }
</style>
```

Pretty common stuff. You don’t want those styles leaking into new HTML web components you drag into your page. So then you get `my-component` which has a `p` tag inside and you can isolate those styles just like this:

```html
<style>
  p {
    color: blue;
    font-size: 2rem;
  }
</style>

<my-component>
  <style>
    @scope {
      :scope {
        &,
        * {
          all: revert-layer;
          color: red;
        }
      }
    }
  </style>
  <p>This text is still red and small!</p>
</my-component>
```

Adding that `&` above will also remove any styles on the `my-component` element we have there, too. That’s likely not helpful for web components but say if we use our `article` example again then it would be great for that.

In [that post](https://www.mayank.co/blog/revert-layer) which I just casually mentioned, as if it didn’t hurt my brain and deeply expand my knowledge of the CSS universe, Mayank describes the approach better than I possibly could:

> In many ways, `all: revert-layer` offers better encapsulation than shadow DOM, because it will reset everything to the browser defaults, even inherited typographic properties. Use with caution, but confidently!

Whilst I was going off about all this, ranting about how this fundamentally changes CSS forever, [Bob Nisco](https://bobnisco.com) called this idea a “localized reset” which I absolutely adore. That’s precisely what I want and what I think we’ve all needed: a quick and easy local reset where we can add some markup that mostly ignores the styles on a page. We could, of course, throw this into a web component and use a stylesheet but there’s something so blissfully hacky about having all that logic so copy and pastable to me.

I think this is why a lot of folks jump on the Tachyons bandwagon and like to write all their styles inline, simply because they want this level of control of the cascade—and writing all your classes into your markup is one way to do that. Instead, alternatively, hereforethwith, we just needed little islands of independent cascading logic that we can snap together without the complexity of the Shadow DOM or a bunch of JavaScript or CSS classes to hack things together and override our existing styles.

We’ve always needed local resets. And now, with the magic of `@scope` and `all: revert-layer;`, we finally have them.

See you in the ~~cascade~~,
Robin
