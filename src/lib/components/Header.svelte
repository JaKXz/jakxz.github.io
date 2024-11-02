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

<header in:slide out:slide>
	<a onclick={preventDefault(focusMain)} class="skip-to-content-link" href="#main">
		Skip to main content
	</a>

	<div>
		<a
			href="/"
			class="site-title m-0 block w-fit text-center text-[2.5rem] color-inherit leading-none italic"
		>
			<div class="name-heading inline-block w-fit">Jason</div>
			<div class="name-heading inline-block w-fit">Kurian</div>
		</a>
		<MainNav />
	</div>
	<HamburgerMenuButton />
</header>
