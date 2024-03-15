<script>
	import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';
</script>

<Navbar>
	<NavBrand href="/">
		<img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span
		>
	</NavBrand>
	<NavHamburger />
	<NavUl>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/about">About</NavLi>
		<NavLi href="/docs/components/navbar">Navbar</NavLi>
		<NavLi href="/pricing">Pricing</NavLi>
		<NavLi href="/contact">Contact</NavLi>
	</NavUl>
</Navbar>
