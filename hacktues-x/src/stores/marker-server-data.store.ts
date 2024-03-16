import { writable } from 'svelte/store';

export const markerServerDataStore = writable([]);
export function updateMarkerServerData(newStore: unknown) {
	markerServerDataStore.update((locationsStore) => {
		if (Array.isArray(locationsStore) && Array.isArray(newStore)) {
			const filteredNewStore = newStore.filter(
				(newItem) => !locationsStore.some((oldItem) => newItem.id === oldItem.id)
			);
			locationsStore.push(...filteredNewStore);
		} else {
			locationsStore = Array.isArray(newStore) ? [...newStore] : [];
		}
		return locationsStore;
	});
}
