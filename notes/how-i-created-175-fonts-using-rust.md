---
layout: layouts/note.njk
title: How I Created 175 Fonts Using Rust
date: 2024-08-11T10:45:45-07:00
city: San Francisco
country: California
extract: Chevy Ray on their work creating pixel fonts.
---

Here’s a fantastic post by Chevy Ray about how they [made a dozens of pixel fonts using Rust](https://chevyray.dev/blog/creating-175-fonts/):

> Kerning was a big time hog when making my previous font packs. Because the tools I was using required every kerning pair to be manually entered, it was incredibly time consuming and also extremely error prone.
> 
> Look at it this way—if I have just three characters `A` `B` `C`, these are the following potential kerning pairs: `AA`, `AB`, `AC`, `BA`, `BB`, `BC`, `CA`, `CB`, and `CC`. That's 9 total entries! In fact, you can calculate how many entries you (may) need by just squaring the amount of characters you support.

Seeing each step that Chevy went through to process and create these families is bonkers and so it’s posts like this that remind me why blogging is my absolute favorite thing.
