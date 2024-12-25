---
layout: layouts/projects/project.njk
title: Sentry
extract: Idenitying bugs and incidents.
date: 2019-04-28 09:00:00
---

<p class="intro text-center">Sentry notifies engineers when their code breaks. <br/>My job was to reduce alert fatigue.</p>

<figure class="project-img">
  <img src="/images/projects/issue-status/issue-status-01.webp">
</figure>

<p class="intro">Back in 2019 I joined the team to help engineers find important problems in their code. At the time they were wading through a sea of unsorted problems though and it was hard to find important issues.</p>

The team was midway through building a new feature called Alerts that would let engineers create custom rules that triggered when a condition was met. The thinking here was that engineers could tell Sentry which problems were important and reduce the notifications they received.

My role was leading the design on how customers would create and view those custom rules.

<figure class="project-img">
  <img src="/images/projects/alerts/alerts-02.webp">
</figure>

I explored alternatives for finding and filtering issues in the core product, such as creating saved searches and exposing common filters.

But this is around the time I began to think long and hard about defaults.

<figure class="project-img">
  <img src="/images/projects/search-concepts/search-concepts-01.webp">
    <!-- <figcaption>Figure 3. Showing the most common keys when search is selected.</figcaption> -->
</figure>

As I began to get to grips with the product and talk to more engineers, I realized just how slow and manual this process was. Why did Sentry require so much setup and tweaking to get working out of the box? What if Sentry could identify important problems by default?

As I watched customers use Sentry, I saw just how incredibly manual and slow it was: Sentry required a ton of customization like this to get working. But why did customers have to search for issues or create alert rules in the first place? Couldn’t we simply show them the problems they should tackle right now?

Alongside fellow designer Dora Chan, we explored ways to automate alerts and notifications by exploring the status of issues as they came in. Over time we could hoist important issues to the top of the list and archive issues that were less relevant over time.

<figure class="project-img">
  <img src="/images/projects/issue-status/issue-status-02.svg">
    <!-- <figcaption>Figure 2. How an issue changes status over time.</figcaption> -->
</figure>

This work led to the Escalaing issues project and introducing ML techniques to identify when an issue had an unusual number of errors in a set period of time. Interestingly enough, this was the first time I realized that slapping AI into a product sucks—but!—it can be exponentially useful when tied with great product design.

After these explorations I designed a series of prototypes to show the team what impact that would have on customers. With this sort of problem, it’s hard to show the impact with mockups alone and you really need folks to click around and compare the previous list to the proposed one.

<figure class="project-img">
  <img src="/images/projects/issue-status/issue-status-01.webp">
</figure>

I learned a ton at Sentry, becoming a senior product designer and learning all that that entails. Shaping the direction of the product. Etc.
