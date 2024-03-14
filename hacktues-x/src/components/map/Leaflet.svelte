<script lang="ts">
	import { onMount, onDestroy, setContext, createEventDispatcher, tick, afterUpdate } from 'svelte';
	import L from 'leaflet';
	import 'leaflet/dist/leaflet.css';
	import { P } from 'flowbite-svelte';

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
			map.on('zoom', (e) => (dispatch('zoom', e)));
			L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
					attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>,&copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`
			}).addTo(map);
			map.on('dragstart', (e) => {
				isBeingDragged = true;
			})
			map.on('dragend', (e) => {
				isBeingDragged = !isBeingDragged;
				if(!isBeingDragged)
					console.log(getMapBounds())
			})
			map.on('zoomend', (e) => {
				if(zoom && e.target._zoom < zoom){
					console.log(getMapBounds())
				}
			})


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

	export function getView(){
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
			}
    }
  }
</script>

<div class="w-full h-full rounded-lg shadow-xl bg-white" bind:this={mapElement}>
	{#if map}
			<slot />
	{/if}
</div>
