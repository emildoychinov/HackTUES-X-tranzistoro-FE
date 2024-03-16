<script lang="ts">
	import { onMount, onDestroy, setContext, createEventDispatcher, tick, afterUpdate } from 'svelte';
	import L from 'leaflet';
	import 'leaflet/dist/leaflet.css';
	import { P } from 'flowbite-svelte';
	import { getData } from '$lib/helpers/interceptor';
	import { updateMarkerLocations } from '../../stores/marker-locations.store';
	import {
		markerServerDataStore,
		updateMarkerServerData
	} from '../../stores/marker-server-data.store';

	export let bounds: L.LatLngBoundsExpression | undefined = undefined;
	export let view: L.LatLngExpression | undefined = undefined;
	export let zoom: number | undefined = undefined;
	const dispatch = createEventDispatcher();
	let map: L.Map | undefined;
	let mapElement: HTMLElement;
	let isBeingDragged = false;
	let previousZoom = zoom;

	onMount(() => {
		//TODO getMapBounds + request
		if (!bounds && (!view || !zoom)) {
			throw new Error('Must set either bounds, or view and zoom.');
		}
		map = L.map(mapElement);
		map.on('zoom', (e) => dispatch('zoom', e));
		L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
			attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>,&copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`
		}).addTo(map);
		map.on('dragstart', (e) => {
			isBeingDragged = true;
		});

		//TODO: send to server
		map.on('dragend', (e) => {
			isBeingDragged = !isBeingDragged;
			if (!isBeingDragged) updateMap();
		});

		//TODO: send to server
		map.on('zoomend', async (e) => {
			if (zoom && e.target._zoom < zoom) {
				updateMap();
			}
		});
	});

	onDestroy(() => {
		map?.remove();
		map = undefined;
	});

	setContext('map', {
		getMap: () => map
	});

	$: if (map) {
		if (bounds) {
			map.fitBounds(bounds);
		} else if (view && zoom) {
			map.setView(view, zoom);
		}
	}

	export function getView() {
		return view;
	}

	export function getMapBounds() {
		if (map) {
			const bounds = map.getBounds();
			const northEast = bounds.getNorthEast();
			const southWest = bounds.getSouthWest();
			return {
				northEast,
				southWest
			};
		}
	}

	async function updateMap() {
		const bounds = getMapBounds();
		if (bounds) {
			const requestOptions = {
				corner1Lat: bounds.northEast.lat,
				corner1Lon: bounds.northEast.lng,
				corner2Lat: bounds.southWest.lat,
				corner2Lon: bounds.southWest.lng
			};
			updateMarkerServerData((await getData('facilities/map', requestOptions)).data);
			const coords = Object.values($markerServerDataStore).map((value: any) => {
				return [+value.lat, +value.lon];
			});
			updateMarkerLocations([...coords]);
		}
	}
</script>

<div class="h-full w-full rounded-lg bg-white shadow-xl" bind:this={mapElement}>
	{#if map}
		<slot />
	{/if}
</div>
