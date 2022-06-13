---
layout: layouts/post.njk
title: Designing in Public
date: 2021-07-06T15:39:09.793Z
city: San Francisco
country: California
extract: Delete the CSS.
---

Because of, you know—the omens—I’ve started working on a new design again. I’m not entirely sure what version I’m up to at this point but it doesn’t really matter. With each iteration of this website I feel like I’m getting closer to what it ought to be.

But! I want to do things differently this time: I’m updating the styles of this site slowly over time. Each time you pop back here something will be different. One night I’ll tidy up the copy, the next I’ll be fixing up the font-sizes, adding margins. Last night I spent an hour switching out the fonts to use [National 2](https://klim.co.nz/retail-fonts/national-2/) again and I deleted all the CSS. So no longer do I have classes like...

```
<div class="wrapper-wide wrapper-wide--grid wrapper-wide--grid-reverse">
```

...which has plagued this here website for far too long.

Starting again feels exciting though. There’s a lot of fancy new CSS things I can mess around with, lots of dependencies I have to update. Actually, here’s a list of all the things I need to do with this version of the site:

- Delete the CSS: lots of clunky styles and markup patterns that I have here.
- Design mobile first: I’ve always designed things from desktop down, rather than mobile up. I expect most folks read my site via their phones though and so I should take more care of the design on those devices.
- Perfect typography: with that said, I want the typesetting on mobile to be _perfect_ and I think I’ve just ignored it for the longest time. I’ve never got mobile type just right so I’m going to be staring at my phone for a month to polish things up.
- Subscribe via email: I probably should let folks subscribe to /notes via email because #engagement but...it feels wrong. My rants here don’t feel important enough to notify someone of via email and RSS always feels like a quieter space for relationship drama and half-baked font appreciation.
- Switch the CMS: I feel like [Netlify CMS](https://www.netlifycms.org/) is a tiny bit too clunky for using it in the way that I do. But maybe I should just contribute to that project? I haven’t thought much about it yet. We’ll see.
- Use Astro(?): right now this website is powered by [Eleventy](https://www.11ty.dev/) which is wondrous but I do want to experiment with [Astro](https://astro.build/) at some point soon. But it would slow things down a lot at the beginning I expect.
- Update the fonts: goes without saying.
