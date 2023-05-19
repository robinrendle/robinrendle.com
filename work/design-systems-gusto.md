---
layout: layouts/work/project.njk
title: Gusto Design System
extract: Rebranding the app and fixing the design system along the way.
date: 2023-04-29 09:00:00
---

<div class="carousel">
  <figure class="work-title">
    <img src="/images/work/gusto/gusto-rebrand.webp" alt="A screenshot of the new Gusto homepage after the rebrand"/>
    <figcaption>
      <div>
        <h2>Gusto</h2>
        <h3>Designing a design system.</h3>
      </div>
    </figcaption>
  </figure>

  <figure>
    <img src="/images/work/gusto/gusto-logo-rebrand.svg" />
    <figcaption>
      In 2018, the team at Gusto started work on a rebrand. This was exciting news because it was an opportunity to tackle our inconsistent design patterns and accessibility problems across our web app, too.
    </figcaption>
  </figure>

  <figure>
    <img src="/images/work/gusto/ui-engineer-job.webp" loading="lazy" alt="A screenshot of a document I wrote to convince design leadership to hire UI engineers. It worked!"/>
    <figcaption>
      So I panic-petitioned leadership to hire a dedicated design systems team and, thankfully, my pitch paid off — we hired two amazing UI engineers who quickly became my mentors.
    </figcaption>
  </figure>

  <figure>
    <img src="/images/work/gusto/run-payroll.webp" loading="lazy" alt="An example of our form components, in the new Gusto style"/>
    <figcaption>
      The design team had provided a few hints about how the brand might apply to the app but we started with the most common components first: forms, breadcrumbs, navigation, typography.
    </figcaption>
  </figure>

  <figure>
    <img src="/images/work/gusto/gusto-illustrations.webp" loading="lazy" />
    <figcaption>Auditing our interface was helpful, since I could then show the rest of the design team just how inconsistent our type styles, icons, illustrations, and components had become.</figcaption>
  </figure>

  <figure>
    <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FJaW80LDp5yRX1tbo1MSfG3%2FGusto-UI-Kit-v2%3Ftype%3Ddesign%26node-id%3D0%253A1%26t%3DgXpjqI71pCTEKla7-1"></iframe>
    <figcaption>We then went component-by-component to figure out how the system should work together in an updated version of our UI Kit.</figcaption>
  </figure>

  <figure class="radiocard">
    <p class="codepen" data-height="300" data-theme-id="20935" data-slug-hash="gxVXGd" data-user="robinrendle" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
      <span>See the Pen <a href="https://codepen.io/robinrendle/pen/gxVXGd">
      Gusto App – RadioCard Prototype</a> by Robin Rendle (<a href="https://codepen.io/robinrendle">@robinrendle</a>)
      on <a href="https://codepen.io">CodePen</a>.</span>
    </p>
    <figcaption>One problem we noticed was the inconsitent radio components in our app. So I explored a few prototypes, like this one here, and then we set to work deprecating the old variants.</figcaption>
  </figure>

  <figure>
    <pre class="language-css"><code class="language-css"><span class="token selector">table.big-table</span> <span class="token punctuation">{</span><br>  <span class="token selector">tr.big-table-row td.cell</span> <span class="token punctuation">{</span><br>    /* eternal screaming */<br>  <span class="token punctuation">}</span><br><span class="token punctuation">}</span></code></pre>
    <figcaption>Tables are vital for Gusto customers and unfortunately back then they had color accessibility and markup issues, multiple conflicting components, and thousands of lines of unnecessary CSS. So we dedicated quite a bit of time to consolidating them, too.</figcaption>
  </figure>

  <figure>
   <img src="/images/work/gusto/tabular-numbers.svg" loading="lazy"/> 
   <figcaption>We shipped neat typographic improvements here as well, such as using tabular numerals in tables — important details when customers are scanning row after row full of tax breakdowns and financial information.</figcaption>
  </figure>

  <figure>
   <img src="/images/work/gusto/typographic-scales.svg" loading="lazy"/> 
   <figcaption> 
    The year before I refactored our typography system so that we had sensible defaults for h1, h2, h3, etc. and this ended up paying off in a big way. All we had to do was plug in the new fonts.
  </figcaption>
</figure>

  <figure>
   <img src="/images/work/gusto/spreadsheet.webp" loading="lazy"/> 
   <figcaption>The design system at Gusto wasn’t just for our customer-facing app, but for our large suite of internal tools too. That’s why I worked with the team in Denver to extend our component library and build a fancy spreadsheet component that helped Gusto employees onboard large customers.</figcaption>
</figure>

  <figure>
    <img src="/images/work/gusto/drawer.webp" loading="lazy"/>
    <figcaption>During this time we worked closely with each of the product teams to discuss contributing to the component library. Tiny patterns, like this Drawer component, began to have keyboard shortcuts and accessibility affordances built in right from the start.</figcaption>
  </figure>

  <figure>
    <img src="/images/work/gusto/design-system-newsletter.webp" loading="lazy" alt="A screenshot of the Figma Design Systems publication website were they rather kindly let me write something about design systems and newsletters"/>
    <figcaption><div>Our weekly newsletter kept folks up to date on our work and this helped foster a sense of community. Here’s a thing I wrote for Figma about how <a href="https://www.designsystems.com/starting-a-newsletter-is-the-best-thing-you-can-do-for-your-design-system/">newsletters can help design systems work</a>.</div></figcaption>
  </figure>

  <figure>
    <img src="/images/work/gusto/gusto-rebrand.webp" alt="A screenshot of the new Gusto homepage after the rebrand"/>
    <figcaption>In the end, I’m most proud of raising the bar for accessibility in our app and greatly reducing the number of confusing, duplicate components that had developers scratching their heads. But I’m also proud of the team; we made our interface 1% better each day and built great foundations for the future. It was punk as hell.</figcaption>
  </figure>
</div>
