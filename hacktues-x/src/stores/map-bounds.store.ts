import { writable } from 'svelte/store';

export const mapBoundsStore = writable();

export function setMapBounds(bounds) {
	mapBoundsStore.set(bounds);
}

export function updateMapBounds(newBounds) {
	mapBoundsStore.update(() => {
		return newBounds;
	});
}
