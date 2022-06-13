---
layout: layouts/post.njk
title: The Dashboard Problem
date: 2019-10-19 10:06:57
city: San Francisco
country: California
extract: Or, why good product design is impossible.
tags:
  - design
---

The longer I work on making large web apps, the more I get this feeling, a kind of sixth sense as I’m navigating an interface. It flickers on whenever I stare at a UI for long periods of time, and the more I pay attention to it the easier it is to see the shape of the organization that built it. Weird, huh?

I can begin to tell if the UI was made by one team, and if they’re an engineer-heavy organization. Or whether they have a bunch of junior designers without much UX experience. I can start to tell which parts of a company might own _this_ feature or _that_ one and that they don’t communicate properly with one another.

I can tell if they have a design systems team, too.

This sixth sense is most prevalent whenever I visit the dashboard of an app, the homepage. Because if there was one rule of product design it’s this: all dashboards are bad. Why? Well, for the most part no-one in a company owns the dashboard, the very first page the user sees, and perhaps the most important page of the app itself. No-one is responsible for it or understands how it should work. No-one can see how this section connects to all the others.

This is the most dangerous problem a product design team can face in my opinion: putting all these designers on _features_ and _missions_ without anyone thinking about the architecture or how it all fits together. And in this humble blogger’s opinion this is not simply design debt that accrues over time naturally, it is simply extremely poor management.

This is the Dashboard Problem made manifest.

Almost all of them have poor information hierarchy, with no clear path for people to do the one or two things that they frequently need to get done. Take GitHub, for instance. (And before I begin I just want to make it clear that I’m not dunking on any designers or engineers at GitHub, as making changes of this scale are almost impossible and I understand there are certainly folks there that want to change things. This is most likely not a problem of skill or talent, but of focus and mismanagement.)

So, here’s an example of my GitHub dashboard today:

<div class="m-wrapper--full">
  <figure class="m-wrapper--unpadded">
<img class="chrome-shadow" alt="A screenshot of my GitHub dashboard" src="/images/github-redesign-before.jpg" loading="lazy" />
</figure>
</div>

What is...any of this stuff? The whole dashboard feels like they wanted me to use GitHub as a social network. `All Activity`? Why on earth do I care about any of this? Is it information about a current project I’m working on? Nope. Is it information I need to know about in the future to do a better job? Nope!

What does everyone want to see on GitHub, instead? Well, here are the questions I ask myself every time I hit the dashboard:

1. Which of my PRs are currently waiting for review? Which of these do I need to polish and fix?
2. Who needs me to review some code? How can I unblock someone?
3. What is my team working on currently? Is there something that they’re doing that will impact my work?

Everything else is a nice to have, to be honest. Everything else besides these three points are non-essential and get in the way of me and my current project from being successful. Seeing a stream of random folks making pull requests and starring projects has absolutely no relevance to my day-to-day work. And that can get frustrating when I use the GitHub app hundreds of times a day. I imagine the millions of developers who use the software and have the same problems that I have. I want things to be easily understood, especially when you’re developing software for a giant company where a single command can break a billion dollar web app.

And I want fewer clicks, dammit.

After thinking about it for a while, I realized issues #1 and #2 above can be solved without big animations or fancy graphics. All we need is two lists: the first shows which projects you’re currently working on, and the second shows which folks are asking for code review. There’s nothing world changing about this design of course, but it immediately answers the questions I’m asking when I visit GitHub. And that’s because GitHub is not a social network: it is a tool for me to write code.

<div class="m-wrapper--full">
  <figure class="m-wrapper--unpadded">
<img class="chrome-shadow" alt="A screenshot of my GitHub dashboard redesign" src="/images/github-redesign-after.jpg" loading="lazy"/>
</figure>
</div>

This design gives me an overview of my time and the work that’s coming up that I urgently need to finish. By heading to GitHub I can see everything I need to do without having to click anything. There’s less confusing information about stuff I don’t care about. And the status of each of these mini-projects are obvious from just a quick scan.

Now I can jump into a project and get to work.

My point here isn’t to argue that I’m a better designer than anyone. My point is that you can see mismanagement down at the UI level: when things don’t make sense it’s likely not because of a designer or an engineer and how they did an extremely poor job of things. Instead, it’s a form of company mismanagement and it drives me crazy because I realize that writing great code and doing good design is not enough. It’s useless in fact, when the organization of a company is actively hindering the work.

That’s when I want to burn everything to the ground.

Anyway, emotionally unhealthy drama aside, I reckon design leaders need to consider the Dashboard Problem earnestly and figure out how to build teams that don’t just focus on features or improving metrics. They must build teams to make great software first and foremost, and today they are failing.

And we, as users, are suffering for their mistakes.
