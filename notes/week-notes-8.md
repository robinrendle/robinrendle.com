---
layout: layouts/note.njk
title: "Week notes #8"
date: 2015-03-26 02:04:00 -07:00
tags:
  - design
extract:
  "What is it about these letters that overpowers my senses, that makes me
  stare at each of them longingly? Is it in the flick of the lowercase ‘e’? Or perhaps
  I’m drawn to the restraint of the design or to the barely perceptible quirks that
  appear like hushed giggles on the screen. But then why are these large apertures,
  with their inscriptional characteristics, so attractive to me? "
update:
city: Nottingham
country: UK
---

The last fornight has been exceptionally busy so I sort of missed out on last week’s post, but I’ve finally managed to find a spare moment and so here it is in all its unedited glory:

---

[Typographica](http://typographica.org) published a collection of typeface reviews from the [best releases of 2014](http://typographica.org/features/our-favorite-typefaces-of-2014/) and I was thrilled to contribute with [my review of Apres](http://typographica.org/typeface-reviews/apres/) by Font Bureau:

![Apres specimen](/images/apres-specimen.png)

> What is it about these letters that overpowers my senses, that makes me stare at each of them longingly? Is it in the flick of the lowercase ‘e’? Or perhaps I’m drawn to the restraint of the design or to the barely perceptible quirks that appear like hushed giggles on the screen. But then why are these large apertures, with their inscriptional characteristics, so attractive to me? And why am I brought to the edge of my seat by the long, outstretched descender of the ‘y’?

For the rest of the month I’ll be plodding my way through the articles and stumbling through their many hidden treasures as their insights into the typographic world slowly reveal themselves. You may feel free to join me.

---

Speaking of typefaces, a small amount of progress has been made on my redesign as I’ve finally settled on [Nocturno](http://www.typonine.com/fonts/font-library/nocturno/) as the primary typeface. I found it last year when [Caren Litherland](http://twitter.com/litherland) wrote [her review](http://typographica.org/typeface-reviews/nocturno/) for Typographica and I’ve been dying to use it ever since:

![Nocturno](/images/nocturno.png)

Nocturno has subsequently replaced [Ideal Sans](http://www.typography.com/fonts/ideal-sans/overview/) as my default typeface for projects such as presentations, or emails or any other kind of typesetting that’s just for my own pleasure.

---

In the redesign of this site I’ve been trying to learn as much as I possibly can about font loading because I want to use small caps and multiple weights of Nocturno without sacrificing performance. In fact, I want to add _more_ font files whilst making the site _feel_ a whole lot faster. But throughout these experiments whacky things have occurred, such as one typeface downloading (like the italic variant) whilst the fallback font Georgia is still on screen for a good long while:

![Georgia with Nocturno italics](/images/georgia-with-nocturno.png)

This has led to a startling conclusion that I hadn’t really considered before: that the flash of unstyled text is in fact a Good Thing™ and performance is more important than ligatures or other typographic embellishments. It has to be said that a website stocked to the brim with Papyrus is far better than one which has hidden all of its content as it waits to download a fancy webfont: Verdana or Comic Sans or Arial is a better typeface than nothing at all.

This fundamentally changes the way I’ve thought about great typography on the web, as now I should really see the act of typesetting as a complicated spectrum of quirks and problems instead of an act that requires perfection: great typography is no longer a craft (eurgh) made up of absolute values and unbreakable rules.

---

Over on CSS-Tricks I created the almanac entries for [image-rendering](https://css-tricks.com/almanac/properties/i/image-rendering/) and [will-change](https://css-tricks.com/almanac/properties/w/will-change/), the latter definitely requires a little demo or something which I’ll update some time this month. But the image-rendering property is really hard to write about because of the weird browser support at the moment.

---

![Bookspace](/images/ie_books.jpg)

In my spare time I’ve been reading [Inland Editions’](http://inland-editions.com) kickstarted publication about libraries called _Bookspace_. [Maria Inês](https://twitter.com/poplastik), one of the cofounders of this delightful venture [wrote a little about the project](https://lestroischaises.wordpress.com/2015/03/13/bookspace-collected-essays-on-libraries/):

> The book focuses on the current development of library spaces as public institutions through the perspective of architects, writers, librarians, and readers. It addresses the architecture of modern public spaces, and the development of library collections in the age of digital information, in order to discuss the larger social context of libraries as institutions. Bookspace provides an insight into their management and how their functions are changing.

Sounds pretty great, right? I’m particularly fond of the book’s focus on the practical nature of libraries and their physical contents rather than the ephemeral qualities of reading. For example, in an extended interview with David Pearson, the Director of Culture, Heritage and Libraries at the City of London Corporation, he goes on to argue that:

> Libraries are expensive places to run, an aspect of all this that is easily lost sight of, particularly if you are thinking of it from a purely academic perspective. So the question is: Are we sure that the books that go into the pulping mill are not ones that have got those other kinds of values that we might actually want to hang on to? There are after all millions of 20th-century books that are identical, that have no distinguishing features, nobody has written or made notes in them. How many copies of those do we need for textual purposes?

It’s these sorts of problems that feature in _Bookspace_ rather than the much treaded ground of how a book should feel or smell, an affectation of which [I am sometimes guilty](http://www.smashingmagazine.com/2012/02/08/the-journey-from-writer-to-reader/). So if smart, well-researched writing about books and libraries is your jam then you should definitely pick up a copy for yourself.
