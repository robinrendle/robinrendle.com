---
layout: layouts/note.njk
title: Hyperobjects and the Black Triangle
date: 2018-02-23
---

In his first week at SingleTrac, a video game company that made cult classics like Twisted Metal, Jay Barnson discovered what he called the “[black triangle](http://rampantgames.com/blog/?p=7745).” This is a way of describing problems that happen to be giant engineering infrastructure projects but they don’t tend to be all that impressive visually:

> It was sometime in my first week possibly my first or second day. In the main engineering room, there was a whoop and cry of success.
>
> Our company financial controller and acting HR lady, Jen, came in to see what incredible things the engineers and artists had come up with. Everyone was staring at a television set hooked up to a development box for the Sony Playstation. There, on the screen, against a single-color background, was a black triangle.
>
> “It’s a black triangle,” she said in an amused but sarcastic voice. One of the engine programmers tried to explain, but she shook her head and went back to her office. I could almost hear her thoughts… “We’ve got ten months to deliver two games to Sony, and they are cheering over a black triangle? THAT took them nearly a month to develop?”
>
> What she later came to realize (and explain to others) was that the black triangle was a pioneer. It wasn’t just that we’d managed to get a triangle onto the screen. That could be done in about a day. It was the journey the triangle had taken to get up on the screen. It had passed through our new modeling tools, through two different intermediate converter programs, had been loaded up as a complete database, and been rendered through a fairly complex scene hierarchy, fully textured and lit (though there were no lights, so the triangle came out looking black). The black triangle demonstrated that [...] the core of a fairly complex system was completed, and we were now ready to put it to work doing cool stuff. By the end of the day, we had complete models on the screen, manipulating them with the controllers. Within a week, we had an environment to move the model through.
>
> Afterwards, we came to refer to certain types of accomplishments as “black triangles.” These are important accomplishments that take a lot of effort to achieve, but upon completion you don’t have much to show for it only that more work can now proceed. It takes someone who really knows the guts of what you are doing to appreciate a black triangle.

I love this story and it happens to mirror my own recent experience as I work on the design system for a particularly large web app at Gusto. One example of this happened almost right away on my third week; I noticed something peculiar with our typography. Depending on what part of the web app you were developing in then our headings (such as `h1`, `h2`, etc.) would render at different sizes. But it was worse than that! Some would have small caps, others would be a light shade of green, and others would be bold. Eventually this led to an enormous problem as it was impossible to predictably set type in our app.

The goal of design systems is to make _a predictable interface_ – this decreases confusion, prevents hacks from being written, and encourages everyone to contribute to a larger system. And I think the only way you do that is by focusing on the black triangles; the core functions and parameters and design tokens that make up a design system. And in this case, our typography.

So I dived head first into our code base, deleting thousands of lines of code, refactoring a ton of components and all of this just to ensure that a simple `<h1>` is always a `<h1>`.

After a month of work we had finished – we had a typographic scale, a series of classes to quickly set type, and a lovely set of responsive default styles for our typography. It was lovely, yes, but it was also an impossibly boring and undetected achievement.

The interface had changed only slightly. However, we now had our black triangle to build everything else on top of. Building things would be much easier as there would be much less confusion when setting type, and our designers and engineers could focus on much more important problems for our customers.

But the weird thing about this typography project is that it was impossible to measure or quantify. And I couldn’t figure out a way to say that this refactor was worthy of my time. It wasn’t obvious how much money this would save the org and it wasn’t clear how much confusion had been cleared after the work had been complete.

Unlike product design where everything ought to be measurable, I just _felt_ that this new system was better in every way.

It was an interesting problem because it’s led to my current situation in design systems work where I’m uncertain of how to explain damage in a system. I find it impossible to describe it, to quantify it, and so it’s hard to get other people to care about this stuff, too. “Let’s fix this confusing code” is an incentive that motivates so very few people. And that makes sense!

We should have business objectives in mind but some things are simply unmeasurable though – and that often makes me uncomfortable.

<br />

---

<br />

This week I’ve been reading James Bridle’s excellent book _New Dark Age: Technology and the End of the Future_ and despite the fact that I’m not a big fan of the title, the book itself happens to be quite brilliant.

The premise of the book is that even though our computers have increased processing power and our technology today is much better than it was say fifty years ago, our understanding of the world is actually decreasing because of them. James argues that we are blinded by our machines and the cornucopias of data they endlessly provide us with.

He then describes how every aspect of our society is becoming harder to understand with technology and he goes on to argue that our understanding of the climate crisis (we should all refuse to call it “climate change” at this point) is actually decreasing with time. Not to mention that the number of drugs we’re creating is slowing down despite recent improvements in the community’s technology.

So this is certainly not a light-hearted book by any means.

Anyway! The part that I particularly enjoyed is where James talks about ‘hyperobjects’:

> The philosopher Timothy Morton calls global warming a ‘hyper object’: a thing that surrounds us, envelops and entangles us, but that is literally too big to see in its entirety. Mostly, we perceive hyper objects through their influence on other things – a melting ice sheet, a dying sea, the buffeting of a transatlantic flight. Hyperobjects happen everywhere at once, but we can only experience them in the local environment.
>
> […] in fact, they stand outside both our perception and our measurement. They exist without us. Because they are so close and yet so hard to see, they defy our ability to describe them rationally, and to master or overcome them in a traditional sense. Climate change is a hyperobject, but so is nuclear radiation, evolution, and the internet.

The wild thing to me about this line of thinking is this: if we manage to halt the climate crisis or reverse it entirely then we simply won’t notice any change at all. Things won’t be better, things won’t improve. But we will all be immeasurably and permanently better for it.

And so my point with bringing this up is that a bad design system is a hyperobject – unmeasurable, unseeable, unknowable. It’s impossible to say how to fix an entire design system but it’s possible to point to all the tiny melting icebergs within it – whether that’s the color of your buttons, the inaccessibility of certain components, or the underlying typographic system that things are built on.

And the way to fix it is to find the black triangles – the boring but immensely important structures that everything else is built on top of.

<br />

---

<br />

After this giant refactor our interface was pretty much the same – nothing had changed except for a few font sizes here and there.

And of course I’m not looking for a parade in my honor where roses and exceptionally attractive people are hurled at my feet or anything. But it was a weird moment because despite all this work that I saw as vital to the health of our system I wouldn’t be able to add this work to Dribbble, I wouldn’t be able to show off or brag about the work despite how much I wanted to. And whenever I talked to folks about this new, better system no-one particularly seemed to care.

Except one person: my mentor. When I showed her this new system she stopped typing – and in the briefest of moments that I’ll remember for the rest of my life – she sat back in her chair and looked at me. She looked at the code, at this black triangle I had spent months of my life working on, and then she looked back at me.

“This is fucking beautiful work,” she said.

And this is going to sound impossibly sappy but it was the only time she’s ever given me a compliment. And after a brief pause she said it again: “this is incredible.”

It almost broke my damn heart. Not because I had done the work and because I’m the greatest font boy to have ever walked the earth but because for the briefest of moments I could share the hyperobject with someone else.

And then we could fix it.
