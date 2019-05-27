---
title: The Guide
date: 2018-06-20 17:21:00 -07:00
subtitle: Building Gusto’s design system, styleguide, and component library.
dateRange: May 2016 – January 2019
role: Led the design and development of the design system and its many React components.
results: High quality front-end code and documentation for the components and assets,
  such as logos, illustrations, and icons.
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

## Project goals

When I joined Gusto I worked with Dora Chan to build an internal web app that we called The Guide as we constantly saw communication problems across the design and development teams. Throughout this project my role was to act as front-end developer and designer — I wrote documentation, refactored our CSS, and implemented visual design improvements throughout the product.

In the introduction to the Guide I described how it might help like so:

> This is where all of the documentation for Gusto’s design system is archived for safe keeping; it contains all the assets you need, such as images and illustrations as well as notes on our copywriting style and documentation for our React components. In fact, we like to think of *The Guide* as a sort of Pokédex.
>
> Ideally this is where we can share information and collaborate in a public space to gain consensus across missions in terms of code, design, accessibility, performance, and branding. If we improve a single component here in The Guide then all of our apps and features will reap the rewards at the same time in a predictable manner.

So for this project we had several goals:

<ul class="solutions-list">
  <li>Set high standards for design and front-end development at Gusto.</li>
  <li>Reign in the code and design inconsistencies across Gusto’s apps.</li>
  <li>Document React components for designers and engineers to reference.</li>
</ul>


## Making a plan

Since there was no project manager or organized effort by the design team it meant that it was my responsibility to come up with a plan to tackle design systems issues at Gusto. So I began by interviewing engineers, project managers, and designers in order to understand what the team was struggling with most. After that I began to make note of upcoming projects and refactoring efforts that would need to take place to best support the team.

<div class='airtable m-wrapper--full'>
  <figure>
    <img class="chrome-shadow" src="/build/images/portfolio/airtable.jpg" alt="A screenshot of a spreadsheet that lists all of the upcoming projects for the design systems team" />
    <figcaption>
      <p>
         By showing the design team this list of projects I could begin to make the case to hire a senior front-end engineer in order to help me build the design system.
      </p>
    </figcaption>
  </figure>
</div>

## Refactoring the core Gusto styles

After reviewing all of the projects I realized that the first task would be to fully flesh out The Guide and to move and refactor great portions of Gusto’s main application codebase into a separate repo called the Component Library. This would shortly become the foundation of all of our styles across every app that Gusto would build thereafter. Subsequently, by moving all of our front-end code into a single repo, we would go on to vastly decrease the amount of time it took to design, ship, and build projects. This would also prevent design inconsistencies and visual regressions, too.

I tackled several front-end design projects in order to improve the reliability of our codebase, starting with the typographic foundations; in the main application hundreds of lines of <abbr title='cascading style sheets'>CSS</abbr> had been written to override the default Bootstrap styles which subsequently caused all sorts of consistency errors in the app — checkboxes would suddenly be misaligned or a `h3` would appear be smaller than a `h4` element.

This refactoring effort took several weeks but resulted in a solid typographic foundation based on some research that I had done in the past [using Sass maps](https://robinrendle.com/notes/typographic-scale-with-sass-maps/). These changes could would then be applied to The Guide, the core Gusto app, and all our internal tools as well. This was only the beginning of these refactoring efforts, as I also refactored our icon system, our color palette, and our illustration system across the product at Gusto.

As I refactored components and improved their accessibility and visual design I would then document how to use them in The Guide so that other designers and engineers could use them in the future:

<div class='side-by-side m-wrapper--full'>
  <div class='side-by-side__child'>
    <figure>
      <img class="chrome-shadow" src="/build/images/portfolio/guide-2.jpg" alt="A picture of the Guide, showing all the illustrations that are available" />
    </figure>
  </div>

  <div class='side-by-side__child'>
    <figure>
      <img class="chrome-shadow" src="/build/images/portfolio/guide-3.jpg" alt="A picture of the Guide, showing the action components like buttons" />
    </figure>
  </div>
</div>

<div class='side-by-side m-wrapper--full'>
  <div class='side-by-side__child'>
    <figure>
      <img class="chrome-shadow" src="/build/images/portfolio/guide-4.jpg" alt="" />
    </figure>
  </div>

  <div class='side-by-side__child'>
    <figure>
      <img class="chrome-shadow" src="/build/images/portfolio/guide-5.jpg" alt="" />
    </figure>
  </div>
</div>


## Project Review

One of the more shocking revelations of this project was that I always assumed that the hard part of systems work was the technology and tooling side of things. I thought that getting the system in place and refactoring all the components would be the toughest part of the job. But I soon learned that design systems and tools only help so much in improving the quality of a large scale web app.

Tools that help us make design systems sure are useful, and will do a lot of the work, but ultimately it’s down to the shape of the organization to encourage a culture of high quality front-end code and design. And so I spent a great deal of time trying to mentor designers that were not quite as familiar with front-end development and scaling design systems: this is when I realized that writing documentation and improving code quality was important but it was never quite as helpful as sitting with another designer or developer and talking with them about a problem they were experiencing.

Trying to build a community around the design system was the toughest and yet most rewarding part of the job. Also if you’re interested in reading more then you can check out some of the mistakes I made in [Design Systems at Gusto](https://medium.com/gusto-design/design-systems-at-gusto-a710543b2c93).
