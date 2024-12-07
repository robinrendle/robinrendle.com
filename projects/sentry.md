---
layout: layouts/projects/project.njk
title: Sentry
extract: Detecting bugs and incidents.
date: 2023-04-28 09:00:00
---

<p class="intro">Searching for problems sucks, especially when it requires a lot of unnecessary clicking and typing. So these concepts were designed to help Sentry customers spend more time fixing bugs and less time searching for relevant issues.</p>

During user research I noticed how engineers would always filter issues by release, assignee, or environment. This required an awful lot of typing and clicking to get to the issues that they cared about most; a lot of manual work was required to get to the good stuff.

First off, I looked into the data to find the most common search terms. Once I had a nice prioritized list, I began exploring potential solutions.

<figure class="project-figure">
  <img src="/images/projects/search-concepts/search-concepts-02.webp">
  <figcaption>Figure 1. Custom filters suited to each engineer’s workflow.</figcaption>
</figure>

How can we make the entire interface customizable? In this first concept engineers could select whatever filters are important for them. This could’ve been helpful for both large and small engineering teams since they tend to search for different filters—smaller teams didn’t care at all about assignment for example.

So what if you could just remove the filters you don’t care about?

There was a bit of push-back about this design! Users were already overwhelmed with the amount of options on this page and now this design introduced even more. And what about the filters and keys that we introduce in the future? What about custom tags that engineers could add to Sentry? This design failed to answer these questions.

<figure class="project-figure">
  <img src="/images/projects/search-concepts/search-concepts-03.webp">
  <figcaption>Figure 2. A dedicated filter button to get a quick glance at the most common search terms.</figcaption>
</figure>

In the next concept, shown above, I explored making it easier to get to these important search terms right away.

The more I considered this approach, the less effective I realized it was: we needed to make it clear that filtering applied only to search and not to the main page filters. This led me to the next design though, so all was not lost...

<figure class="project-figure">
  <img src="/images/projects/search-concepts/search-concepts-01.webp">
  <figcaption>Figure 3. Showing the most common keys when search is selected.</figcaption>
</figure>

<figure class="project-figure">
  <img src="/images/projects/search-concepts/search-concepts-04.webp">
  <figcaption>Figure 4. Suggested values after a key is selected.</figcaption>
</figure>

This final concept shows recommended search terms only once you’ve clicked the search bar.

More often than not I tend to see this pattern used on e-commerce websites or stores but I think it works well here. Once a customer has selected a key, like `assignee` or `release`, we could then show the most relevant value like `me` or `Latest release`. That way we could greatly reduce the amount of clicking and typing involved.

Another important part of this design that I pushed for was making sure that customers could search for their custom keys that they added to Sentry. These terms never showed up in the data I collected because everyone had different custom keys but it was vital for many teams to access them.


<figure class="project-figure">
  <img src="/images/projects/issue-status/issue-status-01.webp">
  <figcaption>Figure 1. A diagram showing potential new issue statuses.</figcaption>
</figure>
<figure class="project-figure">
  <img src="/images/projects/issue-status/issue-status-02.webp">
  <figcaption>Figure 1. A diagram showing potential new issue statuses.</figcaption>
</figure>
<figure class="project-figure">
  <img src="/images/projects/issue-status/issue-status-03.web">
  <figcaption>Figure 1. A diagram showing potential new issue statuses.</figcaption>
</figure>


<p class="intro">It’s magic when an engineer ships busted code and Sentry sends them a notification about the problem. But engineers often struggled to find relevant issues in an ocean of old bugs.</p>

The vast majority of customers had hundreds of old issues kicking around that they weren’t investigating or resolving, sort of like an email inbox.

So it was clear that we needed to elevate critical problems to the top of their list so that an engineer could head to [sentry.io](https://sentry.io) and immediately see the issues that were most relevant to them. This led to discussions with engineers and brainstorming with the design team, after which I made a list of potential issue statuses that could help us do just that:

<figure class="project-figure">
  <img src="/images/projects/issue-status/issue-status-06.svg">
  <figcaption>Figure 1. A diagram showing potential new issue statuses.</figcaption>
</figure>

With these statuses we could elevate New, Escalating, and Regressed issues in some way and then push Ongoing and older issues to the bottom of their list.

I also worked on a single action—Archive—that would dismiss an issue and clean up their list. This led to several brainstorming sessions where I realized we also needed to alert customers when those archived issues escalated or got significantly worse in a short period of time.

I made a diagram showing the issue lifecycle in this brave new world:

<figure class="project-figure">
  <img src="/images/projects/issue-status/issue-status-02.svg">
  <figcaption>Figure 2. How an issue changes status over time.</figcaption>
</figure>

From here I could experiment with how we might represent these statuses in the app. In the first concept below, I explored how these statuses could work together into a concept called Severity. Ongoing issues would be marked as less severe and be pushed to the bottom.

I really wanted to make an interface that didn’t require clicking or scrolling or hunting for issues at all.

<figure class="project-figure">
  <img src="/images/projects/issue-status/issue-status-04.webp">
  <figcaption>Figure 3. Sorting issues by severity.</figcaption>
</figure>

But what if engineers wanted to quickly filter the whole page by the status? I heard a lot about how engineers often cared about new issues in their latest release first—and that’s the primary use case of Sentry. I wanted developers to feel like they could trust Sentry to show them brand new problems right away so they could feel confident that a release was “safe.”

In the concepts below, I tried to optimize for that feeling:

<figure class="project-figure">
  <img src="/images/projects/issue-status/issue-status-05.webp">
  <figcaption>Figure 4. Using tabs to separate issues by status.</figcaption>
</figure>

But this would involve too much darn clicking! And, as an engineer, I don’t want to hunt for Escalating issues if they’re important and I need to see them right away. Tabs were a no-go then.

The final concept was much simpler, labelling the issues by status first since fixing the sort could be part of a much larger project in the future. And considering this was the most important page in the product, we wanted to roll out a small batch of changes to be safe.

<figure class="project-figure">
  <img src="/images/projects/issue-status/issue-status-01.webp">
  <figcaption>Figure 5. The final concepts that I pitched to customers and internal stakeholders.</figcaption>
</figure>

This design also increased the time period to show events in the last 14 days instead of the last 7. The idea here being that now engineers would be able to see patterns in the data much more clearly over a longer time period.

By the time I left Sentry, engineers had started work on building out the rather complicated Escalating status since the whole design rested on detecting anomalies in these patterns. I also imagined that, in the future, this could play into improving notifications. A lot of Sentry customers viewed issue notifications directly in Slack or email and these statuses could decrease the number of noisy notifications they received, in the hope of only alerting them of the critical problems in their code.


<p class="intro">Dark mode is a fad, sure, but a useful one. What started as a hack week project at Sentry became a major effort to consolidate inconsistencies with our components and fix accessibility problems across our design system.</p>

This project began when I was spelunking around our codebase, where I found a spaghetti-mess of color inconsistencies; scattered hex codes and one-off variables such as blueLightest or offWhite2. This greatly impacted our ability to build things quickly, as we were forced to think way too long about which variables to use.

After gathering our most common components together in Figma, we found a bunch of inconsistencies in our text and form styles, as well as how we applied border colors to our components. And so by unifying all these visual inconsistencies we could improve the interface for both light and dark mode at the same time.

<figure class="project-figure">
  <img src="/images/projects/dark-mode/dark-mode-01.webp" />
  <figcaption>Figure 1. Early concepts for dark mode that the design team iterated on.</figcaption>
</figure>


<figure class="project-figure">
  <img src="/images/projects/dark-mode/dark-mode-02.webp" />
  <figcaption>Figure 1. Early concepts for dark mode that the design team iterated on.</figcaption>
</figure>

<figure class="project-figure">
  <img src="/images/projects/dark-mode/dark-mode-03.webp" />
  <figcaption>Figure 2. Early concepts for how dark mode might affect charts.</figcaption>
</figure>

At the end of our hackweek project we shipped dark mode to customers, but the real improvement here was all the fixes we made to our components along the way. Whenever an engineer had to make a new component or select a color they’d now be greeted with a system that was accessible and easy to understand.

Read more about how we built dark mode on [the Sentry blog](https://blog.sentry.io/building-dark-mode/).

<p class="intro">Sentry customers wanted to detect specific problems with their applications; from a slow checkout page to a crash on mobile devices and everything in between. The Alerts feature made that possible.</p>

I joined Sentry part way through this project, as the feature was being slowly rolled out to early batches of customers. But there were a lot of confusion about the setup process for an alert and it was difficult to know what to fix once an alert had been triggered.

There were three places to look into improving here: the alerts homepage, the onboarding experience, and the alert details page.

<figure class="project-figure">
  <img src="/images/projects/alerts/alerts-02.webp">
  <figcaption>Figure 1. Customers had to hunt for the alert rules they’d created.</figcaption>
</figure>


<figure class="project-figure">
  <img src="/images/projects/alerts/before.webp">
  <figcaption>Figure 1. Customers had to hunt for the alert rules they’d created.</figcaption>
</figure>

I talked to customers who mentioned that they had to click a tab and scroll around to find the alert rule that was relevant to them and might have been triggered lately. So, after a few concepts, we quickly rolled out an improved homepage that immediately tells customers what’s on fire and by how much.

I explored simplifying the interface, fixing the sort, and allowing engineers to filter this page by team:

<figure class="project-figure">
  <img src="/images/projects/alerts/after.webp">
  <figcaption>Figure 2. My designs that shipped for the first batch of improvements.</figcaption>
</figure>

Next, I wanted to tackle onboarding. This would be a much trickier problem because I had to investigate the kinds of problems that engineers wanted to detect. And it was around this time I realized that a lot of engineers didn’t know what kinds of alerts to create — is a bad LCP score worse than a spike in the number of users affected by a problem? If I saw an abbreviation like LCP or CLS then I’d likely close all my tabs and proceed to hurl my laptop into the ocean.

So as engineers were creating alerts they needed a guide.

<figure class="project-figure">
  <img src="/images/projects/alerts/alerts-04.webp">
  <figcaption>Figure 3. Designs for explaining the different types of alert.</figcaption>
</figure>

Now do we show customers that something is a problem right away? I realized it wasn’t good enough that Sentry just tell folks that their alert has been triggered but we needed to clearly explain what had broken and why. This led to us showing folks what caused the problem when all hell broke loose.

<figure class="project-figure">
  <img src="/images/projects/alerts/alerts-02.webp">
  <figcaption>Figure 4. The final design showing what broke, when, and why.</figcaption>
</figure>

This project gave engineers the tools they need to see if their checkout page was down or their feature had caused a serious performance problem. But what it taught me was that we needed less customization ultimately and more automated tooling.


<p class="intro">Sentry customers wanted to detect specific problems with their applications; from a slow checkout page to a crash on mobile devices and everything in between. The Alerts feature made that possible.</p>

I joined Sentry part way through this project, as the feature was being slowly rolled out to early batches of customers. But there were a lot of confusion about the setup process for an alert and it was difficult to know what to fix once an alert had been triggered.

There were three places to look into improving here: the alerts homepage, the onboarding experience, and the alert details page.

<figure class="project-figure">
  <img src="/images/projects/alerts/alerts-02.webp">
  <figcaption>Figure 1. Customers had to hunt for the alert rules they’d created.</figcaption>
</figure>


<figure class="project-figure">
  <img src="/images/projects/alerts/before.webp">
  <figcaption>Figure 1. Customers had to hunt for the alert rules they’d created.</figcaption>
</figure>

I talked to customers who mentioned that they had to click a tab and scroll around to find the alert rule that was relevant to them and might have been triggered lately. So, after a few concepts, we quickly rolled out an improved homepage that immediately tells customers what’s on fire and by how much.

I explored simplifying the interface, fixing the sort, and allowing engineers to filter this page by team:

<figure class="project-figure">
  <img src="/images/projects/alerts/after.webp">
  <figcaption>Figure 2. My designs that shipped for the first batch of improvements.</figcaption>
</figure>

Next, I wanted to tackle onboarding. This would be a much trickier problem because I had to investigate the kinds of problems that engineers wanted to detect. And it was around this time I realized that a lot of engineers didn’t know what kinds of alerts to create — is a bad LCP score worse than a spike in the number of users affected by a problem? If I saw an abbreviation like LCP or CLS then I’d likely close all my tabs and proceed to hurl my laptop into the ocean.

So as engineers were creating alerts they needed a guide.

<figure class="project-figure">
  <img src="/images/projects/alerts/alerts-04.webp">
  <figcaption>Figure 3. Designs for explaining the different types of alert.</figcaption>
</figure>

Now do we show customers that something is a problem right away? I realized it wasn’t good enough that Sentry just tell folks that their alert has been triggered but we needed to clearly explain what had broken and why. This led to us showing folks what caused the problem when all hell broke loose.

<figure class="project-figure">
  <img src="/images/projects/alerts/alerts-02.webp">
  <figcaption>Figure 4. The final design showing what broke, when, and why.</figcaption>
</figure>

This project gave engineers the tools they need to see if their checkout page was down or their feature had caused a serious performance problem. But what it taught me was that we needed less customization ultimately and more automated tooling.



<p class="intro">Searching for problems sucks, especially when it requires a lot of unnecessary clicking and typing. So these concepts were designed to help Sentry customers spend more time fixing bugs and less time searching for relevant issues.</p>

During user research I noticed how engineers would always filter issues by release, assignee, or environment. This required an awful lot of typing and clicking to get to the issues that they cared about most; a lot of manual work was required to get to the good stuff.

First off, I looked into the data to find the most common search terms. Once I had a nice prioritized list, I began exploring potential solutions.

<figure class="project-figure">
  <img src="/images/projects/search-concepts/search-concepts-02.webp">
  <figcaption>Figure 1. Custom filters suited to each engineer’s workflow.</figcaption>
</figure>

How can we make the entire interface customizable? In this first concept engineers could select whatever filters are important for them. This could’ve been helpful for both large and small engineering teams since they tend to search for different filters—smaller teams didn’t care at all about assignment for example.

So what if you could just remove the filters you don’t care about?

There was a bit of push-back about this design! Users were already overwhelmed with the amount of options on this page and now this design introduced even more. And what about the filters and keys that we introduce in the future? What about custom tags that engineers could add to Sentry? This design failed to answer these questions.

<figure class="project-figure">
  <img src="/images/projects/search-concepts/search-concepts-03.webp">
  <figcaption>Figure 2. A dedicated filter button to get a quick glance at the most common search terms.</figcaption>
</figure>

In the next concept, shown above, I explored making it easier to get to these important search terms right away.

The more I considered this approach, the less effective I realized it was: we needed to make it clear that filtering applied only to search and not to the main page filters. This led me to the next design though, so all was not lost...

<figure class="project-figure">
  <img src="/images/projects/search-concepts/search-concepts-01.webp">
  <figcaption>Figure 3. Showing the most common keys when search is selected.</figcaption>
</figure>

<figure class="project-figure">
  <img src="/images/projects/search-concepts/search-concepts-04.webp">
  <figcaption>Figure 4. Suggested values after a key is selected.</figcaption>
</figure>

This final concept shows recommended search terms only once you’ve clicked the search bar.

More often than not I tend to see this pattern used on e-commerce websites or stores but I think it works well here. Once a customer has selected a key, like `assignee` or `release`, we could then show the most relevant value like `me` or `Latest release`. That way we could greatly reduce the amount of clicking and typing involved.

Another important part of this design that I pushed for was making sure that customers could search for their custom keys that they added to Sentry. These terms never showed up in the data I collected because everyone had different custom keys but it was vital for many teams to access them.


<figure class="project-figure">
  <img src="/images/projects/issue-status/issue-status-01.webp">
  <figcaption>Figure 1. A diagram showing potential new issue statuses.</figcaption>
</figure>
<figure class="project-figure">
  <img src="/images/projects/issue-status/issue-status-02.webp">
  <figcaption>Figure 1. A diagram showing potential new issue statuses.</figcaption>
</figure>
<figure class="project-figure">
  <img src="/images/projects/issue-status/issue-status-03.web">
  <figcaption>Figure 1. A diagram showing potential new issue statuses.</figcaption>
</figure>


<p class="intro">It’s magic when an engineer ships busted code and Sentry sends them a notification about the problem. But engineers often struggled to find relevant issues in an ocean of old bugs.</p>

The vast majority of customers had hundreds of old issues kicking around that they weren’t investigating or resolving, sort of like an email inbox.

So it was clear that we needed to elevate critical problems to the top of their list so that an engineer could head to [sentry.io](https://sentry.io) and immediately see the issues that were most relevant to them. This led to discussions with engineers and brainstorming with the design team, after which I made a list of potential issue statuses that could help us do just that:

<figure class="project-figure">
  <img src="/images/projects/issue-status/issue-status-06.svg">
  <figcaption>Figure 1. A diagram showing potential new issue statuses.</figcaption>
</figure>

With these statuses we could elevate New, Escalating, and Regressed issues in some way and then push Ongoing and older issues to the bottom of their list.

I also worked on a single action—Archive—that would dismiss an issue and clean up their list. This led to several brainstorming sessions where I realized we also needed to alert customers when those archived issues escalated or got significantly worse in a short period of time.

I made a diagram showing the issue lifecycle in this brave new world:

<figure class="project-figure">
  <img src="/images/projects/issue-status/issue-status-02.svg">
  <figcaption>Figure 2. How an issue changes status over time.</figcaption>
</figure>

From here I could experiment with how we might represent these statuses in the app. In the first concept below, I explored how these statuses could work together into a concept called Severity. Ongoing issues would be marked as less severe and be pushed to the bottom.

I really wanted to make an interface that didn’t require clicking or scrolling or hunting for issues at all.

<figure class="project-figure">
  <img src="/images/projects/issue-status/issue-status-04.webp">
  <figcaption>Figure 3. Sorting issues by severity.</figcaption>
</figure>

But what if engineers wanted to quickly filter the whole page by the status? I heard a lot about how engineers often cared about new issues in their latest release first—and that’s the primary use case of Sentry. I wanted developers to feel like they could trust Sentry to show them brand new problems right away so they could feel confident that a release was “safe.”

In the concepts below, I tried to optimize for that feeling:

<figure class="project-figure">
  <img src="/images/projects/issue-status/issue-status-05.webp">
  <figcaption>Figure 4. Using tabs to separate issues by status.</figcaption>
</figure>

But this would involve too much darn clicking! And, as an engineer, I don’t want to hunt for Escalating issues if they’re important and I need to see them right away. Tabs were a no-go then.

The final concept was much simpler, labelling the issues by status first since fixing the sort could be part of a much larger project in the future. And considering this was the most important page in the product, we wanted to roll out a small batch of changes to be safe.

<figure class="project-figure">
  <img src="/images/projects/issue-status/issue-status-01.webp">
  <figcaption>Figure 5. The final concepts that I pitched to customers and internal stakeholders.</figcaption>
</figure>

This design also increased the time period to show events in the last 14 days instead of the last 7. The idea here being that now engineers would be able to see patterns in the data much more clearly over a longer time period.

By the time I left Sentry, engineers had started work on building out the rather complicated Escalating status since the whole design rested on detecting anomalies in these patterns. I also imagined that, in the future, this could play into improving notifications. A lot of Sentry customers viewed issue notifications directly in Slack or email and these statuses could decrease the number of noisy notifications they received, in the hope of only alerting them of the critical problems in their code.
