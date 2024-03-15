<script lang="ts">
	import type { LatLngExpression } from 'leaflet';
	import Leaflet from './Leaflet.svelte';
	import Marker from './Marker.svelte';
	import Popup from './Popup.svelte';
	import { afterUpdate, createEventDispatcher, onMount } from 'svelte';
	import { view } from '../../stores/map.stores';
	import { WidgetPlaceholder } from 'flowbite-svelte';
	import { lngLatStore } from '../../stores/lngLat.store';
	import gymLogo from '$lib/assets/gym-logo.svg'
	import userLogo from '$lib/assets/user-icon.svg'

	let lat = 0;
	let long = 0;
	let initialView: LatLngExpression | undefined = undefined;
	let markerLocations: Array<LatLngExpression>;
	let leaflet: Leaflet;
	let positionObtained = false;

	onMount(() => {
		if (!$lngLatStore) {
			navigator.geolocation.getCurrentPosition((position) => {
				lat = position.coords.latitude;
				long = position.coords.longitude;
				initialView = [lat, long];
				view.update((value) => {
					value = initialView;
					return value;
				});
				positionObtained = true;
			});
		} else {
			initialView = [$lngLatStore.lat, $lngLatStore.long];
		}
		markerLocations = [
			[$lngLatStore.lat, $lngLatStore.long],
			[42.59721728849178, 23.597569936285546],
			[42.59806565056914, 23.593701990833434],
			[42.59752744429184, 23.595900765366984],
			[42.59672058773207, 23.59599665598854],
			[42.59764921051795, 23.594948374414577]
		];
	});

	const dispatch = createEventDispatcher();
</script>

<div id="map-container" class="rounded-lg">
	{#if initialView}
		<Leaflet bind:this={leaflet} view={initialView} zoom={15}>
			{#each markerLocations as latLng, id}
				<Marker {id} {latLng} width={40} height={40}>
					<!-- ShipBit Icon -->
					<img src={!id ? userLogo : gymLogo} alt='gym'/>

					{#if id}
						<Popup
							isUser={!id}
							on:popupOpen={(event) => {
								dispatch('openCard', { id: event.detail.id });
							}}
							{id}>gym_name</Popup
						>
					{/if}
				</Marker>
			{/each}
		</Leaflet>
	{:else}
		<WidgetPlaceholder></WidgetPlaceholder>
	{/if}
</div>

<style lang="scss">
	#map-container {
		position: relative;
		z-index: 1;
		width: 100%;
		height: 100%;
	}
</style>
