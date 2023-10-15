---
layout: layouts/cascade-post.njk
title: Color Me Curious
date: 2023-10-07T09:53:08-07:00
city: San Francisco
country: California
extract: What’s up with CSS colors these days?
---

I’ve got a terrible thing to admit. It’s something unforgivable, something so dark and heinous that I’ve waited years to tell you all out of fear of blackmail or just overwhelming, incomprehensible shame. Here it is, and I’m sorry in advance:

I still use hex values, like #FFF, in my CSS.

I know, I know! I should be using hsla() right? Or...uhhhh...lch()? Wait, no, I got this, I got this. It’s lab()! Or...hwb()? Of course. Duh! I should be using oklab()! That’s the best of the best and the future for color in CSS. I’m 100% confident here. WAIT! I’m supposed to be using color() instead now? But that’s a Safari-only thing, right? Huh? Wah?

Joking aside, I knew that hsla would be faster for tweaking colors than picking a random hex value but, and I note: I am stubborn as hell. Plus, now in 2023, CSS can do so many new and weird things with color that it’s pretty overwhelming and it’s far easier to simply put a hex-colored blanket over my head and pretend that nothing has changed since I started writing CSS back in 2012.

But! After looking into color in CSS over the last few days I realize that all these formats, what folks call color spaces, are all good at different tasks. It is a bit weird and complicated, sure, but it’s worth knowing because it makes your life easier as a developer.

To figure out what CSS can do with color in 2023, let’s first talk about gradients.

Since I started web design I’ve avoided gradients for similar reasons. They were just such a pain to get looking right! They would look dull and wouldn’t interpolate between the colors in the way that I expected them to. A bit of CSS like this...

```css
.element {
  background: linear-gradient(to right, blue, red);
}
```

...would always produce the smudgiest, nastiness splash of color I’ve ever seen. And sure, I could add more stops or use a fancy gradient picker, but it’s _easier_ if I just pick a hex and go work on other problems. See: stubborn.

The other day I stumbled on this video by Una Kravets and Adam Argyle where suddenly color spaces clicked for me though. It’s called [Why does my gradient have muddy colors in the middle?](https://www.youtube.com/watch?v=w_vk1j8aYmU) and they talked about how to avoid the color decay and lack of saturation in CSS gradients that I struggled with. But let me summarize, in a meaner way, what Una and Adam reiterate in that video chat:

YOU’RE USING THE WRONG COLOR SPACE, BUD.

Okay, fine. So which color space should I use? Again, this question also depends on what kind of gradient you want. [Here’s a demo](https://codepen.io/robinrendle/pen/yLGrRqR?editors=1100) I made whilst listening to Una and Adam that helped me visualize how all these color spaces express the same gradient—from blue to red—but in a completely different way:

![CleanShot 2023-10-14 at 09.16.12@2x.png](https://buttondown.imgix.net/images/c43a1f79-491d-4d38-b3a2-736c5647d02b.png?w=960&fit=max)

See how they all look and feel completely different? rgb is a bit muddy in the middle, hsl is pretty intense, lch isn’t as intense but takes longer to become red, lab has a pleasantly medium middle, olkch feels like what I’d expect to see in a gradient, and oklab is pretty desaturated in the center. There’s no “correct” way to interpolate a gradient which is frustrating but sometimes things are frustrating for a reason and you just have to sit down and learn how all these things work together.

What color space would I pick for gradients? It depends. If I wanted my gradient to be vibrant, then I’d pick lch(). But in most cases I reckon I’m gonna stick with oklch.

So what else is new with color in CSS? What’s going on outside the world of gradients and what do color spaces have to do with that?

Well, I love and still miss darken(), lighten(), and [all the nifty Sass color functions](https://sass-lang.com/documentation/modules/color/) because these days if I want to brighten or darken a color then I have to leave my code, head to Figma, faff with the values in the color picker, copy the value and head back to my code. I wish I could do that with just CSS alone.

Relative colors in CSS will let us do just that. We’ll soon be able to convert values from RGB to HEX to HSL (amazing) but it also lets us do things like change a named color value like “red” or “green” and convert that to RGB so we can tweak the opacity, like this:

```css
:root {
  --color: red;
}

.selector {
  background-color: rgb(from var(--color) r g b / 0.5);
}
```

That one line of CSS makes tweaky things so much easier! Oh and I stole this bit of CSS above from [Jim Nielsen’s excellent post](https://blog.jim-nielsen.com/2021/css-relative-colors/) on the subject which really helped me understand how manipulating saturation and lightness in the future is going to be a breeze.

Here, more copyright infringement for you:

```css
.selector {
  color: hsl(from var(--color) calc(h + 180deg) s l);
}
```

What the what?

In that snippet of CSS above, Jim is converting a variable that’s a hex value into HSL but then changing the hue (that `h + 180deg` part). It sure does look weird and clunky, and looks as if this will totally break everything but it will work! And this is fantastic news because this is what I’m looking for — quickly making complimentary colors.

Oh and here’s another example where Jim makes things a little more saturated:

```css
.selector {
  color: hsl(from var(--color) h calc(s + 5%) l);
}
```

Adam Argyle also wrote this incredibly in-depth and brilliant piece about [relative colors](https://developer.chrome.com/blog/css-relative-color-syntax/) which is worth checking out because it’s pretty clear to me now that it unlocks so many cool possibilities for us.

For example here Adam inverts the colors of an element with just a single line of CSS (!):

```css
.invert-each-rgb-channel {
  background: rgb(from yellow calc(1 - r) calc(1 - g) calc(1 - b));
}
```

Wow this whole post is just a tribute to Adam, huh. How _dare_ he explain things in a way that makes it click for me.

I didn’t truly realize how much I’d buried my head in the sand with all this stuff though until Una mentioned the [color-mix()](https://developer.chrome.com/blog/css-color-mix/) function in CSS. I had never even heard of this but it seems so very handy. It’s even got [pretty great browser support](https://caniuse.com/?search=color-mix), too. Here’s [another fantastic demo](https://codepen.io/web-dot-dev/pen/JjBZLrm) (this time by, ugh, Adam) of how color-mix() can take any two colors from any color space and blend them into a single color:

![CleanShot 2023-10-14 at 09.02.42@2x.png](https://buttondown.imgix.net/images/449abe2d-7be6-40df-8e49-8c9b306dd087.png?w=960&fit=max)

If you’re interested in learning more about what’s now possible with colors in CSS then I’d also highly recommend reading Brian Smith’s post about [everything new in CSS Colors Module Level 4](https://developer.mozilla.org/en-US/blog/css-color-module-level-4/).

But what I’ve learned through all this is that asking a question like “what color space should I use in 2023?” then is sort of like asking “what’s the best font to use in 2023?” It’s a bad question! Context here is everything and the answer totally depends on what kind of problem you’re trying to solve. Color spaces are complicated and are designed to solve different kinds of problems.

But, also also, I’ll stop using hex now. I promise.

See you in the cascade, <br/>
Robin

<br />
<br />
<br />
<br />
<br />
<br />
<br />
