---
layout: layouts/note.njk
title: Arguing in Public
date: 2019-01-29 17:49:00 -08:00
extract: Design systems and making things 1% better every day.
city: San Francisco
country: California
---

Today was a big day. I’ve spent the last two and a half years at Gusto working on a side project that’s finally drawing to a close. It’s nothing exceptional, and it doesn’t change the world. But it makes our design system 1% better. 1% easier to maintain. 1% easier to understand.

If I can leave the office every day feeling as if I’ve pushed things forward, even by a slim margin, then I’m happy.

---

I’m making our application less reliant on Bootstrap, which requires refactoring thousands of lines of CSS and breaking up each section of this mega Bootstrap Sass file by splitting it up into chunks. After today we’re one step closer to having components like `Button` or `Modal` where all the styles and scripts are in a single place.

We’re closer to having a designed system.

---

I’ve been thinking a lot about why the field is so misunderstood, why so many people take the mantle of design systems work for the title more so than the actual work. I think it’s because a lot of designers tend to think it’s just about making things consistent which...[yes, but](https://robinrendle.com/notes/design-systems-at-gusto-part-ii/)...it’s so much more than that.

I feel as if miscommunication and disorder have to be qualities that upset you. Design systems isn’t a field you can grow into, it’s more like a field for people with specific quirks and personalities (this sounds mean perhaps but it’s true in my experience).

You need to be the sort of person that will do boring work in order for some very distant, greater good. You need to be capable of working on giant projects that last for months on end that have no discernible impact whatsoever.

There’s a certain amount of selflessness required for the work.

---

A year ago I noticed a fight break out in our codebase. I watched as one team was pitted against another over checkboxes.

One team tried to fix the checkboxes that were broken in their feature, so they went into the codebase and fixed checkboxes just for this one page. This broke the checkboxes on another page in the app which the engineers on this whole other team then headed into the fray and updated their own components.

This went back and forth for several weeks before I realized what was happening and how these regressions were taking place. Instead of going back to the core styles and fixing them and then refactoring all checkboxes across the app to use these refactored styles, folks would instead fix their problem without investigating how complex the issue really was under the hood.

It was the first time I noticed that people could have an argument in a codebase. And so I realized that it’s the job of design systems folk to prevent these arguments any way that they can; through documentation, through pairing with designers and engineers, through fixing the code or the design.

Do you have more than one type of card in your app? That’s an argument. Do you have a billion colors and font-sizes? That’s another. Does each page have custom styles applied to it? Or do you have two components that work in a very similar way but the code is entirely different? This is perhaps the nastiest argument of them all.

All of these arguments are completely invisible and silent unless you have the ability to detect them properly (some have this faculty, others do not). But we also need to have the ability to describe them. To point them out. To get other people to recognize these issues. And today I’m good at detecting these issues and working around them but I’m really bad at showing others what’s causing a problem.

I have to fix that. Because this work isn’t just about hiding away and making the perfect design system until you unveil it to the company. A design system is not a thing you can touch or hold in your hands – it’s a culture and not a product.

So design systems is really about finding those arguments that hide in the codebase, or those that take refuge in a mockup, and then our job is to make them public.
