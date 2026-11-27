import{A as e,K as t,M as n,W as r,ut as i}from"./DOkCj9nr.js";import"./ChBAxE3G.js";import{n as a}from"./C9mTJB0k.js";var o={title:`A practical example of the :where() pseudo-selector`,seoDescription:`See a practical CSS :where() example that groups heading selectors without raising specificity and targets the first heading in a container.`,date:`2023-05-07`,updated:`2023-05-07`,categories:[`css`,`web`,`dev`,`TIL`],coverImage:`/images/kelly-sikkema-mdADGzyXCVE-unsplash.jpg`,coverWidth:16,coverHeight:9,excerpt:`This is how it clicked for me`},s=n(`<pre class="twinkleplop language-scss" data-language="scss"><code><span class="l"><span class="tok selector_class">.container</span> <span class="tok punctuation">&#123;</span></span>
<span class="l">  <span class="tok selector">h1</span>,</span>
<span class="l">  <span class="tok selector">h2</span>,</span>
<span class="l">  <span class="tok selector">h3</span>,</span>
<span class="l">  <span class="tok selector">h4</span>,</span>
<span class="l">  <span class="tok selector">h5</span>,</span>
<span class="l">  <span class="tok selector">h6</span> <span class="tok punctuation">&#123;</span></span>
<span class="l">    <span class="tok property">margin</span><span class="tok punctuation">:</span> <span class="tok number">0</span><span class="tok punctuation">;</span></span>
<span class="l">  <span class="tok punctuation">&#125;</span></span>
<span class="l"><span class="tok punctuation">&#125;</span></span></code></pre>`),c=n(`<pre class="twinkleplop language-scss" data-language="scss"><code><span class="l"><span class="tok selector_class">.container</span> <span class="tok punctuation">&#123;</span></span>
<span class="l">  <span class="tok selector">h1</span>,</span>
<span class="l">  <span class="tok selector">h2</span>,</span>
<span class="l">  <span class="tok selector">h3</span>,</span>
<span class="l">  <span class="tok selector">h4</span>,</span>
<span class="l">  <span class="tok selector">h5</span>,</span>
<span class="l">  <span class="tok selector">h6</span> <span class="tok punctuation">&#123;</span></span>
<span class="l">    <span class="tok selector">&amp;</span><span class="tok selector_pseudo">:first-of-type</span> <span class="tok punctuation">&#123;</span></span>
<span class="l">      <span class="tok property">margin</span><span class="tok punctuation">:</span> <span class="tok number">0</span><span class="tok punctuation">;</span></span>
<span class="l">    <span class="tok punctuation">&#125;</span></span>
<span class="l">  <span class="tok punctuation">&#125;</span></span>
<span class="l"><span class="tok punctuation">&#125;</span></span></code></pre>`),l=n(`<pre class="twinkleplop language-css" data-language="css"><code><span class="l"><span class="tok selector_class">.container</span> <span class="tok selector_pseudo">:where</span><span class="tok punctuation">(</span><span class="tok identifier">h1, h2, h3, h4, h5, h6</span><span class="tok punctuation">)</span><span class="tok selector_pseudo">:first-of-type</span> <span class="tok punctuation">&#123;</span></span>
<span class="l">  <span class="tok property">margin</span><span class="tok punctuation">:</span> <span class="tok number">0</span><span class="tok punctuation">;</span></span>
<span class="l"><span class="tok punctuation">&#125;</span></span></code></pre>`),u=n(`<p>This is a practical example of the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:where" rel="noopener noreferrer" target="_blank"><code>:where()</code><span role="img" aria-label="opens in a new tab"></span></a> pseudo-selector and how it clicked for me; the original docs are better than this, but I’m just writing this for me :)</p><p>Say you have a <code>.container</code> element, and you want to specify that all headings within that container should not have a margin:</p><!><p>In Sass, that’s easy enough.
In normal CSS we’d have to have multiple lines and it would be a bit of a chore to write, but still doable.
However, what if e.g. you only wanted the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type" rel="noopener noreferrer" target="_blank"><code>:first-of-type</code><span role="img" aria-label="opens in a new tab"></span></a> pseudo-class not to have a margin?</p><!><p>Sass does make it easier, but, we are getting deeply nested.
With the <code>:where()</code> pseudo-selector, we can simplify this to one line of CSS:</p><!><p>The <code>:where()</code> pseudo-selector is a way to group selectors together without creating a new specificity context.
That way we can apply the <code>:first-of-type</code> pseudo-class [or something else] to everything matched by the selectors provided, really easily!</p>`,1);function d(n){var o=u(),d=t(r(o),2);a(d,{lang:`scss`,code:`.container {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
}`,children:(t,n)=>{var r=s();e(t,r)},$$slots:{default:!0}});var f=t(d,2);a(f,{lang:`scss`,code:`.container {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    &:first-of-type {
      margin: 0;
    }
  }
}`,children:(t,n)=>{var r=c();e(t,r)},$$slots:{default:!0}});var p=t(f,2);a(p,{lang:`css`,code:`.container :where(h1, h2, h3, h4, h5, h6):first-of-type {
  margin: 0;
}`,children:(t,n)=>{var r=l();e(t,r)},$$slots:{default:!0}}),i(),e(n,o)}export{d as default,o as metadata};