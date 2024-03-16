import { writable } from 'svelte/store';
import type { LngLat } from './interfaces/lngLat-store.interface';

let initialValue: LngLat | undefined;
export const lngLatStore = writable(initialValue);

export function updateLngLat(lngLatObject: LngLat) {
	lngLatStore.update((value) => {
		value = lngLatObject;
		return value;
	});
}
