<script>
    import Writing from './Writing.svelte';
    export let data;
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

I charge $100 USD/session for coaching.
Each session is 75 minutes where you bring the agenda (e.g. pick 3 of the 5 topics above);
finding the right cadence for you will be a part of our first session and can evolve over time.
I am happy to provide a free 30-minute consultation to see if we are a good fit.

<Writing posts={data.posts} />
