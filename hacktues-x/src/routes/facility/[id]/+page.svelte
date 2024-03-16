<script lang="ts">
	import { onMount } from 'svelte';
	import GymPage from '../Gym-page.svelte';
	import type { GymDTO } from '../../../components/products/dto/product.dto';
	import { page } from '$app/stores';
	import { getData } from '$lib/helpers/interceptor';
	export let id: string;
	let data: any;

	onMount(async () => {
		id = $page.params.id;
		data = (await getData(`facilities/${id}`)).data;
		console.log(data);
	});
</script>

{#key data}
	<GymPage gym={data} />
{/key}
