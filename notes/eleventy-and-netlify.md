---
layout: layouts/note.njk
title: Eleventy and Netlify
date: 2019-06-01 19:42:34 -07:00
city: San Francisco
tags:
  - blog
country: California
extract: Oh boy was it a dream.
---

Facing a three day break over the Memorial Day weekend, it dawned on me: it was time to redesign this website. Not the visuals or design, as [I don’t believe in redesigning personal websites like that](/notes/blogging-and-atrophy). Instead, I needed to rethink how I publish writing and in the process I wanted to completely overhaul the technical underpinnings of it all.

For the past six years this blog has been a static website (there was a previous version that was in Wordpress but all that code and writing has thankfully been lost to the sands of time). Since then I’ve been using a combination of [Jekyll](https://jekyllrb.com/) and [Siteleaf](https://siteleaf.com) to write content and publish my website. However, Jekyll happens to be very slow – taking what feels like hours to refresh a page when I change any content – and this would always happen to kill the writing spirit. Siteleaf is frustrating too, but in other ways. When I started experimenting with it I loved the UI for its ease of use but these days it feels like a lot more complexity than I really need.

What do I need now? Well, I just need a box to type markdown in and a button to publish it.

A while ago I started hacking together my own blog-publishing-tool in [Electron](https://electronjs.org/). It was a little app that would sit in the top of my macOS nav bar and once clicked it would fill the screen with an enormous white expanse – a little cursor in the top left and a little publish button at the bottom. After a while though I stopped working on it because it felt like I was trying to show off and perform the web design equivalent of a kick flip; we really don’t need flashy tools to publish on the web today, we just need something that works predictably and gets out of the way as much as possible.

Last week I realized that the more difficult that publishing process is, the less I’d be sure to write. Plus, I’ve become a bit of a stickler for performance lately and I’m starting to come to the conclusion that it’s the most important part of any good interface. In short, I wanted something easy, fast, and predictable.

Anywho. For about a year now I’d been watching [Zach Leatherman](https://www.zachleat.com/) work on his own static site generator, [Eleventy](https://www.11ty.io/), and I kept hearing great things about it in passing. Folks kept mentioning how fast and easy it was to set up. So one night I started reading [the Eleventy docs](https://www.11ty.io/docs/) to relax and calm myself down after a stressful day and behold! The docs happen to be absolutely fantastic and as I started going down the rabbit hole I re-read Zach’s post all about [why Eleventy exists](https://www.zachleat.com/web/introducing-eleventy/) and how it works:

> While Eleventy uses JavaScript in node.js to transform templates into content, importantly (by default) it does not recommend nor force your HTML to include any Eleventy-specific client-side JavaScript. This is a core facet of the project’s intent and goals. We are not a JavaScript framework. We want our content decoupled as much as possible from Eleventy altogether, and because Eleventy uses templating engines that are Eleventy-independent, it gets us much closer to that goal.

So it was all of this that had swept me off my feet; the goals of the project, the ability to use multiple templating engines, and the charm of the docs themselves. I knew Eleventy was going to be the foundation of this website for the next decade to come.

On a separate note, for a long time I’d been hearing Chris [talk excitedly](https://www.youtube.com/watch?v=grSxHfGoaeg) about [Netlify](https://www.netlify.com/) and how it gives front-end developers super powers. I wondered if it was all too good to be true, but no; all I had to do was hook it up to my GitHub repo, give it a few DNS magic whispers, and that was it! Now whenever I push some code to the `master` branch it will automatically deploy my website via Netlify in just a few minutes. Magic!

## Migrating from Jekyll

I looked into how difficult it would be to move over from Jekyll and I remembered Paul Robert Lloyd writing about [how to get started with Eleventy](https://24ways.org/2018/turn-jekyll-up-to-eleventy/). In that post, Paul describes some of the gotchas and for the most part all I had to do was reshuffle a few things. Some [Liquid filters](https://jekyllrb.com/docs/liquid/filters/) weren’t supported but I figured it out eventually. This post about switching [from Jekyll to Eleventy](https://www.webstoemp.com/blog/from-jekyll-to-eleventy/) by Jérôme Coupé was also very useful.

I have a _lot_ of posts, projects, essays, and assets on this here website so I worried that migrating would be a giant pain but it really wasn’t. Even with all the debt that I had encouraged over the years it pretty much took a day of work to tie things together and figure everything out.

## Bash function

The one thing I loved about Siteleaf is that it would automagically create a markdown file and fill it with all the front-matter that’s required for it, like the date, tags, location and what-not. Now that I had removed Siteleaf from my site I wanted to make sure that it was still easy to create a markdown file and start writing without that GUI.

So last night I set up a bash function for the first time. And if you don’t mind me saying so, it’s pretty darn neat as whenever I want to start writing a new blog post I head to the command line and cast the following magic spell:

```
$ blog eleventy-and-netlify
```

First that function will `cd` into `~/workspace/rr.com/_posts` which happens to be the folder where every blogpost is and then the function will create a new Markdown file. It’ll prepend today’s date to that string in the command and it will create a file name such as `2019-06-01-eleventy-and-netlify.md`. Then the function will hop into that file and add all the front matter data that Eleventy needs, just like this:

```
---
title:
date:
city: San Francisco
country: California
categories:
tags:
extract:
---
```

The function will finally open this file up in Atom and after I fill all this data out I can start writing the blog post markdown content beneath it. That function happens to look like this by the way:

```
function blog() {
IFS='' read -r -d '' String <<"EOF"
---
title:
date:
city: San Francisco
country: California
categories:
tags:
extract:
---
EOF

URL="~/workspace/rr.com/_posts/$(date +%Y-%m-%d-)${1}.md"

cd ~/workspace/rr.com/_posts && touch `date +%Y-%m-%d-`$1.md && echo "${String}" >> $_ && a $URL
}
```

It’s pretty gross code but it works and that’s good enough for me. I’ll be sure to tidy it up later and maybe add the date to the frontmatter automatically too.

But that’s it! Eleventy and Netlify will be the new foundations for this blog for the foreseeable future. I’m already impressed by how easy it was to set things up and I now feel like there’s nothing to stop me from writing.

Wait. Oh no...oh no. Now I have to write and I have no excuses to stop me from blogging...?

What have I done?
