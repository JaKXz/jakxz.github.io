<!-- This is the global layout file; it "wraps" every page on the site. (Or more accurately: is the parent component to every page component on the site.) -->
<script>
	import 'uno.css';
	import '$lib/assets/scss/global.scss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { currentPage } from '$lib/assets/js/store';
	import { navItems, siteLink, siteAuthorTwitter } from '$lib/config';
	import { preloadData } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let data;

	const transitionIn = { delay: 150, duration: 150 };
	const transitionOut = { duration: 100 };

	/**
	 * Updates the global store with the current path. (Used for highlighting
	 * the current page in the nav, but could be useful for other purposes.)
	 **/
	$: currentPage.set(data.path);

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

<!--
	The below markup is used on every page in the site. The <slot> is where the page's
	actual contents will show up.
-->
{#if data.path !== '/'}
	<Header />
{/if}
{#key data.path}
	<main id="main" tabindex="-1" class={data.path} in:fade={transitionIn} out:fade={transitionOut}>
		<slot />
	</main>
{/key}
<Footer path={data.path} />
