---
title: Necessary Complexity
date: 2021-06-18T23:58:48.483Z
city: San Francisco
country: California
extract: A few more thoughts on Astro.
---
For the newsletter last week I jotted down [some quick thoughts about Astro](https://css-tricks.com/newsletter/255-thoughts-on-astro/)—it’s a static site generator that lets you build with React/Vue/Svelte components:

> I guess that’s what’s so exciting to me: the philosophy behind Astro, more so than just what it is today.
> 
> It’s a hopeful vision of a future web where we’re not limited by past technical decisions and our users aren’t harmed by our neato developer experience.

I’m sat at my desk now thinking of what I could build with this thing. It’s just so dang exciting! Why? Well, instead of building a web app with a monolithic JavaScript framework out of the box, Astro encourages you to build a regular old website but pull in the best parts of those frameworks. Let’s say you want to use that fancy [React toast component](https://react-hot-toast.com/) but you don’t want to be bogged down with everything else when it comes to React—and you don’t want your users to be slowed down just because you like creating components in separate files and what not. Well, with Astro you can do just that! I believe you can even mix and match components across frameworks, which is absolutely magic.

Also I love the `.astro` format so far. It’s a heavenly combination of Markdown and throwing `<style>` tags into a component so you can write regular CSS and then it sort of encourages us all to write semantic markup. It just feels like the right way to build things. Take a look at [this example](https://github.com/chriscoyier/astro-css-trickzz/blob/master/src/pages/index.astro#L4) where Chris pulls in some data, grabs a component, and then builds a whole mini-site with it. And it all compiles down to plain HTML and CSS but also gives you the benefits of CSS Modules!

All of this is thoroughly exciting but there’s a bigger picture here about frameworks and our relationship with them.

The modern web wouldn’t be possible without big ol’ JavaScript frameworks, but—_but_—so much of the web today is held back because of these frameworks since so many folks reach for them when they’re just not necessary whatsoever.

A smaller nitpick, but an important one: I find React so damn difficult to read. You see a bunch of imports at the top, you then scroll down and see a ton of functions which are useless the first time you look at a component. _Then_ you get to the render function and now you can get a picture of how this component works and what it creates in the browser. You have to do a ton of mental math as to figure out what the user sees.

If I could make a framework today, the markup would be at the top, functions in the middle, imports at the bottom (I know this is impossible with the way that JavaScript works but it’s how I think about the code). React files, in this blogger’s opinion, are an absolute mess. It’s like reading a book inside out and upside down.

Astro feels like the right way to read a file. You start with imports, yes, but then you have a script tag, then you have the HTML that gets rendered. Simple. Direct. No faffing about. And I’m sure you can have very complex `.astro` components, but that’ll be _only when that complexity is necessary_.

And that’s really the point I’m getting to with this rant: in JavaScript frameworks today that complexity is immediate and overwhelming and for most cases, unnecessary. And if you want to use a tiny complex widget or doodad then you have to build this great machine around it to support it. 

But here, gloriously, Astro says _nope_. Not on my watch, bud.

That’s why I’m in love with Astro and this way of building websites: software should only be as complex as it needs to be. No more, no less.
