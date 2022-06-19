---
layout: layouts/note.njk
title: Partners in Crime
date: 2019-06-29 14:51:06
city: San Francisco
country: California
extract: Software development is all wrong.
tags:
  - design
---

In videogame design there’s the concept of ‘the loop’ – a pattern that a game has been designed around. You shoot, you drive, you jump. There’s a finite number of things you can do in a world, and the real videogame design magic is the order in which you let a player experiment with those mechanics. A game isn’t a good one if it has jumping, shooting, or driving, but instead it’s good if the order of those actions makes sense and is constantly surprising.

Or so the theory goes.

But when it comes to software development there’s a different kind of loop and it (mostly) works like this: an engineer will sit in a team of a dozen or so people, and after they’ve typed with their headphones on silently for a couple of hours alone, they’ll send someone a tiny bit of code to review once they’ve finished. They’ll wait for automated tests to pass, they’ll maybe have another round of reviews and then once everything checks out, their code will be published.

And after working on an engineering team for the last 3 years I’ve come to the conclusion that we got this all wrong. Well, the structure and organization of software development anyway. Here’s why:

- There is always a delay between when an engineer has finished typing and when that code has finally been reviewed. There will often be things they need to fix; there will be tests that have to pass a series of automated checks and after they’ve finished typing there’s possibility for more errors to be added or for context to be lost as time passes. It’s easy to forget why you did something earlier in the day, let alone last Tuesday.
- A lot of refactoring work doesn’t make sense without written context – often you have to write something nasty that is part of a bigger project or refactor. Qualifications can be made in comments, sure, but these aren’t always clear. Talking about these issues in person always makes much more sense.
- There is often a million ways to make a thing work and one engineer can hardly be expected to think through each of them before they start. Often these improvements and suggestions will come in the code review stage, hours after the suggestion would have been most useful and saved a decent amount of time. I reckon millions of dollars are set ablaze like this at big companies.
- When working alone, information is siloed in the mind of one person, that lone engineer, and when they leave the company they take all of that information and context with them; each employee that leaves your company isn’t just a collection of programming skills but they’re also an archive of a vast and complex system. To recoup the loss of information like that takes _years_ of training.

It’s clear to me that software shouldn’t be built or designed like this. A lone genius isn’t the right way to think about an engineer and it appears to me that working alone is the worst possible way to build complex applications.

So how do we structure a team instead? How should we think about the relationship between engineers?

Well, I think we should take inspiration from, of all places, detectives. Each engineer should be seen as one half of an investigative unit; on the first day on the job they should should be assigned a partner in crime that they sit next to everyday and work on the same problems together. And my experience here is perhaps a bit limited but every moment of intense productivity I’ve experienced is when I’m paired with someone and our skills overlap slightly but we’re at opposing ends of a spectrum.

That’s when things really fly.

And the more I think about this way of seeing an engineer – not as an individual, but as one of a pair – the more I believe this should be how eng teams are organized. There’s so many reasons why this works better! And lately this happened to me – I’ve paired with an engineer everyday for the last three months and I’ve noticed so many improvements over the lone wolf model:

- Together we can make sweeping changes very quickly.
- We don’t need to wait for code to be reviewed because we’re constantly looking at each other’s work.
- Suggestions for improvements can be given at the earliest stages before work has really begun.
- There is so much more context that can be given in person and learning about a complex system takes half the time.
- There’s no need for standup because we’re working on the same thing everyday.
- Because we work in pairs there’s less siloed information and if one of us leaves for whatever reason then the other person can hold the ship together.

So today we’ve built our engineering teams around missions or features or pods – giant clumps of engineers that sit next to each other everyday but work almost entirely in isolation – and I think that makes things easy for management and org structures but it makes things so much harder for capable engineers to get good work done.

I think we’ve built these teams in service of managers and not what the work requires of us.
