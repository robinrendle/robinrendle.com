---
layout: layouts/post.njk
title: Sentry Alerts
date: 2021-05-07T15:43:45.874Z
city: San Francisco
country: California
extract: An exciting update to Sentry.
---

When you’re building an app you often want to know two things: why are things slow and what’s on fire? Or: how miserable are my users and where is that pain felt the most? That’s why we just shipped a host of improvements that should help you answer those types of questions.

It also happens to be my first big project at Sentry: a sweeping update to alerts.

With Sentry you can set up an alert to monitor [when your users see 404 pages](https://katydecorah.com/code/monitor-404s-with-sentry/) or we can alert you when your app has too many errors. We can also alert you when performance is bad, for example when [a Core Web Vital is too dang slow](https://twitter.com/bentlegen/status/1390376607756468226?s=20). There’s a host of other things we can alert you about too which is why we now show you a handy list of examples when you’re creating an alert:

<figure class='m-wrapper--full'>
    <img src="/images/cleanshot-2021-05-07-at-08.56.56.png" alt="The Sentry app showing all of the alerts you can now create"/>
</figure>

Once you’ve set up an alert you can head on over to the Alerts page where you’ll see a list of the alert rules you’ve created and their status. Is everything green? Neato, you don’t have to worry about anything (yet).

But if an alert rule detects a problem then it’ll float to the top of the list and tell you precisely what’s on fire and how bad that fire is:

<figure class='m-wrapper--full'>
    <img alt="The Alerts page in Sentry where you can see the status of your alert rules" src="/images/alerts-homepage.png"/>
</figure>

Okay, neat. So let’s say you have an alert that’s shouting at you about the [Largest Contentful Paint](https://web.dev/lcp/) on the Checkout page. Dang, I thought we fixed that! Well, not to worry. If you click on that alert you’ll now find a page that explains what’s happening in more detail and it’ll show you some hints as to what the solution might be. You can also zoom in and zoom out to see how many alerts were triggered by that rule over the past 7 days, giving a better idea of patterns instead of a specific problem:

<figure class='m-wrapper--full'>   
    <img alt="The alerts detail page" src="/images/alert-details-page.png"/>
</figure>

You’ll see which transactions were slow or which issues have happened in that period of time so you can see the impact of the problem and information about how to go about fixing it.

We’re pretty dang happy with how this project turned out but your scalding, uncompromisingly brutal feedback is always very welcome. Also compliments. I love those, too.
