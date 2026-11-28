<script lang="ts">
  import CodeTabs from "#components/CodeTabs.svelte";
  import CodeWalkthrough from "#components/CodeWalkthrough.svelte";
  import CodeStep from "#components/CodeStep.svelte";
  import CodeBlock from "#components/CodeBlock.svelte";
</script>

{#snippet example()}
  <CodeBlock title="example.txt" code="A direct example" nocopy>
    <pre><code><span class="l">A direct example</span></code></pre>
  </CodeBlock>
{/snippet}

{#snippet explanation()}<p>Imported components also accept snippets.</p>{/snippet}

<CodeTabs title="Direct tabs" items={[{ title: "Example", code: example }]} />
<CodeWalkthrough
  title="Direct walkthrough"
  steps={[{ title: "Example", content: explanation, code: example }]}
/>
<CodeStep title="Direct step" children={explanation} code={example} />
