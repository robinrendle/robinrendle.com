---
layout: layouts/post.njk
title: Verifying Large Refactors
date: 2020-10-20T20:11:05.042Z
city: San Francisco
country: California
extract: And a nifty Sentry tip.
---

I love this post from Mark Story about how he used the Sentry app [on a big refactor](https://blog.sentry.io/2020/10/20/verifying-large-refactors-in-production-with-sentry) of Sentry itself:

> Recently we used Sentry to ensure we didn’t break Sentry while doing a large refactor. When replacing an API or code path with a new implementation you’ll likely ‘deprecate’ the old path, but how do you know when that old path is finally not in use? If your code is running on a server, you could use metrics or logs, but even with them, it can be challenging to capture the required context to pinpoint where deprecated code is still in use. If your code is on the frontend logs are not an option, and you’ll need to be more creative.

Mark shows how even a simple refactor, like changing the icons of some components can be this daunting problem because it’s so hard to see [the hyperobject](https://www.robinrendle.com/essays/systems-mistakes-and-the-sea) properly; searching through a codebase for all the instances of a component can be really tough and sometimes even impossible. Welp.

For context, I work at Sentry too. But! I still think this kind of dogfooding is amazing and I’m constantly surprised by how we can use our own app internally to make our own app better. It’s darn impressive.
