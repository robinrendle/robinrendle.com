---
layout: layouts/projects/project.njk
title: Gusto
extract: Designing systems for running payroll.
date: 2016-06-29 09:00:00
hero: '/images/projects/gusto/design-system-01.webp'
---

<p class="intro text-center">Gusto helps customers run payroll and pay taxes. <br/> I worked on the design system under the hood.</p>

<figure class="project-img">
  <img src="/images/projects/gusto/design-system-01.webp" alt="A screenshot of the Gusto interface after our work"/>
</figure>

<p class="intro">In 2016 I joined the Payroll team as a product designer but it didn’t take long for me to notice just how difficult it was for the team to ship good things fast.</p>

The culprit turned out to be our design system: engineers, product managers, and designers were forced to confront inconsistent design patterns and frustrating front-end code which distracted them from shipping new features. As [I noted at the time](https://robinrendle.com/essays/systems-mistakes-and-the-sea/):

> Six modal components! Four checkboxes! Nine separate icon styles with three icon fonts! And that’s not to mention the countless number of inconsistent cards and boxes with borders. [...] h3s were bigger than h2s and h5s were bigger than h4s...

I got to work refactoring our primitives and core components, prioritizing improvements to the interface that both customers and designers at Gusto would appreciate.

<figure class="project-img">
  <img src="/images/projects/gusto/design-system-05.webp" alt="The Figma component library and documentation" />
</figure>

Without great documentation, polished UI design or sparkling front-end code is practically useless though. So during this time I learned that documentation has to meet folks where they are: for designers that meant Figma and for engineers that meant Storybook and our component library.

After advocating for a dedicated design systems team, I transitioned to a strange role: part UI engineer, part librarian, and part designer. My job was to understand our design patterns, document them for others, and refactor, reduce, or remove the sprawling duplicates and unnecessary parts of the system. This meant introducing new components, like the one below, but it also meant deleting tens of thousands of lines of CSS and old icons or illustrations.

<figure class="project-img">
  <img src="/images/projects/gusto/design-system-03.webp" alt="A fancy radio new component that I designed and built" />
</figure>

I quickly learned that to get things done I had to work across every team to consolidate their design patterns into a unified library we could all share and so I made some notes over on [the Figma blog](https://www.figma.com/blog/pairing-is-the-key-to-evangelizing-your-design-system/):

> ...collaborating with the design systems team shouldn't feel like another critique. Instead, it should feel like you're moving 80 times faster and preventing a ton of future bugs and issues from popping up. A designer working with us should feel confident that their work is of going to be of a higher standard and quality.

Previously I had assumed I could sit alone in a dark corner of the office and fix our icons, fix our hierarchy and accessibility problems, building great components along the way. As I paired with designers and engineers though I learned that design systems is a cultural project, not a technical one.

Ultimately this work led to [the Gusto rebrand](https://gusto.com/about/news/corporate/gusto-brand-refresh) which required refactoring every component, primitive, and asset in our library. Now with a team of four, we could tackle everything from colors and typography to tables and buttons, simplifying the system bit by bit. But were we successful?

Well, hot take alert: it’s impossible to measure the success of a design system with numbers or metrics alone. Who cares how many lines of code are written or how many components are referenced if the UI at the end is junk or the design team hates working with the system? What really matters is this: does the interface feel better? Is it faster? Is it responsive? Are the animations locked in and are the icons aligned correctly? Can you navigate the interface with a keyboard or a screen reader? Can a customer run payroll from their phone?

At the end of the Gusto rebrand project we answered these questions with a resounding “heck yes.”
