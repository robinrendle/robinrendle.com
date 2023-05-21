---
layout: layouts/work/project.njk
title: Sentry
extract: Helping engineers find important issues in their apps.
date: 2023-05-02 09:00:00
---

<div class="carousel">
  <figure class="work-title">
    <img src="/images/work/sentry-status/issues-start.webp" alt="A screenshot of a concept for how status could be applied to issues" />
    <figcaption>
      <div>
        <h2>Issue Status</h2>
        <h3>Helping engineers find errors in their code.</h3>
      </div>
    </figcaption>
  </figure>
  <figure>
    <img src="/images/work/sentry-status/sentry-logo.svg" alt="The Sentry logo" />
    <figcaption>Sentry is an error monitoring service and it’s pretty magic when you get a notification about your code breaking in the latest release.</figcaption>
  </figure>
  <figure>
    <img src="/images/work/sentry-status/old-issues.webp" alt="A list of old issues in the Sentry app"/>
    <figcaption>But larger engineering teams had to scroll through an endless list of old issues, just to find relevant issues to them.</figcaption>
  </figure>
  <figure>
    <img src="/images/work/sentry-status/ignore.webp" alt="A screenshot of all the Ignore actions available for an issue"/>
    <figcaption>
      Triaging was also overwhelming and since customers just wanted to dismiss an issue until it gets significantly worse — why couldn’t we automate this?
    </figcaption>
  </figure>
  <figure>
    <img src="/images/work/sentry-status/issues-timeline.svg" />
    <figcaption>I started brainstorming with design lead Dora Tamsen and her take was that we needed to focus on the lifecycle of an issue: how can we clearly describe changes to an issue over time?</figcaption>
  </figure>
  <figure>
    <img src="/images/work/sentry-status/issue-lifecycle.svg" alt="A diagram showing how an issue changes status over time" />
    <figcaption>New, Ongoing, Escalating, and Archived: with these statuses we could automatically detect when an issue gets worse and prioritize new problems.</figcaption>
  </figure>
  <figure>
    <img src="/images/work/sentry-status/auto-archive.svg" />
    <figcaption>
      If we could detect when an issue was escalating then we could also auto-archive issues after 14 days, getting all those old issues out of the way for customers.
    </figcaption>
  </figure>
  <figure>
    <img src="/images/work/sentry-status/archive-table.webp" alt="A screenshot of the issues table with the archive button and proper statuses added to each issue." />
    <figcaption>
      After pitching the project to leadership and then a couple of months of engineering, issues were suddenly labelled by their status. No more hodge-podge of confusing actions and old, irrelevant issues!
    </figcaption>
  </figure>
  <figure>
    <img src="/images/work/sentry-status/issues-start.webp" alt="A screenshot of a concept for how status could be applied to issues" />
    <figcaption>
      Finally, I made concepts for how to sort and prioritize issues too, exploring how the severity and assignee of an issue could be included in the sort as well.
    </figcaption>
  </figure>
</div>
