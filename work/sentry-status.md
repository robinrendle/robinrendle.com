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
        <h3>Finding the right issues.</h3>
      </div>
    </figcaption>
  </figure>
  <figure>
    <img src="/images/work/sentry-status/sentry-logo.svg" alt="The Sentry logo" />
    <figcaption>Sentry is an error monitoring service and it’s pretty magic when you get a notification about your code breaking in the latest release.</figcaption>
  </figure>
  <figure>
    <img src="/images/work/sentry-status/old-issues.webp" alt="A list of old issues in the Sentry app"/>
    <figcaption>Issues required a lot of customization though, as customers had to scroll through a long list of old and irrelevant problems by default.</figcaption>
  </figure>
  <figure>
    <img src="/images/work/sentry-status/80.svg" />
    <figcaption>The data backed this up: the vast majority of customers were creating custom alerts to detect the issues they cared about.</figcaption>
  </figure>
  <figure>
    <img src="/images/work/sentry-status/ignore.webp" alt="A screenshot of all the Ignore actions available for an issue"/>
    <figcaption>
      I also found that this complexity discouraged engineers to take action on their issues.
    </figcaption>
  </figure>
  <figure>
    <img src="/images/work/sentry-status/use-cases.webp" alt="A list of questions that customers are ask Sentry whenever they use the app" />
    <figcaption>After interviewing customers, I made a list of the most common questions that customers want Sentry to answer for them.</figcaption>
  </figure>
  <figure>
    <img src="/images/work/sentry-status/issues-timeline.svg" />
    <figcaption>I started brainstorming with design lead Dora Tamsen and her take was that we needed to focus on the lifecycle of an issue: that’s the real problem here. How should we describe changes in an issue over time?</figcaption>
  </figure>
  <figure>
    <img src="/images/work/sentry-status/issue-lifecycle.svg" alt="A diagram showing how an issue changes status over time" />
    <figcaption>With each status we could explain what’s currently happening to an issue and whether it should be ignored, deleted, or triaged right away. We could then automate notifications, too.</figcaption>
  </figure>
  <figure>
    <img src="/images/work/sentry-status/archive-table.webp" alt="A screenshot of the issues table with the archive button and proper statuses added to each issue." />
    <figcaption>
      After pitching the project to leaders, getting sign off, and then a couple of months engineering, issues were clearly labelled by their status and the archive action was in place.
    </figcaption>
  </figure>
  <figure>
    <img src="/images/work/sentry-status/auto-archive.svg" />
    <figcaption>
      All of this work was leading up to auto-archiving issues after a set period of time and after talking with the team we decided that 14 days was a good place to start.
    </figcaption>
  </figure>
  <figure>
    <img src="/images/work/sentry-status/issues-start.webp" alt="A screenshot of a concept for how status could be applied to issues" />
    <figcaption>
      Along the way I made a bunch of concepts for how to sort and prioritize issues, exploring how the severity and assignee could be included in the sorting as well as status.
    </figcaption>
  </figure>
</div>
