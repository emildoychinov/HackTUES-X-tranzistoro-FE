<script lang="ts">
	import { Card } from 'flowbite-svelte';
	import type { GymDTO } from './dto/product.dto';
	export let gym: any;
</script>

<Card class="h-[250px]" href="/facility/2">
	<img class="img" src={gym.thumbnail.url} alt={gym.name} />
	<div class="text-center text-xl font-bold">{gym.name}</div>
</Card>

<style>
	.img {
		object-fit: scale-down;
		height: 80%;
		width: 80%;
		align-self: center;
	}
</style>
