---
layout: ../../layouts/notes.astro
title: Taking Shortcuts
date: 2022-04-23
city: San Francisco
country: California
extract: And holding your blog real close.
---

As I was reading this post from Jim [about his setup](https://blog.jim-nielsen.com/2019/netlify-public-folder-part-i-what/) I got wildly, incomprehensibly jealous; he writes about having a folder on his desktop that he can just throw stuff into and it publishes to a website. This, to me, is the absolute dream. The ultimate writing setup.

Last week I was then determined to fix mine. I don’t want to have to go to a URL and click-clack my way through a clunky CMS, and I don’t want to have to constantly copy/paste things in VSCode. What I want instead is to just click a single button or drop a Markdown file in a folder. I want the distance between me and my website to be as small as possible.

So as I was playing with a million different ideas I started noodling with Shortcuts.app on macOS and I kept going and going, spending the next few nights playing with it and trying to optimize things.

![](/images/blog-shortcuts-image.webp)

After a bit of faffing about, here’s what my new blogging setup looks like then:

1. Write the blog post in iA Writer
2. Despair
3. Copy all the text from that markdown file
4. Hit the Shortcut icon called "Blog" that now sits in my Dock
5. This prompts me to add an extract for the post
6. The shortcut then gets to work, saving that extract text in a variable
7. And then it automatically adds this post metadata to a new file:

```
---
layout: ../../layouts/notes.astro
title:
date:
city: San Francisco
country: California
extract:
---
```

8. It gets today's date and fills that in along with the extract from the variable saved earlier
9. It magically grabs the title (like `# Taking Shortcuts`) from the copied text and then renames the file to `taking-shortcuts.md`
10. Then it moves that file to `/workspace/robinrendle.com/src/pages/notes/` which is where the git repo for my website lives locally.
11. After that, the shortcut opens the file in VS Code for any last minute changes and also GitHub.app, so I can quickly hit publish

I’m sure I’ve made this a bit too complicated or fragile, and ideally I could somehow publish all this from the macOS Shortcut. But it’s somewhat better than what I had before. It would also be neat to boot up my site and see a quick preview of the same post, maybe popping open Chrome and heading to `localhost:1234/notes/name-of-post`! That would be really cool.

Anyway, I still think the ideal blogging setup is [Blot](https://blot.im/). You have a folder on your desktop, throw a markdown file into it, and blammo—your website updates immediately. Because of that setup, your website is always with you, always close by. And I feel that the only way to ensure that you write for your website is if it’s easy to update, easy to publish, easy to fix.

During all this I also added the `/images` folder for my website and moved it to my Dock. That way I can just drag and drop images in quickly. But ideally my macOS Shortcut would look for image paths in the markdown text, move that image to my repo, resize, compress, and then convert it to .webp.

For now I’ve just set up a custom [Permute](https://software.charliemonroe.net/permute/) action to do that so it’s a separate annoying step but I wonder if I can connect all these dots together somehow. Also I can’t believe Permute doesn’t come with all computers out of the box. It’s essential.

![](/images/permute-example.webp)

ANYWAY. I’m gonna keep tweaking my Blog shortcut and see if this really is better than anything else I can come up with.
