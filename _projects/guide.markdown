---
title: The Guide
subtitle: Gusto’s design system and component library.
startDate: 10/2017
role: Led the design and documentation of the design system and its multitude of React components.
results: High quality front-end code and documentation for the components and assets such as illustrations and icons.
endDate: 02/2018
company: Gusto
layout: projects-detail
heroImage: "/build/images/portfolio/guide-1.jpg"
---

The Guide is a web app that documents the company’s ever-growing design system and my goal was to create a space where developers and designers could learn from and contribute to the React components, baseline styles, and overall brand of the company.

In the introduction to the Guide I described the project like so:

> This is where all of the documentation for Gusto’s design system is archived for safe keeping; it contains all the assets you need, such as images and illustrations as well as notes on our copywriting style and documentation for our React components. In fact, we like to think of *The Guide* as a sort of Pokédex.
>
> Ideally this is where we can share information and collaborate in a public space to gain consensus across missions in terms of code, design, accessibility, performance and branding. If we improve a single component here in The Guide then all of our apps and features will reap the rewards at the same time in a predictable manner.


## Project Goals

1. Set high standards for design and front-end development at Gusto.
2. Reduce miscommunication across teams around how to use the React components.
3. Greatly reduce the amount of design inconsistencies across Gusto’s applications.

Although these weren’t the official goals of this project I began to neatly separate them into three types of issues: education, documentation and implementation. My role throughout this project was to then act as front-end developer, designer and guide of The Guide. Through this work I also led the documentation, refactoring and visual design improvements for our design team across the various missions at Gusto.


## Refactoring the core Gusto styles

My first goal with The Guide was to move and refactor great portions of Gusto’s main application codebase into a separate repo called the Component Library. This would shortly become the foundation of all of our styles across every app that the company would build in the future and so I had to refactor and move that codebase so that every app could share the same underlying styles. This would go on to vastly decrease the amount of time it took to design, ship and build projects in the front-end.

I tackled several front-end design projects in order to greatly improve the reliability of our codebase, starting with the typographic foundations. Hundreds of lines of <abbr title='cascading style sheets'>CSS</abbr> had been written to override the default Bootstrap styles which caused all sorts of consistency errors in the app such as checkboxes not working or being positioned incorrectly and problems where a `h3` would be smaller than a `h4` element.

![picture of typography helpers here](lol)

This refactoring effort took several weeks but resulted in a solid typographic foundation based on some research that I had done in the past [using Sass maps](https://robinrendle.com/notes/typographic-scale-with-sass-maps/). These changes could would then be applied to The Guide, the core Gusto app, and all our internal tools as well.

Typography is only one example of this refactoring effort, other included our icon system, our color palette and our illustration system.


## Documentation

 Once a part of that design system had been refactored or built from the ground up I could then document the newly refactored codebase in the Guide to ensure that sort of information wouldn’t be siloed and kept hidden from others. This was done in The Guide itself but also in the Figma pattern library that was extraordinarily helpful for our design team so that we no longer had to keep rebuilding the same elements over and over again for every project.

 ![picture of Figma pattern library here](lol)


## Project Review

One of the more shocking revelations of this project was this: I learned how design systems and tools will only help so much in improving the design quality of a large scale web app. Tools that help us make design systems sure are useful, and will do a lot of the work, but ultimately it’s down to the shape of the organization to encourage a culture of high quality front-end code and design. And so I spent a great deal of time trying to pair with and mentor designers that were not quite as familiar with front-end development and scaling design systems.

I also realized that writing documentation and improving code quality was important but it was never quite as helpful as sitting with another designer or developer and talking with them about a problem they were experiencing.
