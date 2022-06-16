---
layout: layouts/note.njk
title: Blogging should be easy
date: 2020-05-23T05:35:58.377Z
city: San Francisco
country: Califoria
extract: Did this work?
tags:
  - blog
---

I wish blogging was easier. I reckon that 95% of the reason why people don’t write more on the Internet, on their own little spot with their own URL, is that it’s just a _pain_.

The other day [Tejas Kumar showed](https://twitter.com/TejasKumar_/status/1262678746298974209) just how easy it is to publish a website today (really, I think this whole drag and drop thing is outstanding and I love that it’s easy to use Netlify to effectively “retweet” a website with their little button) but to make a simple blog post still feels like an enormous pain to me.

Today my setup is:

1. Write a thing in iAWriter.
2. Use [my Alfred extension](https://www.robinrendle.com/notes/improving-my-workflow) to open up a new file VSCode.
3. Use iTerm to push that .md file as a commit to GitHub.
4. GitHub then automatically deploys to Netlify.

It looks like [iA Writer](https://ia.net/writer) now supports [Micropub](https://indieweb.org/Micropub) and I haven’t dug into it all yet but I think I could use this along with some Netlify Function trickery to publish a blog post to GitHub straight from iAWriter.

I wonder if for now instead of spending all evening figuring this out I could just work it out with [Netlify CMS](https://www.netlifycms.org/). This will let me login to something like robinrendle.com/login, input a user name and password, and then write things without the need to have my environment ready. Ideally it should let me publish quick notes from my phone, too.

Okay, [let’s go](https://www.netlifycms.org/docs/add-to-your-site/)!

First up I need to make a directory called `/admin` and create two files in it: `config.yml` and `index.html`. Easy.

> The first file, `admin/index.html`, is the entry point for the Netlify CMS admin interface.

And that ends up looking like this:

```
<!doctype html>
<html lang="en>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Content Manager</title>
</head>
<body>
  <!-- Include the script that builds the page and powers Netlify CMS -->
  <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
</body>
</html>
```

Next step is to update the `config.yml` with some data like:

```
backend:
  name: git-gateway
  branch: master
```

Looks like I need to setup something else for drafting files and what not but I’m gonna ignore that for now. What next?

Okay so I have to add my media folder – that’s at the root of my repo and it’s called `/uploads`. So my `config.yml` now looks like this:

```
backend:
  name: git-gateway
  branch: master
media_folder: "uploads"
```

So this is where things get a bit trickier—seems like I need to tell Netlify CMS about all of the fields that make up a blog post: the title, the body, the metadata, etc. I can do that like this:

```
collections:
  - name: "notes"
    label: "Notes"
    folder: "_posts"
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    template, e.g., YYYY-MM-DD-title.md
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Publish Date", name: "date", widget: "datetime"}
      - {label: "City", name: "city", widget: "string"}
      - {label: "Country", name: "country", widget: "string"}
      - {label: "Tag", name: "tag", widget: "string" }
      - {label: "Body", name: "body", widget: "markdown"}
```

We’ll see if that works. Last time it didn’t, but I was too lazy to debug why.

Now it appears that all I have to do is tell Netlify how to authenticate things with their Identity service. I am clicking things on the website but nothing really makes a lick of sense to me.

After doing that I need to add a script to the `header.html` partial of my main site and the admin `index.html`. This is the “front-end interface” of the login page I’ll need to use the CMS. I understand what all of this means, too. In case you were wondering.

Is this gonna have any performance impact for folks? No clue. I’ll need to double check that after I sort this out.

That basically wraps things up. Can I access the CMS via my local environment? Let’s test. Hmmm...heading to `localhost:8080/admin` doesn’t work. Let me push this code live and see what happens. No one hack my site whilst I’m doing this, thanks.

Ugh on this laptop I still haven’t fixed my GitHub password authentication via iTerm. I’ll leave that. I’ve had a long day. I’m just gonna get some tea and wait the 3 mins it takes for Netlify to deploy.

Okay, site deployed and tea acquired! Let’s head to `robinrendle.com/admin` and see what happens...dang. I got this message:

```
Error loading the CMS configuration
Config Errors:

Error: Failed to load config.yml (404)

Check your config.yml file.
```

Somehow I effed up the config. Lemme take a look... Huh. I forgot to edit my `footer.html` partial, as the docs says:

> When a user logs in with the Netlify Identity widget, an access token directs to the site homepage. In order to complete the login and get back to the CMS, redirect the user back to the /admin/ path. To do this, add the following script before the closing body tag of your site's main index page:_‌_

```
</script>
if (window.netlifyIdentity) {
window
  .netlifyIdentity
  .on("init", user => {
    if (!user) {
      window
        .netlifyIdentity
        .on("login", () => {
          document.location.href = "/admin/";
        });
    }
  });
}
</script>
</body>
</html>
```

Dumb. Pushing again and waiting for the deploy now. Okay, darn. So the config is still busted somehow. Please hold. So I left a space between sections in the config. Let’s see if it’s that. I’m guessing `.yml` files are strict about that. Deploying again with a fix.

Gah! Failed to load `config.yml ` still. Opening up the browser’s console and it looks like it can’t find the file at all (404, duh). OKAY. So I’m being extremely dumb here, I know it. I wonder if I’m putting the `/admin` folder in the wrong directory. The docs says it needs to be adjacent to `_src`.

Boy the docs are a bit confusing when it comes to where you should put the admin directory. I should probably contribute to fix this confusion once I figure out what I’m doing wrong.

...huh. Okay, so I threw the `/admin` directory into `/_site` and that...worked. Now I can see the admin interface and login with a username and password on my local environment. But `_site` is in my gitignore because in 11ty that’s the folder that everything is compiled into. Is it because I’m ignoring `.yml` files in my `eleventy.js`? What...on earth am I doing wrong...?

OKAY. Let’s back up: in Eleventy there is the concept of “passing through” files. You have a bunch of files and Eleventy’s job is to convert those files into another type of file. That’s great if you have a `.njk` file and want it to be an `.html` file. But sometimes Eleventy doesn’t know what certain types of files are and/or should be. So you have to manually tell them to “pass through” Eleventy into the same directory, except now it’s copied into `/_site` which is where all your converted files live and is where your site is served from.

BASICALLY I wasn’t telling Eleventy to move that `admin/config.yml` file into `_site/admin/config.yml` because Eleventy didn’t know what .yml is. So in my `.eleventy.js` file I added the following:

```
eleventyConfig.addPassthroughCopy("admin");
```

I should’ve known this I guess but I touch Eleventy so infrequently that it’s easy to forget stuff like this and I assumed I was doing something wrong with the Netlify CMS script. Plus there’s no obvious thing to say “hey, idiot. it’s this thing that’s broken.”

Okay so I also fixed my Git SSH whatever in iTerm because this was annoying me. Now I’m waiting for one more deploy to see if this all worked.

Finally I need to send myself an email from the Identity tab of Netlify, open the email and add a password and BOOM! I have logged in and I now have CMS access to my site. I’m writing this post right now in the CMS. The editor is okay but it would be so cool if the preview of the text was my actual website. Is that technically possible? I dunno. Would be neat.

See what I mean with all of this nonsense though? Just trying to make my site easier to work with took me a whole bunch of time and confusion just to add a CMS to a static site. Why can’t working with the Jamstack be...easier? I know Netlify is doing a bunch of wonderful work in this space but I can’t help but UGH every time I think about contributing to a site with just some dang text. Publishing in 2020 should be as easy as dragging and dropping a file but it still requires a bunch of technical know-how.

At least mine is 1% easier to work with now, I guess. Now let’s hit publish and see if this thing works...
