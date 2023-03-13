<script>
	import MainNav from './MainNav.svelte';
	import HamburgerMenuButton from './HamburgerMenuButton.svelte';
	import { siteTitle } from '$lib/config';

	export let path;

	const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	};
</script>

<header class={path}>
	<a on:click|preventDefault={focusMain} class="skip-to-content-link" href="#main">
		Skip to main content
	</a>

	<div>
		<a href="/" class="site-title">
			<span class="name-heading inline-block">Jason</span>
			<span class="name-heading inline-block">Kurian</span>
		</a>
		<MainNav />
	</div>
	<HamburgerMenuButton />
</header>

<style>
	.\/ {
		visibility: hidden;
		display: none;
	}
	.inline-block {
		display: inline-block;
	}
</style>
