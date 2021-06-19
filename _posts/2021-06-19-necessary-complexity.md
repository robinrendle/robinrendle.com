---
title: Necessary Complexity
date: 2021-06-18T23:58:48.483Z
city: San Francisco
country: California
extract: A few more thoughts on Astro.
---
For the CSS-Tricks newsletter last week I jotted down [some quick thoughts about Astro](https://css-tricks.com/newsletter/255-thoughts-on-astro/)—a new static site generator that lets you build with React/Vue/Svelte components:

> I guess that’s what’s so exciting to me: the philosophy behind Astro, more so than just what it is today.
> 
> It’s a hopeful vision of a future web where we’re not limited by past technical decisions and our users aren’t harmed by our neato developer experience.

I’m sat at my desk now thinking of what I could build with this thing. It’s just so dang exciting! Why? Well, instead of building a web app with a monolithic JavaScript framework out of the box, Astro encourages you to build a regular old website but pull in the best parts of those frameworks. Let’s say you want to use that fancy [React toast component](https://react-hot-toast.com/) but you don’t want to be bogged down with everything else when it comes to React—and you don’t want your users to be slowed down just because you like creating components in separate files and what not. Well, with Astro you can do just that! I believe you can even mix and match components across frameworks, which is absolutely magic.

Also I love the `.astro` format so far. It’s a combination of Markdown-ese and throwing `<style>` tags into a component so you can write regular CSS and then it sort of encourages us all to write semantic markup. It just feels like the right way to build things. Take a look at [this code example](https://github.com/chriscoyier/astro-css-trickzz/blob/master/src/pages/index.astro#L4) where Chris pulls in some data, grabs a component, and then builds a whole mini-site with it. And it all compiles down to plain HTML and CSS but also gives you the benefits of CSS Modules!

Another sidenote: I find React so damn difficult to read. You see a bunch of imports at the top which as a reader is useless. You then scroll down and see a ton of functions which are _also_ useless the first time you look at a component. _Then_ you get to the render function and now you can get a picture of how this component works and what it creates in the browser. From there you have to scroll back up to see what data is being pulled in and scroll further down to see what styles are being applied if you’re using something like emotion.

React files, in this blogger’s opinion, are an absolute mess. It’s like reading a book inside out and upside down.

Astro feels like the right way to read a file. You start with imports, then you have CSS, then you have the HTML that gets rendered. Simple. Direct. No faffing about. And I’m sure you can have very complex `.astro` components, but that’ll be _only when that complexity is necessary_. Even basic React components are difficult.

In fact, most JavaScript frameworks forces unnecessary complexity into your codebase. But here, gloriously, Astro says _nope_. Not on my watch, bud.

And I think that’s why I’m in love with this thing.
