---
layout: layouts/projects/project.njk
title: Escalating Issues
company: Sentry
extract: Helping engineers find important issues in their apps.
date: 2023-05-02 09:00:00
---

<div class="carousel">
  <figure class="work-title">
    <div class="figure-img">
      <img src="/images/work/sentry-status/issues-concept.webp" alt="A screenshot of a concept for how status could be applied to issues" />
    </div>
    <figcaption>
      Sentry helps engineers find problems with their code, but customers struggled to navigate through a sea of old issues. So in 2023 I investigated how to help customers find new and escalating problems.
    </figcaption>
  </figure>
  <figure>
    <div class="figure-img">
      <img src="/images/work/sentry-status/sentry-logo.svg" alt="The Sentry logo" />
    </div>
    <figcaption>Sentry is an error monitoring service and it’s pretty magic when you get a notification about your code breaking in the latest release.</figcaption>
  </figure>
  <figure>
    <div class="figure-img">
      <img src="/images/work/sentry-status/old-issues.webp" alt="A list of old issues in the Sentry app"/>
    </div>
    <figcaption>But larger engineering teams had to scroll through an endless list of old and irrelevant problems.</figcaption>
  </figure>
  <figure>
    <div class="figure-img">
      <img src="/images/work/sentry-status/ignore.webp" alt="A screenshot of all the Ignore actions available for an issue"/>
    </div>
    <figcaption>
      Customers just wanted to dismiss an issue until it’s significantly worse but they had to grok this overwhelming list of options.
    </figcaption>
  </figure>
  <figure>
    <div class="figure-img">
      <img src="/images/work/sentry-status/issues-timeline.svg" />
    </div>
    <figcaption>I brainstormed with design lead Dora Tamsen and we set our sights on the lifecycle of an issue: how should we describe changes to a problem over time?</figcaption>
  </figure>
  <figure>
    <div class="figure-img">
      <img src="/images/work/sentry-status/issue-lifecycle.svg" alt="A diagram showing how an issue changes status over time" />
    </div>
    <figcaption>New, Ongoing, Escalating, and Archived: with these statuses we could automatically detect when an issue gets worse and prioritize new problems as they come in.</figcaption>
  </figure>
  <figure>
    <div class="figure-img">
      <img src="/images/work/sentry-status/auto-archive.svg" />
    </div>
    <figcaption>
      If we could detect when an issue was escalating then we could also auto-archive issues after 14 days, getting those pesky old issues out of the way.
    </figcaption>
  </figure>
  <figure>
    <div class="figure-img">
      <img src="/images/work/sentry-status/archive-table.webp" alt="A screenshot of the issues table with the archive button and proper statuses added to each issue." />
    </div>
    <figcaption>
      Fast forward a few months and issues were suddenly labelled by their status. No more hodge-podge of confusing actions and old, irrelevant issues!
    </figcaption>
  </figure>
  <figure>
    <div class="figure-img">
      <img src="/images/work/sentry-status/issues-start.webp" alt="A screenshot of a concept for how status could be applied to issues" />
    </div>
    <figcaption>
      Finally, I made concepts for how to sort and prioritize issues too, exploring how the severity and assignee of an issue could be included in the sort as well.
    </figcaption>
  </figure>
</div>
