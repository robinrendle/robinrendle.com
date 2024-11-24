---
layout: layouts/projects/project.njk
title: Command bar
extract: A unified theory of everything.
company: Retool
date: 2024-03-28 09:00:00
heroImg: /images/projects/retool/command-bar/editor-01.webp
heroAlt: The new command bar in Retool.
color: oklch(70.36% 0.15650784384579877 257.13241640145225);
---

<p class="intro">Search components, import data, and perform actions.</p>

Customers struggled to learn the basics of Retool since important actions were difficult to find and even experienced users struggled to build things. So I led the design and exploration of a reimagined web app building experience to help them. 

<figure class="project-img">
  <img src="/images/projects/retool/command-bar/editor-01.webp" />
</figure>

This project began when I asked customers to perform simple tasks to make their first web apps and it was clear right away that they struggled with dead-ends, switching back and forth between their mouse and keyboard, writing SQL, and importing their data. 

These folks had to toggle different modes to perform these tasks, too. So let’s say they wanted to add a button to their app and then quickly write some code that’s triggered on tap. This relatively simple task would take dozens of clicks, and that’s only if you already knew where to find everything.

<figure class="project-img">
  <img src="/images/projects/retool/command-bar/retool-interface.webp" />
  <figcaption>A jam-packed navigation on the far left hid important concepts.</figcaption>
</figure>

So customers needed a single home for adding components or importing data: they should be able to go window shopping, browse the primitives or root around the building blocks, so that they can get a sense of what’s possible if they’re unfamiliar with Retool. 

But we also needed to prioritize these building blocks and reorganize the less important tools that had been added to the interface slowly over time.

<figure class="project-img">
  <img src="/images/projects/retool/command-bar/retool-interface-2 - 01.webp" />
  <figcaption>Important actions were hidden behind a series of annoying clicks.</figcaption>
</figure>

So this new interface should speed customers up, reducing the amount of clicks they need to do common actions in their daily routine. I imagined a tool shed where you might see all the hammers and screwdrivers neatly arrayed on the wall. That’s what customers needed.

Early mockups and prototypes were rough, though. Beware!

<figure class="project-img">
  <img src="/images/projects/retool/command-bar/editor-mocks.webp" />
  <figcaption>An early, awful sketch.</figcaption>
</figure>

Explaining and categorizing these building blocks would be tough though, because at Retool we didn’t all agree about how to bucket them. Is JavaScript “data”? What is a resource? How should be break down these objects to make them understandable?

I did a ton of brainstorming with developers and designers as I explored these early prototypes. Some of them, like below, were just as slow and difficult to navigate as the original UI. Although, breaking these objects into categories sure was an interesting idea, it just felt all wrong as soon as I wired up this prototype.

<figure class="project-img">
  <video width="250" loop autoplay muted>
  <source src="/images/projects/retool/command-bar/command-bar-000.mp4" type="video/mp4"/>
  </video>
  <figcaption>An early prototype combined code, components, and data all into one tab.</figcaption>
</figure>

There was promise here though!

The categories are confusing here and the visual style was pretty goofy. Navigation was painfully slow, too. But: I knew I was on the right track by combining these important actions together as performing simple searches for components or code primitives felt ten thousand times faster now.

So what should I do about these categories?

Well, I remembered interviews with customers where they all mentioned how much they love Retool components. Consistently, every single customer mentioned how these components are the most impressive and important thing to their daily experience of Retool. 

So I took another crack at a prototype that showcased these components out of the gate whilst still allowing customers to search for any type of building block they need. 

<figure class="project-img">
  <img src="/images/projects/retool/command-bar/editor-03.webp" />
  <figcaption>The second prototype I built felt right on track.</figcaption>
</figure>

After dozens of interviews with designers and engineers I decided to pull JavaScript primitives out of resources and data, providing customers with a single space to write Scripts. Customers consistently complained that they didn’t understand what to use JavaScript for and so I provided them with quick and handy example scripts that showed them how to use third party libraries or format their data.

This would be great for new users but if we got this right it could be great for expert devs, too. How many times a day do they go to Stack Overflow to search for small snippets of code? Perhaps we could provide examples of scripts that unblocks them, guides them, and keeps them focused on the app they’re building in Retool.

<!-- <figure class="project-img">
  <img src="/images/projects/retool/command-bar/editor-scripts-v1.webp" />
  <figcaption>The new scripts tab.</figcaption>
</figure> -->

<!-- TKTKT -->

Although this interface now felt like a good first version to ship and test, I was unsatisfied with it because it didn’t feel like an IDE where performance, efficiency, and speed are top priorities. So I continued to make prototypes until the UI felt fast and kept developer’s hands on their keyboard instead of switching back and forth to their mouse.

This is where I came up with the command bar.

<figure class="project-img">
  <img src="/images/projects/retool/command-bar/editor-search.webp" />
  <figcaption>editor-search.webp.</figcaption>
</figure>




The command bar could change depending on the context of the user, too. 

<figure class="project-img">
  <img src="/images/projects/retool/command-bar/editor-scripts.webp" />
  <figcaption>The new scripts tab in the command bar.</figcaption>
</figure>


<!-- Searching for docs -->






