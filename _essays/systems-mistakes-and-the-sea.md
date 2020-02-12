---
title: Systems, Mistakes, and the Sea
date: 2019-12-30 17:23:00 -08:00
tags:
  - design systems
  - featured
layout: essays/systems
city: San Francisco
country: California
footer: "Shipwreck off Nantucket (Wreck off Nantucket after a Storm)
ca. 1860–61 William Bradford"
extract: A note about design systems, boats, and hyperobjects.
---

<span class="caps">One evening, several years ago,</span> I dreamt that our design system was a boat. But not just any old thing, I dreamt of a mighty frigate that could cross the open sea, a vessel stocked to the brim with well-documented components full of accessible and responsive chunks of code; interface elements like buttons and forms, all of them built for a single purpose. And on that frigate everyone was working as if they’re part of a seasoned navy or crew; the Powder Monkeys, Swabbies, Riggers, First Mates and Quartermasters, the whole lot of them in perfect sync with one another.

After this dream I returned to my work with fresh enthusiasm for our design system and over the course of six months I moved from the position of a product designer deeply concerned with systems to a systems designer who is deeply concerned with design. And I was happy, for a while. But then after several focused weeks looking at our front-end and our design, I found our system was not quite the mighty frigate I had dreamt of. In fact, as I stumbled through the holds of our ship in the dark surrounded by thousands of lines of baffling <span class="caps">CSS</span>, and looking at our lackluster components up close in the dim candlelight, it slowly dawned on me what was happening.

We were sinking.

Six modal components! Four checkboxes! Nine separate icon styles with three icon fonts! And that’s not to mention the countless number of inconsistent cards and boxes with borders. Water was rushing into the hull from every angle: `h3`s were bigger than `h2`s and `h5`s were bigger than `h4`s. I discovered elements without focus or hover states and form inputs without labels, as well as an illegible and unpredictable foundation of <span class="caps">CSS</span> where thousands of lines were being overwritten or not loaded at all. In fact, many styles were loaded in the wrong order and with duplicate files galore! That’s not to mention the wildly inconsistent illustration styles and the four separate typefaces we were loading in six different weights.

Even though the design of our interface was always praised for its high quality, deep down in the front-end all hell was breaking loose.

The state of things was surely overwhelming but it was also an important lesson; it’s impossible to judge the quality of a design system from looking at the <span class="caps">UI</span>. Just as a ship might look like the most beautiful vessel in the world (with the most intricate wooden carvings on the hull and the brightest, loveliest sails drifting peacefully in the breeze, etc. etc.), deep down in the hold however, the leaks might be too much to repair, the whole vessel creaking under the pressure of its own frame.

In time I found that the curse of design systems work was seeing everything that’s broken, whilst on the surface it all looks fine. When you try to repair these problems though that’s when the whole thing collapses and the ruse is up. Every test in your app will break, old parts of the codebase will shatter and engineers will panic as if somehow the sinking ship was your fault and not the work of the gashes in each flank that you’re trying to repair.

So: how should we talk about these broken, invisible systems? And then how do we go about fixing them?

---

In James Bridle’s book _The New Dark Age_ there’s a section all about the philosopher Timothy Morton and the sorts of problems that are really hard for us to see. He calls a problem of a certain scale a ‘hyperobject’ and describes it as:

> &hellip;a thing that surrounds us, envelops and entangles us, but that is literally too big to see in its entirety. Mostly, we perceive hyper objects through their influence on other things – a melting ice sheet, a dying sea, the buffeting of a transatlantic flight. Hyperobjects happen everywhere at once, but we can only experience them in the local environment. […] in fact, they stand outside both our perception and our measurement. They exist without us. Because they are so close and yet so hard to see, they defy our ability to describe them rationally, and to master or overcome them in a traditional sense. Climate change is a hyperobject, but so is nuclear radiation, evolution, and the internet.

Reading this I audibly gasped because I suddenly realized that’s why design systems work is so hard to describe—it’s a hyperobject! Although complaining about all this and comparing it to the sinking of a ship or to the climate crisis sounds ridiculous (having six modals is as unlikely to kill a billion dollar company as a single drunk crew member is capable of sinking a frigate, or a lone melting iceberg will cause a flood in Miami).

How is a design system a hyperobject then? Well, when an engineer is confused about which component to implement and why there are so many gosh darn `propTypes` for a component that make no sense at all—that’s a sliver of the hyperobject revealing itself to you. When a designer asks which icons are available and then spends 30 minutes drawing a custom icon that already exists in the set, that’s another part of the hyperobject that you can now briefly see, if only for a moment or two.

These issues don’t appear to be related whatsoever but it’s all part of the same problem—the same hyperobject—one giant and overwhelming problem seen from so many different angles.

---

A designer was showing me their work a while back and they had spent a couple of days coming up with elaborate and brilliant designs for our forms—but!—we already had an extensive library of form components. That was a couple days of work they had spent confused and lost in our system because it wasn’t adequately documented and presented to them. And so after sitting with this designer I could see the cultural problems in our organization take shape and I could see the hyperobject loom all around us; I could see the miscommunication of a billion dollar organization made manifest in the alignment of our forms.

My point here is that in a design system every paper cut is felt. Every collapse leads to another, every new modal or unnecessary checkbox component hinders the collective refactoring that’s required to make a codebase consistent and easy to understand. When it comes to hyperobjects and design systems everything matters (although, frustratingly, it is impossible to measure success) and the smallest problem is just a signal in the dark—a premonition of a monster; organizational dysfunction writ large.

And this is why the hyperobject, the design system itself, is so damn hard to see. You have to find the inconsistencies in the <span class="caps">UI</span>, sure. But you need to be able to see the enormous waste of human effort and potential that is spent on repetitive tasks that lead nowhere; you have to be able to spot organizational dysfunction from ten thousand miles away—however!—the real madness begins only once you start to see the hyperobject and how all these technical and design issues have the same origin. Because now the madness can truly begin.

Out of nowhere you’ll be overwhelmed with an endless torrent of obstacles. How do you deal with bloated <span class="caps">CSS</span> when the accessibility of every page is in tatters? How do you fix all the color variables when you’re loading three separate icon fonts? How do you tackle the design of the components when so many of them are confusingly labeled? And how do you refactor basic typesetting when the cards in the app are so inconsistent? Also, how should we handle incoming requests for new components in the future? How do we stop the internal bleeding within our system?

In other words, once we’re able to see the hyperobject—how do we go about killing it?

---

These questions don’t have obvious answers and all I found in the Aftermath of the Hyperobject was intense anxiety and stress. So much so that I felt our codebase manifest itself in other ways; I stopped sleeping, I gained a lot of weight, I would often become extremely angry just thinking about our codebase. I even struggled with my self esteem for a while and I would frequently have nightmares about our design system. On one particularly awful night I jolted awake in panic at 3am; I imagined that my body was being firmly crushed between our inconsistent form inputs and labels. To put this frankly: I was going down with the ship, too.

And yet every talk I’ve heard or article I’ve read on the subject of design systems doesn’t start like this. Everyone on stage is extraordinarily calm and confident, every blog post measured and straight forward. In a design systems talk it’s very likely that the person is standing in front of you, outlining how great their design system is, and how they solved all these impossibly difficult problems with sheer force of will.

What gets to me isn’t that everyone appears to be building beautiful design systems. Instead what bothers me is that it appears as if everyone is building them all so very easily. This has led me to wonder that, if this work is so easy for them, then why is it so hard for me? How can they identify and chip away at the hyperobject with such ease? And how can they do it without ruining their evening, or a relationship, or letting the state of the system ruin their health? Is it a problem of experience? A lack of mentorship? Am I bad at my job? Do I need therapy? (Duh, yes.)

Or is almost everyone in the design systems community simply lying?

These talks and articles are fanatic about their personal success and this makes it impossible to understand how tough the work really is from the outside, or even what problems people working within design systems are struggling with. Looking at these articles, everything appears to be dandy and just fine but talking to folks working on these projects and suddenly it’s all a giant ugly mess across the board; companies that have competing design systems with no central leadership, component design by committee, and accessibility and front-end development left uncared and unspoken for, documentation that is left withering on the vine, and organizations that ignore the value of design systems work entirely.

My hunch is this: folks can’t talk about real design systems problems because it will show their company as being dysfunctional and broken in some way. This looks bad for their company and hence looks bad for them. But hiding those mistakes and shortcomings by glossing over everything doesn’t just make it harder for us personally, it hinders progress within the field itself.

The ugly truth is that design systems work is not easy. And what works for one company does not work for another. In most cases, copying the big tech company of the week will not make a design system better at all. And so instead we have to acknowledge how difficult our work is collectively and then we have to do something that seems impossible today—we must publicly admit to our mistakes. To learn from our community we must be honest with one another and talk bluntly about how we’ve screwed things up.

My point here is that, yes, before tackling these issues we must see the design system and the hyperobject at our respective companies, but to do so we must see ourselves clearly first. And a big part of that is owning up to, and being honest about, our mistakes. So I would like to be honest with all of mine; this year I’ll be writing about every mistake I’ve made in the field of design systems and speaking up a bit more about the ways I’ve messed things up.

You’re welcome, hello, and I’m sorry in advance.

Let’s begin.
