---
layout: layouts/projects/project.njk
title: Sentry
extract: Helping engineers identify bugs.
date: 2019-04-28 09:00:00
hero: '/images/projects/issue-status/issue-status-01.webp'
---

<p class="intro text-center">Sentry notifies engineers when their code breaks. <br/>My job was to reduce alert fatigue.</p>

<figure class="project-img">
  <img src="/images/projects/issue-status/issue-status-01.webp">
</figure>

<p class="intro">Customers couldn’t find important problems in their code and were forced to wade through a list of unorganized problems. This wasted their time and made it difficult to find the issues that they cared about.</p>

When I joined the team in 2019 there was already a project in motion to fix this: Alerts. Engineers would be able to create custom rules that triggered when a condition was met such as a high error count or when the checkout page was slow. The thinking here was that engineers could tell Sentry which problems were important and turn off the existing noisy notifications they received.

My role was leading the design and making sure that folks could quickly create those custom rules. Once they set them up, we needed an interface to show them clues for how to fix that problem.

<figure class="project-img">
  <img src="/images/projects/alerts/alerts-02.webp">
</figure>

Along the way I explored alternatives for finding and filtering issues in the core product, such as creating saved searches and exposing common filters. Deep down I knew that giving customers levers to control notifications and settings was important, but Sentry should work out of the box without customization.

So around this time I became obsessed about designing smart defaults for folks. How could we show customers the issues they cared about without forcing them to click things or toggle settings? During my research I found that most customers didn’t know what kinds of problems should trigger an alert, which further proved my hunch that we had to be smarter about all this.

<figure class="project-img">
  <img src="/images/projects/search-concepts/search-concepts-01.webp">
    <!-- <figcaption>Figure 3. Showing the most common keys when search is selected.</figcaption> -->
</figure>

As I began to get to grips with the product and talk to more engineers, I realized just how slow and manual this process of filtering was. Why did Sentry require so much setup and tweaking to get working out of the box? What if Sentry could identify important problems by default?

Alongside fellow designer Dora Chan, we explored how to automate alerts and notifications by warning customers when an issue changed status. Instead of alerting on every new issue, we would only hoist important issues to the top of their list and archive issues that were less relevant over time. Just like this:

<figure class="project-img">
  <img src="/images/projects/issue-status/issue-status-02.svg">
</figure>

After these explorations I designed a series of prototypes to show the team what impact this new system would have on customers. With work like this, it’s almost useless showing static mockups alone—you really need folks to click around and compare the previous experience to the new one.

This is where I learned that a prototype is worth ten thousand rants in Google Docs. Folks lean in when they can see the future and poke and prod it in their hands and it’s easier to get buy in on big ideas.

But now customers would see escalating and regressions immediately, whereas ongoing issues would fall to the bottom of their list over time. They’d no longer have to wade through a sea of noisy issues or create convoluted alert rules to find the most important thing.

<figure class="project-img">
  <img src="/images/projects/issue-status/issue-status-01.webp">
</figure>

At Sentry I learned a few things. First: software is real buggy. It’s more like a spell that breaks all the time and is way more fragile than I previously knew. Second: I don’t care about the distinction between “product” and “design.” It’s all the same thing!

I’m happiest figuring out what the icons and spacing and typography should look like, sure, but I also care about what the product is, how it ought to work, and what the real problem is.
