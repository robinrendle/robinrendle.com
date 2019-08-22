---
title: Endsleigh Insurance
date: 2014-06-04 08:37:00 -07:00
dateRange: January 2013 – February 2014
subtitle: Building a mobile-first design system for a student insurance company.
layout: projects-detail
color: "#5c58a4"
company: Erskine Design
customCSSClass: endsleigh
heroImage: "/images/work/endsleigh/endsleigh-hero.png"
heroImageClass: no-shadow
role: Front-end development
results:
  40% increase in conversion rates for key products and a 15% drop in the number
  of calls to their customer service center
extract:
  "<p>Endsleigh is a student insurance provider in the <abbr>UK</abbr> and I worked
  with them to develop a framework capable of supporting their vast array of products
  and services, focusing specifically on object-oriented <abbr>CSS</abbr> and web
  performance. The goal was to hand over a design system and web app that could be
  maintained by their internal team of developers, designers and project managers.</p>"
---

## Project Goals

<ul class="solutions-list">
  <li>An easy-to-read codebase with object-oriented <abbr title='cascading style sheets'>CSS</abbr>.</li>
  <li>Make the website accessible for as many customers as possible.</li>
  <li>Create a performance budget.</li>
</ul>

As a front-end developer I worked closely with the head of design at Erskine and the lead front-end developer to break down the design mockups into an ellaborate system of components and templates. Throughout the project we discussed ways in which to cut down on the number of components and re-use them as much as possible. We also constantly discussed ways in which to change the design in order to improve the performance of the website (such as stripping out unnecessary images and replacing them with inline <abbr title='scalable vector graphics'>SVG</abbr>s).

That feedback loop between design and development ultimately taught me an awful lot about how a team ought to collaborate and work together in the future.

## Starting the Design System

First we took a look at the high-fidelity mockups, printed them out and plastered them over the wall, closely examining how we might break them up into tiny blocks of <abbr title='cascading style sheets'>CSS</abbr> and <abbr title='hypertext markup language'>HTML</abbr>. This was a new method of working on front-end development for me and seeing a website in this manner but after just a few minutes it was possible to spot the similarities and differences between everything.

<div class="m-wrapper--full">
  <div class='m-wrapper--unpadded-wide'>
    <figure class='cell-t20'>
      <img src="/images/portfolio/endsleigh-layouts.png">
      <figcaption>
        <p>By taking a step back and looking at all the templates and components together before we started building anything was crucial in order to figure out what we should build and in what order.</p>
      </figcaption>
    </figure>
  </div>
</div>

It was around this time that we also set rigorous performance budgets and talked with the design team often when particular components needlessly hindered the frame rate or slowed the website to a crawl. A small part of this performance work was ensuring that our Sass code didn’t bloat the compiled <abbr title='cascading style sheets'>CSS</abbr> output, but our main focus was spent on ways in which to reduce the total number of images on the site.

Serving <abbr title='scalable vector graphics'>SVG</abbr> assets and high resolution images was important because of the growing number of mobile devices that were being used to access the site, but we also took steps to protect users from downloading multiple versions of each asset in order to keep our performance budget intact.

<div class="m-wrapper--full">
  <div class='side-by-side equal-height'>
    <div class='side-by-side__child'>
      <figure>
        <img class="chrome-shadow" src="/images/work/endsleigh/endsleigh-desktop-detail.jpg">
      </figure>
    </div>
    <div class='side-by-side__child'>
      <figure>
        <img class="chrome-shadow" src="/images/work/endsleigh/endsleigh-desktop-business.jpg">
      </figure>
    </div>
  </div>
</div>

## Project Review

This was one of the first large-scale projects that I ever worked on and it taught me how to think in systems and relationships when it comes to writing a lot of <abbr title='cascading style sheets'>CSS</abbr>. It made me deeply concerned and excited about usability, mobile design, and web performance, too.
