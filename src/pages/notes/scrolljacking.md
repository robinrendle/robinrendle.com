---
layout: ../../layouts/notes.astro
title: Scrolljacking
date: 2013-10-23 11:06:00 -07:00
tags:
  - design
extract:
  These pages that hijack the scroll might look like slides from shiny keynote
  presentations but as websites they are the usability equivalent of nails on a chalkboard.
update:
city: Nottingham
country: UK
---

There is only one law of web design: _don’t mess with the scroll._

Although there are infinite ways to mess with it, it’s possibly the most underestimated side effect of poor web performance. This might happen when an interface dips beneath the 60fps threshold when a user is scrolling around and a script causes [a flood of repaints to the page](http://www.youtube.com/watch?v=HAqjyCH_LOE). This jaggy, unfamiliar feedback as the content moves around on the screen has the effect of disturbing users from navigating the rest of the interface.

However, there appear to be even more websites where this is a _feature of the design_ and not just an unintended byproduct. Take a look at the the [iPad Air site](http://www.apple.com/ipad-air/) that launched yesterday, or [Square Cash](https://square.com/cash) and scroll around for a few minutes.

These pages might look like slides from shiny keynote presentations but as websites they are the usability equivalent of nails on a chalkboard.

---

Whenever I imagine a designer sat at their desk, coffee in hand, working on one of these websites I think of them as control freaks of the worst kind. I imagine designers thinking things like: _They will use this interface the way that I want them to_. And yet, even though the sites that come out of this sort of thinking might live on the web, they will never be _of the web_ itself. Hijacking the scroll provides barriers to entry and tiny blockades to the information within; they shine a heavy spotlight on the design rather than the information they are built to support.
But if a designer finds that their users aren’t scrolling as they might hope then there are three potential problems that are probably being overlooked:

- The content / service is not appealing enough.
- The rhetoric isn’t correctly tuned to the audience or the product.
- The interface is broken.

This is not an inherent problem with the scroll itself since billions of people love to scroll. They scroll all day long on webpages with their phones, with tablets, with desktop computers, both on the web and with offline apps. It’s a design pattern that’s been in use since the very first public introduction of the internet almost 20 years ago and even before it with software on clunky desktop computers.

It’s so natural to scroll that YouTube is overflowing with videos of young children swiping televisions, magazines, and books. Scrolling has replaced the turning of a page as the primary method of pushing on to the next section, the next chapter; it defines our experience with every machine we encounter.

Designers might argue that there are superior alternatives to the scroll, or they might say that there are more interesting and [possibly more efficient](http://en.wikipedia.org/wiki/Zooming_user_interface) means of navigating information. What cannot be argued however is that this is an unrecognisable pattern, that people must be treated like mindless herds whilst designers ought to splatter large, condescending arrows across an interface or hijack the scroll completely.

Likewise I think that having a scroll instruction on a website is like having a ‘turn the page’ instruction in a book.

---

Over time I’m beginning to see that web designers have two conflicting objectives when making an interface, regardless of whoever might be the end user.

The first is the [prime directive](http://en.wikipedia.org/wiki/Prime_Directive); designers need to document existing patterns that are inherent in the medium and stick to these conventions if they can.

This is what [Craig](http://www.craigmod.com) discusses in [this wonderful talk](http://www.youtube.com/watch?v=7z169AfJvM4) at O'Reilly. Essentially he describes the ways in which books don’t need a crazy number of tutorials for the user to understand how they work — the constraints of the format encourage designers to experiment in other ways. Yet by latching on to the user’s expectations of what a book is (for more content just keep swiping pages) you can do all sorts of magical things without messing with what might be considered this standardised, baseline user experience that designers get out of the box for free.

The second objective that a designer must struggle with on a daily basis is completely incompatible with the first however. They must also be tirelessly searching for _better_ patterns all the time. Pull to refresh is perhaps the best example of this because it builds on existing user expectations, and it even compliments the scroll itself.

Scrolljacking, as I shall now refer to it both sarcastically and honestly, is a failure of the web designer's first objective; it attacks a standardised pattern and greedily assumes control over the user’s input. Generally this principle in software design is a Bad Idea™, as described by [Jef Raskin](http://en.wikipedia.org/wiki/Jef_Raskin), grandfather of the Macintosh:

> That a user should not be kept waiting unnecessarily is an obvious and humane design principle. [...] Users should set the pace of interaction.

<hr/>

<figure>
<blockquote lang="en">Scrolling is the default behaviour of the web. If a design conflicts with that then there has to be a pretty damn good reason why.&mdash; Robin Rendle (@robinrendle) <a href="https://twitter.com/robinrendle/status/349557342519566337">June 25, 2013</a></blockquote>
</figure>
