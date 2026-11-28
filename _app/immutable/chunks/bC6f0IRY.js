import{G as e,N as t,dt as n,j as r,q as i}from"./Cd2pHszM.js";import"./B4pyeWhX.js";import{n as a}from"./DBUF4xth.js";var o={title:`Write React components like an essay`,seoDescription:`Structure React component files like an essay: put the main component first, then place helpers and subcomponents in order of usage.`,date:`2023-02-09`,updated:`2025-05-08`,categories:[`react`,`web`,`dev`]},s=t(`<pre class="twinkleplop language-tsx" data-language="tsx" data-line-jump="14"><code><span class="l" data-line-number="1"><span class="ln">1</span><span class="tok keyword">import</span> <span class="tok identifier">React</span> <span class="tok keyword">from</span> <span class="tok string">&quot;react&quot;</span><span class="tok punctuation">;</span></span>
<span class="l" data-line-number="2"><span class="ln">2</span><span class="tok comment">// N more imports</span></span>
<span class="l" data-line-number="3"><span class="ln">3</span></span>
<span class="l" data-line-number="4"><span class="ln">4</span><span class="tok keyword">async</span> <span class="tok keyword">function</span> <span class="tok function">getProfile</span><span class="tok punctuation">()</span> <span class="tok punctuation">&#123;</span></span>
<span class="l" data-line-number="5"><span class="ln">5</span>  <span class="tok comment">// ...</span></span>
<span class="l" data-line-number="6"><span class="ln">6</span><span class="tok punctuation">&#125;</span></span>
<span class="l" data-line-number="7"><span class="ln">7</span></span>
<span class="l" data-line-number="8"><span class="ln">8</span><span class="tok keyword">function</span> <span class="tok function">utilThatDoesSomething</span><span class="tok punctuation">()</span> <span class="tok punctuation">&#123;&#125;</span></span>
<span class="l" data-line-number="9"><span class="ln">9</span></span>
<span class="l" data-line-number="10"><span class="ln">10</span><span class="tok keyword">const</span> <span class="tok function">SubComponentThatTakesPartialProps</span> <span class="tok operator">=</span> <span class="tok punctuation">()</span> <span class="tok operator">=&gt;</span> <span class="tok punctuation">&#123;&#125;;</span></span>
<span class="l" data-line-number="11"><span class="ln">11</span></span>
<span class="l" data-line-number="12"><span class="ln">12</span><span class="tok keyword">const</span> <span class="tok constant">A_CONSTANT</span> <span class="tok operator">=</span> <span class="tok string">&quot;CONSTANT_VALUE&quot;</span><span class="tok punctuation">;</span></span>
<span class="l" data-line-number="13"><span class="ln">13</span><span class="tok comment">// and so on and so on...</span></span>
<span class="code-line-gap">186 lines omitted</span><span class="l" data-line-number="200" data-line-gap="186 lines omitted"><span class="ln">200</span><span class="tok keyword">export</span> <span class="tok keyword">default</span> <span class="tok keyword">function</span> <span class="tok function">Profile</span><span class="tok punctuation">(&#123;</span> <span class="tok identifier">name</span><span class="tok punctuation">,</span> <span class="tok operator">...</span><span class="tok identifier">rest</span> <span class="tok punctuation">&#125;)</span> <span class="tok punctuation">&#123;</span></span>
<span class="l" data-line-number="201"><span class="ln">201</span>  <span class="tok keyword">const</span> <span class="tok function">inlineUtilBasedOnPropsButReturnsMarkup</span> <span class="tok operator">=</span> <span class="tok punctuation">()</span> <span class="tok operator">=&gt;</span> <span class="tok punctuation">&#123;&#125;;</span></span>
<span class="l" data-line-number="202"><span class="ln">202</span>  <span class="tok keyword">return</span> <span class="tok punctuation">(</span></span>
<span class="l" data-line-number="203"><span class="ln">203</span>    <span class="tok punctuation">&lt;</span><span class="tok tag_name">div</span><span class="tok punctuation">&gt;</span></span>
<span class="l" data-line-number="204"><span class="ln">204</span>      ...</span>
<span class="l" data-line-number="205"><span class="ln">205</span>      <span class="tok punctuation">&lt;</span><span class="tok tag_name">SubcomponentThatTakesPartialProps</span> <span class="tok punctuation">&#123;</span><span class="tok operator">...</span><span class="tok identifier">rest</span><span class="tok punctuation">&#125;</span> <span class="tok punctuation">/&gt;</span></span>
<span class="l" data-line-number="206"><span class="ln">206</span>    <span class="tok punctuation">&lt;/</span><span class="tok tag_name">div</span><span class="tok punctuation">&gt;</span></span>
<span class="l" data-line-number="207"><span class="ln">207</span>  <span class="tok punctuation">);</span></span>
<span class="l" data-line-number="208"><span class="ln">208</span><span class="tok punctuation">&#125;</span></span></code></pre>`),c=t(`<pre class="twinkleplop language-tsx" data-language="tsx" data-line-jump="3"><code><span class="l" data-line-number="1"><span class="ln">1</span><span class="tok keyword">import</span> <span class="tok identifier">React</span> <span class="tok keyword">from</span> <span class="tok string">&quot;react&quot;</span><span class="tok punctuation">;</span></span>
<span class="l" data-line-number="2"><span class="ln">2</span><span class="tok comment">// N more imports, like the &quot;introductory&quot; sentences that bring in hooks, shared helper functions, and so on</span></span>
<span class="code-line-gap">21 lines omitted</span><span class="l" data-line-number="24" data-line-gap="21 lines omitted"><span class="ln">24</span><span class="tok keyword">const</span> <span class="tok constant">A_CONSTANT</span> <span class="tok operator">=</span> <span class="tok string">&quot;global setup&quot;</span><span class="tok punctuation">;</span></span>
<span class="l" data-line-number="25"><span class="ln">25</span><span class="tok keyword">const</span> <span class="tok constant">QUERY_LIMIT</span> <span class="tok operator">=</span> <span class="tok number">10</span><span class="tok punctuation">;</span> <span class="tok comment">// etc.</span></span>
<span class="l" data-line-number="26"><span class="ln">26</span></span>
<span class="l" data-line-number="27"><span class="ln">27</span><span class="tok comment">// now, the thesis, most of the reason why a dev would come to this file</span></span>
<span class="l" data-line-number="28"><span class="ln">28</span><span class="tok comment">// is visible with a lot less scrolling and much less cognitive budget</span></span>
<span class="l" data-line-number="29"><span class="ln">29</span><span class="tok keyword">export</span> <span class="tok keyword">function</span> <span class="tok function">Profile</span><span class="tok punctuation">(&#123;</span> <span class="tok identifier">name</span><span class="tok punctuation">,</span> <span class="tok operator">...</span><span class="tok identifier">rest</span> <span class="tok punctuation">&#125;)</span> <span class="tok punctuation">&#123;</span></span>
<span class="l" data-line-number="30"><span class="ln">30</span>  <span class="tok keyword">const</span> <span class="tok punctuation">[</span><span class="tok constant">i18n</span><span class="tok punctuation">]</span> <span class="tok operator">=</span> <span class="tok function">usei18n</span><span class="tok punctuation">();</span></span>
<span class="l" data-line-number="31"><span class="ln">31</span>  <span class="tok comment">// and so on!</span></span>
<span class="l" data-line-number="32"><span class="ln">32</span>  <span class="tok keyword">return</span> <span class="tok punctuation">(</span></span>
<span class="l" data-line-number="33"><span class="ln">33</span>    <span class="tok punctuation">&lt;</span><span class="tok tag_name">div</span><span class="tok punctuation">&gt;</span></span>
<span class="l" data-line-number="34"><span class="ln">34</span>      <span class="tok punctuation">&lt;</span><span class="tok tag_name">Subcomponent</span><span class="tok punctuation">&gt;&#123;</span><span class="tok function">helper</span><span class="tok punctuation">(</span><span class="tok operator">...</span><span class="tok parameter">rest</span><span class="tok punctuation">)&#125;&lt;/</span><span class="tok tag_name">Subcomponent</span><span class="tok punctuation">&gt;</span></span>
<span class="l" data-line-number="35"><span class="ln">35</span>    <span class="tok punctuation">&lt;/</span><span class="tok tag_name">div</span><span class="tok punctuation">&gt;</span></span>
<span class="l" data-line-number="36"><span class="ln">36</span>  <span class="tok punctuation">);</span></span>
<span class="l" data-line-number="37"><span class="ln">37</span><span class="tok punctuation">&#125;</span></span>
<span class="l" data-line-number="38"><span class="ln">38</span></span>
<span class="l" data-line-number="39"><span class="ln">39</span><span class="tok comment">// supporting components (maybe broken out into their own &quot;essays&quot; as they become more complex)</span></span>
<span class="l" data-line-number="40"><span class="ln">40</span><span class="tok keyword">function</span> <span class="tok function">Subcomponent</span><span class="tok punctuation">(&#123;</span> <span class="tok identifier">children</span> <span class="tok punctuation">&#125;)</span> <span class="tok punctuation">&#123;</span></span>
<span class="l" data-line-number="41"><span class="ln">41</span>  <span class="tok keyword">return</span> <span class="tok punctuation">&lt;</span><span class="tok tag_name">div</span><span class="tok punctuation">&gt;&#123;</span><span class="tok identifier">children</span><span class="tok punctuation">&#125;&lt;/</span><span class="tok tag_name">div</span><span class="tok punctuation">&gt;;</span></span>
<span class="l" data-line-number="42"><span class="ln">42</span><span class="tok punctuation">&#125;</span></span>
<span class="l" data-line-number="43"><span class="ln">43</span></span>
<span class="l" data-line-number="44"><span class="ln">44</span><span class="tok keyword">function</span> <span class="tok function">helper</span><span class="tok punctuation">(</span><span class="tok operator">...</span><span class="tok parameter">args</span><span class="tok punctuation">)</span> <span class="tok punctuation">&#123;</span></span>
<span class="l" data-line-number="45"><span class="ln">45</span>  <span class="tok comment">// Many complex lines</span></span>
<span class="l" data-line-number="46"><span class="ln">46</span><span class="tok punctuation">&#125;</span></span></code></pre>`),l=t(`<p>If you’re a developer who writes React components, you may have found yourself wondering how to structure your code to make it more readable and maintainable.
One way to approach this is to think of your component code like an essay.</p><p>In a well-written essay, the main point (or thesis) is usually near the beginning of the piece, with supporting arguments and evidence following in order of relevance.
Similarly, in a React component, you can put the main export of your file as close to the top as possible, like the “thesis” of your code.
Then, put supporting “arguments” (helpers, subcomponents, etc.) immediately following in order of relevance and use.</p><p>Let’s look at an example of a <code>&lt;Profile /&gt;</code> component:</p><!><p>Spotted the problem?
The <code>&lt;Profile /&gt;</code> component, the <em>main export of this file</em> and most likely the reason you’re opening the file called <code>Profile.tsx</code>, is buried under a lot of supporting code.
If you’re trying to debug an issue in this component, you have to wade through a lot of code before you find the entry point; at best, it’s supporting code, and at worst it’s just noise and red herrings taking away cognitive budget.
By reordering the code to put the main export first, you can make it easier for other developers (or your future self!) to quickly understand what the component is doing and find the relevant code.</p><p>Here’s an example of what the same <code>&lt;Profile /&gt;</code> component could look like if it followed the essay structure:</p><!><p>By structuring your React components like an essay, you can make your code more readable, easier to maintain, and quicker to understand.
Give it a try in your own projects and see how it works for you!</p><p>I also think this could be applicable to non React code;
you would just need to determine what the “thesis” is and see if it makes sense to use “supporting arguments” as described here.</p>`,1);function u(t){var o=l(),u=i(e(o),3);a(u,{lang:`tsx`,meta:`[app/components/Profile.tsx] :line-numbers line-jump="14:200" nocopy`,title:`app/components/Profile.tsx`,"line-jump":`14:200`,nocopy:!0,code:`import React from "react";
// N more imports

async function getProfile() {
  // ...
}

function utilThatDoesSomething() {}

const SubComponentThatTakesPartialProps = () => {};

const A_CONSTANT = "CONSTANT_VALUE";
// and so on and so on...
export default function Profile({ name, ...rest }) {
  const inlineUtilBasedOnPropsButReturnsMarkup = () => {};
  return (
    <div>
      ...
      <SubcomponentThatTakesPartialProps {...rest} />
    </div>
  );
}`,children:(e,t)=>{var n=s();r(e,n)},$$slots:{default:!0}});var d=i(u,3);a(d,{lang:`tsx`,meta:`[app/components/Profile.tsx] :line-numbers line-jump="3:24" nocopy`,title:`app/components/Profile.tsx`,"line-jump":`3:24`,nocopy:!0,code:`import React from "react";
// N more imports, like the "introductory" sentences that bring in hooks, shared helper functions, and so on
const A_CONSTANT = "global setup";
const QUERY_LIMIT = 10; // etc.

// now, the thesis, most of the reason why a dev would come to this file
// is visible with a lot less scrolling and much less cognitive budget
export function Profile({ name, ...rest }) {
  const [i18n] = usei18n();
  // and so on!
  return (
    <div>
      <Subcomponent>{helper(...rest)}</Subcomponent>
    </div>
  );
}

// supporting components (maybe broken out into their own "essays" as they become more complex)
function Subcomponent({ children }) {
  return <div>{children}</div>;
}

function helper(...args) {
  // Many complex lines
}`,children:(e,t)=>{var n=c();r(e,n)},$$slots:{default:!0}}),n(2),r(t,o)}export{u as default,o as metadata};