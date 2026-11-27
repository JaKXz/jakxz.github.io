import{A as e,K as t,M as n,W as r,ut as i}from"./DOkCj9nr.js";import"./ChBAxE3G.js";import{n as a}from"./C9mTJB0k.js";var o={title:`TDD doesn't have to be dogmatic`,seoDescription:`A flexible approach to test-driven development: start with behaviors, sketch a solution, and build reliable tests without rigid rules.`,date:`2023-03-06`,updated:`2023-03-06`,categories:[`TDD`,`testing`,`dev`],coverImage:`/images/markus-spiske-8CWoXxaqGrs-unsplash.jpg`,coverWidth:16,coverHeight:9,excerpt:`That's right, I said it`},s=n(`<pre class="twinkleplop language-tsx" data-language="tsx"><code><span class="l"><span class="tok function">describe</span><span class="tok punctuation">(</span><span class="tok string">&quot;component&quot;</span><span class="tok punctuation">,</span> <span class="tok punctuation">()</span> <span class="tok operator">=&gt;</span> <span class="tok punctuation">&#123;</span></span>
<span class="l">  <span class="tok identifier">it</span><span class="tok punctuation">.</span><span class="tok function">skip</span><span class="tok punctuation">(</span><span class="tok string">&quot;renders this by default&quot;</span><span class="tok punctuation">);</span></span>
<span class="l">  <span class="tok identifier">it</span><span class="tok punctuation">.</span><span class="tok function">skip</span><span class="tok punctuation">(</span><span class="tok string">&quot;&quot;</span><span class="tok punctuation">);</span></span>
<span class="l"><span class="tok punctuation">&#125;);</span></span></code></pre>`),c=n(`<pre class="twinkleplop language-tsx" data-language="tsx"><code><span class="l"><span class="tok keyword">function</span> <span class="tok function">MyComponent</span><span class="tok punctuation">(&#123;</span> <span class="tok operator">...</span><span class="tok identifier">props</span> <span class="tok punctuation">&#125;)</span> <span class="tok punctuation">&#123;</span></span>
<span class="l">  <span class="tok keyword">return</span> <span class="tok punctuation">(</span></span>
<span class="l">    <span class="tok punctuation">&lt;</span><span class="tok tag_name">div</span><span class="tok punctuation">&gt;</span></span>
<span class="l">      <span class="tok punctuation">&lt;</span><span class="tok tag_name">pre</span><span class="tok punctuation">&gt;&#123;</span><span class="tok constant">JSON</span><span class="tok punctuation">.</span><span class="tok function">stringify</span><span class="tok punctuation">(</span><span class="tok identifier">props</span><span class="tok punctuation">,</span> <span class="tok keyword">null</span><span class="tok punctuation">,</span> <span class="tok number">2</span><span class="tok punctuation">)&#125;&lt;/</span><span class="tok tag_name">pre</span><span class="tok punctuation">&gt;</span></span>
<span class="l">    <span class="tok punctuation">&lt;/</span><span class="tok tag_name">div</span><span class="tok punctuation">&gt;</span></span>
<span class="l">  <span class="tok punctuation">);</span></span>
<span class="l"><span class="tok punctuation">&#125;</span></span></code></pre>`),l=n(`<pre class="twinkleplop language-tsx" data-language="tsx"><code><span class="l"><span class="tok function">it</span><span class="tok punctuation">(</span><span class="tok string">&quot;renders this by default&quot;</span><span class="tok punctuation">,</span> <span class="tok punctuation">()</span> <span class="tok operator">=&gt;</span> <span class="tok punctuation">&#123;</span></span>
<span class="l">  <span class="tok function">expect</span><span class="tok punctuation">(</span><span class="tok identifier">wrapper</span><span class="tok punctuation">).</span><span class="tok function">toContainText</span><span class="tok punctuation">(</span><span class="tok operator">...</span><span class="tok identifier">props</span><span class="tok punctuation">);</span></span>
<span class="l"><span class="tok punctuation">&#125;);</span></span>
<span class="l"><span class="tok function">it</span><span class="tok punctuation">(</span><span class="tok string">&quot;does all the other things&quot;</span><span class="tok punctuation">);</span></span></code></pre>`),u=n(`<pre class="twinkleplop language-tsx" data-language="tsx"><code><span class="l"><span class="tok keyword">function</span> <span class="tok function">MyComponent</span><span class="tok punctuation">()</span> <span class="tok punctuation">&#123;</span></span>
<span class="l">    <span class="tok keyword">const</span> <span class="tok punctuation">[</span><span class="tok constant">i18n</span><span class="tok punctuation">]</span> <span class="tok operator">=</span> <span class="tok function">usei18n</span><span class="tok punctuation">();</span></span>
<span class="l">    <span class="tok comment">//...etc</span></span>
<span class="l">    <span class="tok keyword">return</span> <span class="tok punctuation">();</span></span>
<span class="l"><span class="tok punctuation">&#125;</span></span></code></pre>`),d=n(`<p>Write your tests first!
Or don’t!
It doesn’t matter.</p><p><strong><strong>As long as you end up incrementally improving your understanding of the problem, and confidence in your solution (i.e. end up with reliable tests) it’s successfully test-driven!</strong></strong></p><p>That’s it.
That’s the post.</p><p>If you’re curious, what I usually do looks something like this (using React as pseudocode):</p><ol><li>write out as many behaviours as I can think of in <code>.skip</code>ped or <code>.todo</code>’d tests:</li></ol><!><ol start="2"><li>then sketch out a solution</li></ol><!><ol start="3"><li>go back to the tests and fill them out one at at time …ish:</li></ol><!><ol start="4"><li>delete the sketched solution (optional)</li> <li>write a good implementation</li></ol><!><ol start="6"><li>get feedback in a pull / merge request</li> <li>add more tests I inevitably missed</li> <li>rinse and repeat</li></ol><p>But that’s not the right approach for every situation, and I change it up as necessary.</p><hr/><p>This post started as a conversation with a colleague about teaching TDD, and the obstacles that may come in the way;
especially the dogmatic mindset / “strict TDD is the only TDD”.</p>`,1);function f(n){var o=d(),f=t(r(o),5);a(f,{lang:`tsx`,code:`describe("component", () => {
  it.skip("renders this by default");
  it.skip("");
});`,children:(t,n)=>{var r=s();e(t,r)},$$slots:{default:!0}});var p=t(f,2);a(p,{lang:`tsx`,code:`function MyComponent({ ...props }) {
  return (
    <div>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
}`,children:(t,n)=>{var r=c();e(t,r)},$$slots:{default:!0}});var m=t(p,2);a(m,{lang:`tsx`,code:`it("renders this by default", () => {
  expect(wrapper).toContainText(...props);
});
it("does all the other things");`,children:(t,n)=>{var r=l();e(t,r)},$$slots:{default:!0}});var h=t(m,2);a(h,{lang:`tsx`,code:`function MyComponent() {
    const [i18n] = usei18n();
    //...etc
    return ();
}`,children:(t,n)=>{var r=u();e(t,r)},$$slots:{default:!0}}),i(4),e(n,o)}export{f as default,o as metadata};