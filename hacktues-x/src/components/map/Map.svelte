<script lang="ts">
	import type { LatLngExpression, latLng } from 'leaflet';
	import Leaflet from './Leaflet.svelte';
	import Marker from './Marker.svelte';
	import Popup from './Popup.svelte';
	import { afterUpdate, createEventDispatcher, onMount } from 'svelte';
	import { view } from '../../stores/map.stores';
	import { WidgetPlaceholder } from 'flowbite-svelte';
	import { lngLatStore } from '../../stores/lngLat.store';
	import gymLogo from '$lib/assets/gym-logo.svg';
	import userLogo from '$lib/assets/user-icon.svg';
	import { getData } from '$lib/helpers/interceptor';
	import { writable } from 'svelte/store';
	import { markerLocationsStore, updateMarkerLocations } from '../../stores/marker-locations.store';
	import {
		markerServerDataStore,
		updateMarkerServerData
	} from '../../stores/marker-server-data.store';
	import { updateMapBounds } from '../../stores/map-bounds.store';
	import { requestOptionsStore, setRequestOptions } from '../../stores/request-options.store';

	let lat = 0;
	let long = 0;
	let initialView: LatLngExpression | undefined = undefined;
	let markerLocations: Array<LatLngExpression>;
	let leaflet: Leaflet;
	let positionObtained = false;
	let loadMap: boolean = false;
	let bounds: any;
	let serverData: any;

	onMount(async () => {
		loadMap = false;
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

		updateMarkerLocations([initialView]);
	});

	$: if (leaflet && leaflet.getView() !== undefined) {
		if (!loadMap) {
			setTimeout(async () => {
				loadMap = true;
				bounds = leaflet.getMapBounds();
				const requestOptions = {
					corner1Lat: bounds.northEast.lat,
					corner1Lon: bounds.northEast.lng,
					corner2Lat: bounds.southWest.lat,
					corner2Lon: bounds.southWest.lng
				};
				setRequestOptions(requestOptions);
				updateMapBounds(requestOptions);
				updateMarkerServerData((await getData('facilities/map', requestOptions)).data);
				const coords = Object.values($markerServerDataStore).map((value: any) => {
					return [+value.lat, +value.lon];
				});
				updateMarkerLocations([...coords]);
			}, 100);
		}
	}

	const interval = setInterval(async () => {
		updateMarkerServerData((await getData('facilities/map', $requestOptionsStore)).data);
		const coords = Object.values($markerServerDataStore).map((value: any) => {
			return [+value.lat, +value.lon];
		});
		updateMarkerLocations([...coords]);
	}, 1000);

	const dispatch = createEventDispatcher();

	function findObject(lat: number, lon: number) {
		return $markerServerDataStore.find((item) => +item.lat == lat && +item.lon == lon);
	}
</script>

<div id="map-container" class="rounded-lg">
	{#if initialView}
		<Leaflet bind:this={leaflet} view={initialView} zoom={15}>
			{#if Array.isArray($markerLocationsStore) && $markerLocationsStore.length}
				{#each $markerLocationsStore as latLng, id}
					<Marker {id} {latLng} width={40} height={40}>
						<img src={!id ? userLogo : gymLogo} alt="gym" />

						{#if id}
							<Popup
								isUser={!id}
								on:popupOpen={(event) => {
									if (event.detail.open) {
										const foundObject = findObject(latLng[0], latLng[1]);
										dispatch('openCard', {
											data: { id: foundObject?.id, name: foundObject?.name }
										});
									}
								}}
								{id}>{findObject(latLng[0], latLng[1])?.name ?? null}</Popup
							>
						{/if}
					</Marker>
				{/each}
			{/if}
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
