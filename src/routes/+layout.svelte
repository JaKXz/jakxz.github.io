<script>
	import 'uno.css';

	import '$lib/assets/scss/global.scss';

	import { preloadData } from '$app/navigation';
	import { currentPage } from '$lib/assets/js/store';
	import classNames from '$lib/assets/js/classNames';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { navItems, siteAuthorTwitter, siteLink } from '$lib/config';
	import { onMount } from 'svelte';
	import { run } from 'svelte/legacy';

	let { data, children } = $props();

	/**
	 * Updates the global store with the current path. (Used for highlighting
	 * the current page in the nav, but could be useful for other purposes.)
	 **/
	run(() => {
		currentPage.set(data.path);
	});

	/**
	 * This pre-fetches all top-level routes on the site in the background for faster loading.
	 * https://kit.svelte.dev/docs#modules-$app-navigation
	 *
	 * Any route added in src/lib/config.js will be prefetched automatically. You can add your
	 * own preloadData() calls here, too.
	 **/
	onMount(() => {
		navItems.forEach((item) => preloadData(item.route));
	});
</script>

<svelte:head>
	<meta name="og:url" content="{siteLink}{data.path}" />
	<meta name="twitter:site" content={siteAuthorTwitter} />
	<meta name="twitter:creator" content={siteAuthorTwitter} />
</svelte:head>

{#if data.path !== '/'}
	<Header />
{/if}
{#key data.path}
	<main
		id="main"
		tabindex="-1"
		class={classNames(
			'xs:max-w-42rem mx-auto px-8',
			data.path !== '/' &&
				'xs:shadow-xl xs:border-x-1 xs:border-t-1 xs:border-rounded-t xs:px-24 xs:py-16 xs:max-w-60rem relative z-2 mt-[-1rem] border-0.1 border-b-0 border-gray border-solid bg-white px-8 py-10 dark:bg-[var(--dark)]'
		)}
	>
		{@render children?.()}
	</main>
{/key}
<Footer path={data.path} />
