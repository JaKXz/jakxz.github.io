<script>
	import HamburgerMenuButton from './HamburgerMenuButton.svelte';
	import MainNav from './MainNav.svelte';

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
		<a
			href="/"
			class="site-title w-fit italic leading-none color-inherit text-center m-0 block text-[2.5rem]"
		>
			<div class="name-heading inline-block w-fit">Jason</div>
			<div class="name-heading inline-block w-fit">Kurian</div>
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
</style>
