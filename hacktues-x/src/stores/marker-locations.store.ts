import { writable } from 'svelte/store';

export const markerLocationsStore = writable();

export function updateMarkerLocations(newStore: unknown) {
	markerLocationsStore.update((locationsStore) => {
		if (Array.isArray(locationsStore) && Array.isArray(newStore)) {
			const filteredNewStore = newStore.filter(
				(newItem) =>
					!locationsStore.some((oldItem) => JSON.stringify(newItem) === JSON.stringify(oldItem))
			);
			locationsStore.push(...filteredNewStore);
		} else {
			locationsStore = Array.isArray(newStore) ? [...newStore] : [];
		}
		return locationsStore;
	});
}

export function setMarkerLocations(data: any[]) {
	markerLocationsStore.set(data);
}
