---
layout: layouts/projects/project.njk
title: Alerts
website: sentry.io
extract: Detecting problems with Sentry.
date: 2022-04-29 09:00:00
dateRange: 08/22
images:
  - alerts/alerts-02.webp
  - alerts/alerts-01.webp
  - alerts/alerts-04.webp
---

<div class="carousel columns-7-13">
  <a href="/images/projects/alerts/alerts-01.webp">
    <img src="/images/projects/alerts/alerts-01.webp" alt=""/>
  </a>
  <a href="/images/projects/alerts/alerts-02.webp">
    <img src="/images/projects/alerts/alerts-02.webp" alt=""/> 
  </a>
  <a href="/images/projects/alerts/alerts-04.webp">
    <img src="/images/projects/alerts/alerts-04.webp" alt=""/> 
  </a>
</div>

<div class="columns-1-7">

<p class="intro">Sentry customers wanted to detect specific problems with their applications; from a slow checkout page to a crash on mobile devices and everything in between. The Alerts feature made that possible.</p>

The first step here was research: what kinds of problems did engineers want to detect? After talking to customers I realized that a lot of engineers didn’t know what kinds of alerts to create — is a bad LCP score worse than a spike in the number of users affected by a problem? If I saw an abbreviation like LCP or CLS then I’d likely close all my tabs and proceed to hurl my laptop into the ocean.

Secondly, how do we show customers that something is a problem right away? We didn’t want folks to scroll through a list of all their alert rules so we needed to sort things by the rules that are critical first. Finally, I realized it wasn’t good enough that Sentry just tell folks that their alert has been triggered but we wanted to clearly explain what had broken and why. This led to us showing folks which specific transaction or issue was related to the time period when all hell broke loose.

This project opened up Sentry to a great deal of customization and gave engineers the tools they needed to see if their checkout page was down or their feature had caused a serious performance problem. But what it taught me was that we needed less customization ultimately and more automated tooling. This led directly to the escalating issues project.

</div>
