<script>
	import { preventDefault } from 'svelte/legacy';

	import HamburgerMenuButton from './HamburgerMenuButton.svelte';
	import MainNav from './MainNav.svelte';

	const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	};
</script>

<header
	class="xs:w-4/5 xs:max-w-54rem xs:border-solid xs:mt-8 mx-auto mb-2 flex justify-between border-0.5 border-gray border-rounded-t-lg bg-white px-8 py-6 text-[var(--darker)] shadow-lg dark:bg-[var(--dark)]"
>
	<a onclick={preventDefault(focusMain)} class="skip-to-content-link" href="#main">
		Skip to main content
	</a>

	<a
		href="/"
		class="site-title m-0 block w-fit text-center text-[2.5rem] color-inherit leading-none italic"
	>
		<div class="name-heading inline-block w-fit">Jason</div>
		<div class="name-heading inline-block w-fit">Kurian</div>
	</a>
	<MainNav />
	<HamburgerMenuButton />
</header>

<style lang="scss">
	header {
		.site-title {
			@include vars.font-weight(extra-bold);
		}
	}
</style>
