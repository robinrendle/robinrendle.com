---
layout: layouts/note.njk
title: Start a newsletter
date: 2019-11-07 09:13:33
city: San Francisco
country: California
extract: And how you can help your design system today.
tags:
  - design
---

Giving advice about design systems is almost impossible. Every team and codebase is wildly different from one another and what works for one company _now_ might not work for the same company in the near future. I’ve noticed this at Gusto too, where lessons that I learned in the very beginning no longer apply to what our team has become.

That’s to say that design systems work is super weird!

However, if there is only one bit of advice that I would apply to every company and every design systems team no matter what it’s this: you need to start writing and publishing an internal newsletter about design systems.

Thanks to Brad Azevedo, a front-end engineer on our design systems team at Gusto, we’ve been publishing these newsletters on a semi-regular basis now. We write about what’s shipped in our library, any updates to components we’ve made, as well as any challenges we’re facing at that moment in time. And almost immediately we noticed a change in how our team is viewed across the company; engineers started reaching out to us for more advice and feedback, leads began looping us into more conversations earlier on in the process, and designers have started to work with our team to develop components that can be shared across our system.

I would say that this humble newsletter is perhaps the best thing our team has done for quite some time. And you should start one, too.

## Design systems is a million problems poorly defined

One of the strangest things about a design systems team at a company is that it’s not really a product team, but a platform team instead. This means that a lot of the work that a team does on a day to day basis is incredibly boring, infrastructure work, and almost all of it is invisible and under the hood. Most of this work will go entirely unnoticed by anyone else in the org, despite how crucial that work might be if the company wants a healthy design system.

One example might be refactoring the styles of your core web app, or adding documentation for a `Card` component. These small projects solve minor problems today but over weeks and months they build up into [something remarkable](https://www.robinrendle.com/notes/the-success-of-many-days). However! The problem with a lot of this work is that it doesn’t impact designers and engineers at your company today. And that lack of visibility makes things difficult for other teams on the outside to learn what your design systems team is doing and why. This, in turn, will make it harder to make hiring requests, to get buy-in for a design system, and to encourage folks to come to Design Systems when they need it.

Over the past couple of months our team has been listening to every designer and engineer at Gusto to get their feedback about what we’re doing right and wrong. And we’ve heard a flurry of questions from them: How does this work impact my team? What is Design Systems up to? What is the component library? Why did you change this one component or this particular page? And despite our incredible velocity and the wonderful changes our small team is shipping each week, some designers and engineers even felt that we weren’t doing anything at all!

So a few weeks ago we thought about ways to tackle these communication and transparency problems. We saw how some design systems teams at other companies have an internal web app that has a list of everything they’re working on for that quarter. Others have written about the benefits of office hours, too. But neither of these solutions felt like they could solve this problem alone. Instead, we started making notes about everything that we’d been working on and everything that we’d been fixing that week.

Today our newsletter writing begins in Notion, where we make a scrappy list to help us chat about things:

<div class="m-wrapper--full">
  <figure class="m-wrapper--unpadded">
<img class="chrome-shadow" alt="The Notion app with our notes for the newsletter" src="/images/notion-newsletter.png" loading="lazy"/>
</figure>
</div>

This is just a place where we can argue privately about what we want to discuss and what’s worth mentioning. But this leads to something that’s even more important than the content, perhaps.

## Figuring out the tone and audience

Our team is obsessed with figuring out the best way to communicate with everyone at Gusto, as we believe that the design system isn’t just for designers and engineers but for everyone in every department to get involved with. This means that we have to think about our audience and how designers can follow along with the more technical aspects of the work whilst engineers can understand and appreciate the design-led initiatives.

On this note, there’s a great piece by Linzi Berry, the Design Systems Lead at Lyft, where she writes about [design systems and empathy](https://medium.com/tap-to-dismiss/art-of-diplomacy-2ad1e2cac795):

> Systems design is not only scientific and meticulous, it’s the mastery of interacting with people in a sensitive and effective way. It takes human connection and empathy to go from a sticker sheet to a living, thriving system. The time we invest in relationships with designers and engineers (and their bosses, their bosses’ boss, their project managers, and the accessibility guru down the hall) is as important as building the system itself.

The only problem with this piece is that I wish Linzi had written it three years ago, as when I stared the team I believed that I could code or design my way out of any design systems problem. Alas! You must talk to people if you want to build a great system. You must reach out to everyone, designers and engineers alike, and help teach folks about the benefits of working within that system. The best way to start that little community? A newsletter.

Linzi continues with a one-two punch:

> It’s important to remain positive when communicating with others because we are the physical embodiment of the system. If we are easy to work with, so is the system. If we are intimidating, so is the system.

With this in mind the tone of each newsletter must be upbeat and jovial. It must bring everyone into the fold, with overwhelming kindness to be found in every sentence and every project we write about. In these newsletters we must try as hard as we can to also make design systems...fun.

## Goals of the newsletter

It’s important to think about what each edition of this newsletter should accomplish. If we’ve only worked on structural issues for the week then perhaps we can reach back into our archive of work and see if there’s something worth straight-up blogging about. But here are some of the high level goals we’re thinking about for each newsletter:

1. Make sure our work is transparent for designers, engineers, product managers, and senior leadership.
2. Teach folks about the value of our work and how we can help solve complex UI issues across the organization.
3. Show before and after screenshots of big projects that we’ve tackled so people can see the scale and breadth of our work.
4. Discuss what projects we’ll be tackling in the near future and why it will be useful to the rest of the organization.
5. Create a common language for our components and our system.

That last part is especially important as I’ve noticed how designers might start calling something a pattern, say “stickies” in the app to refer to one type of card component, when the component is actually called `Notifications` in the codebase. These small communication errors lead to big implementation issues and so our newsletter is the best place to build a friendly lexicon of terms and phrases that everyone in the company can share.

## What should we publish?

I think visual changes and component updates should lead the way, as they’re a lot more effective in garnering attention than the more infrastructure-led work that we do. In last month’s _spooky_ newsletter we introduced things with our brand new `StepList` component that we built alongside another team in the company:

<div class="m-wrapper--full">
  <figure class="m-wrapper--unpadded">
<img class="chrome-shadow" alt="Our newsletter in Google Docs" src="/images/newsletter-google-doc.png" loading="lazy"/>
</figure>
</div>

We record each entry in a Google doc so folks can scan through an archive of our work if they want to but we also send them a plaintext version via email. This way we have an archive if people want to go back through time, but we also don’t have to get folks to click a link if they want to read it. Anyway, this is a great way to foster partnerships and show how other teams might be able to collaborate with us and it’s a great opportunity to link to a Figma doc that breaks down all the different use cases of this component, or perhaps an audit instead. Actually this is one of the greatest benefits of using Figma on our design team at Gusto, as we can easily add links to mockups in our internal communications like this newsletter.

The list that we make in Notion goes a long way to helping us discuss what should and shouldn’t go into each edition. We want to make it as short and sweet as possible, and we want everyone to be able to see what we’re up to. By focusing on why we’re working on each project, and the impact after the fact, we can begin to spread the good word about our team.

After our first newsletter we had a ton of feedback from engineers, designers, and leaders at the company — and each appeared shocked as to just how much we could get done in such a small amount of time. It’s important to note that our output didn’t change at all, and we certainly weren’t more productive that month than any other. And I reckon that this shows just how important comms work is when it comes to design systems; you have to do the work, but you have to sell it, too.

## When should we publish them?

Well, Mondays are often when everyone in the company is packed with meetings and 1-on-1s as everyone is trying to figure out the shape of their week. And Fridays are generally very quiet in the office as lots of folks work from home. So those two days are probably less likely for folks to read the email. This encouraged us to send the email on Wednesday afternoons to make sure that as many people have time to read it as possible.

Also, the cadence is important, too. If we publish these newsletters too frequently it might look like we’re not up to much, whereas if we publish them too infrequently (say, once a month) then folks will feel less included in the process of our work. Once every other week feels right for our team at the moment, but we’ll also be sharing updates about our work in person on a regular basis, too (such as Engineering and Product Design All-Hands meetings).

This feels like a lot of repetitive work and communication—but this outreach work is absolutely vital to the success of a good system, especially at the beginning when a team is just being formed. Maybe folks didn’t catch that Slack message about the new UI Kit! Maybe they didn’t see your new component in the library! Communication is extraordinarily complex at large companies with gigantic systems and the way to combat some of that is to be consistent (and maybe a bit loud) about your message.

<div class="m-wrapper--full">
  <figure class="m-wrapper--unpadded">
<img class="chrome-shadow" alt="Our UI Kit built in the Figma design tool" src="/images/figma-ui-kit.png" loading="lazy"/>
</figure>
</div>

## Wrapping things up

With design systems work there is always more to be done and barely any time to sit back and see all the improvements that your team has made. So the other nice thing about the newsletter is that once the announcements are out there in public it all starts to feel a bit more complete. It’s wonderful to see folks noticing the work that ships and that is piece by piece making their lives easier and more efficient in the long run.

The newsletter is also a great place to talk about things that we could do better on our team. Perhaps we broke a component that wasn’t fixed immediately. Why was that? How do we avoid issues like this in the future? Creating an open forum and discussion around our thinking helps folks understand that we’re not just breaking things and being complete jerks. And this is important because any issues we cause in our design system that impacts other features risks damaging that trust we’ve built with everyone at Gusto — so we need to be extremely sensitive to anything that we change in our product.

Finally, I think it’s wonderful to have a record of everything we’ve built. It’s neat to see how that one project we started a month ago ties into this other project that we just wrapped up today. It boosts morale for the team and makes us all feel a little bit proud of the work we’ve been doing. Everything feels a bit more tangible after you hit send on that email. But these newsletters are also becoming a story that we can use to teach folks how we work—by making the smallest of changes each and every day—and nudging things forward by 1%. That’s what makes for a great design system. And that’s what we hope to accomplish with these emails.

Because if the revolution will not be televised, then it will almost certainly begin in a humble newsletter.
