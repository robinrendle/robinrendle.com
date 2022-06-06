---
layout: ../../layouts/notes.astro
title: Resources for learning how to JavaScript
date: 2014-09-10 07:20:00 -07:00
tags:
  - design
extract:
  In recent weeks I’ve been trying to improve my fledging JavaScript skills,
  which have always bothered me. Sure, for the longest time I’ve been able to hack
  away in order to get something to work in the browser but parsing all the quirks
  and eccentricities of the DOM felt entirely beyond me.
update:
city: Plymouth
country: UK
---

In recent weeks I’ve been trying to improve my fledging JavaScript skills, which have _always_ bothered me. Sure, for the longest time I’ve been able to hack away in order to get something to work in the browser but parsing all the quirks and eccentricities of the <abbr title="Document Object Model">DOM</abbr>, <abbr title="Browser Object Model">BOM</abbr> and related <abbr title="Application programming interface">API</abbr>s felt entirely beyond me. So now, a couple of weeks later, I thought it might be a nice idea to round up a collection of resources which I found to be particularly helpful along the way.

---

### [#1: The Javascript Book](http://javascriptbook.com/)

From the people that brought us the excellent [HTML and CSS book](http://www.htmlandcssbook.com/) comes a great resource for folks just starting out with JavaScript. However, more than simply _reading_ this book from cover to cover I’d recommend that anyone that’s dedicated should write out _every_ single line of code from the examples given inside.

I’ve often made the mistake in the past of reading technical books without examining each line of code and ultimately that’s made me a worse programmer in the long run. But now whenever I go through this sort of book I’ll crack open [JSBin](http://jsbin.com/) or [Codepen](http://codepen.io) and get the example actually working in my own browser until I move onto another section.

### [#2: A dive into plain JavaScript](http://blog.adtile.me/2014/01/16/a-dive-into-plain-javascript/)

Next up is an article by [Viljami Salminen](https://twitter.com/viljamis) over on the Adtile blog where he offers a comprehensive intro into plain JavaScript, which is especially useful if you’re more familiar with jQuery. The focus of this piece is mostly on the latest additions to the syntax, whilst taking into consideration progressive enhancement too:

While libraries like jQuery help to forget most of the browser inconsistencies, you really become familiar with them once you start using plain JavaScript for everything. To avoid writing JavaScript that’s full of browser hacks and code which only solves browser compatibility issues, I recommend building a progressively enhanced experience using feature detection to only target the more modern browsers.

### [#3: Is it time to drop jQuery?](http://toddmotto.com/is-it-time-to-drop-jquery-essentials-to-learning-javascript-from-a-jquery-background)

Likwise, this piece by [Todd Motto](https://twitter.com/toddmotto) is another great introduction to plain JavaScript that takes an interesting look at what jQuery’s doing in the background:

> HTML5 doesn't just mean a few extra HTML elements, if you're putting down on your CV/Resume that you know HTML5 because you've used the new elements, then think again! HTML5 covers such a mass of technology, and also alongside it comes ECMAScript 5, the future of JavaScript. Combining HTML5 APIs, of which most require JavaScript, we need to adopt a more native structure of working as each day jQuery becomes less important, and here's why.

Todd Motto, <a href="http://toddmotto.com/is-it-time-to-drop-jquery-essentials-to-learning-javascript-from-a-jquery-background">toddmotto.com</a>

### [#4: Everything you wanted to know about JavaScript Scope](http://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/)

Through that great primer on plain JavaScript by Todd I also happened to stumble upon his article which meticulously explains lexical scope. Compared to any other resource out there, I haven’t found a better description, as Todd carefully takes the reader through this unfamiliar concept, step by step:

> The JavaScript language has a few concepts of "scope", none of which are straightforward or easy to understand as a new JavaScript developer (and even some experienced JavaScript developers). This post is aimed at those wanting to learn about the many depths of JavaScript after hearing words such as scope, closure, this, namespace, function scope, global scope, lexical scope and public/private scope.

Todd Motto, <a href="http://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/">toddmotto.com</a>

### [#5: Help, I’m stuck in an event loop!](http://vimeo.com/96425312)

This video of a talk by [Philip Roberts](https://twitter.com/philip_roberts) at Scotland JS earlier this year piqued my attention because he dives into the inner workings of the JavaScript language. What’s a callback queue? What’s a call stack? How do functions _really_ work in this strange and alien environment? [Let’s find out!](http://vimeo.com/96425312)

### [#6: JavaScript Design Patterns](http://addyosmani.com/resources/essentialjsdesignpatterns/book/)

Finally, I’ve been working my way through this more complicated collection of design patterns as detailed by [Addy Osmani](https://twitter.com/addyosmani). Although it looks a little scary at first, understanding how to organise a lot of JavaScript into a cohesive pattern is vital for maintaining the codebase and working on larger JS applications:

> A pattern is a reusable solution that can be applied to commonly occurring problems in software design - in our case - in writing JavaScript web applications. Another way of looking at patterns are as templates for how we solve problems - ones which can be used in quite a few different situations.
>
> Patterns are not an exact solution. It’s important that we remember the role of a pattern is merely to provide us with a solution scheme. Patterns don’t solve all design problems nor do they replace good software designers, however, they do support them. Next we’ll take a look at some of the other advantages patterns have to offer.

---

Usually I disdain from writing listicles, especially the kind which happen to chant all the things I don’t understand about a particular technology – but sometimes it’s difficult to get to those _ah-ha!_ moments when learning something new, and these books, websites and videos were invaluable in that regard. Hopefully you’ll find these resources as useful as I have.
