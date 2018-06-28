---
title: The Guide
date: 2018-06-20 17:21:00 -07:00
subtitle: Building Gusto’s design system, styleguide, and component library.
dateRange: 2016-2018
role: 'Led the design and development of the design system and its many React components.

'
customCSSClass: guide
color: "#28d8cb"
results: 'High quality front-end code and documentation for the components and assets,
  such as logos, illustrations, and icons.

'
extract: 'The Guide is a web app that documents Gusto’s ever-growing design system
  and my goal was to create a tool that anyone at the company could turn to when looking
  for information about the React components, baseline styles, as well as the overall
  brand and voice of the company. I broke this work up intro three distinct categories:
  educating designers and developers, documenting the existing system for future use,
  and implementing new features and components into our applications.

'
endDate: 02/2018
company: Gusto
layout: projects-detail
heroImage: "/build/images/portfolio/guide-1.jpg"
---

## Project Goals

<ul class="solutions-list">
<li>Set high standards for design and front-end development at Gusto.</li>
<li>Educate the design team about how to use the components.</li>
<li>Reign in the code and design inconsistencies across Gusto’s apps and brand.</li>
</ul>

During my time at Gusto I was a designer on the payroll team but I made a considerable effort to start the Design Systems team and build a number of tools and processes that would achieve these three goals above. My role throughout this project was to then act as front-end developer, designer and, well, guide of The Guide — I led the documentation, refactoring efforts, and visual design improvements throughout the product and across each of the distinct missions.

In the introduction to the Guide I described this project like so:

> This is where all of the documentation for Gusto’s design system is archived for safe keeping; it contains all the assets you need, such as images and illustrations as well as notes on our copywriting style and documentation for our React components. In fact, we like to think of *The Guide* as a sort of Pokédex.
>
> Ideally this is where we can share information and collaborate in a public space to gain consensus across missions in terms of code, design, accessibility, performance, and branding. If we improve a single component here in The Guide then all of our apps and features will reap the rewards at the same time in a predictable manner.

<div class='side-by-side'>
  <div class='side-by-side__child'>
    <figure>
      <img src="/build/images/portfolio/guide-2.jpg" alt="" />
    </figure>
  </div>

  <div class='side-by-side__child'>
    <figure>
      <img src="/build/images/portfolio/guide-3.jpg" alt="" />
    </figure>
  </div>
</div>



## Refactoring the core Gusto styles

Our first task with creating The Guide was to move and refactor great portions of Gusto’s main application codebase into a separate repo called the Component Library. This would shortly become the foundation of all of our styles across every app that the company would build in the future. And this  would go on to vastly decrease the amount of time it took to design, ship, and build projects in the front-end but it would also prevent design inconsistencies and visual regressions, too.

I tackled several front-end design projects in order to greatly improve the reliability of our codebase, starting with the typographic foundations; in the main application hundreds of lines of <abbr title='cascading style sheets'>CSS</abbr> had been written to override the default Bootstrap styles which subsequently caused all sorts of consistency errors in the app — checkboxes would suddenly be misaligned or a `h3` would appear be smaller than a `h4` element.

This refactoring effort took several weeks but resulted in a solid typographic foundation based on some research that I had done in the past [using Sass maps](https://robinrendle.com/notes/typographic-scale-with-sass-maps/). These changes could would then be applied to The Guide, the core Gusto app, and all our internal tools as well. Of course, this is only one example of these refactoring efforts, but I also refactored our icon system, our color palette, and our illustration system across the product at Gusto.

<div class='side-by-side'>
  <div class='side-by-side__child'>
    <figure>
      <img src="/build/images/portfolio/guide-4.jpg" alt="" />
    </figure>
  </div>

  <div class='side-by-side__child'>
    <figure>
      <img src="/build/images/portfolio/guide-5.jpg" alt="" />
    </figure>
  </div>
</div>


## Improving the designer experience at Gusto

Once a part of the design system had been refactored or built from the ground up I could then begin to document it in the Guide to ensure that sort of information wouldn’t be siloed away or kept hidden from others in the company. But one of the more interesting aspects of the work besides writing documentation for developers at Gusto was the time I spent improving the designer experience.

The design team at Gusto uses the design web app Figma to make mockups and prototypes and, in some cases, even to flesh out specs for how a product should ultimately be built. Designers then share these documents with project managers, engineers, and stake holders with ease.

This encouraged me to build a number of our React page templates, components, icons and form elements in the Figma pattern library so that they could then be shared immediately across missions and teams — it was extraordinarily helpful for our design team specifically because we no longer had to keep rebuilding the same elements over and over again for every project.

<div class='m-wrapper--unpadded-wide'>
  <figure>
    <video src="/uploads/figma-library.mp4" muted autoplay loop playsinline></video>
    <figcaption>
      <p>
         With these new tools in Figma we could quickly make mockups of high-fidelity user interfaces for testing and prototyping.
      </p>
    </figcaption>
  </figure>
</div>

## Project Review

One of the more shocking revelations of this project was that I always assumed that the hard part of systems work was the technology and tooling side of things. I thought that getting the system in place and refactoring all the components would be the toughest part of the job. But I soon learned that design systems and tools only help so much in improving the quality of a large scale web app.

Tools that help us make design systems sure are useful, and will do a lot of the work, but ultimately it’s down to the shape of the organization to encourage a culture of high quality front-end code and design. And so I spent a great deal of time trying to mentor designers that were not quite as familiar with front-end development and scaling design systems: this is when I realized that writing documentation and improving code quality was important but it was never quite as helpful as sitting with another designer or developer and talking with them about a problem they were experiencing.

It was that trying to build that community that was the toughest and yet most rewarding part of the job. Also, if you’re interested in reading more you can check out some of the mistakes I made in [Design Systems at Gusto](https://medium.com/gusto-design/design-systems-at-gusto-a710543b2c93).
