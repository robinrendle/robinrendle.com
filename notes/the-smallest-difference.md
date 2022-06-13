---
layout: layouts/post.njk
title: The Smallest Difference
date: 2019-11-12 20:38:04
tags:
  - design
extract: And the small wonder of OpenType fonts.
country: California
city: San Francisco
---

In July the design systems team at Gusto shipped a beautiful thing. Over the course of three months we tried our best not just to update the brand assets, such as logos, colors, and fonts—we also felt that this was an opportunity to give every component in our library an upgrade. We hoped to expand the scope of the project by removing a ton of duplicate components and tech debt, as well as begin tackling a number of longstanding issues with accessibility, too.

One thing that had been bothering me for quite some time though was the design of our tables and I eagerly waited for the moment to jump in and fix them. This is what they looked like just before the brand refresh work started in earnest:

<div class="m-wrapper--full">
  <figure class="m-wrapper--unpadded">
    <img class="chrome-shadow" alt="The table component in the Gusto component library" src="/images/table.jpg" loading="lazy" />
  </figure>
</div>

When you drop this in a design doc like Figma then there’s not much to be worried about. I can read everything here! But as soon as you fill the component with real data then things quickly get bonkers.

And that’s because at Gusto we’re helping companies run payroll, some of whom have dozens of employees, and so we’re constantly presenting our customers with lots of complex information, like their employee’s salary breakdown as well as federal, state and local taxes. This means that our table component is extremely important to our customers and on the design systems team we have to ensure that we provide a component that works well in data-dense situations like this:

<div class="m-wrapper--full">
  <figure class="m-wrapper--unpadded">
    <img class="chrome-shadow" alt="The table component with a lot of data" src="/images/gusto-table-big.jpg" loading="lazy" />
  </figure>
</div>

During user research we found that our customers are skimming through this sea of numbers to make sense of it all. Did this employee get paid correctly? Do all these taxes look correct? What have I inevitably messed up? Unfortunately there’s only so much we can do in terms of UX to make the tax system here less peculiar—however!—there’s one UI issue that had been bugging me for years that I knew would help.

First we have to dive into how numbers in a font actually work though.

In most fonts, numbers are not all the same width by default. So a 4 is likely going to be wider than a 1. And this isn’t an issue most of the time; when we’re using numbers in a sentence that’s not really a problem. We sort of don’t care in these scenarios that $1,235.55 is wider or shorter than $9,993.24.

<figure>
  <img class="chrome-shadow" alt="An example showing how each number is a different size" src="/images/number-widths.png" loading="lazy" />
</figure>

But in any other context when you’re summing up numbers, like in tables, it’s a complete nightmare because the decimal point will align with different numbers, even if they’re right aligned. This means that when you’re scanning a table that a $1000.00 can suddenly begin to look a lot like $100.00.

Look very closely at the following example and get your nose up right up to the screen to see how things don’t align correctly:

<figure>
  <img class="chrome-shadow" alt="Showing how decimals don’t align properly with numbers of different sizes" src="/images/decimals.jpg" loading="lazy" />
</figure>

These are the same number styles! The only difference between the example on the top and the bottom is that they use different glyphs; they’re the same font with the same letterspacing.

Ideally what we want is every number to align correctly and the decimal point to be in the same position each time to allow for better legibility. The good news is that we’ve had ways in which to fix this on the web for years now! With OpenType features within webfonts we can use alternate characters, built directly into many fonts, and we can turn this option on in CSS like so:

```
.table {
  font-variant-numeric: tabular-nums;
}
```

To activate these numbers in Figma you’ll need to select some text and head on over to the OpenType features in the right hand navigation (also this is how things currently look, this menu is likely to change in the future):

<figure>
  <img alt="Figma’s OpenType menu" src="/images/figma-opentype-example.jpg" loading="lazy" />
</figure>

It’s also important to note that not every font will support this so make sure to double check with the foundry or webfont service beforehand. But anyway! The before and after don’t look all that different when you compare the default figures (left) with the tabular option turned on (right):

<div class="m-wrapper--full">
  <figure class="m-wrapper--unpadded">
    <img alt="Comparing default and tabular numbers" src="/images/figure-comparison.png" loading="lazy" />
  </figure>
</div>

You can see how the decimal will now always be in the same position, and you’ll notice how here in the Centra font that the `1` will look quite different in this OpenType variant. But you’ll only really begin to see the differences in large columns, and especially in tables:

<div class="m-wrapper--full">
  <figure class="m-wrapper--unpadded">
    <img class="chrome-shadow" alt="Switching between tabular and regular numbers" src="/images/table-animation.gif" loading="lazy" />
  </figure>
</div>

I think this is a pretty substantial difference! Whereas before each number blurred into the background, when the tabular options is enabled it’s easier to scan and it’s easier to make complex decisions about the data we’re seeing here.

All of a sudden there is a little bit more order to all these numbers and it’s only when you compare the two that you begin to see that the smallest difference in a UI can really make all the difference.
