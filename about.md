---
title: About
extract: A British designer, writer, and typographic nuisance.
layout: layouts/note.njk
eleventyExcludeFromCollections: true
date: 2025-11-25 09:03:28
country: California
city: San Francisco
templateClass: about
heroImg: "/images/me/robin-rendle-2.webp"
---

I’ve lived in the Bay Area for a decade now, shuffling up and down the peninsula, writing words and building software. Along the way I’ve worked for smart folks at Gusto, Sentry, and Retool as well as for handsome clients like XOXO and Buttondown. Today I’m a software designer at Apple.

You can buzz me at <a href="mailto:robinjrendle@gmail.com">robinjrendle@gmail.com</a>

From 2014–2022 I was a staff writer at CSS-Tricks. Over the years I learned how to poke at words until they made sense and how to break up big concepts into teeny tiny interactive demos. Eventually I took the helm of the CSS-Tricks newsletter—my first beat—and it became a punk rock writer’s residency. Years later, and I’m still proud of the work we did together. 

I studied design at Reading University and I snuck into every class about typography and letter-making that I could. For a kid who always wanted to be in publishing, the Department of Typography and Graphic Communication was like stumbling into a typographic time machine. Every wall and cabinet drawer is filled to the brim with precious artifacts: metal type and wood engravings, type posters and famous Bauhaus treasures. It’s a special place with some very special people.

Since 2012 this website has been a blog—sure, yes, okay—but I’ve always seen it as a printing press first. Every once in a while I’ll publish an e-essay about whatever it is I’m currently obsessed with, whether that’s typography, design systems, photography, or the magic of e-bikes. 

Here, take a look:

<ol class="stories">
{%- for post in collections.stories | reverse -%}
{%- if "featured" in post.data.tags -%}
<li>
<a href="{{ post.url }}">
<h3 class="visually-hidden">{{ post.data.title }}</h3>
<img src="/images/essays/home/{{ post.data.hero }}" alt="{{ post.data.alt }}">
</a>
</li>
{%- endif -%}
{%- endfor -%}
</ol>

Today, if I tilt my head a bit, I see all this work continuing the stuff I made as a kid; rolling around in the sun, making comic books for hours on end.

It’s all just publishing, man.
