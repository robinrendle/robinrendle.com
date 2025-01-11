---
layout: layouts/note.njk
title: Learnable by default
date: 2025-01-11T09:23:34-08:00
city: San Francisco
country: California
extract: And why HTML is a programming language.
---

Tim Carmody wrote a piece earlier in the week about [why HTML is a programming language](https://www.wired.com/story/html-is-actually-a-programming-language-fight-me/):

> Because HTML looks easy and lacks features like formal conditional logic and Turing-completeness, it’s often dismissed as not a programming language. “That’s not real code; it’s just markup” is a common refrain. Now, I’m no stranger to the austere beauty of the command line, from automating scripts to training machine-learning models. But underestimating HTML is a mistake.

And yet!

> HTML is the most significant computing language, programming or otherwise, ever developed. Every other programming language has to grapple with how HTML has redefined computing over the past 30-plus years.

Tim goes on to list a lot about why HTML is great: how it can shape-shift across machines, how fault-tolerant it is, etc. But as I’ve been working on this big project lately I realize there’s something else about the design of HTML that I adore: predictability.

You can add a CSS class to basically every HTML element. You can slap an ARIA role on anything (although be very careful about that!). You’ve got your shorthand attributes to toggle behavior on and off that work predictably. And much of these features work across all components so that if you learn how one component does something then you’ve actually learned something much bigger: you’ve learned the system itself.

This is the sign of a good language!

As I’ve been working on this big refactor in this enormous React codebase, I’ve found that predictabile systems are essential. For example, a Table component might not have a class name attribute you can pass into it if the dev decided or if they simply forgot. But even when you’ve finally mastered how one component works you have to unlearn all that when it comes to the next one. All the props and behavior is different! Good luck learning that system!

(Making components predictable and reliable with React is hard because most of the time is spent recreating behavior that comes for free in HTML.)

But learnable by default! That’s what all languages, systems, and programs should aspire to.
