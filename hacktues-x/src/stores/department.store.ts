import { writable } from 'svelte/store';

export const departmentStore = writable();

export function updateDepartment(newStore: unknown) {
	departmentStore.update((departmentStore) => {
		departmentStore = newStore;
		return departmentStore;
	});
}
