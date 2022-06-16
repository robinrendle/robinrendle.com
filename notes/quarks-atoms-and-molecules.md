---
layout: layouts/note.njk
title: Quarks, Atoms and Molecules
date: 2013-07-01 11:46:00 -07:00
tags:
  - design
extract:
  I wanted to write a little bit about a new process I’ve been working on for
  developing sites and maintaining large Sass projects, but first I think it’s worth
  taking a look at how it all came together.
update:
  "*Update*: This post was re-written and edited into a full blown essay for
  the ever so wonderful Smashing Magazine. Go [read that one](/essays/the-other-interface)
  instead, as this is nothing more than an unpolished note."
city: Nottingham
country: UK
---

In [Atomic Design](http://bradfrostweb.com/blog/post/atomic-web-design/) Brad Frost recently argued that front-end development could be improved by modularising particular aspects of design. Instead of coding a form as a component that is reused throughout a website, he suggested breaking it up even further into smaller modules like a placeholder, an input or a text field (which can then be used to create the form by combining these chunks together). This process can be duplicated for navigational items, text with icons, floated objects and pretty much any other sort of front-end module that needs to be re-used.

The theory is that by employing these distinct pieces developers can make the process faster and more efficient because they’re not forced to repeat the same code over and over again. This much appears to be common sense.

Essentially what Brad calls for is [object oriented design](http://coding.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/) which has been discussed in numerous articles and blog posts in the last few years. But that isn’t what really interested me about the post though, it was the _naming convention_ he chose.

Brad uses biological terms to quickly describe what sections of a design should do; _atoms_ are the main chunks (placeholders, labels etc), whilst _molecules_ are combinations of these standard atoms. The simplicity of it piqued my attention since ultimately what we’re discussing here isn’t just a design process, but also a distinction to be made in an interface.

![code](/images/code.png)

Whilst reading it I found that as a designer I’m constantly refining two interfaces simultaneously; one for the user when they view the website, the other for developers that have yet to tackle the code in the future, when adjustments or full-scale redesigns must be made. I realised that we throw the role of ‘user’ onto people that navigate the website itself, and yet seem to forget that the code we write will work for developers much in the same way. _Developers are users too_.

So when we organise and name our files or directories we are inadvertently creating an interface by which developers will have to navigate. Designing conventions for these files, and how they’ll be organised, is fundamental then if we are to ensure active (and fast) development in the future. Atomic design and <abbr title="object oriented css">OOCSS</abbr> seem like the solution to this problem.

---

Over the past few months I’ve been struggling with several aspects of this idea though. In all honesty, I feared that modularising web development in this way might make things too clean and too safe. I worried that the content might get shafted and we’d grow accustomed to designing patterns, whereas sometimes the most interesting aspect of a design is the part that defies pre-established conventions.

In the short talk I gave at [Second Wednesday](http://secondwednesday.org.uk/) earlier this year I mentioned these fears for the first time and discussed what can happen when we treat all content as being part of a single system. Sometimes a component requires a design that is never reused, that sort of [one-of-a-kind](http://www.smashingmagazine.com/2012/02/08/the-journey-from-writer-to-reader/) embellishment, sparking interest or delighting the user in some way. If it was repeated then it might become boring or even worse, repellant. In the end I decided to dive into <abbr title="object oriented css">OOCSS</abbr>, leaving behind many of these fears. Yet some refused to leave and they loomed over my process like a dark cloud.

## The needle in the haystack

Developers are probably quite familiar with [Sass](http://sassnotsass.com/) files that contain thousands of lines of code. The legacy [ultimate package](https://github.com/erskinedesign/ed.ultimate_package), a tool that we used as a boilerplate for all of our front-end code at Erskine, also made this unfortunate mistake. The main problem with keeping all of that code in one place and not using <abbr title="block element modifier">BEM</abbr>, <abbr title="object oriented css">OOCSS</abbr> or atomic design is that you’re likely to forget how one section of the code base is dependent on another. This will eventually lead to wasting the developer’s time and possibly slowing the project down considerably.

Finding specific code blocks is also challenging, even with the advanced search features of a great text editor. And of course, these problems become infinitely worse when you must navigate someone else’s project and all of their code. Directories and file names have traditionally been very poorly designed navigational tools.

## What we need is atomic design principles in our stylesheets

I really like the [Inuit](http://inuitcss.com/) framework and it’s taught me a lot about this modular way of viewing front-end development, but there’s one thing that bugs me. It breaks the system down into three seperate Sass directories: Base, Generic and Objects. I found this naming convention to be confusing because it’s not immediately obvious as to what the relationship is between these directories. _Inheritance should be obvious and immediate._ We shouldn’t have to think as we move between components, modules, objects, styles or classes. Our focus should be on the design of the website, not the interface between us and the development of it.

I want to describe a different organisational convention that’s largely based on the design of Inuit and the ideas presented in Brad’s blog post. So let me quickly run you through it.

When we begin a new project the first thing we need is a directory to set system-wide styles, so effectively what’s required is a set of **utilities** that make up the basic plumbing of the site. This directory of Sass partials (which will then be included into our main Sass file) is important because we need to define global classes, mixins and styles that can be used anywhere and at anytime; these files are organised by their scope. Our utilities directory might look something like this:

<dl>
<dt>Utilities</dt>
    <dd><a href="https://github.com/robinrendle/robinrendle.com/blob/develop/assets/sass/utilities/_reset.scss">_reset.scss</a></dd>
    <dd><a href="https://github.com/robinrendle/robinrendle.com/blob/develop/assets/sass/utilities/_normalize.scss">_normalize.scss</a></dd>
    <dd><a href="https://github.com/robinrendle/robinrendle.com/blob/develop/assets/sass/utilities/_colors.scss">_colors.scss</a></dd>
    <dd><a href="https://github.com/robinrendle/robinrendle.com/blob/develop/assets/sass/utilities/_base-spacing.scss">_base-spacing.scss</a></dd>
</dl>

Next up we ought to define the basic building blocks of the site like paragraphs, tables, images and links. But we should be careful here, we need to make sure that we slowly build up to the complexity that is needed so we don’t step on our toes later. At this stage we should still be thinking globally and not specifically styling for any particular section of the design.

Therefore this next directory should only style the default <abbr title="hyptertext markup language">HTML</abbr> elements. I’ve started calling these components **quarks**; classless objects that, within the files themselves, will contain nothing more than a few elements:

<dl>
    <dt>Quarks</dt>
    <dd><a href="https://github.com/robinrendle/robinrendle.com/blob/develop/assets/sass/quarks/_lists.scss">_lists.scss</a></dd>
    <dd><a href="https://github.com/robinrendle/robinrendle.com/blob/develop/assets/sass/quarks/_paragraphs.scss">_paragraphs.scss</a></dd>
    <dd><a href="https://github.com/robinrendle/robinrendle.com/blob/develop/assets/sass/quarks/_tables.scss">_tables.scss</a></dd>
    <dd><a href="https://github.com/robinrendle/robinrendle.com/blob/develop/assets/sass/quarks/_links.scss">_links.scss</a></dd>
    <dd><a href="https://github.com/robinrendle/robinrendle.com/blob/develop/assets/sass/quarks/_micro.scss">_micros.scss</a></dd>
</dl>

It’s at this point where the system looks like overkill. Why do we need a separate partial for almost every default element that will make up the site? My argument would be that combining all of these smaller pieces together is likely to cause confusion, especially on larger sites. Having a large number of partials is fine so long as they’re easy to find and are organised properly.

Now we need to start thinking about the relationships between these quarks and so we start to introduce aspects of <abbr title="Block element modifier">BEM</abbr> and <abbr title="object oriented css">OOCSS</abbr>. In this system I’ve called these modules **atoms**; universal abstractions such as the [media](http://www.stubbornella.org/?p=497) or [flag object](http://csswizardry.com/2013/05/the-flag-object/). For example we might have an object that sets the default styles for buttons – as we then plan for those styles to be extended and built upon:

<dl>
    <dt>Atoms</dt>
    <dd><a href="https://github.com/robinrendle/robinrendle.com/blob/develop/assets/sass/atoms/_media.scss">_media.scss</a></dd>
    <dd><a href="https://github.com/robinrendle/robinrendle.com/blob/develop/assets/sass/atoms/_nav.scss">_nav.scss</a></dd>
    <dd><a href="https://github.com/robinrendle/robinrendle.com/blob/develop/assets/sass/atoms/_beautons.scss">_beautons.scss</a></dd>
</dl>

The styles within an atom should almost never be attached to an <abbr title="hypertext markup language">HTML</abbr> element itself; we might not be able to guarantee what the markup will look like in the future so it’s safer to always specify a class instead. In this way, atoms will save us from writing hundreds of lines of code and keeping things relatively abstract. Just as Brad suggested, they’re powerful because they can be combined to form more complicated structures, such as **molecules**.

As I mentioned earlier, sometimes we need one-off structures such as a banner navigational element or a footer that we don’t want to replicate in the future. This is where we can combine sections of code without interfering with any of our global styles:

<dl>
    <dt>Molecules</dt>
    <dd><a href="https://github.com/robinrendle/robinrendle.com/blob/develop/assets/sass/molecules/_banner.scss">_banner.scss</a></dd>
    <dd><a href="https://github.com/robinrendle/robinrendle.com/blob/develop/assets/sass/molecules/_custom-post.scss">_custom-post.scss</a></dd>
    <dd><a href="https://github.com/robinrendle/robinrendle.com/blob/develop/assets/sass/molecules/_footer-nav.scss">_footer-nav.scss</a></dd>
</dl>

Molecules allow for the sort of design components that Allen mentioned in _[Made to Measure](http://contentsmagazine.com/articles/made-to-measure/)_ last year:

> Design is about establishing a set of relationships between elements. By codifying these relationships as a set of principles instead of a single, stand-alone template, we make it possible for other designers to extend our work (per article) while remaining faithful to its core ideas.

So where atoms and quarks define rigid and well defined rules for the system overall, and utilities provide the outlining structural styles necessary to keep things tidy, it’s the molecules where the design can become more flexible and extend styles out of those central tenets of the system.

These layers act like the multiple dream levels in Inception, each adds another layer of complex behaviour to the website and the subsequent layer is usually dependent on the previous one. Quarks, atoms and molecules break up those monster Sass files I mentioned earlier and make code faster to read and easier to maintain in the long run.

Of course this is not the only way to organise our styles with Sass. They could be based on another kind of taxonomy or categorisation, completely unrelated to biology or chemistry. But as you can see, this is more than just a goofy way to name your files and directories — it implies the kind of relationships between these independent components.

So I updated this little site over the weekend with this design and it held up quite nicely to my expectations of legibility and speed. I no longer feel daunted by the code because it’s broken up into refactored, smaller chunks that I can experiment with. I’m not sure about the pros and cons of using a similar system on a larger scale yet, but I think this sort of convention can be helpful in many ways.
