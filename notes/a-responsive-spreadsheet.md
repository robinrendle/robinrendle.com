---
layout: layouts/post.njk
title: A Responsive Spreadsheet
date: 2017-11-29 20:02:00 -08:00
tags:
  - design
city: San Francisco
country: California
extract:
  A new post for CSS-Tricks all about making a CSS-only responsive spreadsheet
  UI.
---

At Gusto I’ve been working on a spreadsheet interface that’s a little complicated and elaborate but it got me to wondering how we might build [the simplest responsive spreadsheet](https://css-tricks.com/idea-simple-responsive-spreadsheet/) possible with nothing more than CSS and so I wrote about it for CSS-Tricks. It’s kinda nifty that there’s a wide range of UI tricks that no longer require JavaScript — in this example I’ve used `position: sticky` to lock the table headers in place so that you can still easily scan the document without having to constantly scroll around.

Here’s an example of the final result that should work in the latest version of Chrome:

<p data-height="500" data-theme-id="0" data-slug-hash="NwzObg" data-default-tab="result" data-user="robinrendle" data-embed-version="2" data-pen-title="A Simple Responsive Spreadsheet" class="codepen">See the Pen <a href="https://codepen.io/robinrendle/pen/NwzObg/">A Simple Responsive Spreadsheet</a> by Robin Rendle (<a href="https://codepen.io/robinrendle">@robinrendle</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
