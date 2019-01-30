---
title: Arguing with Code
date: 2019-01-29 17:49:00 -08:00
---

Today was a big day. I’ve spent the last two and a half years at Gusto working on a side project that’s finally drawing to a close. It’s nothing exceptional, and it doesn’t change the world. But it makes our design system 1% better. 1% easier to maintain. 1% easier to understand.

I’m making our application less reliant on Bootstrap, which requires refactoring thousands of lines of CSS and breaking up each section of this mega Bootstrap Sass file by splitting it up into chunks. We’re one step closer to having components like `Button` or `Modal` where all the styles and scripts are in a single place. 

We’re one step closer to having a designed system.


***

I’ve been thinking a lot about why the field is so misunderstood, why so many people take the mantle of design systems work for the title more so than the actual work. I think it’s because a lot of designers tend to think it’s just about making things consistent which...[yes, but](https://robinrendle.com/notes/design-systems-at-gusto-part-ii/)...it’s so much more than that.

*** 

A year ago I noticed a fight break out in our codebase. I watched as one team was pitted against another over checkboxes.  

One team tried to fix the checkboxes were broken in their feature, so they went into the codebase and fixed checkboxes just for this one page. This broke the checkboxes on another page in the app which the engineers on that team then headed into the fray and updated the checkboxes to fix their part of the app. 

This went back and forth for several weeks before I realized what was happening and how these regressions were taking place. Instead of going back to the core styles and fixing them and then refactoring all checkboxes across the app to use these refactored styles, folks would instead fix the checkboxes that they could see in their feature.

It was the first time I noticed that people could have an argument in a codebase. And so I realized that it’s the job of design systems folk to preventing these arguments any way that they can; through documentation, through pairing with designers and engineers, through fixing the code or the design.