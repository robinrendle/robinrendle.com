---
layout: layouts/note.njk
title: "Design Systems at Gusto: Part II"
date: 2018-10-22 22:48:00 -07:00
tags:
  - design
city: San Francisco
country: California
extract:
  "“Design is not about learning to think outside the box, it’s about finding
  the right box to think inside of.”"
---

Lately I’ve been jotting down some haphazard notes about the challenges that the Design Systems team at Gusto has encountered along the way and I’m learning a whole bunch about how we should interact with the rest of the organization (a team of over a hundred engineers and a dozen designers working on our product).

Today our design systems team is made up of a designer, a design lead, and an engineer but — as our team has been ramping up — there’s some things have worked out really well, whilst other things not so much. But documenting each failure and success is important for me to keep growing as a designer/developer. Also? I’m a big fan of taking notes in general and a while back I wrote about how seemingly insignificant blog posts can [improve the quality of your work over time:](https://robinrendle.com/notes/yay-computers/)

> My advice after learning from so many helpful people this weekend is this: if you’re thinking of writing something that explains a weird thing you struggled with on the Internet, do it! Don’t worry about the views and likes and Internet hugs. If you’ve struggled with figuring out this thing then be sure to jot it down, even if it’s unedited and it uses too many commas and you don’t like the tone of it.

Besides trying to listen to my own advice, I always find it interesting to see how other teams and companies are dealing with the various complexities of making a great design system and I’ve learned an awful lot about how I should approach problems from those teams. But since every org is different, every design system has to cater itself to a new culture. So take all of this with a grain of salt as it might not apply to you.

Anyway, last time I ranted about [the mistakes](https://robinrendle.com/notes/design-systems-at-gusto/) I’ve made along the way but this time I’d like to explore what’s been working in our favor and what’s changed for the better. So here are seven clickbaity things that I’ve discovered since then:

## #1. Documentation is just the beginning

Documenting everything about your front-end and UI should be a top priority for any design systems team — making sure that the team knows what fonts to install and which CSS classes they can use, as well as what components exist. Not to mention the hierarchy, color palette, icons, spacing, etc. etc. But! There’s a great number of things that can’t be documented in a design system, or at least things that are a bit trickier to document in practice. Accessibility standards for example, or when we ought to use component X over component Y, when to refactor a component, or even when to push back against a design and go back to the drawing board because of front-end constraints.

_Side note: I’m not entirely sure that a design system can ever be fully documented._

To those uninitiated in the peculiar world of maintainable CSS and thinking about design as a complex set of interlocking parts, all of this stuff looks like frustrating dark magic. Everything in the field of design systems is cloaked in Medium-friendly rants and a thick veil of mystery to boot. Not only that but conversations are often bundled with an obtuse language. Yet our job as systems designers is to bridge the gap between this dark art and the designers around us.

I guess my point here is that documentation can only help so much with that.

What’s required to build a good design system is a new set of habits. When someone asks a question like “how does component X work?” they might not know that documentation exists. So, yes, sharing your docs regularly is important but being the public face of your system is just as important as the docs. Evangelizing the design system with every opportunity you get and making sure that all this doesn’t feel like a burden — that’s vital for the effectiveness of a system to scale in the long run.

One small thing we did a while back is to setup a Slack channel where any questions routed through it will often lead straight back to the docs we’ve written — but! — providing a space where people can ask questions is probably even more important than the docs themselves; everyone needs to feel involved in developing the system and everyone needs to have visibility into how we can improve our design standards.

However, as we began to develop the documentation for our design system and UI Kit in Figma I discovered something else, too.

![1_kahbFb8A4bPBuWkHZzhayw.png](/images/1_kahbFb8A4bPBuWkHZzhayw.png)

## #2. Pairing is worth its weight in gold

It’s not possible for the Design Systems team at Gusto to review every design or line of code that ships, and we certainly can’t provide feedback on every new component that makes it out the door. And that’s okay! But lately I’ve tried to pair with designers and engineers as frequently as I can, even if I haven’t been officially tasked with working on that project.

Here’s the thing: pairing with other designers is great because it’s highly effective user research.

Working side-by-side gives me a good idea of what documentation is missing in our codebase and in our design files in Figma. Do our designers and engineers know about our component library? Are they familiar with the latest best practices around HTML and CSS? Can my team do a better job explaining why using component X is beneficial to the organization as a whole? Can I steal this layout from the designer and make it an official pattern for everyone to adopt in the future?

I’ve read a lot about how other design teams have made office hours an important part of their evangelizing process to solve issues like this but when we started holding them we found that they weren’t quite as popular as we’d hoped. We assumed that office hours would welcome our designers and engineers to ask questions and would subsequently create a space for identifying issues, making our work more transparent, and in the process encouraging a more consistent visual language across Gusto.

Yet there’s one big problem with that approach for us…

## #3. Designers and engineers won’t know when they need you

This lesson took me a good long while to figure out. When a design systems team forms at a company everything is likely to be somewhat overly complex and undocumented. Also, a lot of our codebase at Gusto is imprinted in our memory because we’ve spent years now rummaging around trying to understand and refactor it. My point is that during these pairing sessions we can help train designers and engineers with that institutional knowledge we have stashed away in our noggins and prevent more information from being silo’d away into different teams.

Plus, the codebase can and can’t do stuff, and those constraints aren’t always visible. Folks on the team might be unaware that there’s a limited set of colors to choose from, or that there’s a component that already exists that can solve this exact use case, or that we should be writing CSS in a certain way, or that we should avoid building this thing in this way because it violates our accessibility standards.

What feels like another round of burdensome design critique during office hours will often feel like a more collaborative, productive conversation whilst pairing. And so we both win in this scenario! We both get work done much faster and in a more collaborative spirit — product designers will learn about our system of front-end components and patterns whilst I get a better understanding of what they need to do their job well.

Speaking of which, I think it’s real easy to make a them versus us culture when it comes to design systems. I mean, just look at all these designers messing up your lovely system! How. Dare. They. But when you’re pairing with someone you can immediately get through all of that nonsense. You reset the social contract between you and the designer and you can create an environment where both of you can make significant improvements to the system without any of the silly drama.

Also, rather selfishly, frequently pairing with another designer or engineer helps spread that design systems knowledge around. A while back I noticed that once a pairing session was over then that designer/engineer would pass those lessons on to the next person on their team.

So a lot of the evangelizing work can be done for us if we’re constantly pairing with someone else. Trading knowledge in this way is important because we desperately need someone on every team to act as a translator, a person that can dive deep into the codebase and map its outlines and eccentricities, as well as someone that can make that map for designers and engineers easy to understand. We need folks that can figure out when to explore further, when to make camp for the night, and when to run away from all the bears.

Okay this analogy is adorable but it doesn’t really make sense anymore. Where was I?

## #4. Oh yeah, breaking bad habits is tough because it can sound mean and obnoxious

Understanding the tough UX issues that designers face on a daily basis and learning about the challenges that they’re tackling is a good first step. For example, if you’re a product designer working at a big organization then sometimes it’s hard to identify what’s a best practice or whether a pattern has been deprecated entirely. And that’s because at a certain size the communication between members of an org becomes fragmented; designers and engineers will miss a message from our team, they’ll skip an email, they’ll miss a session on a particular topic. That’s always bound to happen since so much is going on in an org that’s it’s impossible to keep up with everything.

Design system teams should empathize with this.

But I also worry that this sort of collaborative approach with a design systems team can feel nosey or unnecessary when someone like me butts in and cries “hey I can help!” — I often worry that our designers might think that this sort of assistance feels infantilizing and I fear that engineers will end up questioning why they need help from someone with less engineering experience to coach them in how our front-end works. These are issues I’m struggling to answer today.

Namely, and most importantly, how can I be as useful as possible without being a massive jerk?

Design systems feedback can end up sounding kinda mean. _Don’t use blue. Don’t put that there. Make sure that works on mobile. Don’t write CSS like that. This form is not accessible. Why did you need a new component there?_ And in the past I’ve had difficulty describing why we shouldn’t build something or why a designer should go back to the drawing board and suggest another approach that fits better into the system of existing components and patterns.

_Side note alert: if the motto of an improv troupe is “Yes, and…” then the motto of a design systems team is surely “Yes, but…”_

Anyway, my team’s ultimate goal is to make it difficult for folks to do the “wrong thing” and to encourage [a pit of success](https://blog.codinghorror.com/falling-into-the-pit-of-success/) — yes, but! — initiating a ton of rules and overhead at the beginning can be more dangerous than doing nothing at all. It can make you sound like an annoying control freak and once that happens then you risk building that community around design systems work that you need to do your job well. Engineers will begin to ignore your docs and designers will continue to go off into the wilderness and make interfaces that might not compliment what already exists.

So watch out for that — people will always ignore a jerk.

## #5. Thankfully, building a community around design systems is super easy!

Actually that’s also tough and I am a big liar. Building a stable, helpful and encouraging community around design systems requires a ton of energy because, as I mentioned before, a lot of folks won’t know when they need you. They won’t know if an interface is inaccessible or that another component exists already, and they might not be able to make that trade-off between design impact and engineering cost.

Building this community is also tough since it’s almost impossible to measure the success or even the effectiveness of a good design system. These sorts of problems are like dark matter; we know that they’re there but we can’t really measure them.

Here’s a hot take that you didn’t ask for: I believe that we won’t ever be able to measure problems in a design system and we should probably stop trying. There will never be a metric that you can pop into a spreadsheet that proves your design system is failing or, conversely, that your team is working in perfect harmony with one another. [NPS doesn’t work.](https://articles.uie.com/net-promoter-score-considered-harmful-and-what-ux-professionals-can-do-about-it/) Instead, qualitative data is the only way to get a sense for how things are working in my opinion.

But if we can’t accurately measure the impact of a design system — or the problems that lead to the development of one — then how do we measure good work at all?

## #6. Confusion and inefficiency are the best signs of design system failure

For design systems folks (the kind of people that live inside spreadsheets and have very neat and organized cupboards at home) this statement probably makes you feel uncomfortable. We all want data! And we want it now!

But let’s say a designer on your team heads off on a really long exploration of how forms ought to work in your app — that could be a sign that your components aren’t documented. Or if you see a lot of custom CSS overriding your core components — this could mean that you need to spend more time walking everyone through how flexible your components are. Confusion and inefficiency like this can’t be measured from a scale of one to ten or 🙂 to ☹️.

If a designer doesn’t want to pair with you on their feature then that’s another sign that the community around design systems needs a lot of work, and there’s not a metric for revealing that issue either.

_Side note: collaborating with the design systems team shouldn’t feel like another critique. Instead, it should feel like you’re working 80 times faster and preventing a ton of future bugs and issues from popping up. It should make you more confident, more collaborative, and make you feel as if your talents can spread across the application and organization much faster than before._

Working with the design systems team should feel more productive than working alone. But…

## #7. Be wary of too many cooks in the kitchen

For a design systems team to be effective they have to flip from a dictatorship to a democracy at the flick of the switch. This is just so that things can get done: not everyone in your entire organization can be allowed to have an opinion about border-radius or the color of your cards because otherwise your systems team will feel immobilized by indecision and nothing will get built.

It’s easy for a tiny issue to scale up into a larger one until you have the whole design team in a room talking about how your text styles ought to work. Quite frankly this isn’t an effective use of everyone’s time since designers could be solving much larger UX problems that have a significant financial impact to the business, rather than having to deal with font sizes or colors. Noting their anger is very important, and getting feedback is vital, but taking their opinions into account over every detail…not so much.

In the early days of our design systems team at Gusto we struggled with this issue frequently. We all felt a little nervous about when to make a hard decision and when to explore ideas, when to keep iterating, or when to push back on a design. And we frequently would ask the whole team about how our brand should be expressed visually — yes, but! — this slowed us down immensely. Components would have to go through a series of reviews and people started to feel scared of touching our codebase or trying to improve things across the system if it wasn’t the perfect solution for everyone.

Here’s another hot take: I stopped caring about the “perfect” solution to a design problem a long time ago. Our work on a design systems team should be to turn up every day and make our system just 1% better.

Anyway, I slowly came to the conclusion that everyone should be involved and kept up to date but not everyone should have an opinion that blocks progress. The design systems team is constantly talking to the rest of the design org at Gusto about what we’ve accomplished and what we’re working on — and we’ll open up the floor to get feedback about all sorts of things because designers should feel empowered to criticize us and pitch us new ideas, or even to teach us new things.

But a good design system cannot be built by committee.

## #8. Design Price Points can help resolve arguments

I’ve been working with Jordan Townsend on a number of projects lately — he’s an infuriatingly talented designer at Gusto and he has an interesting way of dealing with my design systems nonsense. Whenever we chat about a new project he always shows me three potential solutions to a problem.

The first is what he considers to be the most expensive solution. This is most likely a new component or a modified version of what already exists in our codebase. Some of this stuff is delightful and really pushes the boundaries of what’s possible with SVG or CSS. However, it’s often difficult sometimes to make the engineering case for this new change. Should we really invest X number of hours polishing this UI if the user will only see it for a few minutes? Can we say this investment is worth the cost? Probably not.

The next option is the “cheapest” solution where Jordan will try to use an existing component that doesn’t push the limits of our system at all.

Finally, the third option, is a combination of the first two. It’s a design that hopes to push the standards of our system whilst also solving the problem in an elegant way. Often this shows us that a component is inflexible and too rigid to adapt to a designer’s everyday needs. It’s then clear to us how we can fix a whole swathe of little bugs, or perhaps how we ought to document a component in more detail.

I really can’t tell you how great this method of design is for collaboration, and for making our system 1% better every day.

In the past, when Jordan showed me just one design and often the most expensive solution in isolation, it was difficult to make the case against it. Because, yes — this design solves the problem the user is experiencing in the most efficient and elegant way imaginable but it will often take a disproportionate amount of time to build. And so a lot of my “Yes but…” criticisms at that time often made it sound like I was questioning the purpose of good design itself.

_Side note: I often struggle describing the impact that a new design will likely have on the rest of our components and I fear that it makes me sound like I am arguing against design._

Anyway, as a member of a design systems team you have a responsibility to the codebase and that interlocking system of existing parts that are often difficult for others to see. But if a new component or pattern doesn’t fit neatly into the system and can’t be reused again then it’s difficult to sign off on it. However, it’s likewise tough to push back against it. To solve this issue then we desperately need to build a collaborative relationship with the designers and engineers so that when we give feedback it doesn’t sound like we’re dunking on them and their work.

These design price points are an effective solution then to this problem because we get to barter amongst the team and find the right balance.

## The Design Systems Loop

There’s a wonderful quote by Aza Raskin, although I’ve forgotten where he said it now, but I think it about all the time. He argued that:

> Design is not about learning to think outside the box, it’s about finding the right box to think inside of.

And when it comes to design systems I think that’s exactly what’s so tough about it. Not only do you have to learn when and how to draw the box to think inside of, but you have to get everyone else in an organization to think inside that box, too.

Let’s imagine you’re facing a situation where a designer proposes a new component. Is this issue specifically a front-end one? Is it a much larger UX issue where we can circumnavigate the engineering costs entirely? Is this new functionality I can add to an existing component to save us time? Does this problem require that I make new rules and guidelines to prevent it from happening again? Which box is the right one to think of inside here?

Anyway, bear with this tangent for a moment, but I’ve been reading a lot of the [Boss Fight Books](https://bossfightbooks.com/) lately which happen to be all about videogame design (in fact, I would highly recommend the [Metal Gear Solid](https://bossfightbooks.com/products/metal-gear-solid-by-ashly-and-anthony-burch) and [Spelunky](https://bossfightbooks.com/products/spelunky-by-derek-yu) books regardless of which point on the designer/engineer spectrum you’re on). There’s a common thread between each of these books where every designer worth their salt will obsess over “the loop”.

In shoot ’em ups that loop could be:

> shoot, crouch, reload, move

Whereas in a game like Breath of the Wild that loop might look like this:

> get horse, ride horse, find enemy, wack enemy

This gameplay loop will repeat itself endlessly and if the loop isn’t fun or if the pacing is off then the game won’t feel right. So designers have to question whether a new addition to their game will improve the loop or whether it obstructs the flow.

So these books about video games and design loops got me thinking: what’s the design systems equivalent of a loop? And if there is such a thing then perhaps we can prevent a whole bunch of future problems if we identify it up front. Therefore, based on that quote by Aza that I stole above (and will now attempt to take credit for), I reckon that a designer on a systems team has the following loop:

1. Draw the box to think inside of
2. Get the whole organization to hop right into that box with you
3. Constantly redraw the box until the end of time based on changing business and organizational needs

This feels helpful to me, but I’m not sure! Feelings!
