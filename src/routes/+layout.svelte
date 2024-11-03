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
	import { fade } from 'svelte/transition';

	let { data, children } = $props();

	const transitionIn = { delay: 150, duration: 150 };
	const transitionOut = { duration: 100 };

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
			'xs:max-w-42rem p-8 mx-auto',
			data.path !== '/' &&
				'relative shadow-xl mt-[-1rem] bg-white dark:bg-[var(--dark)] border-solid border-0.5 xs:border-rounded-t-lg border-gray px-8 py-10 xs:px-24 xs:py-16 z-1 xs:max-w-60rem'
		)}
		in:fade={transitionIn}
		out:fade={transitionOut}
	>
		{@render children?.()}
	</main>
{/key}
<Footer path={data.path} />
