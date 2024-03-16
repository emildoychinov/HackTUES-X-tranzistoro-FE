import { writable } from 'svelte/store';

export const requestOptionsStore = writable(undefined);

export function setRequestOptions(options) {
	requestOptionsStore.set(options);
}

export function updateRequestOptions(newOptions) {
	requestOptionsStore.update(() => {
		return newOptions;
	});
}
