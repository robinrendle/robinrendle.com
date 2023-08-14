---
layout: layouts/projects/project.njk
title: Search Concepts
website: sentry.io
extract: Improving search at Sentry.
date: 2023-04-28 09:00:00
dateRange: 04/23
images:
  - search-concepts/search-concepts-01.webp
  - search-concepts/search-concepts-02.webp
  - search-concepts/search-concepts-03.webp
  - search-concepts/search-concepts-04.webp
---

<div class="carousel columns-7-13">
  <a href="/images/projects/search-concepts/search-concepts-01.webp">
    <img src="/images/projects/search-concepts/search-concepts-01.webp" alt="Concept designs showing the Sentry interface" />
  </a>
  <a href="/images/projects/search-concepts/search-concepts-02.webp">
    <img src="/images/projects/search-concepts/search-concepts-02.webp" alt="Concept designs showing the Sentry interface" />
  </a>
  <a href="/images/projects/search-concepts/search-concepts-03.webp">
    <img src="/images/projects/search-concepts/search-concepts-03.webp" alt="Concept designs showing the Sentry interface" />
  </a>
  <a href="/images/projects/search-concepts/search-concepts-04.webp">
    <img src="/images/projects/search-concepts/search-concepts-04.webp" alt="Concept designs showing the Sentry interface" />
  </a>
</div>

<div class="columns-1-7">

<p class="intro">Searching for problems sucks, especially when it requires a lot of unnecessary clicking and typing. These concepts were designed to help Sentry customers spend more time fixing bugs and less time searching for relevant issues.</p>

In user research sessions I noticed how engineers would always filter issues by release, assignee, or environment. This required an awful lot of typing and clicking to get to the issues that they cared about most; a lot of manual work was required to get to the good stuff. So I explored a few concepts to speed search up.

Concept #1 gives customers the ability to customize the page for their workflow. If they wanted to switch between different releases frequently then they could opt-in to permanently keeping that dropdown around. Concept #2 shows a dedicated filter button that lets customers take a quick glance at the most common search terms in a dropdown list. Concept #3 showed recommended search terms when you click the search bar. More often than not I tend to see this pattern used in e-commerce or stores but I think it works well here. Once a customer has selected a key, like `assignee` or `release`, we could then show the most relevant value like `me` or `Latest release`.

Let’s be honest though: devs don’t want to go hunting for bugs and they don’t wanna use search, ever. Ideally they just want to be told clearly and concisely that release X caused bug Y and it’s affecting N users.

That’s where [the next project](/projects/escalating-issues) comes in.

</div>
