---
layout: layouts/note.njk
title: Setting a Typographic Scale with Sass Maps
date: 2017-11-24 21:06:00 -08:00
tags:
  - design
city: Nottingham
country: UK
extract: An old technique for setting type on the web.
---

_The other day [Tim Brown](http://nicewebtype.com/) noticed that this old post had been deleted and so I rescued it from the Wayback Machine. It’s a post from several years ago where I wrote about a new typesetting system that we had developed at [Erskine](http://erskine.simplygoodwork.com/). Please note that most of this code wasn’t written by me, but I did contribute to some of the underlying ideas; the credit should be directed towards Mat Hayward and Tom Davies of [Kind](https://madebykind.com/) fame._

---

Last month Tom [discussed a new method](//web.archive.org/web/20170211113632/http://erskinedesign.com/blog/friendlier-colour-names-sass-maps/) for organising colors with Sass lists and over the past few weeks I’ve been happily using it throughout our projects. This newfound ability to remember color settings all of a sudden feels like a weird front-end super power, and for larger projects this technique is sure to save us a large amount of time nipping back and forth between the module file we’re working on (like `_island.scss`) and the file which contains all of the color variable declarations. However, this technique is so useful that we’ve begun to wonder where else we can set data in a Sass list and consequently access it via a mixin.

After a bit of investigation I believe that we ought to use this technique to set a typographic scale. Yet before I explain how we can use Sass lists in this way I want to first describe a few underlying problems that have been nagging us lately when setting type with CSS:

## Problem #1: Setting margins, font-size and line-height at the same time

In order to align headings to the baseline we often set margins and padding values on the default `h1` through `h6` elements. Over time however, and especially on larger projects, we’ve noticed that this effects the reusability of these components. What happens if one of these headings are inside another module? Do they _always_ need these specific margin/padding values? Probably not. Either way, we’ll end up resetting these defaults multiple times throughout the stylesheet like this (in the examples we’re going to keep things easier to read by setting everything in pixels but we usually set type with [rems](//web.archive.org/web/20170211113632/http://snook.ca/archives/html_and_css/font-size-with-rem)):

```
h1, .h1{
  margin-bottom: 35px;
  padding-top: 3px;
}

.module__heading {
  margin-bottom: 0;
  padding-top: 0;
}
```

Ultimately we have to come to the conclusion that margin and padding values are entirely contextual. An `h1` will not always require these positional adjustments so we can supplant them onto the specific module that needs it (a class such as `.module__title` might be used instead.)

So which values really need to be defined when setting type? Well, whenever we set the `font-size` we probably want to change the `line-height` of the component too. Except perhaps in the rare circumstances of modules like buttons and text-fields, these values are almost always entwined with one another. So we need some kind of solution which only sets the font-size and line-height of a heading.

## Problem #2: Inconsistently setting values

More often than not this happens when a developer is in a rush and types in the wrong value when working in another partial. For example we’ve noticed code that creeps in like this:

```
h1, .h1 {
  font-size: 22px;
  line-height: 25px;
}

.module__heading {
  font-size: 21px;
  line-height: 26px;
}
```

This can also happen when a designer wants to nudge the font-size and line-height ever so slightly (which is especially annoying when there is no documentation about this specific change in the stylesheet). However, this is unmaintainable over time as these minute adjustments are forks of the codebase and this makes it considerably more difficult to manage things in the future.

In upcoming projects our designers and developers won’t be able to make these tiny little aesthetic fixes on a module by module basis. We understand design’s relative importance here, but code maintenance is more important than a website looking 100% like the mockup and, as [Harry Roberts](//web.archive.org/web/20170211113632/http://www.youtube.com/watch?v=ldx4ZFxMEeo) argued in a recent talk, getting 80% of the way there with 20% of the code is always preferable in these situations.

So we need one set of global font-size and line-height values – a typographic scale – and deviations from it simply aren’t permitted.

### Problem #3: We ought to configure these settings with each typeface.

Usually we don’t need the text face to be any bigger than the body text itself. Likewise, display faces used for large titles ought not to be smaller than a specific value in order to maintain legibility. In this case it’s obviously helpful to set specific font-size/line-height combinations for each individual typeface. Perhaps for a family like [FF Tisa](https://web.archive.org/web/20170211113632/https://typekit.com/fonts/ff-tisa-web-pro) we would only need three size variations whereas with a sans-serif typeface such as [Apercu](//web.archive.org/web/20170211113632/http://fontdeck.com/typeface/apercu) we would need to set small, medium, large _and_ display sizes. This means our typographic scales ought to be oriented around a specific type family.

## Our solution (so far)

Now that we’ve outlined the problems I think it’s worthwhile to step you through our current setup. First we need to set the values for each specific font in a Sass map. If you haven’t heard about Sass maps before then I recommend [this tutorial by Viget](//web.archive.org/web/20170211113632/http://viget.com/extend/sass-maps-are-awesome) or checking out the maps section of this article called [Looking into the future of Sass](//web.archive.org/web/20170211113632/http://davidwalsh.name/future-sass).

Looking back at the [color palettes](//web.archive.org/web/20170211113632/http://erskinedesign.com/blog/friendlier-colour-names-sass-maps/) technique we can follow a similar hierarchical scale:

```
$font-georgia: (
  x-small: (
    font-size: 13,
    line-height: 16
  ),

  small: (
    font-size: 14,
    line-height: 20
  ),

  base: (
    font-size: 16,
    line-height: 18
  ),

  mid: (
    font-size: 18,
    line-height: 20
  ),

  mid-large: (
    font-size: 20,
    line-height: 26
  ),

  large: (
    font-size: 25,
    line-height: 30
  ),

  x-large: (
    font-size: 35,
    line-height: 39
  )
);
```

It’s at this point where Tom butted in and began to wonder if you can add all sorts of other data for the typeface here too. Why set another variable that defines the font-stack which might be found in another file or partial? If we’re going to set specific typeface settings then why not apply those right here in the Sass map like so:

```
$font-verdana: (
  stack: "Verdana, sans-serif",

  x-small: (
    font-size: 12,
    line-height: 16
  )
);
```

This way all of the typeface data is in a single place. Now, before we go about setting up our functions we should probably consider how we want to use this data in a specific context. I think in practice this kind of `@include` statement would be nice:

```
// scss
h1 {
  @include font-scale(base);
}

// css output
h1 {
  font-size: 16px;
  line-height: 18px;
}
```

We’re making a few assumptions here. The `body` will probably have a default typeface set, so for the most part we won’t need to change the typeface all the time. In the rare cases that we do need to change it we probably want to do so like this:

```
// scss
.component {
  @include font-scale(x-small, $font-verdana);
}

// css output
.component {
  font-family: "Verdana, sans-serif";
  font-size: 12;
  line-height: 16;
}
```

That’s a whole lot better than writing these values out individually. As we now have an idea of how we want to use this little mixin, we can start to define the functions step by step. The first function we’ll need is `_fontset-feature`:

```
@function _fontset-feature($family, $feature, $set: 'base'){
  $result: map-get(map-get($family, $set), $feature);
  @return($result * 1px);
}
```

This function gets nested list data from our Sass map and appends ‘px’ to the unit. With this function we can then apply it to separate functions for setting the line-height and font-size:

```
@function calc-font-size($family, $set) {
  @return _fontset-feature($family, font-size, $set);
}

@function calc-line-height($family, $set) {
  @return _fontset-feature($family, line-height, $set);
}
```

We can use these functions throughout the project to individually set this information, for instance in the case of a button when we don’t want to change line-height each time we set the font-size:

```
.button--alpha {
  font-size: calc-font-size(x-large);
}

.button--beta {
  font-size: calc-font-size(large);
}
```

In those rare instances a developers wants to set a specific typeface we need a function to grab the font stack and remove the quotes surrounding it:

```
@function _fontset-family($family) {
  $result: map-get($family, stack);
  @return unquote($result);
}
```

Finally we can use a font-scale mixin to combine these functions together:

```
@mixin font-scale(
  $font-size,
  $family:$font-default,
  $line-height:$font-size) {

  font-size: calc-font-size($font-size, $family);
  line-height: calc-line-height($line-height, $family);

  @if $family != $font-default {
      font-family: _fontset-family($family);
  }
}
```

If we want the font-family to default to Georgia, without actually setting the CSS declaration for `font-family` each time, we can add the following default at the top of our Sass list:

```
$font-default: $font-georgia;
```

And there we have it. We can set font-size, line-height and the font-family with the data from the Sass list and we have a single mixin to do all of the hard work for us. To see an example of how this might work we’ve made [a little Pen](https://codepen.io/erskine/full/xEqFC) to help explain.

Although it doesn’t look like much at first, when scaled across a large front-end system this gives us an awful amount of power and efficiency out of the box. We can communicate with designers more clearly than before and it aids type setting consistency. Yay for Sass lists!

_Update: We’ve gone ahead and made this into [a public repo](https://web.archive.org/web/20170211113632/https://github.com/ultimate-package/tools.font-scale) where you can see the most up to date version and help us make it even better._
