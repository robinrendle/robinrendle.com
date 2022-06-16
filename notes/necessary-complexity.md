---
layout: layouts/note.njk
title: The web is too damn complex
date: 2021-06-18T23:58:48.483Z
city: San Francisco
country: California
extract: A few more thoughts on Astro and the web.
---

For the newsletter last week I jotted down [some quick thoughts about Astro](https://css-tricks.com/newsletter/255-thoughts-on-astro/)—it’s a static site generator that lets you build with React/Vue/Svelte components but then it produces plain ol’ HTML and CSS:

> I guess that’s what’s so exciting to me: the philosophy behind Astro, more so than just what it is today.
>
> It’s a hopeful vision of a future web where we’re not limited by past technical decisions and our users aren’t harmed by our neato developer experience.

Astro looks great for performance, accessibility, and for us as developers. So I’m sat at my desk now thinking of what I could build with this thing. It’s dang exciting! Why? There’s a few reasons.

Instead of building a web app with a monolithic JavaScript framework out of the box, Astro encourages you to build a static website like Eleventy and _then_ pull in the best parts of those big frameworks.

Let’s say you want to use a fancy [React toast component](https://react-hot-toast.com/) but you don’t want to be bogged down with everything else when it comes to React. Well, with Astro you can do just that. Install the npm package, import the component, and away you go.

I believe you can even mix and match components across frameworks, which is magic. But this is also good for the long run since perhaps your team made a mistake and now wants to introduce components from a different framework. With Astro you can slowly remove those old ones without having to do a complete re-haul of your app.

Another reason to love Astro is the new file format `.astro`. It’s a heavenly combination of lots of different web technologies. Take a look at [this example](https://github.com/chriscoyier/astro-css-trickzz/blob/master/src/pages/index.astro#L4) where Chris fetches data, imports a component, and then builds a whole mini-site with it. Isn’t that file just a pleasure to read? You start with imports at the top, but then you have a style tag for your CSS (where CSS Modules are supported out of the box), then you have the HTML that gets rendered beneath. Simple. Direct. No faffing about. And I’m sure you can have complex `.astro` components, but that’ll be _only when that complexity is necessary_.

That last point is the most important thing to me that I missed in the newsletter: all these features sure are nice but there’s a bigger story here about frameworks and our relationship with them.

The modern web wouldn’t be possible without big ol’ JavaScript frameworks, but—_but_—much of the web today is held back because of these frameworks. There’s a lot of folks out there that think that every website _must_ use their framework of choice even when it’s not necessary. And although those frameworks solve a great number of problems, they introduce a substantial number of trade-offs; performance issues you have to deal with, complex build processes you have to learn, and endless dependency updates that can introduce bugs.

I think of [this tweet by Ben](https://twitter.com/bentlegen/status/1258581839343611905) a lot when it comes to the modern web:

> In January I spent about 3 hours trying to convert my personal website to
> @gatsbyjs.
>
> Then I asked myself “what the hell am I doing”, uploaded an index.html file and called it a day.

And that’s the point I’m getting to with this rant: when you pick a framework today that complexity is overwhelming and, for a lot of cases, pretty dang unnecessary.

The way I’m starting to think about it is this: if React is a giant fortress that can walk around the landscape on enormous mechanical legs, then Astro is a bicycle. Do you need rocket boosters? Add ‘em! Do you need a bedroom on your bicycle? That’s great—go do that. But you have to opt-in to all that complexity.

And that’s why I’m in love with this way of building websites, because software should only be as complex as it needs to be.

No more, no less.
