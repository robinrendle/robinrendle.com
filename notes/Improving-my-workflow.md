---
layout: layouts/post.njk
title: Improving my workflow
date: 2019-11-09 22:37:46
extract: An Alfred workflow to help me blog faster.
country: California
city: San Francisco
tags:
  - blog
---

The biggest problem with having your own blog is that it’s pretty difficult to write and publish anything. You likely don’t have a fancy Medium-style interface if you want complete control over every little detail and you’re probably writing things from within a CMS or a code editor.

Right now I’m writing this blog post from within [VS Code](https://code.visualstudio.com/) for example:

<div class="m-wrapper--full">
  <figure class="m-wrapper--unpadded">
<img alt="A screenshot of VS Code" src="/images/vs-code-example.jpg" loading="lazy" />
</figure>
</div>

Even though I think that blogging is essential to becoming a better writer, the process around the writing can be super annoying and right now requires a ton of manual work for me. Over the past couple of weeks I’ve noticed how this process is actively hindering me from sharing links, quick ideas, or even embarassing relationship melodrama (oh, you’re _very_ welcome).

Just look at this nightmare blogging process:

1. Open up VS Code and the workspace `robinrendle.com`.
2. Create the file name `improving-my-workflow.md` inside `/_posts`.
3. Go to another file and copy/paste the metadata to the top of this one.
4. Add the title and the correct date.
5. Write the dang blog post.
6. Push that code to the master branch so Netlify can publish.

Steps 1 through 4 are just far too much effort as the goal of any good blogging system should be to publish things as easily and as quickly as possible; ideally I should be spending all of my time and attention on the writing instead.

So today I decided to tackle this problem once and for all. Right away I knew that I could experiment with [Alfred’s Workflows](https://www.alfredapp.com/); this lets you make little programs when you activate Alfred (so for me that’s `cmd` + `space`). What I wanted was to open up Alfred and then create a new file depending on the keyword I gave it and then I wanted it to automatically boot VS Code up with that new file. That way I could skip all those annoying steps entirely!

After about ten minutes of tinkering with it all, I came up with the following workflow:

1. The Alfred extension takes the keyword I pass it after typing `b` (oh and `b` stands for blog).
2. It replaces each space in the keyword with a hypen.
3. Then that output is set to a variable called `filename`.
4. Create a text file with an extension of `.md` and add the default meta data, including the current date to the top of the file.
5. Open that file in VS Code.
6. Alfred will then post a notification that everything is complete!

<div class="m-wrapper--full">
  <figure class="m-wrapper--unpadded">
  <video alt="A video of this new blogging workflow with Alfred" loading="lazy" autoplay loop>
    <source src="/images/a-new-blog-post.mp4" type="video/mp4" />
  </video>
</figure>
</div>

It’s pretty nifty that this only took me ten minutes to figure out. Since I’ll be using this command pretty much every day I also decided to [pick up an icon](https://thenounproject.com/icon/2021913/) from the Noun Project as the thumbnail for this new workflow, too. Oh and this is what it looks like to make a program in Alfred’s UI:

<div class="m-wrapper--full">
  <figure class="m-wrapper--unpadded">
  <img alt="The Alfred Workflow" src="/images/alfred-workflow.jpg" loading="lazy" />
</figure>
</div>

Anyway, now it takes all of three seconds to start blogging! And so I would highly recommend you invest a bit of time to make your own experience easier—whether that’s updating the back-end of your blog, or cleaning up the styles, or making a tiny tool like this to encourage you to write.

Because blogging is back, baby!
