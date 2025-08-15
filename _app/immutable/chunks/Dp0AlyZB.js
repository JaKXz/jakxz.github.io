import"./NZTpNUN0.js";import"./C4LJwtm1.js";import{C as u,J as t,F as r,G as k,W as o,X as e,Z as d}from"./MC4F4Hfg.js";import{h as p}from"./DAYWDH44.js";const m={title:"Write React components like an essay",date:"2023-02-09",updated:"2025-05-08",categories:["react","web","dev"]},{title:b,date:v,updated:x,categories:P}=m;var h=u(`<p>If you’re a developer who writes React components, you may have found yourself wondering how to structure your code to make it more readable and maintainable.
One way to approach this is to think of your component code like an essay.</p> <p>In a well-written essay, the main point (or thesis) is usually near the beginning of the piece, with supporting arguments and evidence following in order of relevance.
Similarly, in a React component, you can put the main export of your file as close to the top as possible, like the “thesis” of your code.
Then, put supporting “arguments” (helpers, subcomponents, etc.) immediately following in order of relevance and use.</p> <p>Let’s look at an example of a <code>&lt;Profile /&gt;</code> component:</p> <pre class="language-tsx"><!></pre> <p>Spotted the problem?
The <code>&lt;Profile /&gt;</code> component, the <em>main export of this file</em> and most likely the reason you’re opening the file called <code>Profile.tsx</code>, is buried under a lot of supporting code.
If you’re trying to debug an issue in this component, you have to wade through a lot of code before you find the entry point; at best, it’s supporting code, and at worst its just noise and red herrings taking away cognitive budget.
By reordering the code to put the main export first, you can make it easier for other developers (or your future self!) to quickly understand what the component is doing and find the relevant code.</p> <p>Here’s an example of what the same <code>&lt;Profile /&gt;</code> component could look like if it followed the essay structure:</p> <pre class="language-tsx"><!></pre> <p>By structuring your React components like an essay, you can make your code more readable, easier to maintain, and quicker to understand.
Give it a try in your own projects and see how it works for you!</p> <p>I also think this could be applicable to non React code;
you would just need to determine what the “thesis” is and see if it makes sense to use “supporting arguments” as described here.</p>`,1);function T(c){var s=h(),n=t(r(s),6),l=o(n);p(l,()=>`<code class="language-tsx"><span class="token comment">// app/components/Profile.tsx (types omitted for brevity)</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token comment">// N more imports</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getProfile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token comment">// ...</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">function</span> <span class="token function">utilThatDoesSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> <span class="token function-variable function">SubComponentThatTakesPartialProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">A_CONSTANT</span> <span class="token operator">=</span> <span class="token string">'CONSTANT_VALUE'</span><span class="token punctuation">;</span>

<span class="token comment">// named or default exports are interchangeable in this story.</span>
<span class="token comment">// by this point, we might be at line 200+</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Profile</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> name<span class="token punctuation">,</span> <span class="token operator">...</span>rest <span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">inlineUtilBasedOnPropsButReturnsMarkup</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
			...
			</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SubcomponentThatTakesPartialProps</span></span> <span class="token spread"><span class="token punctuation">&#123;</span><span class="token operator">...</span>rest<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
		</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),e(n);var a=t(n,6),i=o(a);p(i,()=>`<code class="language-tsx"><span class="token comment">// app/components/Profile.tsx (types omitted for brevity)</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token comment">// N more imports, like the "introductory" sentences that bring in hooks, shared helper functions, and so on</span>

<span class="token keyword">const</span> <span class="token constant">A_CONSTANT</span> <span class="token operator">=</span> <span class="token string">'global setup'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">QUERY_LIMIT</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// etc.</span>

<span class="token comment">// now, the thesis, most of the reason why a dev would come to this file</span>
<span class="token comment">// *most* of the time this will start at line 30 or less when arranged this way!</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Profile</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> name<span class="token punctuation">,</span> <span class="token operator">...</span>rest <span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">const</span> <span class="token punctuation">[</span>i18n<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">usei18n</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// and so on!</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
			</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Subcomponent</span></span><span class="token punctuation">></span></span><span class="token punctuation">&#123;</span><span class="token function">helper</span><span class="token punctuation">(</span><span class="token operator">...</span>rest<span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Subcomponent</span></span><span class="token punctuation">></span></span><span class="token plain-text">
		</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// supporting components (maybe broken out into their own "essays" as they become more complex)</span>
<span class="token keyword">function</span> <span class="token function">Subcomponent</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> children <span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">&#123;</span>children<span class="token punctuation">&#125;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">function</span> <span class="token function">helper</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token comment">// Many complex lines</span>
<span class="token punctuation">&#125;</span></code>`),e(a),d(4),k(c,s)}export{T as default,m as metadata};
