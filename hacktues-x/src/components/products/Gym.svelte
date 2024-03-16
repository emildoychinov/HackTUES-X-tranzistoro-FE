<script lang="ts">
	import { Badge, Card } from 'flowbite-svelte';
	import type { GymDTO } from './dto/product.dto';
	import personIcon from '$lib/assets/person-icon.svg';
	import { onDestroy } from 'svelte';
	export let gym: any;

	const interval = setInterval(() => {
		// console.log(gym.id);
	}, 1000);

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<Card class="h-[300px] w-[300px]" href="/facility/2">
	<img class="img" src={gym.thumbnail.url} alt={gym.name} />
	<div class="text-center text-xl font-bold">{gym.name}</div>
	<div class="center flex w-full justify-start">
		<Badge class="text-start text-lg font-bold">
			<img class="me-[10px] w-[40px]" src={personIcon} alt="person" />5</Badge
		>
	</div>
</Card>

<style>
	.img {
		object-fit: scale-down;
		height: 80%;
		width: 80%;
		align-self: center;
	}
</style>
