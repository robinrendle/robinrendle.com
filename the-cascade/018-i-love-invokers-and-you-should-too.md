---
layout: layouts/cascade-post.njk
title: I love invokers and you should too
date: 2024-03-24T09:22:22-07:00
city: San Francisco
country: California
extract: I am furiously nodding.
---

When someone makes a website for the first time they’ll have to wrap their head around this:

- HTML is for meaning
- CSS is for presentation
- JavaScript is for interaction

The lines are clearly drawn at the beginning but any web developer knows that this isn’t really the case. You can really mess up the meaning of a HTML document with CSS for example, but I especially disagree with that last bit. Doesn’t a `<form>` element imply some kind of behavior? Doesn’t it give you interactions outta the box — `submit`, etc.?

Okay that all sounds like a big philosophical nothing, picking at each word like a total jerk, but I think this stuff structures how we understand the web and what we build on top of it. Once we teach ourselves that interactions solely live within the domain of JavaScript then we stop to question it. We stop to think deeply about how all these languages should overlap with one another.

I’ve always wondered this: what if HTML could do more behavioral things? Why do I always have to add event listeners in JavaScript when we could just tell the HTML what to do? What if I could bind two elements together, in the markup itself, and say “on click, trigger some action on this element”? Why do I have to write a bunch of JavaScript to find this HTML element when the HTML element is right there! I can see it!

This reminds me of my favorite thing about Vue. I haven’t written anything in this framework for a while but I remember the first time seeing how you could bind event handlers directly to the elements without having to create a class or faff about with a ton of boilerplate code.

I’m simplifying things here, but you could essentially do something like this:

```html
<button @click="count++">Add 1</button>
<p>Count is: {{ count }}</p>
```

This is great! Let me write less JavaScript, let me just bind two elements together inline, right there in the markup itself. This is maybe a bad example though, a better one would be like hey on button click, open this modal. So you could write something like this with plain JavaScript:

```javascript
<button onclick="modal.open()"></button>
```

But there’s a bunch of reasons why you wouldn’t do this. The problem here is that I need a framework to do any of this easily which kinda stinks. And to do this properly today, we have to write some JavaScript to find these elements, add event listeners, and ugh I am already asleep. Why is basic interactivity harder than it should be?

Well, this might not be the case for long. Have you heard of invokers? I’m not entirely sure what the status of this project is and whether it’s shipped in browsers yet but it’s a proposal from [Open UI](https://open-ui.org/components/invokers.explainer/) that I absolutely love that hopes to fix this problem.

The very first example of an invoker from the Open UI team is a perfect one, too:

```html
<button invoketarget="my-dialog">Open dialog</button>
<dialog id="my-dialog">This is the dialog</dialog>
```

So when I click this button it goes off and looks for an `id` with `my-dialog` and toggles the dialog on click or press. Some “targets” will have default actions like open/close but you can also set an action explicitly like this:

```html
<button invoketarget="my-dialog" invokeaction="close">Close</button>
```

I love this! I think this rules! As Keith Cirkel writes in [the proposal](https://open-ui.org/components/invokers.explainer/):

> There has also been a rise in the desire to customise controls for components. Many sites, for example, introduce custom controls for File Uploads or dropdown menus. These often require a large amount of work to reintroduce the built in functionality of those controls, and often unintentionally sacrifice accessibility in doing so.

(The whole proposal is excellently written and lacks any of the intense dryness of other proposals I’ve read in the past.)

Anyway, here’s another great example that I’m gonna plagiarize where you can toggle play/pause on a video:

```html
<button invoketarget="my-video" invokeaction="playpause">Play/Pause</button>
<video id="my-video"></video>
```

Now there is a limitation here: you can only make a `<button>` element invoke an action. So with this proposal you won’t be able to do this:

```html
<div invoketarget="my-video" invokeaction="playpause">Play/Pause</div>
```

At first I was mad about this! How dare someone tell me what I can and can’t add interactivity to! But, the more I think about this the smarter I think it is. Buttons really are the only element that should trigger an interaction of some kind and if you’re doing anything else then wow you need to go directly to jail. Sorry.

(In this proposal they recommend making `<input type="button">` and `<input type="reset">` invokers, too.)

So I like that this proposal encourages good form when it comes to writing HTML. I like that it allows me to do real simple stuff like pausing and playing a video without having to write a bunch of dumb boilerplate code. I like that it extends HTML in a smart way and I like that you can write custom behavior to make your own actions for invokers but that it also has really smart default behaviors too.

Now I just want invokers everywhere and in all browsers yesterday! Gimme gimme!

Until next week,
✌️ Robin
