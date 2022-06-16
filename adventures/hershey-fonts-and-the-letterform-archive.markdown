---
layout: layouts/note.njk
title: Hershey Fonts and the Letterform Archive
date: 2016-07-19 00:42:00 -07:00
City: San Francisco
Country: California
---

<p>Amidst a cacophony of movement and noise I now find myself with a spare moment or two to collect my thoughts. I’m lounging on the terrace outside my new apartment, watching the sun set behind&nbsp;Sutro Tower and I’m trying to find some way to apologize for missing last week’s <em>Adventures</em>.</p>

<p>But, alas, there’s not much time for apologies.</p>

<p>We have far too much to discuss.<br/>
<br/>
¶¶¶<br/>
<br/>
On Tuesday evening I headed over to the <a href="http://sfpl.org/">SFPL</a> to watch the second talk in the series held by the <a href="http://coopertype.org/lectures/west">Cooper West</a>, this time by the type designer <a href="http://www.kiosk-fonts.de/">Frank Greißhammer</a>. I had no idea what to expect but I immediately found myself swooning over Frank’s work.</p>

<p>The talk began with a wonderful introduction on the primary ingredients of type design; food, wine, a gang of fine accomplices. But “good humor is required for good type design,” Frank argued, “…and the most obscure side projects can serve as inspiration.” This was when Frank began showing his research about <a href="https://en.wikipedia.org/wiki/Hershey_fonts">the Hershey fonts</a>, designed by A.V.Hershey.</p>

<p>A Navy physicist who went on to design a number of peculiar typefaces, Hershey was a type designer almost by accident, and out of mathematical curiosity he somehow found himself plotting a number of early vector fonts. Yet listening to Frank describe Hershey’s work was utterly fascinating in so many ways, especially considering that Frank hopes to release <a href="https://github.com/frankrolf/hershey-fonts">the fonts</a> so that they’re publicly available to all.<br/>
<br/>
<img class="tl-email-image" data-id="917729" height="480" src="http://gallery.tinyletterapp.com/ed299f0ca02cd22d04c76c6e447e68a7851ec03d/images/5289c03e-585f-4e8c-baf4-6b95d4474ec7.jpg" style="width: 640px; max-width: 640px;" width="640"/>
<br/>
When I asked Frank after the talk what he thought these typefaces might be used for he said that he had no idea, he was simply interested in what graphic designers might do with this “Cold War aesthetic,” as he put it.<br/>
<br/>
I’ll be sure to add some examples of the Hershey fonts&nbsp;to&nbsp;next week’s <em>Adventures</em>.<br/>
<br/>
¶¶¶</p>

<p>Zach Leatherman has written <a href="https://www.zachleat.com/web/comprehensive-webfonts/">a comprehensive guide to webfonts</a> which is designed to be used as a reference whenever you might find yourself drowning in the murky waters of loading and caching font resources. Bookmark this for later because I guarantee it’ll come in useful at one point or another.<br/>
<br/>
¶¶¶<br/>
<br/>
On a similar note, the browser rendering engine that powers Safari commonly known as Webkit has been updated to now <a href="https://webkit.org/blog/6643/improved-font-loading/?utm_source=CSS-Weekly&amp;utm_campaign=Issue-222&amp;utm_medium=email">timeout when the request for a font takes more than 3 seconds</a>. This might sound like a relatively boring announcement about webfont loading and certainly beyond the scope of a newsletter about typography but I cannot help but draw attention to this piece of news as perhaps one of the most important developments in recent months.</p>

<p>Font loading is a crucial element of web design as it impacts aesthetics, readability and performance. If we simply load a webfont on a page without taking the time to consider how it loads then it’s very likely that the file will block the rendering of the text.<br/>
<br/>
Take the following example that occurred several years ago on the Slate website, as <a href="https://www.zachleat.com/web/mitt-romney-webfont-problem/">highlighted by none other than Zach Leatherman</a>:<br/>
<br/>
<img class="tl-email-image" data-id="917597" height="370" src="http://gallery.tinyletterapp.com/ed299f0ca02cd22d04c76c6e447e68a7851ec03d/images/16128469-ca3a-41e2-b068-43987d48a428.jpg" style="width: 640px; max-width: 640px;" width="640" />By all means, the website loads perfectly well. All the text of this website was hidden before Titling Gothic (the titling font) appeared on our screens. However, there was one very important word that failed to load<br/>
<br/>
<img class="tl-email-image" data-id="917601" height="370" src="http://gallery.tinyletterapp.com/ed299f0ca02cd22d04c76c6e447e68a7851ec03d/images/190d24ce-6f4b-4c1e-b093-d383df153631.jpg" style="width: 640px; max-width: 640px;" width="640" /></p>

<p>This is because the word <em>Not</em> was italicised, which then requires a separate italic font to be requested and downloaded over the network. And, if that request fails for whatever reason then we would simply never see the word at all.</p>

<p>Zach has argued elsewhere that this approach is a “<em>performance anti-pattern</em>” and he’s convinced me that we cannot let the browser do whatever it wants when it comes to font loading, despite this small improvement to Webkit. This is because font loading is much more than a developer concern: it is essential to the integrity of the text itself, and so it’s our duty as designers and developers to <a href="https://css-tricks.com/loading-web-fonts-with-the-web-font-loader/">embrace the problem</a> rather than to pretend it doesn’t exist.</p>

<p>However, there’s something about&nbsp;webfont loading that inspires me; once we admit that this is a problem then we see how much work is left to be done in the field, and we see how our control over the network is still left partial and incomplete.<br/>
<br/>
¶¶¶</p>

Rarely do type foundries return to the scene of the crime and look back at their work. But Typotheque has done just that with <a href="https://www.typotheque.com/blog/parmigiano_two_years_later">a retrospective</a> of their typeface <a href="https://www.typotheque.com/fonts/parmigiano_text">Parmigiano</a>:<br/>

<br/>

<img class="tl-email-image" data-id="917605" height="480" src="http://gallery.tinyletterapp.com/ed299f0ca02cd22d04c76c6e447e68a7851ec03d/images/db45ca0e-0181-4d17-8a94-7f5aa22db8c5.jpg" style="width: 640px; max-width: 640px;" width="640" />

<p>Typotheque also recently designed the <a href="https://twitter.com/typotheque/status/751421648138559488">stamps for Slovakia</a>.<br/>
<br/>
¶¶¶</p>

<p>Etsy’s Infrastructure Chief of Staff&nbsp;Lara Hogan&nbsp;sat down with <a href="https://dribbble.com/jockinthebox">Thomas Jockin</a> at Type Thursday and <a href="https://medium.com/type-thursday/weighing-aesthetics-and-speed-how-your-typography-decisions-may-affect-performance-299a4ea8b273#.81yw0ug1c">talked about how typographic decisions can greatly influence web performance.</a></p>

<p>Take this great section from Lara’s book, <a href="http://designingforperformance.com/"><em>Designing Performance</em></a>, where she writes:</p>

<blockquote>
Web fonts add more requests and page weight to your site. Fonts are the classic example of weighing aesthetics and page speed; it’s important to focus on making fonts as efficient as possible, loading them deliberately, and measuring their impact on both performance and engagement metrics to make sure they’re worth including.
</blockquote>
¶¶¶

<p>Over <a href="http://www.thepytefoundry.net/">on the Pyte Foundry</a>, <a href="http://www.ellmerstefan.net/">Ellmer Stefan</a>&nbsp;has decided to publish a new display typeface on every Monday of 2016. These typefaces are only available for a limited however, so be sure to jump on the ones that take your fancy.&nbsp;Here’s a closer&nbsp;look at Epitome, for example:</p>
<br/>

<img class="tl-email-image" data-id="917617" height="377" src="http://gallery.tinyletterapp.com/ed299f0ca02cd22d04c76c6e447e68a7851ec03d/images/cf622647-8794-40d9-8fc2-446420c42322.png" style="width: 524px; max-width: 524px;" width="524" />

As I&nbsp;scroll&nbsp;through the list&nbsp;I can’t help but eye the names carefully: Epitome, Overdose, Overdone, Throng, Italian, Flounce, Umbra, Houdini. They’re simply perfect names.<br/>

<br/>
Ellmer even made a rather handy gif of the collection so far:<br/>
<br/>
<img class="tl-email-image" data-id="917705" height="680" src="http://gallery.tinyletterapp.com/ed299f0ca02cd22d04c76c6e447e68a7851ec03d/images/62d1dc54-dba8-4528-bc49-2a1c679946d6.gif" style="width: 640px; max-width: 640px;" width="640" /><br/>
<br/>
¶¶¶
<p>Nicole Philliphs of <a href="http://www.typographher.com/">Typograph.her</a> fame linked to <a href="https://www.fontshop.com/content/magic-polygon">a post on the Font Shop blog</a> about the relationships between leading, font-size, column width and tracking. In turn, this reminded me of an excellent article by friend of the show Tim Brown where he describes the&nbsp;relationship between various properties of typesetting as <a href="http://nicewebtype.com/notes/2012/02/03/molten-leading-or-fluid-line-height/">molten leading</a>.</p>

<p>I think about this post all the time: Tim argues that if we set the font-size of an element then we must also take into consideration the line-height and line-length. He noted that “adjusting any one of these elements without also adjusting the others is a recipe for uncomfortable reading, which is one reason designers have such a difficult time with fluid web layout.”</p>

<p>¶¶¶</p>

<p>On Thursday I headed over to the <a href="http://letterformarchive.org/">Letterform Archive</a>&nbsp;with <a href="https://johndjameson.com/">John Jameson</a>&nbsp;for an introductory tour. It was here we witnessed the dark magic of&nbsp;thousands of pieces of graphic material, with everything from posters and catalogues to dictionaries and calligraphy manuals.</p>

<p>But what I remember most fondly from this visit were the type specimens.&nbsp;</span></p>

<img class="tl-email-image" data-id="917697" height="480" src="http://gallery.tinyletterapp.com/ed299f0ca02cd22d04c76c6e447e68a7851ec03d/images/d7175907-e322-41c2-abf2-134e3c418955.jpg" />

<p>Kate Robinson, the Collections Associate of the Archive, led us into the&nbsp;basement which isn’t part of the standard tour and we were greeted with countless numbers of specimens, gathered&nbsp;from all over the world. The names of type foundries that you read about in dusty old books adorn the shelves and the quality of the work is simply breathtaking.&nbsp;</p>

<p>And so I cannot recommend visiting the Archive enough. If letters are even remotely of interest to you, and you happen to be in the Bay Area, then you should make it a priority and <a href="http://letterformarchive.org/visit/">book a visit</a>.</p>

<p>¶¶¶</p>

<p>Last month there was an interesting interview over on <a href="https://fontstand.com/articles/emigre">the Fontstand blog</a> with Rudy VanderLans, co-founder of the esteemed type foundry and once-magazine-publisher <a href="http://www.emigre.com/">Emigre</a>:</p>

<blockquote>
    We coined this term ‘Infill-ism’ because it’s something that we’ve been thinking about a lot lately. It’s easy to imagine that with each addition, there are fewer type design options left to explore, since type design is restricted by the structure of the alphabetic characters. And, although the options are technically infinite, it becomes increasingly difficult to see the differences between designs. We’re left with filling in the gaps, and the gaps are getting smaller and smaller. We’re starting to question the point of adding one more variation. We think it’s a healthy thing to constantly ask yourself whether what you do has value, not just commercially, but also culturally, technically and artistically.
</blockquote>

<p>Everything from here on out, VanderLans argues, will be nothing more than remixes or slight adjustments to the work that came before.</p>

<p>Thankfully, the type designer <a href="https://klim.co.nz/blog/welcome-to-the-infill-font-foundry">Kris Sowersby replied</a> to this brand of cynicism and, <a href="http://typographica.org/on-typography/rejecting-infill-ism-and-waterfalls-of-mediocrity/">much like Stephen Coles’s response</a>, he argued against the belief that the art of type design has hit a dead end:</p>

<blockquote>
Every generation of type designers has taken inspiration from/mercilessly plundered the past, including Emigre. This is how the profession has slowly, but inexorably, flourished into new styles and genres. VanderLans frames our contemporary efforts as simply filling in the gaps, and during his impressive 30 year career these gaps have suddenly narrowed—the typographic equivalent of ice caps melting or overcrowding. I simply don’t see his narrow gaps. I see wide open fields of possibility, and I see my peers and colleagues in the type industry working hard and making new, interesting type.
</blockquote>

<p>I like that VanderLans decided to <a href="https://klim.co.nz/blog/tilting-at-windmills/">reply to Kris’ comments</a> on the Klim website, although I feel that he didn’t appear to address the finer details of the argument.</p>

<p>¶¶¶</p>

<p>And finally,&nbsp;Sumner Stone wrote published an interesting article on <a href="http://www.stonetypefoundry.com/typohjune2016.html">the history of the serif</a>, although bizarrely all of the text on the post is made up of gifs.</p>

<h2>New Type Releases</h2>
Klim Type released two new faces in the same family: Financier <a href="https://klim.co.nz/retail-fonts/financier-text/">Text</a> and <a href="https://klim.co.nz/retail-fonts/financier-display/">Display</a>. Below we have Financier Display Light:

<img class="tl-email-image" data-id="917709" src="http://gallery.tinyletterapp.com/ed299f0ca02cd22d04c76c6e447e68a7851ec03d/images/31f005c1-3c26-4296-adb6-dd64c2585501.png" />

<h2>Letter of the Week</h2>
<p>This week I found a rare oddity in the Letterform Archive’s copy of&nbsp;<em><a href="https://www.amazon.com/Type-Visual-History-Typefaces-Graphic/dp/3836544806">Type: A Visual History of Typefaces &amp; Graphic Styles</a>.&nbsp;</em>It’s a capital ‘B’ made out of a collection of moustachioed gentlemen:</p>

<img class="tl-email-image" data-id="917717" src="http://gallery.tinyletterapp.com/ed299f0ca02cd22d04c76c6e447e68a7851ec03d/images/fd206d77-2a31-49f4-86c1-68f77aa1bf12.jpg"/>

<p>It is perhaps the greatest crime to have been committed in the history of typography.</p>
