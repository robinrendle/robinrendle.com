---
layout: layouts/projects/project.njk
title: Escalating Issues
website: sentry.io
extract: Helping engineers find relevant issues.
date: 2023-04-29 09:00:00
dateRange: 2023
---

<div class="carousel columns-7-13">
  <img src="/images/projects/escalating-issues/escalating-issues-01.webp" alt=""/>
  <img src="/images/projects/escalating-issues/escalating-issues-03.webp" alt=""/>
  <img src="/images/projects/escalating-issues/escalating-issues-02.webp" alt=""/>
</div>

<div class="columns-1-7">

<p class="intro">It’s magic when an engineer ships busted code and Sentry sends them a notification about the problem. But engineers often struggled to find relevant issues in an ocean of old bugs.</p>

The vast majority of customers had hundreds of old issues kicking around that they weren’t investigating or resolving, sort of like an email inbox. But after interviewing them, I found they were scared to triage this list because the only action available to them was “Ignore” which would hide an issue permanently, even if it got worse in the future. This led to a lack of trust with the product.

It was clear that we needed to elevate critical problems to the top of their list so that an engineer could head to [sentry.io](https://sentry.io) and immediately see the issues that were most relevant to them. They also needed a single action—Archive—that would dismiss an issue and clean up their list. This led to several brainstorming sessions were I realized we also needed to alert customers when those archived issues escalated or got significantly worse in a short period of time.

Customers would no longer have to hunt for problems: Ongoing issues would be pushed to the bottom of their list whilst issues marked as New and Escalating would float to the top. This led to less finicky customization since customers would get default alerts out of the box, too.

</div>
