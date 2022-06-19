---
layout: layouts/note.njk
title: Design Systems Metrics
date: 2021-11-02 19:21:00 -07:00
tags:
  - designsystems
extract: What signals would we need to see a design system clearly?
city: San Francisco
country: California
---

This is dumb, but hear me out: what if there was an equivalent of Google’s Web Vitals but for design systems? What if you could look at a report that showed precisely how bad your design system was and what you needed to fix right away?

What signals would we need to see a design system clearly? My hunch right now is: productivity, consistency, and accessibility. If one or all of those signals are off then you could use this report to make the case to hire a dedicated front-end engineer or designer for the team. Or maybe it could help you focus on a specific area of the design system that you didn’t realize was a problem before (like, say, the accessibility of your form components). Perhaps once you start monitoring these signals in your codebase and your component library it could tell you when something is going well even! I’m great! Give me a raise!

So my thinking here is that productivity tells you if people are fast or slow using the system, consistency shows you if they’re sticking to the system or going off the rails and making their own stuff, and accessibility shows the impact of that system on customers.

Or to put this another way:

- Is it fast?
- Is it getting better?
- Is it helping?

Here’s a sketch of what this could look like:

<div class="metrics">
  <div class="metric-card good">
    <h3>Productivity</h3>
    <span class="score">70</span>
    <p>Most developers saved time by using the library.</p>
  </div>

  <div class="metric-card bad">
    <h3>Consistency</h3>
    <span class="score">32</span>
    <p>Most pull requests used custom components.</p>
  </div>

  <div class="metric-card good">
    <h3>Accessibility</h3>
    <span class="score">65</span>
    <p>Some components aren’t WCAG 2.1 compliant.</p>
  </div>
</div>

(Side note: I am somewhat hesitant about the productivity stuff because I don’t believe that _time_ is the most important thing when it comes to a design system and as soon as you start measuring how people work it will inevitably become this extremely evil thing. So perhaps that needs to change.)

But either way, I haven’t heard folks talk about this much. What measurements besides these would you use? How do you see a design system clearly?
