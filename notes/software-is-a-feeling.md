---
layout: layouts/note.njk
title: Software is a feeling
date: 2026-03-29T11:52:09-07:00
city: San Francisco
country: California
extract: 
---

I made a few updates over the weekend!

All the images in [/photos](/photos) are smartly resized and they also load as you scroll so I’m not sending you 700GB of data down the wire. I have a lot of ideas about what I’d like to turn /photos into but either way it’s amazing how little work is required to build your own personal Flickr with a bit of CSS and hooking up a folder of images to 11ty (now [Build Awesome](https://www.11ty.dev/blog/build-awesome/)). 

I need to figure out how I can have a nice folder of images _and_ make it easy to add more _and_ have `alt` text with a tiny description of the location or the scene though. But as any blogger will tell you: the greatest threat to any blog is how difficult it is to maintain and update. Improving the accessibility and design is great but it can’t come at the expense of adding more faff to update things. That’s how all blogs eventually die. 

Oh, also? I should definitely add a feed for /photos.

---

[I mentioned](https://robinrendle.com/notes/reading-without-reading/) Mass-Driver’s [MD UI](https://mass-driver.com/typefaces/md-ui/) last week and since it was designed to pair so well with [MD IO](https://mass-driver.com/typefaces/md-io/)—the typeface I use for body copy here—I decided to make the switch. Now MD UI is the typeface I’m using for navigation and titles and for the first time I’m using a variable font which feels nice and future proof if I want to tinker with the design. 

You can see it in the sidebar and it’s just great. But I particularly love, love, love MD UI at big sizes. It packs a real punch and I’ve spent the last twenty minutes looking at the type specimen and thinking about how I can use it elsewhere in my website besides the sidebar. I’ll think about it more!

---

_Unrelated note: I love the italics of MD IO and I went back and forth making the whole site in italics a while ago because I  love it so much. Look! Isn’t this just great? It has so much style and quirkiness. This is why I love to quote books and websites because italics make all writing better and smarter and hotter. Monospace italics ftw!_

---

A while back I noticed a strange flash of text as I navigated between pages. After tinkering around it looks like the html/body element needs a color background when you’re using [view transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@view-transition). After that tiny fix things certainly feel a lot more like a native IDE but my website still feels...fragile? And certainly not native enough for my liking.

I wonder how else I can make the interface more stable, more predictable, and less like a haphazard pile of links and text. (Generally I hated the curse of the 2010s, the React-ification of the world wide web, and always felt that technology greatly contributed to the way that most websites were hobbled with bloated, junk technology. But I think the general desire from folks to want stable-feeling websites, to make their websites feel like “grown-up” or “stable”, was correct. It should’ve just been done in a standards-compliant-way instead of a bloated-terrible-mess kind of way. Anyway!)

---

It’s been ~3 months since I launched this variation of my website and it feels like this one might last all year. I can’t remember if that’s happened before! Most designs last a couple of months until I anxiously tear them to shreds. But this guy? I still like it! I have no grand desire to redesign everything but only to tweak, tweak, tweak. 

---

I have this idea for a “collection”—tagged posts, basically—where I can group notes and essays into playlists that have a common theme, a suggested method of entry. I think Paul Ford did this in a previous design of [Ftrain](https://www.ftrain.com/) which I always admired. Right now I have a chronological list of posts but there’s other ways to slice them up, other ways to present them, that I’ve mostly left ignored.

---

The only big bug that bugs me right now is how selecting a folder in the sidebar takes you to a full screen page of the contents. So you’re viewing the folder’s contents in the sidebar and the main content area at the same time. I thought this was a good idea a while ago so that I can provide more information about a post but now it feels finicky and annoying to open a folder and navigate. 

Perhaps this is why the interface feels a little untrustworthy, a little unpredictable at times. Software is a _feeling_ and sometimes that feeling is hard to understand, difficult to parse. Investigating what makes software feel “correct” is using it ten thousand times for months on end, and what was once a punk rock idea in a drawing app suddenly feels slow and wrong and weird when transmuted into code and brought into life.
