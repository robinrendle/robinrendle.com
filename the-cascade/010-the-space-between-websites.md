---
layout: layouts/cascade-post.njk
title: The space between websites
date: 2024-01-14T15:19:16-08:00
city: San Francisco
country: California
extract: Being extremely annoying about fonts.

---

## i. 

Despite being famous around the world as a “CSS entrepreneur” and being “extremely annoying about fonts” I must admit to a mistake here and there. Like this week where I was reading [CSSmas 2023](https://www.sarahgebauer.com/post/category/cssmas-2023/), Sarah Gebauer’s excellent series of blog posts,  and I discovered a worrying `initial-letter` shaped hole in my CSS databanks.

What the heck is [this thing](https://www.sarahgebauer.com/post/day-2-drop-a-cap/)?  Let’s take a look:

```css
p:first-of-type:first-letter {
  initial-letter: 3;
}
```

Huh.

Maybe I’d never heard of it because of the somewhat patchy browser support for the property but it looks like [Geoff Graham was writing about it all the way back in 2017](https://css-tricks.com/almanac/properties/i/initial-letter/). Either way, initial-letter looks extremely useful: the idea is that you can automatically set the font-size of a drop-cap based on the number of lines in a paragraph (!). 

How neat is that? Extremely neat, I’ll tell you. This is how the CSS above should render if your browser supports it:

![CleanShot 2023-12-11 at 10.51.31@2x.png](https://assets.buttondown.email/images/5f9d4a64-e204-47f0-a646-cd13b0131388.png?w=960&fit=max) 

The neat thing about this is that you don’t have to faff about with the font-size or line-height of the drop cap as the browser will figure all that out for you. So if you have a bunch of media queries that changes the font-size of the paragraph then this property has your back which is a big change from what I’d typically do (absolutely position the element, add a bunch of padding and type a lot of hacky CSS).

## ii. 

Scott Jehl wrote this great piece about [responsive video](https://scottjehl.com/posts/using-responsive-video/) which caught my eye. I thought we could already send multiple video formats down the wire depending on screen size and what not like we’ve been able to with images for years now but there’s been a bit of drama about it. Scott digs into some of that, but now the latest versions of the major browsers support this:

```html
<video>
  <source src="small.mp4" media="(max-width: 599px)">
  <source src="large.mp4">
</video>
```

As Scott says:

> That's a basic responsive video element. It's responsive because one of the source elements has a media attribute on it that includes a media query, making its source selection conditional to the browser's viewport size. If you've used the picture element before, that media attribute is going to look familiar, because picture was actually designed based on how this works in video (back when it was supported the first time)

I particularly like the idea of serving up different formats for different screen orientations! Vertical videos for Tik Tok-esque experiences, for example: 

```html
<video>
    <source src="landscape.mp4" type="video/mp4" media="(orientation: landscape)">
    <source src="portrait.mp4" type="video/mp4">
</video>
```

Neat stuff.

## iii.

If we had to guess what front-end thing is going to be the star of 2024 then it has to be View Transitions, right?

The more examples I see—like Geoff Graham’s recent post about how to add [the simplest view transition](https://geoffgraham.me/how-to-add-the-simplest-view-transition-to-my-site/) with nothing more than a `<meta>` tag—the more I start to daydream about what’s possible...

> I’ve never felt so powerful with so little. I’m spending time digging into the View Transitions API, a new-ish (and experimental) feature. Simply put, it creates the same sort of slick transitions between two pages (in a multi-page app, aka “website”) or views (in single-page app lingo) that native apps have enjoyed forever.

Just slap a `<meta>` tag into your website and blammo, you now have an animation across every page in your website—a quickish cross fade between the two states—all without having to write a single line of JavaScript or CSS. That’s amazing! You can also do way [more complicated](https://developer.chrome.com/docs/web-platform/view-transitions/) things, too.

I am absolutely certain that this is going to lead to some horrendously weird and perhaps even awful websites. There will be slow animations and wonky experiences because of this and I can see browsers more prominently allowing folks to disable View Transitions in the future. But I’m really excited about what other kinds of interactions we can make in the space _between_ websites. I’m thinking of zoomable user interfaces here or perhaps wild SVG animated things or maybe new patterns like scroll to refresh might appear and take the world by storm.

Maybe whole new kinds of websites might spring out of it. Who knows!

## iv.

The last thing that caught my eye this week were all [the updates in Safari](https://webkit.org/blog/14787/webkit-features-in-safari-17-2/):

> Safari 17.2 now supports the name attribute on the `<details>` element — which moves some commonly-used functionality from needing JavaScript to being baked into HTML. If you use the name attribute to give a series of details elements the same name, then only one in the series will be open at a time.

The example they give is this:

```html
<details name="foobar" open>
  <summary>1</summary>
  <p></p> 
</details>
<details name="foobar">
   <summary>2</summary>
  <p></p>
</details>
```

I hadn’t heard of this before but I think we’ve all been clamoring for this since the `<details>` element first appeared. I saw some pretty hacky workarounds a while back that tried to replicate this kind of interaction—when you open one details element then close all the others—so this is a great little improvement. 

The other bit of Safari-related news here that caught my eye is this: 

```html
<img fetchpriority="high" alt="I'm important!" src="logo.png">
<img fetchpriority="low" alt="I'm not!" src="social.png">
```

...interesting! This stuff makes me nervous though and I’m sure that in a few weeks we might see a blog post from the likes of Harry Roberts warning us not to slap `fetchpriority="high"` on every single image on our websites, just as he [warned us about `preconnect`](https://csswizardry.com/2023/12/correctly-configure-preconnections/ ) recently:

```html
<link rel=preconnect href=https://fonts.googleapis.com>
```

> In the right circumstances, this simple, single line of HTML can make pages hundreds of milliseconds faster! But time and again, I see developers misconfiguring even this most basic of features. Because, as is often the case, there’s much more to this ‘basic feature’ than meets the eye.

I assume the same will be true of `fetchpriority`? Either way, it’s good to keep in our pockets.

## v.

That’s all, folks. Sadly I’ll be skipping next week’s newsletter since I’m getting married over the weekend! This is, of course, wonderful and exciting but a marriage ceremony does terrible things to a publishing schedule.

And I think if there’s anything all this wedding planning has taught me over the last few months is that although there are great things in this life, not all of them can be found in the cascade. 

Who knew?

See you in a few weeks! <br />
Robin 
