<script lang="ts">
	import type { LatLngExpression } from 'leaflet';
	import Leaflet from './Leaflet.svelte';
	import Marker from './Marker.svelte';
	import Popup from './Popup.svelte';
	import { afterUpdate, createEventDispatcher, onMount } from 'svelte';
	import { view } from '../../stores/map.stores';
	import { WidgetPlaceholder } from 'flowbite-svelte';

	let lat = 0;
	let long = 0;
	let initialView: LatLngExpression | undefined = undefined;
	let markerLocations: Array<LatLngExpression>;
	let leaflet: Leaflet;
	let positionObtained = false;

	onMount(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			lat = position.coords.latitude;
			long = position.coords.longitude;
			initialView = [lat, long];
			view.update((value) => {
				value = initialView;
				return value;
			});
			// Set positionObtained to true once position is obtained
			positionObtained = true;
			//TODO: get marker locations from backend based on initialView
			markerLocations = [
				[lat, long],
				[42.59721728849178, 23.597569936285546],
				[42.59806565056914, 23.593701990833434],
				[42.59752744429184, 23.595900765366984],
				[42.59672058773207, 23.59599665598854],
				[42.59764921051795, 23.594948374414577]
			];
		});
	});

	const dispatch = createEventDispatcher();
</script>

<div id="map-container" class="rounded-lg">
	{#if initialView}
		<Leaflet bind:this={leaflet} view={initialView} zoom={15}>
			{#each markerLocations as latLng, id}
				<Marker {id} {latLng} width={40} height={40}>
					<!-- ShipBit Icon -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xml:space="preserve"
						style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"
						viewBox="0 0 45 40"
					>
						<path
							d="m23.046 25.449 9.601 16.885H13.253l9.793-16.885ZM45 23.965H25.702l9.575 16.84L45 23.965ZM44.963 20.923 35.339 4.254l-9.668 16.669h19.292ZM32.771 2.618h-4.17L8.522 37.237l2.08 3.603L32.771 2.618ZM25.084 2.618H11.465L0 22.476l6.768 11.722 18.316-31.58Z"
							style="fill:#e9204f;fill-rule:nonzero"
							transform="translate(0 -2.618)"
						/>
					</svg>

					<Popup
						on:popupOpen={(event) => {
							dispatch('openCard', { id: event.detail.id });
						}}
						{id}>gym_name</Popup
					>
				</Marker>
			{/each}
		</Leaflet>
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
