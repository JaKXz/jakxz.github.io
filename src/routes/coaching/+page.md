<script>
    export let data;

	function formatDate(date) {
		return new Intl.DateTimeFormat(undefined, {
			dateStyle: 'medium'
		}).format(new Date(`${date}T00:00:00`));
	}
</script>

# Personal ~~trainer~~ coaching service

> for software developers

I am a low-volume coach for those who prefer a highly personalized approach as opposed to a group setting.
Any of the following are fair game:

- personal growth, tangible mechanics of software development, best practices
- open source contributions
- building & maintaining a network
- navigating the industry, reading into job descriptions and companies
- resume writing, interview prep

## Pricing

I charge $100/session USD for coaching.
Each session is 75 minutes where you bring the agenda;
finding the right cadence for you will be a part of our first session and can evolve over time.
I am happy to provide a free 30-minute consultation to see if we are a good fit.

## Writing

{#each data.posts as post (post.slug)}
<div>
<a href="/learning/{post.slug}" class="link-decoration-none">
<p class="subdued m-0">
🔃
{formatDate(post.updated)}
</p>
<p class="my-1"><strong>{post.title}</strong></p>
</a>
<div class="mx-auto my-4 flex gap-4">
{#each post.categories as category (category)}
<a href="/learning/category/{category}"><code>#{category}</code></a>
{/each}
</div>
</div>
{/each}
