---
layout: layouts/note.njk
title: trot
date: 2025-02-15T09:46:17-08:00
city: San Francisco
country: California
extract: This is the research. This is the work.
---

I’ve been tinkering with an iOS app for the last month or so. It’s exciting stuff! Working in Swift and moving away from the web has made my work feel all new and fresh, with so many things to learn. The project codename is Trot (for now!) and here’s some notes about what I’ve learned so far.

---

Leaving VSCode and the browser behind by moving into XCode has made me immediately miss DevTools. It’s so much harder to prototype when you can’t zoom into the UI and crack it open like you can in the browser.

XCode does have an equivalent of that but it’s not front and center or half as easily accessible as DevTools. This realization of losing my pal DevTools honestly made me sad as I tinkered with this app for the first time, knowing that no one will be able to explore this app in the same way they might with my website. DevTools is the great equalizer.

---

Swift and XCode are incredibly well built and fit so nicely together. Owning the language and the tools means that this ecosystem can do some amazing things that web frameworks and text editors could only dream of. SwiftUI sort of forces you to build everything in small chunks instead of whole screens and I’ve found that I can lean into that and let it guide how I structure the code.

This ecosystem of tools and how they overlap…well…the web really has nothing like this. For good and bad!

---

Next steps are difficult to find though. You can’t move without watching a million videos or reading the docs: UIKit, MapKit, SwiftUI, Motion, animations. This is true if I create a .html file in VSCode but there’s also fifteen years of tinkering I can rely on. I know what HTML and CSS is capable of so I don’t need to ask questions every thirty seconds about how to style something or move its position.

This is a good reminder that the tools look simple to us web developers but they are very much _not_ easy for newcomers to the field.

Anyway, there’s nothing in XCode that opens a door into these worlds or shows you what’s next. Nothing hints at what’s possible. You have to leave the editor to go explore and it totally kills the flow of exploration to ask a bot or a search engine how to add padding or color every three seconds. It’s like someone is slamming a door in your face over and over again.

I wanna be like: here’s some tabs on the screen! Okay, now show me all the ways I can customize those! Or show me how to animate them! Loop through the items and filter them or list out all the appearance options and frameworks I can tinker with! Show me the doors!

Autocomplete today is insufficient and I think the main reason why folks rely on Copilot or asking a bot is because these tools are really extraordinarily bad at showing you what’s possible and then how to do it.

---

I LOVE not having to import things in Swift. Sure, you still import frameworks at the top of a view but it’s not like a typical React codebase where every file begins with 50 lines of junk importing stuff.

This means I can reorganize files and folders and it doesn’t matter because nothing will break. I have never liked React/Typescript — every part of that ecosystem feels clunky and obtuse — but this feature of Swift and XCode alone makes web frameworks feel like an ancient system designed by complete sadists.

Building in Swift and Xcode almost (almost!) has the same feeling of opening up a text editor and writing pure HTML. It feels light and springy in a way that no web framework ever has.

---

Hot take: I don’t like the merge of semantic meaning and styles within Swift though. It’s like designing a whole UI with jQuery where you’re like “Thing.color(red).padding(10)” and it means it’s harder to parse the logic from the presentation. I get why it’s like that, that Swift breaks everything down into a hierarchy, a great big tree under the hood, but it means your code is all jumbled together.

I assume Apple-folk would say there is no difference between style and presentation and logic but man…the web has taught me a different way of seeing the world and this editor, these tools, conflict with every fiber of my being. But perhaps that’s a good thing.

---

I realize how lazy at programming I am. I can’t take one type of data and convert it to another. I hate dealing with types and keeping things in my head across files. It all feels so fragile and precarious. I hate dealing with state because all of a sudden you introduce punctuation that makes my head spin. I don’t think logically, I hop skip and jump around and my body refuses to think like a computer or a program.

Thankfully each stumbling block can now be queried and the hive mind will respond with an accurate enough solution.

But at the lowest levels I have a very vague idea of what’s going on under the hood. For a prototype that’s ok, but if this thing gets more serious I’d want an engineer to start over. Scrap it all and go again – and that makes me feel better as I tinker. None of this matters! Wahoo!

---

Another thing I miss? HTML defaults. When you use an `<input>` or a `<button>` in HTML you mostly don’t have to _undo_ things. Except for forms which have always driven me crazy that they don’t inherit the font family or what not from `body`. But tiny rant aside,  the defaults in HTML are very smart and you can build on those defaults by changing the background, the font, etc.

In SwiftUI you can use common components like `List` but to tweak their behavior or appearance you have to break them down into a million pieces, hacking over them to make a slight change. Want your tabs to look a bit different and have a white background? Good luck buddy, that change is gonna take you an hour.

This discovery sucks. It’s like having a design system where you pull in a component and to change the border radius of it you have to build a whole new component out of the skeleton of the button right in front of you. I can see you! Just be round!

The design of HTML and CSS has spoiled me rotten, man.

---

If you get a reference to an image wrong in Swift-land then your whole app implodes and nothing will run. Working on this project is great but ten minutes into it and I already miss [the resilience of the web](https://resilientwebdesign.com/). I miss how you have to really fuck things up to make a browser yell at you or implode.

At least on the kinds of web projects I work on, I rarely break the browser or my text editor Zed, but with pretty high frequency XCode will freak out and crash. That kills the flow too, where I might just be changing a variable and — bang! — the preview is dead and I get a popup alert blocking my work.

It makes app development feel less stable somehow and I wish there was a way XCode could figure out the code I’m writing is gonna crash before it tried to build it — as I was typing.

---

Making animations in SwiftUI feels so liberating though! It is light years ahead of the web because there’s tons of really smart defaults that Apple provided in what I assume was the original operating system. Things bounce and glide and it’s real easy to get things to move in the way you want them to.

Honestly I’ve never liked animating things on the web. It’s just such as royal pain and it’s very slow. In my day job as a product designer on a big web app I tend avoid animations because they often get in the way or slow things down but most of the time it’s laziness: animations are really hard to pull off on the web and most of the time they’re not worth the effort.

But here in SwiftUI? It’s so easy to make beautiful animations that you can’t help but sprinkle them everywhere. This might also be thanks to touch input. When you touch something with your finger you expect it to respond like a physical thing in the world. And without animations that touch would feel broken as all hell.

Honestly this is changing how I’m thinking about this interface: How can movement explain where someone is in the UI? How can that help teach them what might happen next? How can this animation fade into the next one, click-clacking into each other like ripples in a lake?

It’s all super exciting if I’m honest. I haven’t felt this excited about design in a good long while. Learning new tools, new techniques, new ways to do old things.

---

With this project I can truly fly: I am beholden to no-one. No one can tell me my designs are impossible. No one can tell me to do more research. I can just do everything instinctively, intuitively, feel things out. Who gives a shit about efficiency? Who cares about process? I just care about making something cool and learning something new.

It’s all so quiet as I build this app and bop my head to the music. There are no quarterly goals, there are no cursed Google docs, there are no lists within lists or anxious meetings.

---

I like the playful nature of this project, too. In the year 2025, design at a tech company is so absurdly serious. All the joy of making things is wrenched out of the work by bureaucracy or unnecessary meetings or folks higher up the chain who are anxious about every detail. Have you done the Discovery phase of your project yet? Have you confirmed that every pixel of this screen meets the expectations of this random Google Doc? How do we know that this design will be successful, will make this number go up?

I dunno, man.

But here, on this project, the research is the work. I have to build things to learn. Writing a doc is not learning. Writing a doc is not making. Adding tickets to Linear is not research. Talking to customers for six months straight without putting pen to paper is not work. It sounds dumb and arrogant of me, but here in my room as I tinker I feel renewed by all this real work. I feel close to it, cleansed by thinking about a single problem for hours at a time without distraction.

This, right here, is the research. This is the work.

And there’s no Google doc in sight.
