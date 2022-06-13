---
title: Sentry Hackweek 2021
date: 2021-08-13T23:31:15.045Z
city: San Francisco
country: California
layout: layouts/post.njk
extract: And a particularly dumb video.
---

Hackweek just wrapped up at Sentry and it’s always a lot of fun. There’s so many weird projects from so many smart weirdos. Today I watched someone skate around SF on bioluminescent rollerblades whilst another smart chap walked through their AI generated risograph art. It’s inspiring and yet also intimidating at the same time to be in company like this.

For my project I wanted to prototype something that’s been missing in the Sentry app, a boring feature that isn’t ever going to woo anyone but it’s important nonetheless: notifications.

Generally, notifications are annoying and bad. They hijack your focus and misdirect your attention (the first thing I do when I get a new device is turn off all the notifications). But, weirdly enough, by not having notifications within the Sentry app we’re actually making the noise problem worse. That’s because today folks can only get notifications about the code they’ve broken via email and I don’t know about you but my inbox is a precious thing. I don’t want to get spammed with a million different messages about Sentry stuff that I can deal with later.

That’s why in-app notifications are important (although extremely boring). So to counteract the boring-ness of this hackweek project I made a video that explains everything:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ws7l0B9yp8k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

For the demo website I made [thefuturetomorrow.today](http://thefuturetomorrow.today) and built it with Astro. And I know I’ve been moaning a little bit about it lately but, for a project like this, Astro is absolutely incredible. It’s so dang nice to be able to to use components just like React and give them props but without having to load a gigantic pile of JavaScript at the same time.

For the homepage of this thing I could write the following:

```javascript
<AppWrapper>
  <Header>
    <Tabs>
      <TabItem unread={40} url="/" active>
        All
      </TabItem>
      <TabItem unread={12} url="/alerts">
        Alerts
      </TabItem>
      <TabItem unread={7} url="/workflow">
        Workflow
      </TabItem>
      <TabItem unread={6} url="/account">
        Account
      </TabItem>
      <TabItem unread={2} url="/new">
        What’s New
      </TabItem>
    </Tabs>
  </Header>
  <Filters />
  <Table>
    <Notification
      title="Approve Request"
      desc="Jane Schmidt wants to join the #workflow team"
      type="Account"
      time="1 minute ago"
    />
  </Table>
</AppWrapper>
```

Because of how fast this all loads under the hood, it feels more web-component-y than it does JavaScript framework-y to me. And that’s an enormous compliment.

Here’s a link to the repo if you’re interested in taking a stroll around: [robinrendle/hackweek-notifications](https://github.com/robinrendle/hackweek-notifications). There’s some naff JavaScript in there for the dismiss actions and what not but it all works! Plus, being able to see a feature like this that looks real is sometimes more helpful than a Figma mockup.

Anyway, building stuff with Astro like this is just a lovely way to work. And now: bed.
