---
title: Arguing with Code
date: 2019-01-29 17:49:00 -08:00
---

Today was a big day. I’ve spent the last two and a half years at Gusto working on a side project that’s finally drawing to a close. It’s nothing exceptional, and it doesn’t change the world. But it makes our design system 1% better. 1% easier to maintain. 1% easier to understand.

All I’m doing is making our application less reliant on Bootstrap, which requires refactoring thousands of lines of CSS, breaking up each section of this mega Bootstrap file and splitting it up into custom styles so that we can own our UI. Instead of that monolithic CSS file with all our Bootstrap styles we now have components like `Button` or `Modal` where everything is focused in one spot. 

If you want to change a button, head to that component, edit it and boom – our UI will now reflect those changes. 

***

I’ve been thinking a lot about design systems lately and why the field is so misunderstood. A lot of designers tend to think it’s just about making things consistent which sure – [yes but](https://robinrendle.com/notes/design-systems-at-gusto-part-ii/) – it’s so much more than that.

*** 

A year ago I noticed a fight break out in our codebase. One team noticed that their checkboxes were broken in their feature, so they went into the codebase and fixed checkboxes for their feature. This broke the checkboxes on another page in the app which the engineers on that team then headed into the fray and updated the checkboxes to fix their part of the app. 

This went on for several weeks before I realized what was happening and how these regressions were taking place. Instead of going back to the core styles and fixing them and then refactoring all checkboxes across the app, folks would instead just rather selfishly fix the checkboxes that they could see in their feature.

It was the first time I noticed that people could have an argument in the codebase without realizing it. 

***

I soon became obsessed with this idea.


