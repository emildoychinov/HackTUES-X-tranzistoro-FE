<script lang="ts">
	import { onMount } from 'svelte';
	import type { GymDTO } from './dto/product.dto';
	import Gym from './Gym.svelte';
	import { getData } from '$lib/helpers/interceptor';

	export let gyms: any;

	let lat: any = undefined;
	let long: any = undefined;

	onMount(async () => {
		navigator.geolocation.getCurrentPosition(async (position) => {
			lat = position.coords.latitude;
			long = position.coords.longitude;
			const data = await getData('facilities/grid', {
				userLat: lat,
				userLon: long,
			})
			gyms = data.data;
			console.log(gyms);
		})
	})
	
</script>

<div class="container shadow-xl rounded-lg p-4">
	{#if Array.isArray(gyms) && gyms.length > 0}
		{#each gyms as gym}
			<Gym {gym} />
		{/each}
	{/if}
</div>

<style>
	.container {
		display: flex;
		border-radius: 10px;
		flex-direction: column;
		flex-wrap: wrap;
		gap: 20px;
		height: 90%;
		overflow-y: auto;
		width: 90%;
		margin-left: 5%;
	}
</style>
