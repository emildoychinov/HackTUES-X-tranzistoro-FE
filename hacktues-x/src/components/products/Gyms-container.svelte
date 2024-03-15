<script lang="ts">
	import { onMount } from 'svelte';
	import type { GymDTO } from './dto/product.dto';
	import Gym from './Gym.svelte';
	import { getData } from '$lib/helpers/interceptor';
	import { departmentStore, updateDepartment } from '../../stores/department.store';
	import { lngLatStore, updateLngLat } from '../../stores/lngLat.store';
	import { fade } from 'svelte/transition';

	export let gyms: any;

	let lat: any = undefined;
	let long: any = undefined;

	onMount(async () => {
		navigator.geolocation.getCurrentPosition(async (position) => {
			lat = position.coords.latitude;
			long = position.coords.longitude;
			updateLngLat({
				lat,
				long
			});
			const data = await getData('facilities/grid', {
				userLat: lat,
				userLon: long
			});
			gyms = data.data;
			updateDepartment(gyms);
		});
	});
</script>

<div class="container rounded-lg p-4 shadow-lg">
	{#if Array.isArray($departmentStore) && $departmentStore.length > 0}
		{#each $departmentStore as gym}
			<div transition:fade>
				<Gym {gym} />
			</div>
		{/each}
	{/if}
</div>

<style>
	.container {
		align-items: center;
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
