---
layout: layouts/projects/project.njk
title: Retool
extract: Building web apps with web apps.
company: Retool
date: 2023-10-28 09:00:00
color: '#30C67D'
hero: '/images/projects/retool/command-bar/001.webp'
---

<p class="intro text-center">Retool helps engineers make web apps. My job was to simplify the building blocks.</p>

<figure class="project-img">
  <img src="/images/projects/retool/command-bar/001.webp" />
</figure>

<p class="intro">Engineers used Retool’s interactive canvas to design their apps but when I joined the team I noticed how often customers struggled to perform common tasks, such as writing code, searching for components, and importing data.</p>

Customers had to do an awful lot of clicking to navigate the interface. This hurt new customers because they’d have to click fifty tiny icons on the page to understand the basics whilst existing customers struggled to switch back and forth between modes—writing code or adjusting layout—and were forced to do that with their mouse alone.

So I got to work organizing and categorizing the building blocks, bringing them all together in one interface. This would prevent engineers having to click things but this new interface also gave us the opportunity to provide guidance and teach customers who might not be aware how to write code or design their apps:

<figure class="project-img">
  <img src="/images/projects/retool/command-bar/002.webp" />
</figure>

I first thought this would be a quick tidy-up project to find, categorize, and organize these actions but the project quickly expanded as I fully understood the scope of the problem that customers struggled with. For example, after doing more research into IDEs I noticed that engineers live in their keyboards. They hate switching back and forth between the keyboard and mouse and the design above didn’t fix that problem at all.

This made me think about how I might design a keyboard-first experience for engineers whilst providing handy shortcuts to keep them stay focused on their work and not aimlessly click around the Retool UI looking for help.

<figure class="project-img">
  <img src="/images/projects/retool/command-bar/add-panel.webp" />
</figure>

I dragged every engineer and designer I could into whiteboarding sessions where we debated how to organize the building blocks and what customers needed to see right away from this UI. And I went through at least ten million bad designs before something interesting began to emerge.

But then I landed on a direction, a vision for the product, that prioritized all this screen space for customer’s apps instead.

<figure class="project-img">
  <img src="/images/projects/retool/command-bar/004.webp" />
</figure>

Once I had a good understanding of the building blocks and categorized them in a sensible way, I started to expand the scope of the project. What if this interface could adapt to the user as they navigated Retool? Why did customers have to learn a new way of importing data or writing code across each of Retool’s features?

Could we provide a single, unified experience for them—and what if we thought of the command bar as Retool’s universal remote control instead?

To test this interface we started with RetoolDB, an essential product that customers used to store data before giving Retool full access to their database credentials. It was a playground for SQL data and it was especially important for new customers onboarding:

<figure class="project-img">
  <img src="/images/projects/retool/command-bar/retooldb-004.webp" alt=""/>
</figure>

Testing this interface in RetoolDB turned out to be a great idea because it helped us identify what else the command bar should be capable of and helped me consider more deeply how this universal remote control might adapt to the user.

For example, in a database customers expect to be able to search, filter, and save views or set permissions—and all that could be done from the command bar. As we implemented this new design we also shipped a ton of quick improvements, such as providing keyboard shortcuts for every command imaginable.

<!-- <figure class="project-img">
  <img src="/images/projects/retool/command-bar/retooldb-005.webp" alt=""/>
</figure> -->

<figure class="project-img">
  <img src="/images/projects/retool/command-bar/retooldb-007.webp" alt=""/>
</figure>

The command bar helped us focus on what were the most important actions that engineers needed to get work done and which could be hidden behind progressive disclosure. These discussions helped us understand our customers but it also helped us clean up a decade of features that had been slammed into the product.

At this point though I really started to think about how the command bar could adapt to engineers and hide features that they didn’t need at any given time. For example, when customers had selected a row perhaps we ought to give them controls for that row of data can be manipulated, exported, or transformed instead.

<!-- <figure class="project-img">
  <img src="/images/projects/retool/command-bar/retooldb-003.webp" alt=""/>
</figure> -->

<figure class="project-img">
  <img src="/images/projects/retool/command-bar/retooldb-006.webp" alt=""/>
</figure>

I did a ton of future product exploration for this project too.

For example, customers always have questions about their data and want to query it in some form. But what if they could use natural language to get their answers? What if they could ask questions about their data without having to write a single line of SQL? AI tools at the time did a pretty good job of transforming natural langauge queries into SQL queries, like so:

<figure class="project-img">
  <img src="/images/projects/retool/command-bar/retooldb-001.webp" alt=""/>
</figure>

<figure class="project-img">
  <img src="/images/projects/retool/command-bar/retooldb-002.webp" alt=""/>
</figure>
