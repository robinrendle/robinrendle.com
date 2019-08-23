---
title: Time Tracking
date: 2018-12-30 16:21:00 -08:00
subtitle: Designing and developing a new feature for Gusto.
dateRange: November 2017 – December 2018
role: Design and front-end development.
results: Greatly improves the user experience for hourly employees on Gusto’s platform.
extract:
  <p>Gusto helps companies manage their payroll, handle employee benefits, and
  now we’ve just released a brand new feature that lets companies track employee hours. With this feature employers on the Gusto platform have fewer tools and apps to manage things and can get a better overview of their business.</p>
endDate: 12/2018
company: Gusto
layout: projects-detail
heroImage: "/images/portfolio/time-tracking-drawer.jpg"
---

## Understanding the problem

Many companies that use Gusto to run payroll have a great number of hourly employees and so after internal research our team discovered that time tracking is a crucial requirement for these companies to easily manage their business.

Ideally an employee could easily track their time in the Gusto web app and then their employer could review these hours to make sure they’re correct. After that they’d then need to submit that data so that they could run payroll and pay the employees for the hours they tracked.

## Exploration and initial ideas

There were a few issues with this original design, the first being that we knew that a large section of employees would sign into the app and then have to head to the `Time Tracking` section. We found in testing that taking this action everyday would be incredibly annoying for employees.

<div class='side-by-side m-wrapper--full'>
  <div class='side-by-side__child'>
    <figure>
      <img src="/images/portfolio/time-tracking-dashboard-draft.jpg" class="chrome-shadow"/>
    </figure>
  </div>
  <div class='side-by-side__child'>
    <figure>
      <img src="/images/portfolio/time-tracking-first-draft.jpg" class="chrome-shadow"/>
    </figure>
  </div>
</div>

After we prototyped these designs and let real companies test our work we realized it was a far too cumbersome to navigate somewhere because for employees with time tracking enabled it would be the most important thing for them to see as soon as they login to the app.

This consequently led to our work redesigning Gusto’s employee dashboard (more on that in a separate posts).

## Working with prototypes

The clock-in card would be the most important method for employees to track their time, however we also knew there would be a large number of employees that would retroactively add their hours. This led to hundreds of iterations of what we called the “time tracking table” — a component that would show all the previous days in a pay period and the hours that had been tracked. Whole dang essays could be written about this component alone, but here’s one of the prototypes I made in Codepen (you can even click and hover on the demo below):

<div class="m-wrapper--full">
<div class="cell-b40">
  <p data-height="680" data-theme-id="20935" data-slug-hash="e3760a8df051d4714ab6f54bbf5ceab3" data-default-tab="result" data-user="robinrendle" data-pen-title="Gusto Table Prototype: Future Test (FORK)" class="codepen">See the Pen <a href="https://codepen.io/robinrendle/pen/e3760a8df051d4714ab6f54bbf5ceab3/">Gusto Table Prototype: Future Test (FORK)</a> by Robin Rendle (<a href="https://codepen.io/robinrendle">@robinrendle</a>) on <a href="https://codepen.io">CodePen</a>.</p>
  <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
  </div>
</div>

<p>With the prototype above we could figure out how the animations work as you click on a table row to open it and how to delete or add a block of time that’s associated with a particular day.</p>

We knew that this component would also be important for employers or admins of those companies that would need to review and catch any errors that might’ve occurred during the time tracking process.

## Moving to the design systems team

After the design and development of the table was complete I moved onto the design systems team but provided constant front-end development and design support to the rest of the team. We brainstormed improvements to the direction and worked closely together to iterate on my initial designs.

From this point on I worked with the Time Tracking team to create reusable components such as the `Drawer` and `Toggle` which helped other designers and engineers across Gusto build their own features faster.

Here’s the final iteration that released after the ever-so-excellent designer Jordan Townsend started work on the team:

<div class='side-by-side m-wrapper--full'>
  <div class='side-by-side__child'>
    <figure>
      <img src="/images/portfolio/time-tracking-final.jpg" class="chrome-shadow"/>
    </figure>
  </div>
  <div class='side-by-side__child'>
    <figure>
      <img src="/images/portfolio/time-tracking-drawer.jpg" class="chrome-shadow"/>
    </figure>
  </div>
</div>

Letting admins click on an employee’s time and immediately see all of their tracked hours in a drawer made the experience feel infinitely faster than the designs I had worked on previously.

## A brand new feature

The time tracking feature is the most successful project I’ve worked on whilst at Gusto. We created a ton of reusable components that other teams could use as well as provided a much better experience for hourly customers of our product. Sadly I can’t reveal metrics of our success but it was pretty dang surprising to me as to just how many of our customers jumped on this feature within the first two weeks.
