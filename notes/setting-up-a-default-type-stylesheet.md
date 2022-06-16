---
layout: layouts/note.njk
title: Setting up a default type stylesheet
date: 2013-01-18 16:00:00 -08:00
tags:
  - design
location: Nottingham, UK
extract:
  If we’re serious about designing progressively enhanced then we need to start
  designing websites without assumptions, starting with the overused argument that
  we should be thinking type-first.
city: Reading
country: UK
---

I’ve noticed that many websites break down poorly as their webfonts fail to load for whatever reason and subsequently fall back onto the system fonts. This is quite common, especially on mobile devices with slow connections and yet it’s strange to see websites that have great typography with vendor fonts, but fall to bits when the slightest problem occurs. The measure might be too wide or the line-height too tall for that particular font; what is required of one typeface can sometimes mean actively fighting the typographic requirements of another. As the x-height of a font might call for a shorter line-height in the paragraph, the fallback may be something like Verdana that requires a considerable amount of space between each line. So how can we handle these two possible environments?

What we really need here is to define two rules for typography in our stylesheets; one for the core fonts, the other for those from a vendor. Thankfully this is relatively easy if we use [Modernizr](http://modernizr.com/).

If you haven’t fooled around with Modernizr before then it’s best to describe it as magic, but technically it’s a feature detection library which will add a class to the `html` element depending on a browser's features. This might be support for `svg`, `audio` or even Javascript itself. On a modern Webkit browser you’ll probably see something like this appended to the `html` element if Javascript and Modernizr are running properly:

```html
<html
  class="js no-flexbox flexbox-legacy canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths"
></html>
```

These classes are a standard listing of the capabilities of the device but it’s also possible to configure particular tests that we want Modernizr to run. In this case we’ll be using `fontface` to detect whether the custom webfonts in our stylesheets are running. If a browser does not detect those `@fontface` rules in our stylesheet then Modernizr will do nothing and the `html` element won’t have this class added to it.

But now we can begin to separate the two styles like this with Sass:

```scss
body {
  font-size: 100%;
  font-family: Georgia, serif;
  line-height: 1.55;
  font-weight: 600;

  .fontface & {
    font-size: 105%;
    font-family: "Poynter Serif RE", serif;
    line-height: 1.65;
    font-weight: 400;
  }
}
```

And there we have it. Since Modernizr requires us to have the `.no-js` class appended to the `html` element before anything happens, it will swap that out as it detects the device’s capabilities. With the code above we’ve separated the default styles that will apply to every child element within. Now we can begin to break down all of our typographic styles into two factions as necessary.

Ideally this would go further, so that as a browser moves through the array of the `font-family` it would automatically pass through an array of predetermined styles. I’m not so sure if that’s really feasible at the moment, nor am I certain that this will work with mobile browsers with poor connections (since Modernizr might append the `fontface` class to the element and then fail to fully load the webfonts afterwards). This is a promising start though and since I haven’t read anything elsewhere about this technique I thought I might share it here.
