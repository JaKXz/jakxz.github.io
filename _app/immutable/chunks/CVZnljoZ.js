import{A as e,K as t,M as n,W as r,ut as i}from"./DOkCj9nr.js";import"./ChBAxE3G.js";import{n as a,t as o}from"./C9mTJB0k.js";var s={title:`I attended the church of jj`,date:`2026-06-29`,updated:`2026-11-27`,categories:[`dev`,`vcs`,`git`,`jj`],coverWidth:16,coverHeight:9,excerpt:`and now I'm a true believer`},c=n(`<p>The fix I’ve just made is sitting in <code>@</code>, above <code>cache-restore</code>.
It belongs in <code>skip-unrelated-checks</code>, revision <code>zltuz</code>.
Meanwhile, <code>flaky-test-retry</code> also depends on <code>cache-restore</code>.</p><p>The other two bookmarks form a separate stack off <code>main</code>.
I want to keep those independent, and keep every PR small.</p>`,1),l=n(`<pre class="twinkleplop language-shellsession has-highlight" data-language="shellsession"><code><span class="l"><span class="tok prompt">$</span> <span class="tok identifier">jjst</span></span>
<span class="l"><span class="tok prompt">$</span> <span class="tok identifier">jjl</span></span>
<span class="l"></span>
<span class="l highlight"><span class="tok output">@  rsvqk  (no description set)</span></span>
<span class="l"><span class="tok output">│ ○  wztmk  jakxz/flaky-test-retry</span></span>
<span class="l"><span class="tok output">├─╯</span></span>
<span class="l"><span class="tok output">○  qpvqv  jakxz/cache-restore</span></span>
<span class="l highlight"><span class="tok output">○  zltuz  jakxz/skip-unrelated-checks</span></span>
<span class="l"><span class="tok output">│ ○  kqvnv  jakxz/other</span></span>
<span class="l"><span class="tok output">│ ○  nkmqx  jakxz/independent-wip</span></span>
<span class="l"><span class="tok output">├─╯</span></span>
<span class="l"><span class="tok output">◆  mvrqx  main</span></span></code></pre>`),u=n(`<p><code>jjsq --into zltuz</code> moves the changes from <code>@</code> into that earlier change.
Its descendants <strong><strong>rebase automatically</strong></strong>, and <em>their bookmarks follow</em>.
The independent stack stays put.</p><p>The fix’s old working-copy commit is consumed, leaving a fresh empty <code>@</code> above the rewritten <code>cache-restore</code>.
The surviving change IDs stay the same; their Git hashes have changed.</p><p>I didn’t have to check out and repair each dependent branch.
That was the first moment I thought: okay, this might be worth learning.</p>`,1),d=n(`<pre class="twinkleplop language-shellsession has-highlight" data-language="shellsession"><code><span class="l"><span class="tok prompt">$</span> <span class="tok identifier">jjsq</span> <span class="tok operator">--</span><span class="tok identifier">into</span> <span class="tok identifier">zltuz</span></span>
<span class="l"><span class="tok prompt">$</span> <span class="tok identifier">jjl</span></span>
<span class="l"></span>
<span class="l highlight"><span class="tok output">@  vkxnm  (empty) (no description set)</span></span>
<span class="l highlight"><span class="tok output">│ ○  wztmk  jakxz/flaky-test-retry</span></span>
<span class="l highlight"><span class="tok output">├─╯</span></span>
<span class="l highlight"><span class="tok output">○  qpvqv  jakxz/cache-restore</span></span>
<span class="l highlight"><span class="tok output">○  zltuz  jakxz/skip-unrelated-checks</span></span>
<span class="l"><span class="tok output">│ ○  kqvnv  jakxz/other</span></span>
<span class="l"><span class="tok output">│ ○  nkmqx  jakxz/independent-wip</span></span>
<span class="l"><span class="tok output">├─╯</span></span>
<span class="l"><span class="tok output">◆  mvrqx  main</span></span></code></pre>`),f=n(`<p>Of course, other people are also working.</p><p>After fetching, <code>main</code> has advanced to <code>pznks</code>.
Both stacks still branch off the older trunk revision, <code>mvrqx</code>.</p><p>In this example, <code>trunk()</code> resolves to <code>main@origin</code>, the main-branch tip I just fetched.
That’s the destination I want for both stacks.</p>`,1),p=n(`<pre class="twinkleplop language-shellsession has-highlight" data-language="shellsession"><code><span class="l"><span class="tok prompt">$</span> <span class="tok identifier">jjgf</span></span>
<span class="l"><span class="tok prompt">$</span> <span class="tok identifier">jjl</span></span>
<span class="l"></span>
<span class="l"><span class="tok output">@  vkxnm  (empty) (no description set)</span></span>
<span class="l"><span class="tok output">│ ○  wztmk  jakxz/flaky-test-retry</span></span>
<span class="l"><span class="tok output">├─╯</span></span>
<span class="l"><span class="tok output">○  qpvqv  jakxz/cache-restore</span></span>
<span class="l"><span class="tok output">○  zltuz  jakxz/skip-unrelated-checks</span></span>
<span class="l"><span class="tok output">│ ○  kqvnv  jakxz/other</span></span>
<span class="l"><span class="tok output">│ ○  nkmqx  jakxz/independent-wip</span></span>
<span class="l highlight"><span class="tok output">│ │ ◆  pznks  main</span></span>
<span class="l highlight"><span class="tok output">├─┴─╯</span></span>
<span class="l highlight"><span class="tok output">◆  mvrqx  previous main</span></span></code></pre>`),m=n(`<p>This is the longest command in the story, but I don’t have to enumerate every commit. <code>bookmarks(glob:&quot;jakxz/*&quot;)</code> selects my bookmarks, and <code>-b</code> rebases the branches containing them relative to the destination.
The dependencies within each stack survive the move.</p><p>There is a conflict in <code>cache-restore</code>.
For this example, upstream changed a cache setting that my change also edits; the retry change touches a different part of the workflow but inherits the conflict.</p><p><a href="https://docs.jj-vcs.dev/v0.47.0/conflicts/" rel="noopener noreferrer" target="_blank">jj records the conflict and completes the rebase<span role="img" aria-label="opens in a new tab"></span></a>.
I can see the resulting stacks, including the bits that still need my attention.</p>`,1),h=n(`<pre class="twinkleplop language-shellsession has-highlight" data-language="shellsession"><code><span class="l"><span class="tok prompt">$</span> <span class="tok identifier">jjrb</span> <span class="tok operator">-</span><span class="tok identifier">b</span> <span class="tok string">&#39;bookmarks(glob:&quot;jakxz/*&quot;)&#39;</span> <span class="tok operator">-</span><span class="tok identifier">o</span> <span class="tok string">&#39;trunk()&#39;</span></span>
<span class="l"><span class="tok prompt">$</span> <span class="tok identifier">jjl</span></span>
<span class="l"></span>
<span class="l highlight"><span class="tok output">@  vkxnm  (empty) (conflict)</span></span>
<span class="l highlight"><span class="tok output">│ ×  wztmk  jakxz/flaky-test-retry (conflict)</span></span>
<span class="l highlight"><span class="tok output">├─╯</span></span>
<span class="l highlight"><span class="tok output">×  qpvqv  jakxz/cache-restore (conflict)</span></span>
<span class="l"><span class="tok output">○  zltuz  jakxz/skip-unrelated-checks</span></span>
<span class="l"><span class="tok output">│ ○  kqvnv  jakxz/other</span></span>
<span class="l"><span class="tok output">│ ○  nkmqx  jakxz/independent-wip</span></span>
<span class="l"><span class="tok output">├─╯</span></span>
<span class="l highlight"><span class="tok output">◆  pznks  main</span></span>
<span class="l"><span class="tok output">◆  mvrqx  previous main</span></span></code></pre>`),g=n(`<p>Several changes are marked conflicted, but in this example the conflict starts in <code>qpvqv</code>.
I go there first with <code>jje</code> instead of trying to fix the same inherited conflict at every tip.</p><p><code>@</code> now marks <code>cache-restore</code>: I’m editing that change directly.
The empty, unnamed working-copy commit I left behind is discarded.</p><p>I still need to understand the overlapping edits.
jj hasn’t decided what the cache configuration should do.</p>`,1),_=n(`<pre class="twinkleplop language-shellsession has-highlight" data-language="shellsession"><code><span class="l"><span class="tok prompt">$</span> <span class="tok identifier">jje</span> <span class="tok identifier">qpvqv</span></span>
<span class="l"><span class="tok prompt">$</span> <span class="tok identifier">jjl</span></span>
<span class="l"></span>
<span class="l highlight"><span class="tok output">×  wztmk  jakxz/flaky-test-retry (conflict)</span></span>
<span class="l highlight"><span class="tok output">@  qpvqv  jakxz/cache-restore (conflict)</span></span>
<span class="l"><span class="tok output">○  zltuz  jakxz/skip-unrelated-checks</span></span>
<span class="l"><span class="tok output">│ ○  kqvnv  jakxz/other</span></span>
<span class="l"><span class="tok output">│ ○  nkmqx  jakxz/independent-wip</span></span>
<span class="l"><span class="tok output">├─╯</span></span>
<span class="l"><span class="tok output">◆  pznks  main</span></span>
<span class="l"><span class="tok output">◆  mvrqx  previous main</span></span></code></pre>`),v=n(`<p><code>jj resolve</code> opens the configured merge tool.
I reconcile the cache-setting edits, save the resolution, then inspect the result.
Editing the conflict markers directly in an editor would also work.</p><p>As <code>cache-restore</code> is rewritten, its child rebases again.
Here <code>flaky-test-retry</code> has no separate conflict, so the inherited one disappears too.
An independent conflict would still need resolving; jj doesn’t magically make incompatible edits agree.</p><p>No <code>rebase --continue</code> loop.
Fix the code, check the result, move on.</p>`,1),y=n(`<pre class="twinkleplop language-shellsession has-highlight" data-language="shellsession"><code><span class="l"><span class="tok prompt">$</span> <span class="tok identifier">jj</span> <span class="tok identifier">resolve</span></span>
<span class="l"><span class="tok prompt">$</span> <span class="tok identifier">jjst</span></span>
<span class="l"><span class="tok prompt">$</span> <span class="tok identifier">jjl</span></span>
<span class="l"></span>
<span class="l highlight"><span class="tok output">○  wztmk  jakxz/flaky-test-retry</span></span>
<span class="l highlight"><span class="tok output">@  qpvqv  jakxz/cache-restore</span></span>
<span class="l"><span class="tok output">○  zltuz  jakxz/skip-unrelated-checks</span></span>
<span class="l"><span class="tok output">│ ○  kqvnv  jakxz/other</span></span>
<span class="l"><span class="tok output">│ ○  nkmqx  jakxz/independent-wip</span></span>
<span class="l"><span class="tok output">├─╯</span></span>
<span class="l"><span class="tok output">◆  pznks  main</span></span>
<span class="l"><span class="tok output">◆  mvrqx  previous main</span></span></code></pre>`),b=n(`<p>Finally, push the bookmarks I changed.
The remote branches catch up, updating the existing PRs in place.
In this last graph, <code>@origin</code> beside a bookmark means its remote counterpart points to the same commit.</p><p>The PRs were already based on the appropriate parent branches.
This push updates their branch tips; it doesn’t create PRs or choose their base branches for me.</p><p>I have the fix in the right change, both stacks on current <code>main</code>, and the same small PRs ready for review.</p>`,1),x=n(`<pre class="twinkleplop language-shellsession has-highlight" data-language="shellsession"><code><span class="l"><span class="tok prompt">$</span> <span class="tok identifier">jjgp</span> <span class="tok operator">-</span><span class="tok identifier">b</span> <span class="tok string">&#39;glob:jakxz/*&#39;</span></span>
<span class="l"><span class="tok prompt">$</span> <span class="tok identifier">jjl</span></span>
<span class="l"></span>
<span class="l highlight"><span class="tok output">○  wztmk  jakxz/flaky-test-retry @origin</span></span>
<span class="l highlight"><span class="tok output">@  qpvqv  jakxz/cache-restore @origin</span></span>
<span class="l highlight"><span class="tok output">○  zltuz  jakxz/skip-unrelated-checks @origin</span></span>
<span class="l highlight"><span class="tok output">│ ○  kqvnv  jakxz/other @origin</span></span>
<span class="l highlight"><span class="tok output">│ ○  nkmqx  jakxz/independent-wip @origin</span></span>
<span class="l"><span class="tok output">├─╯</span></span>
<span class="l"><span class="tok output">◆  pznks  main</span></span>
<span class="l"><span class="tok output">◆  mvrqx  previous main</span></span></code></pre>`),S=n(`<h2 id="cold-open"><a href="#cold-open">Cold open</a></h2><p>You join me on a Sunday morning.</p><p>I’m under the weather and staying in for the day.</p><p>I know I have to work tomorrow on a complex stack of branches for the project I’m working on and to be honest, I’m dreading it.</p><hr/><h3 id="motivations"><a href="#motivations">Motivations</a></h3><p>This will not be a full-blown tutorial on <code>jj</code>.
There are many others out there and do a better job than I would here.
It’s the experience that made changing my workflow worthwhile.</p><p>I just want to tell the story that helped this new version control system click for me.
Before the rest of the story, here was my mindset:</p><p>Approaching <code>jj</code> face first into the cliff wall of documentation and aforementioned tutorials was entirely un-motivating to me.
I know my way around git well enough to navigate complex changes and collaborate quickly.
A big part of my existing workflow included complex interactive rebases with squashes, fixups, rewords, and even re-ordering commits as needed.
Shoutout to @mitmaro’s <a href="https://github.com/MitMaro/git-interactive-rebase-tool" rel="noopener noreferrer" target="_blank"><code>git-rebase-interactive-tool</code><span role="img" aria-label="opens in a new tab"></span></a>!</p><p>Learning another set of commands to do the same work was not an especially compelling use of a Sunday.</p><p><em>Using judgement and discernment (being principled) before adding to or changing your tools is a good thing.</em></p><p>But I kept running into the same problem: I wanted several small changes reviewed and merged separately, and maintaining the branches was becoming a job of its own.
For this story, the changes were CI improvements, the sort of small changes that can have large consequences if somebody glosses over them in a giant PR.
I wanted reviewers to be able to understand each one on its own.</p><h3 id="symbols--aliases"><a href="#symbols--aliases">Symbols &amp; aliases</a></h3><p>When I learned <code>git</code>, the Oh My Zsh aliases helped me get past all the repetitive typing.
I could memorize a short sequence of symbols for the thing I wanted to do.
The <code>jj</code> plugin gave me the same way in.</p><p>So I’ll use those aliases below and put their expansions in a table afterwards.
If a train of symbols helps you too, help yourself.</p><p>A few symbols in the log are worth knowing first:</p><ul><li><code>@</code> is the change I’m currently working on. <a href="https://docs.jj-vcs.dev/v0.47.0/working-copy/" rel="noopener noreferrer" target="_blank">The working copy is already a commit<span role="img" aria-label="opens in a new tab"></span></a>; most jj commands snapshot edits into it.</li> <li><code>zltuz</code>, <code>qpvqv</code>, etc. are <strong><strong>change IDs</strong></strong>.
They let me keep referring to a change across rewrites, even though its Git commit hash changes. I think they’re also referred to as revisions.</li> <li>A <strong><strong>bookmark</strong></strong> is a name such as <code>jakxz/cache-restore</code>.
It maps to a Git branch when pushing. <a href="https://docs.jj-vcs.dev/v0.47.0/bookmarks/#bookmark-updates" rel="noopener noreferrer" target="_blank">Bookmarks follow rewritten commits<span role="img" aria-label="opens in a new tab"></span></a>; they don’t automatically advance when creating a new child commit.</li></ul><p>That last distinction took some getting used to.
Naming a change, editing it, and starting the next change are separate things.</p><h4 id="aliases-i-have-memorized-for-stack-work-from-the-oh-my-zsh-plugin"><a href="#aliases-i-have-memorized-for-stack-work-from-the-oh-my-zsh-plugin">Aliases I have memorized for stack work from the Oh My Zsh plugin</a></h4><p>This is the useful subset for this story, rather than the entire plugin’s vocabulary:</p><table><thead><tr><th>Alias</th><th>Expands to</th><th>What I use it for</th></tr></thead><tbody><tr><td><code>jjst</code></td><td><code>jj status</code></td><td>Check the current change and its conflicts</td></tr><tr><td><code>jjl</code></td><td><code>jj log</code></td><td>See where the changes and bookmarks are</td></tr><tr><td><code>jjbt</code></td><td><code>jj bookmark track</code></td><td>Connect existing remote bookmarks</td></tr><tr><td><code>jjsq</code></td><td><code>jj squash</code></td><td>Move a fix into the change it belongs in</td></tr><tr><td><code>jjgf</code></td><td><code>jj git fetch</code></td><td>Bring in the remote’s latest state</td></tr><tr><td><code>jjrb</code></td><td><code>jj rebase</code></td><td>Move a branch or stack to a new base</td></tr><tr><td><code>jje</code></td><td><code>jj edit</code></td><td>Work directly on an existing change</td></tr><tr><td><code>jjgp</code></td><td><code>jj git push</code></td><td>Update the remote branches</td></tr><tr><td>-</td><td><code>jj resolve</code></td><td>Use a merge conflict resolution tool (e.g. <a href="https://mergiraf.org/usage.html#interactive-use-with-jujutsu" rel="noopener noreferrer" target="_blank"><code>mergiraf</code><span role="img" aria-label="opens in a new tab"></span></a>)</td></tr><tr><td>-</td><td><code>jj undo</code></td><td><a href="https://docs.jj-vcs.dev/v0.47.0/cli-reference/#jj-undo" rel="noopener noreferrer" target="_blank">Undo a local operation<span role="img" aria-label="opens in a new tab"></span></a></td></tr></tbody></table><p>Being able to <a href="https://docs.jj-vcs.dev/v0.47.0/cli-reference/#jj-undo" rel="noopener noreferrer" target="_blank">undo a local operation<span role="img" aria-label="opens in a new tab"></span></a> made experimenting much less intimidating.
Before pushing, if I didn’t like a rewrite, I could back it out and try again.
Note: Undoing local history doesn’t undo a push on the remote.</p><p>And pushing rewritten history still has checks: <code>jj</code> compares the remote with its last known state, similarly to <a href="https://docs.jj-vcs.dev/v0.47.0/bookmarks/#pushing-bookmarks-safety-checks" rel="noopener noreferrer" target="_blank"><code>git push --force-with-lease</code><span role="img" aria-label="opens in a new tab"></span></a>.
If somebody else has moved a branch incompatibly, I need to fetch and reconcile that before pushing.</p><hr/><h2 id="back-to-the-story"><a href="#back-to-the-story">Back to the story</a></h2><p>Then I found myself in a precarious (and familiar) position.
I’d made a fix while working near the top of a stack, and realized it belonged near the beginning.
There were already other changes depending on the one I needed to amend.</p><p>How painful would this be in my usual <code>git</code> workflow?</p><p>Very.</p><p>I could do it.
I also knew how much attention I was about to spend keeping track of which branch needed rebasing onto which rewritten commit.</p><h3 id="so-i-decided-to-try-jj-instead"><a href="#so-i-decided-to-try-jj-instead">So, I decided to try <code>jj</code> instead</a></h3><p><strong><strong>What follows is just a simplified reconstruction</strong></strong> including a representative conflict.
I’ve left out timestamps, Git hashes, and old remote history that your <code>jj log</code> would show you so the graph is readable; newest changes are at the top, and <code>◆</code> marks trunk history.
Each panel shows the commands followed by an abbreviated <code>jj log</code>.</p><!><h2 id="closing-thoughts"><a href="#closing-thoughts">Closing thoughts</a></h2><p>What won me over was making a correction near the bottom of a stack and watching the rest follow it, with the branch names still attached to the right changes.
Then doing the same thing across multiple stacks when <code>main</code> moved.
I could afford to keep the PRs small without signing up for quite so much branch maintenance.</p><p>That’s what made me a believer.</p><h3 id="semi-hot-takes"><a href="#semi-hot-takes">Semi-hot takes</a></h3><ol><li><p><code>jj</code> is to version control what “AI” / LLMs were supposed to be to productivity: for a very low cost (re: setup work, environmental, monetary, etc) it produces high quality <strong><strong><em>deterministic</em></strong></strong> output that enables and empowers instead of just sycophancy. <em>Disclaimer: LLMs helped me write and finish this post (mostly the mocked up <code>jj log</code>s), so with effort and tuning they can be made useful!</em></p></li> <li><p><code>jj</code> is how I see most of the industry interpreted branching and stacking and so on. <code>git</code> really was best suited for the Linux kernel development workflow via <a href="https://www.kernel.org/doc/html/latest/process/submitting-patches.html#the-canonical-patch-format" rel="noopener noreferrer" target="_blank">format-patch<span role="img" aria-label="opens in a new tab"></span></a>. Look for the lore on Torvalds’ opinions about this!</p></li></ol>`,1);function C(n){var s=S(),C=t(r(s),31);{let t=t=>{var n=c();i(),e(t,n)},n=t=>{a(t,{lang:`shellsession`,meta:`[jj log (simplified)] nocopy caption="The fix in @ belongs in zltuz." {4,8}`,title:`jj log (simplified)`,caption:`The fix in @ belongs in zltuz.`,nocopy:!0,code:`$ jjst
$ jjl

@  rsvqk  (no description set)
│ ○  wztmk  jakxz/flaky-test-retry
├─╯
○  qpvqv  jakxz/cache-restore
○  zltuz  jakxz/skip-unrelated-checks
│ ○  kqvnv  jakxz/other
│ ○  nkmqx  jakxz/independent-wip
├─╯
◆  mvrqx  main`,children:(t,n)=>{var r=l();e(t,r)},$$slots:{default:!0}})},r=t=>{var n=u();i(2),e(t,n)},s=t=>{a(t,{lang:`shellsession`,meta:`[jj log (simplified)] nocopy caption="zltuz contains the fix; its descendants have reflowed. Remote branches have not moved yet." {4-8}`,title:`jj log (simplified)`,caption:`zltuz contains the fix; its descendants have reflowed. Remote branches have not moved yet.`,nocopy:!0,code:`$ jjsq --into zltuz
$ jjl

@  vkxnm  (empty) (no description set)
│ ○  wztmk  jakxz/flaky-test-retry
├─╯
○  qpvqv  jakxz/cache-restore
○  zltuz  jakxz/skip-unrelated-checks
│ ○  kqvnv  jakxz/other
│ ○  nkmqx  jakxz/independent-wip
├─╯
◆  mvrqx  main`,children:(t,n)=>{var r=d();e(t,r)},$$slots:{default:!0}})},S=t=>{var n=f();i(2),e(t,n)},w=t=>{a(t,{lang:`shellsession`,meta:`[jj log (simplified)] nocopy caption="main has advanced; both feature stacks still start at mvrqx." {11-13}`,title:`jj log (simplified)`,caption:`main has advanced; both feature stacks still start at mvrqx.`,nocopy:!0,code:`$ jjgf
$ jjl

@  vkxnm  (empty) (no description set)
│ ○  wztmk  jakxz/flaky-test-retry
├─╯
○  qpvqv  jakxz/cache-restore
○  zltuz  jakxz/skip-unrelated-checks
│ ○  kqvnv  jakxz/other
│ ○  nkmqx  jakxz/independent-wip
│ │ ◆  pznks  main
├─┴─╯
◆  mvrqx  previous main`,children:(t,n)=>{var r=p();e(t,r)},$$slots:{default:!0}})},T=t=>{var n=m();i(2),e(t,n)},E=t=>{a(t,{lang:`shellsession`,meta:`[jj log (simplified)] nocopy caption="Both stacks now descend from pznks. The cache conflict is carried into its descendants." {4-7,12}`,title:`jj log (simplified)`,caption:`Both stacks now descend from pznks. The cache conflict is carried into its descendants.`,nocopy:!0,code:`$ jjrb -b 'bookmarks(glob:"jakxz/*")' -o 'trunk()'
$ jjl

@  vkxnm  (empty) (conflict)
│ ×  wztmk  jakxz/flaky-test-retry (conflict)
├─╯
×  qpvqv  jakxz/cache-restore (conflict)
○  zltuz  jakxz/skip-unrelated-checks
│ ○  kqvnv  jakxz/other
│ ○  nkmqx  jakxz/independent-wip
├─╯
◆  pznks  main
◆  mvrqx  previous main`,children:(t,n)=>{var r=h();e(t,r)},$$slots:{default:!0}})},D=t=>{var n=g();i(2),e(t,n)},O=t=>{a(t,{lang:`shellsession`,meta:`[jj log (simplified)] nocopy caption="@ moves to qpvqv, where the conflict starts." {4-5}`,title:`jj log (simplified)`,caption:`@ moves to qpvqv, where the conflict starts.`,nocopy:!0,code:`$ jje qpvqv
$ jjl

×  wztmk  jakxz/flaky-test-retry (conflict)
@  qpvqv  jakxz/cache-restore (conflict)
○  zltuz  jakxz/skip-unrelated-checks
│ ○  kqvnv  jakxz/other
│ ○  nkmqx  jakxz/independent-wip
├─╯
◆  pznks  main
◆  mvrqx  previous main`,children:(t,n)=>{var r=_();e(t,r)},$$slots:{default:!0}})},k=t=>{var n=v();i(2),e(t,n)},A=t=>{a(t,{lang:`shellsession`,meta:`[jj log (simplified)] nocopy caption="The resolution in qpvqv propagates to wztmk; both stacks are now conflict-free." {5-6}`,title:`jj log (simplified)`,caption:`The resolution in qpvqv propagates to wztmk; both stacks are now conflict-free.`,nocopy:!0,code:`$ jj resolve
$ jjst
$ jjl

○  wztmk  jakxz/flaky-test-retry
@  qpvqv  jakxz/cache-restore
○  zltuz  jakxz/skip-unrelated-checks
│ ○  kqvnv  jakxz/other
│ ○  nkmqx  jakxz/independent-wip
├─╯
◆  pznks  main
◆  mvrqx  previous main`,children:(t,n)=>{var r=y();e(t,r)},$$slots:{default:!0}})},j=t=>{var n=b();i(2),e(t,n)},M=t=>{a(t,{lang:`shellsession`,meta:`[jj log (simplified)] nocopy caption="Local and origin bookmarks agree. The PR branches keep their existing relationships." {4-8}`,title:`jj log (simplified)`,caption:`Local and origin bookmarks agree. The PR branches keep their existing relationships.`,nocopy:!0,code:`$ jjgp -b 'glob:jakxz/*'
$ jjl

○  wztmk  jakxz/flaky-test-retry @origin
@  qpvqv  jakxz/cache-restore @origin
○  zltuz  jakxz/skip-unrelated-checks @origin
│ ○  kqvnv  jakxz/other @origin
│ ○  nkmqx  jakxz/independent-wip @origin
├─╯
◆  pznks  main
◆  mvrqx  previous main`,children:(t,n)=>{var r=x();e(t,r)},$$slots:{default:!0}})};o(C,{title:`Walkthrough:`,mode:`scroll`,steps:[{title:`1. Here's the mess`,content:t,code:n},{title:`2. Put the fix where it belongs`,content:r,code:s},{title:`3. Meanwhile, main moved`,content:S,code:w},{title:`4. Move the stacks together`,content:T,code:E},{title:`5. Go to the conflict`,content:D,code:O},{title:`6. Resolve it once`,content:k,code:A},{title:`7. Update the same PRs`,content:j,code:M}],mdsvexCodeSnippet1:t,mdsvexCodeSnippet0:n,mdsvexCodeSnippet3:r,mdsvexCodeSnippet2:s,mdsvexCodeSnippet5:S,mdsvexCodeSnippet4:w,mdsvexCodeSnippet7:T,mdsvexCodeSnippet6:E,mdsvexCodeSnippet9:D,mdsvexCodeSnippet8:O,mdsvexCodeSnippet11:k,mdsvexCodeSnippet10:A,mdsvexCodeSnippet13:j,mdsvexCodeSnippet12:M,$$slots:{mdsvexCodeSnippet1:!0,mdsvexCodeSnippet0:!0,mdsvexCodeSnippet3:!0,mdsvexCodeSnippet2:!0,mdsvexCodeSnippet5:!0,mdsvexCodeSnippet4:!0,mdsvexCodeSnippet7:!0,mdsvexCodeSnippet6:!0,mdsvexCodeSnippet9:!0,mdsvexCodeSnippet8:!0,mdsvexCodeSnippet11:!0,mdsvexCodeSnippet10:!0,mdsvexCodeSnippet13:!0,mdsvexCodeSnippet12:!0}})}i(5),e(n,s)}export{C as default,s as metadata};