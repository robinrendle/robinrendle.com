---
layout: layouts/cascade-post.njk
title: Behavior wrappers
date: 2024-01-14T14:26:14-08:00
city: San Francisco
country: California
extract: And my favorite snippet of the week.
---

Two quick things this week. First, my favorite CSS trick I’ve seen in a while followed by even more thoughts about web components. 

(I am sorry that I have become a total shill for Big Web Component).

## i. 

My favorite snippet of the week is courtesy of David Darnes who has [a neat idea](https://codepen.io/daviddarnes/pen/JjxmLpb?editors=0100): a tiny scroll to top link that reveals itself as you scroll, but does so with the following CSS...

```css
a { 
  margin-top: 110vh;
  position: sticky;
  bottom: 0;
}
```

The link only appears as you scroll down and sorta shows how neat “modern” CSS has become. These are my favorite tricks though, when it’s  just like three or four lines of CSS. There’s a lightness and snappiness to them that makes me feel like I haven’t figured everything out yet.


## ii. 

One of the best things about web components is their copy-and-pastability and how you can share them easily across code bases so that you’re not writing the same stuff over and over again. But Adam Stoddard has a different way of thinking about them. 

He considers web components as [behavior wrappers](https://aaadaaam.com/notes/behavior-wrappers/) instead: 

> Something that’s been on my mind lately is the value of not encapsulating html, css, and javascript into singular components. Sometimes – if you value keeping things simple – teasing apart behavior and presentation into composable pieces makes more sense.

If I understand this right, Adam is saying here that you don’t just need to have big ol’ components like `<tabs>` or `<carousel>` where all the markup and CSS and JavaScript is bundled up inside. There’s tons of examples like these that we’ve already discussed in prior newsletters. 

But what if you took snippets of interactivity and, perhaps, snapped multiple web components together to build something more complex?

I like this way thinking a lot since it tends to be the way I see HTML, CSS, and Javascript anyway. There’s no greater feeling in the world of applying two bits of markup together and having it all snap together like a big jigsaw puzzle. And then layering on more complicated features over time. 

All this stuff led me earlier in the week to start daydreaming about whether grid systems are a good use case for web components. Something like this perhaps:

```html
<c-grid>
	<c-column small="12" medium="8" large="7"></c-column>
	<c-column small="4" medium="3" large="1"></c-column>
</c-grid>
```

I like this! 

Maybe there’s a better name than `c-column`, etc. but I kinda like that you can pass props into this web component and it will _only_ affect the styles of it. All the behavior and markup is totally up to you. It’s also a bit nicer than doing all this grid stuff with classes but I can see how some folks would gasp and say why don’t you use Tachyons or something and boy howdy do I sure wanna have that conversation.

Another way of doing that would be with predefined grid areas in the styles of the component itself. That makes it less sharable perhaps, but it’s nice and readable:

```html
<c-grid>
	<c-grid-primary></c-grid-primary>
	<c-grid-aside></c-grid-aside>
</c-grid>
```

I love this idea of really, really small web components that only affect styling or interaction. It feels like it aligns well with the layering of complexity that’s the hallmark of progressive enhancement. Jeremy calling them [HTML Web Components](https://adactio.com/journal/20618) last month was the beginning of this in my head but now splitting them up into CSS Web Components and JavaScript Web Components opens up a lot of interesting doors and experiments. 

(I guess at this point I should rename this newsletter to something like The Daily Web Component, huh?)


## iii.

Here’s a secret third thing because, speaking of CSS Grid, I stumbled on [Jen Simmons’s website](https://labs.jensimmons.com/) again the other day and it sparked a wave of righteous web design fury in me. Just look at what’s possible with layouts on the web today! Her website is a fantastic source of encouragement, one great big push, to try weirder and bolder things than a single column grid (yawn).

I’m just starting a new side project and this has me thinking about all the possible threads I need to untangle and explore.


See you in the cascade! <br/>
✌️ Robin 

<br/>
<br/>
<br/>
<br/>