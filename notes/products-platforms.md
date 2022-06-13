---
layout: layouts/post.njk
title: Products and platforms
date: 2019-10-08 16:53:33
city: San Francisco
country: California
extract: And why a design system is not a product.
tags:
  - design
---

The other evening I got to reading this old rant about and how [most companies don’t understand platforms](https://gist.github.com/chitchcock/1281611), being far too focused on building short-sighted products instead of the underlying infrastructure that ties it all together. However, the writer of this post doesn’t make the distinction between ‘platforms and products’ entirely clear, I understood a platform to be APIs, data, and overall communication between teams and codebases whereas a ‘product’ is something that customers end up seeing. Like an app, for instance.

Stevey argues that Amazon is way better at building platforms than Google is:

> So one day Jeff Bezos issued a mandate. He's doing that all the time, of course, and people scramble like ants being pounded with a rubber mallet whenever it happens. But on one occasion -- back around 2002 I think, plus or minus a year -- he issued a mandate that was so out there, so huge and eye-bulgingly ponderous, that it made all of his other mandates look like unsolicited peer bonuses.
>
> His Big Mandate went something along these lines:

    1. All teams will henceforth expose their data and functionality through service interfaces.

    2. Teams must communicate with each other through these interfaces.

    3. There will be no other form of interprocess communication allowed: no direct linking, no direct reads of another team's data store, no shared-memory model, no back-doors whatsoever. The only communication allowed is via service interface calls over the network.

    4. It doesn't matter what technology they use. HTTP, Corba, Pubsub, custom protocols -- doesn't matter. Bezos doesn't care.

    5. All service interfaces, without exception, must be designed from the ground up to be externalizable. That is to say, the team must plan and design to be able to expose the interface to developers in the outside world. No exceptions.

    6. Anyone who doesn't do this will be fired.

    7. Thank you; have a nice day!

> Ha, ha! You 150-odd ex-Amazon folks here will of course realize immediately that #7 was a little joke I threw in, because Bezos most definitely does not give a shit about your day.

This is all written nearly a decade ago now so it’s probably not the case today. But the reason why this post caught my attention is because I reckon this is something that relates to design systems somewhat: most folks think that design systems should be owned by a product team at a company but this is totally the wrong way to think about it in my opinion. Yes, a DS team is supporting multiple products — apps, websites, internal tools — but really they’re platform people. They should care first and foremost about the platform.

The platform in this example would be their component library, the styles, their guide, their design process feedback. Which is weird because I’m a product designer on a platform team and so the job description doesn’t make much sense to me. _Platform designer_ sounds better.

Anyway, I loved this post a great deal and this distinction between platforms and products made something click in my head that I’ve been thinking about for a long time but have been unable to put into words.
