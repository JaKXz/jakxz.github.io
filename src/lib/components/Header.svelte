<script>
	import { preventDefault } from 'svelte/legacy';

	import HamburgerMenuButton from './HamburgerMenuButton.svelte';
	import MainNav from './MainNav.svelte';
	import { slide } from 'svelte/transition';

	const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	};
</script>

<header
	in:slide
	out:slide
	class="flex justify-between text-[var(--darker)] mb-2 mt-8 px-8 py-6 mx-auto xs:w-4/5 xs:max-w-54rem border-solid border-0.5 border-rounded-t-lg border-gray bg-white dark:bg-[var(--dark)] shadow-lg"
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
