---
layout: layouts/note.njk
title: A Great Flowering
date: 2016-09-25 16:38:00 -07:00
Country: California
City: San Francisco
bodyclass: adventures-blue
tags:
  - typography
---

<p>Apple, Google, Microsoft and Adobe&nbsp;<a href="http://medium.com/@tiro/https-medium-com-tiro-introducing-opentype-variable-fonts-12ba6cd2369#.80ro6ha2q">introduced a new addition to the OpenType specification</a>&nbsp;earlier&nbsp;this month. It’s called “Font Variations” and it’s difficult to overhype such an announcement because it brings a host of welcome improvements just in reach of designers.</p>

<p>It began with<a href="https://medium.com/@tiro/https-medium-com-tiro-introducing-opentype-variable-fonts-12ba6cd2369#.mdqnj31b5"> a post by John Hudson</a>, then&nbsp;Tim Brown wrote about&nbsp;the news&nbsp;over <a href="http://blog.typekit.com/2016/09/14/variable-fonts-a-new-kind-of-font-for-flexible-design/">on the&nbsp;Typekit&nbsp;blog</a>, and then Roel Nieskens described the benefits on&nbsp;<a href="http://typographica.org/on-typography/variable-fonts/">Typographica</a>. And then, heck, <a href="https://www.wired.com/2016/09/apple-google-adobe-microsoft-join-forces-make-typographic-history/">even Wired wrote about&nbsp;the news.</a></p>

<p>But why is this such a big deal?</p>

<p>First, let’s talk about the current state of web typography: for now, if you want to use a font on a website you must request a file:</p>

<ul>
	<li>regular.woff</li>
</ul>

<p>However, in most cases we want to make <em>a flexible design system</em> made up of italics for emphasis and&nbsp;bold weights for small headings. Then we might need a display typeface that’s a little condensed and a caption style for smaller chunks of text. All of a sudden this can grow into&nbsp;<em>megabytes</em> of fonts being requested&nbsp;because, with each font variant, we must require a new file:</p>

<ul>
	<li>regular.woff</li>
	<li>thin.woff</li>
	<li>medium-woff</li>
	<li>bold.woff</li>
	<li>semibold-condensed.woff</li>
	<li>extended.woff</li>
</ul>
<p>All of these files must be requested and sent over the network which is costly for the user (because they have to wait a long time for these fonts to be requested) and for us (because <a href="https://www.soasta.com/blog/google-mobile-web-performance-study/">most users won’t wait</a>). This has led to <a href="http://mrmrs.io/writing/2016/03/17/webfonts/">calls to abandon web fonts</a> altogether and then, *cough*, <a href="https://robinrendle.com/notes/in-defense-of-webfonts/">rebuttals</a>&nbsp;that call for a middle ground.</p>

<p>Variable fonts, on the other hand, work like this: instead of embedding multiple font files into a webpage (which we’re forced to do for each style, weight and width remember) we just need to request a single file, like so:</p>

<ul>
	<li>font.woff</li>
</ul>

<p>This lonely font file will have all the instructions inside that let&nbsp;us manipulate—or to use the correct term, <em>interpolate</em>—other shapes; bold, thin, condensed and extended styles can then be made from its outlines, as shown below:</p>

<figure>
    <img class="tl-email-image" data-id="1051205" src="http://gallery.tinyletterapp.com/ed299f0ca02cd22d04c76c6e447e68a7851ec03d/images/3a1485b3-a38f-4f18-8caf-b149125b867f.gif"/>
</figure>

<p>There’s at least two immediate benefits that I can think of when it comes to a variable font format.</p>

<h3>#1 Performance.</h3>

<p>If all goes to plan then using a single font file should make our websites a whole lot faster. Fewer fonts means fewer requests and that’s great news for our readers because <a href="https://wpostats.com/">web performance is a significant problem for usability</a>. For our Chinese, Japanese and Korean friends—whose webfonts can easily breach ten megabytes—this news will to be celebrated with dancing and&nbsp;parades that line&nbsp;the streets.</p>

<h3>#2 Flexible design systems.</h3>

<p>Once font variants are implemented in browsers designers will suddenly have access to a far greater number of options for styling text. Should the text on mobile be more condensed to squeeze a larger number of<br/>
characters into a line? No problem. Should the text expand to fit the whole width of the window? You got it.</p>

<p>All this&nbsp;should mark a significant visual change on the web.</p>

<p>Saying that, a specification is more like an agreement or a handshake—nothing has shipped in a web browser yet and so there are many open questions. For instance, we don’t know how we’ll be able to manipulate these new features <a href="https://github.com/w3c/csswg-drafts/issues/498">with CSS</a>&nbsp;yet, although there have been <a href="http://litherum.blogspot.com/2016/09/variable-fonts-in-css-draft.html">some great ideas</a> as the spec evolves.</p>

<p>We also don’t know how&nbsp;foundries/type designers will respond to the news. Is it worth their while to develop and implement these new features? Will the majority of&nbsp;designers and&nbsp;developers&nbsp;care at all? Will browser vendors&nbsp;agree on a standardized approach?</p>

<p>Each&nbsp;question is a worthy cause for debate and concern.</p>

<p>On this note, the type designer Matthew Butterick wrote <a href="http://practicaltypography.com/the-scorpion-express.html">a strange piece</a> that overlooks many of the benefits I previously mentioned&nbsp;and instead brought up a host of odd complaints that left me frowning and spit-taking as I read.</p>

<p>On the problem of web performance Matthew writes:</p>

<blockquote>
<p>...with to&shy;day’s faster con&shy;nec&shy;tions—even on mo&shy;bile—op&shy;ti&shy;miz&shy;ing for file size is less use&shy;ful than ever.</p>
</blockquote>

<p>Brushing these remarks about performance aside is easy work, although it deeply bothers me that someone with as much experience as Matthew appears oblivious to the fragile nature of web typography and the difficulty of serving text to people who don’t happen to live beneath&nbsp;an umbrella of perfect connectivity. The whole premise of his argument leads from this belief, that we have a stable and predictable pipeline between us and our readers. But&nbsp;<a href="https://robinrendle.com/essays/new-web-typography/">I disagree</a>.</p>

<p><em>Anyways</em>.</p>

<p>In a delightful post that contrasts Butterick’s&nbsp;cyncism, the type designer <a href="http://fontbureau.typenetwork.com/news/article/opentype-font-variations-open-up-a-world-of-possibilities">David Berlow argued that</a>:</p>

<blockquote>
    <p>Before anybody starts worrying that the future of variations technology will be limited to a narrow but important problem, remember that OpenType’s ability to do glyph substitution was first broadly implemented for international script support. That eventually led to a great flowering.</p>
</blockquote>

<p>This begs the question: if international script support led to <a href="https://djr.com/bungee/">wondrous curiosities</a>, then where&nbsp;will font variants lead us and what new styles will flourish in their wake? Instead of yelling at clouds, Berlow&nbsp;asks us all to look beyond what advantage&nbsp;this technology might bring in the immediate future, and begs us to look out further&nbsp;into the horizon.</p>

<p>Personally, I’m excited for that future—I’m excited for variable fonts—and the next great flowering to come.</p>

<h2>New Type Releases</h2>

<p>Nina Stössinger’s delightful serif <a href="https://monokrom.no/fonts/nordvest">Nordvest</a> was published a short while back. I’m not sure what else there is to say about the typeface, other than to just <em>oogle</em> at it:</p>

<img class="tl-email-image" data-id="1038961" src="http://gallery.tinyletterapp.com/ed299f0ca02cd22d04c76c6e447e68a7851ec03d/images/0a2b70d7-48dc-48a5-bccf-c4453ffb4704.jpg" />

<p>What’s of particular interest with this release isn’t only the shape of the characters however, but also with the way in which Monokrom are publicizing it with <a href="https://monokrom.no/nordvesttour/">the Nordvest Tour</a>. This project is an all-in-one&nbsp;travelogue, type specimen and&nbsp;collection of stories about the Nordic languages:</p>

<img class="tl-email-image" data-id="1038973" src="http://gallery.tinyletterapp.com/ed299f0ca02cd22d04c76c6e447e68a7851ec03d/images/148eee8c-c139-479f-ab71-009ae9cd6738.png" />

<p style="text-align: center;">¶ ¶ ¶</p>

<p style="text-align: left;"><br/>
Laura Meseguer released <a href="http://www.laurameseguer.com/multi/what-is-multi/">Multi,</a>&nbsp;in&nbsp;both text and display&nbsp;variants, which happens to be a sans serif family with elements of “humanist calligraphy.” This term&nbsp;means that the stroke of each letter appears to be drawn with a pen angled ever so slightly to one side.&nbsp;Effectively, there’s a lot more&nbsp;contrast between strokes than there might be in, say, a bog standard grotesk like Helvetica.</p>

<img class="tl-email-image" data-id="1039125" src="http://gallery.tinyletterapp.com/ed299f0ca02cd22d04c76c6e447e68a7851ec03d/images/50dc2935-9f97-4494-8fc2-54715ce8806d.png" />

<p>It’s easier to see this sort of flare when compared to other typefaces however, just as&nbsp;Laura reveals in <a href="http://www.laurameseguer.com/multi/design/">the underlying design of Multi:</a></p>

<img class="tl-email-image" data-id="1039129" src="http://gallery.tinyletterapp.com/ed299f0ca02cd22d04c76c6e447e68a7851ec03d/images/b44710f0-49f3-4d65-a23a-02294eb6c4bf.png" />

<p style="text-align: center;"><span style="color: rgb(85, 85, 85); font-size: 16px; font-style: normal; font-weight: normal; line-height: 24px; text-align: center;">¶ ¶ ¶</p>

<p>I’m not entirely sure when <a href="https://www.typotheque.com/fonts/bara/about">Bara</a> by Nikola Djurek was released, so I’ll include it here for safe measure. Bara is a serif rooted in 16th century metal types of the Dutch Golden Age. It has three optical sizes: Text for body copy, Display for headings and Grande for headlines.</p>

<figure>
<img class="tl-email-image" data-id="1039137" src="http://gallery.tinyletterapp.com/ed299f0ca02cd22d04c76c6e447e68a7851ec03d/images/be16e7c4-1ea3-4bb7-a033-00ed63a02e93.png" />
</figure>

<p>If you have a moment or two, be sure to ponder over the numerals of Bara. They’re a pure delight:</p>

<figure>
<img class="tl-email-image" data-id="1039141" src="http://gallery.tinyletterapp.com/ed299f0ca02cd22d04c76c6e447e68a7851ec03d/images/7af89002-d62d-42bd-80bd-b9ddd4a50768.png" />
</figure>

<p style="text-align: center;"><span style="color: rgb(85, 85, 85); font-size: 16px; font-style: normal; font-weight: normal; line-height: 24px; text-align: center;">¶ ¶ ¶</span></p>

<p style="text-align: left;">In my absence over the last couple of weeks I also happened to miss the release of <a href="https://www.typotheque.com/fonts/zico/about">Zico</a>, which&nbsp;was&nbsp;published next to Bara on Typotheque, too. Unlike Bara however, Zico is designed by Marko Hrastovec and originates more closely from the world of lettering:</p>

<figure>
<img class="tl-email-image" data-id="1039145" src="http://gallery.tinyletterapp.com/ed299f0ca02cd22d04c76c6e447e68a7851ec03d/images/534b2872-4485-4e83-a03b-a1c59814e428.png" />
</figure>

<p>In <a href="https://www.typotheque.com/articles/zico_how_lettering_became_type_design">the design notes for Zico</a>, Marko describes how the type family found inspiration in tennis ball packaging and motor oil cans:</p>

<figure>
<img class="tl-email-image" data-id="1039157" src="http://gallery.tinyletterapp.com/ed299f0ca02cd22d04c76c6e447e68a7851ec03d/images/0b440dd9-70a3-4150-b75a-313d7e71dd6c.jpg" />
</figure>

<p style="text-align: center;">¶ ¶ ¶</p>

<p>Via the Type Together foundry, Veronika Burian and José Scaglione released <a href="http://www.type-together.com/Portada">Portada</a>, a serif designed for the screen:</p>

<figure>
<img class="tl-email-image" data-id="1039181" src="http://gallery.tinyletterapp.com/ed299f0ca02cd22d04c76c6e447e68a7851ec03d/images/450da728-bc64-4940-8c5d-e1a3e3d5c993.png" /> 
</figure>

<p style="text-align: center;">¶ ¶ ¶</p>

<p>David Jonathan Ross and Roger Black teamed up to create <a href="https://djr.com/forma/">Forma</a>, a revival of the 1968 sans serif by the Italian foundry Nebiolo:</p>

<figure>
<img class="tl-email-image" data-id="1039225" src="http://gallery.tinyletterapp.com/ed299f0ca02cd22d04c76c6e447e68a7851ec03d/images/f3376968-b713-4b6c-a397-5efd9f5f0b2c.png" />
</figure>

<figure>
<img class="tl-email-image" data-id="1039249" src="http://gallery.tinyletterapp.com/ed299f0ca02cd22d04c76c6e447e68a7851ec03d/images/6c2978e2-3257-408f-b064-10f296ec41f7.jpg" />
</figure>

<p>From DJR’s site:</p>

<blockquote>
    <p>Forma DJR embodies the peculiar collision of midcentury modernist precision and the smudgy realities of metal, ink, and paper. This revival is not based on Forma’s original drawings, nor does it try to truly capture its designers’ original intent. Instead it brings new life to a bygone typographic era, and seeks to recapture everything that Roger has loved about Forma for so long.</p>
</blockquote>

<p>To my shame I had never heard of the lead designer of the project, Aldo Novarese, and so I was thankful for the Type Network to publish <a href="http://www.typenetwork.com/news/article/aldo-novarese/">a bio of Aldo and his work</a>. Likewise, <a href="http://djr.typenetwork.com/news/article/finding-forma">Indra Kupferschmid wrote a lovely companion piece</a> that describes how she&nbsp;found the original fonts to be used as research material for the revival:</p>

<figure>
<img class="tl-email-image" data-id="1039537" src="http://gallery.tinyletterapp.com/ed299f0ca02cd22d04c76c6e447e68a7851ec03d/images/6c002b65-6bab-40ec-a6bf-f9fd331d0ec0.jpg" />
</figure>

<h2>The Week in Type</h2>

<p>Type@Cooper West has updated their <a href="http://coopertype.org/workshops/west/">list of workshops</a> and upcoming <a href="http://coopertype.org/lectures/west">series of lectures</a>&nbsp;which are held at the San Francisco Public Library. I’m most excited for Stephen Coles’&nbsp;<a href="http://coopertype.org/event/whats_the_use_of_fonts_in_use">talk on Fonts In Use</a> and Nicolas Barker’s discussion on&nbsp;<a href="http://coopertype.org/event/visible-voices">the history of poetry</a>.</p>

<p style="text-align: center;">¶ ¶ ¶</p>

<p>Lauren Young wrote an all-too-brief account of <a href="http://www.atlasobscura.com/articles/the-fierce-forgotten-library-wars-of-the-ancient-world">the ancient world’s library wars</a> for Atlas Obscura:</p>

<blockquote>
    <p>When Alexander the Great died in 323 BC, his empire stretching from Macedon to the western border of India was divided into three dynasties: Antigonids, Seleucids, and Ptolemies. All of the kings of Macedonia competed to become the commander’s rightful successor. The struggle for royal supremacy spilled into scholarship and preservation of Greek culture, giving way to a new wave of elaborate libraries.</p>
</blockquote>

## Letter of the Week

<p>I was bumbling around on the <a href="http://www.typenetwork.com/">Type Network</a> the other day and I gasped when I found <a href="https://store.typenetwork.com/foundry/victoriarushton/fonts/marcia">Marcia by Victoria Rushton</a> and the K! Oh, lord. My heart strings...</p>

<figure>
    <img class="tl-email-image" data-id="1051513" src="http://gallery.tinyletterapp.com/ed299f0ca02cd22d04c76c6e447e68a7851ec03d/images/6647ead7-0e67-46ce-8128-0cfd44086e89.png" />
</figure>
