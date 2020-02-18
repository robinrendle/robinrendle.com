---
title: The Gusto Brand Refresh
date: 2019-08-19 16:12:11
tags:
  - work
dateRange: April – July 2019
subtitle: Refactoring Gusto’s web app in preparation for the beautiful new brand.
extract: "<p>Rebranding the Gusto web app required our small team to refactor dozens of React components, hundreds of pages, as well as update our type styles, icons, illustrations, and fonts. With this project we finally established the Design Systems team as being one of the fastest and most progressive teams at Gusto. And we built something rather lovely in the process, too.</p>"
role: Front-end development, design
results: Refactoring Gusto’s web app in preparation for the new brand.
heroImage: "/images/work/gusto/dashboard-people.jpg"
layout: projects-detail
heroImageClass: no-shadow cell-0
---

I decided that my first task was to break down this enormous project into its constituent parts as it was clear that we needed to do a bit of project management up front. For example, we needed to answer a lot of questions:

<ul class="solutions-list">
  <li>Which components in our library should we refactor?</li>
  <li>Were there any particularly nasty hacks on top of our components and were there components that we should avoid refactoring entirely?</li>
  <li>What illustrations did we need to redesign?</li>
  <li>And which features in the application should we tackle first, and in what order should we tackle them?</li>
</ul>

I created a Notion doc to organize our thoughts and communicate to other teams about the project, a Figma doc that would contain screenshots of our current UI so that we could discuss how to tackle things, and an Asana board that broke down the project into specific tasks such as `Refactor Button`:

<div class="m-wrapper--full">
  <figure class="m-wrapper--unpadded">
    <img loading="lazy" class="chrome-shadow" src="/images/work/gusto/asana-board.png" alt="Our Asana board breaking things down" >
  </figure>
</div>

Our team decided on a lot of process issues right out of the gate: no stand-ups each day, and no pointing of each task. We would just take whatever task was at the top of the pile and tackle it as best as we could, working as [detectives solving a crime](/notes/partners-in-crime). It was wonderful and we were immensely productive because of this.

After organizing things it was clear that we should focus on updating the Component Library first. This is a separate repo that contains all of our core styles and shared React components such as buttons, forms, etc. However we needed to compare the old design to the new one to understand the relationships between components. It was here that the Figma doc and [the old Gusto UI Kit](/projects/figma-ui-kit) became particularly useful:

<div class="m-wrapper--full">
  <figure class="m-wrapper--unpadded">
    <img loading="lazy" src="/images/work/gusto/figma-design-process.png" alt="Figma doc comparing the old and new Gusto brand" >
  </figure>
</div>

Thanks to the old UI Kit we could see everything that we needed to do to break up the new designs and apply them to the components in the Library (one task might involve updating the text weight of component X or the background color of component Z).

However! I also realized early on that this Figma doc would effectively become the second version of UI Kit—as we settled on the design of each component we could create a symbol in Figma and use these colors, type styles, and symbols as the building blocks.

<div class="m-wrapper--full">
  <figure class="m-wrapper--unpadded">
    <img loading="lazy" class="chrome-shadow" src="/images/work/gusto/ui-kit.jpg " alt="A screenshot of the Figma UI kit explaining how to use tabular lining figures" />
  </figure>
</div>

Designers and engineers could then quickly reference which components and assets exist; from fonts and icons to illustrations and component mockups.

Our goal was to outline how designers and engineers can use these assets to their advantage without having to build new things all the time. And during the brand refresh we made a ton of improvements along the way such as using tabular lining figures in tables to aid legibility, or improving the color contrast of text elements.

So in Figma we detailed some of these new design improvements, too:

<div class="m-wrapper--full">
  <figure class="m-wrapper--unpadded">
    <img loading="lazy" src="/images/work/gusto/figma-walkthrough.jpg" alt="A screenshot of the Figma UI kit explaining how to use tabular lining figures" >
  </figure>
</div>

## Building the components

Just before the brand refresh we had set up our Component Docs to use [Styleguidist](https://github.com/styleguidist/react-styleguidist) so that we could see how our React components would be rendered. This let us update a number of components swiftly and predictably throughout every feature in the app.

Here’s an example of the Button component in our Component Docs:

<div class="m-wrapper--full">
  <figure class="m-wrapper--unpadded">
    <img loading="lazy" class="chrome-shadow" loading="lazy" src="/images/work/gusto/component-docs.jpg" alt="The Component Docs" >
  </figure>
</div>

Along the way we decided to audit and remove a number of similar components as well as updating the typesetting, colors, and illustrations of these core components. We also had to ensure that any changes we made to the Library wouldn’t break anything in our primary web application.

That was the real difficulty of this project: there were so many custom components and older parts of the app that were not in React at all and so although many pages would simply inherit styles and components from the Library, we still had to refactor dozens of pages to make sure that they were using the correct components and design patterns.

One of the features we improved was the Payroll flow which allows customers to pay their employees and is perhaps the most essential feature of the Gusto web app:

<div class="m-wrapper--full">
  <figure class="m-wrapper--unpadded">
    <img loading="lazy" class="chrome-shadow" src="/images/work/gusto/payroll.jpg" alt="Payroll page in the Gusto web app" >
  </figure>
</div>

However, by this point only a sliver of the work had been complete since our job was then to move onto the web app itself and refactor or deprecate dozens of components that didn’t meet our standards or were off-brand. We deleted thousands of lines of code, improved the accessibility of every page by fixing the markup, and removed thousands of lines of CSS that were unused or no longer necessary.

This led to our documentation being more concise and easily understood by our engineering team as they no longer had to learn about the 5 modal components or 6 different types of alerts.

For the Reports page shown below we eliminated inconsistent illustration styles, improved the typographic hierarchy to make the interface more scannable, and updated our `Card` component so that it can be used by any other team at Gusto. Not to mention the fact that we consolidated six different icon styles and updated the color palette along the way. Phew.

<div class="m-wrapper--full">
  <figure class="m-wrapper--unpadded">
    <img loading="lazy" src="/images/work/gusto/product-comparison.jpg" alt="Comparing the old and new brand with the Reports page in the app" >
  </figure>
</div>

## Project summary

The exciting thing about this project is that it was the first of the newly formed Design Systems team and it was considerably successful. A while back I also wrote about what this brand refresh means to me and [what I learned along the way](/notes/the-success-of-many-days), but these are the highlights:

<ul class="solutions-list">
  <li>We met the brand refresh project deadline</li>
  <li>Refactored every page in the application</li>
  <li>Improved accessibility of our core components</li>
  <li>Deleted thousands of lines of code that was no longer useful</li>
  <li>Improved the documentation for engineers and designers</li>
  <li>Built a solid foundation for future design system projects</li>
</ul>
