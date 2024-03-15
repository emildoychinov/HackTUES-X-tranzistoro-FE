<script>
	import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';
</script>

<Navbar color="indigo">
	<NavBrand href="/">
		<img
			class="me-3 h-6 max-w-[50px] invert filter sm:h-9"
			src="https://media.discordapp.net/attachments/1201631953963712555/1218157664002117702/plate.png?ex=6606a4bb&is=65f42fbb&hm=ef1f0ad495375f54c531481cebf28e170024fc382d7c83d7b0fd0cd9a1941770&=&format=webp&quality=lossless&width=544&height=544"
			alt="Flowbite Logo"
		/>
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
			>AtlasFLOW</span
		>
	</NavBrand>
	<NavHamburger />
	<NavUl>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/auth">Login</NavLi>
	</NavUl>
</Navbar>
