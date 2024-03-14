import { writable } from 'svelte/store';
import type { FilterStore } from './interfaces/filter-store-interface';

const initialfilterStore: FilterStore[] = [];
export const filterStore = writable(initialfilterStore);

export function updateFilterStore(
	name: string,
	selected: string | undefined,
	group: string[] | undefined
) {
	filterStore.update((filterStore) => {
		const existingIndex = filterStore.findIndex((filter) => filter.name === name);

		if (existingIndex !== -1) {
			filterStore[existingIndex] = {
				...filterStore[existingIndex],
				group,
				selected
			};
		} else {
			filterStore.push({ name, selected, group });
		}

		console.log(filterStore);
		return filterStore;
	});
}
