import { writable } from 'svelte/store';
import type { FilterStore } from './interfaces/filter-store-interface';

const initialfilterStore: FilterStore[] = [];
export const filterStore = writable(initialfilterStore);

export function updateFilterStore(
	name: string,
	selected: string | undefined,
	group: number[] | undefined,
	select: boolean
) {
	filterStore.update((filterStore) => {
		const existingIndex = filterStore.findIndex((filter) => filter.name === name);

		if (filterStore[existingIndex]) {
			if (group && filterStore[existingIndex].group) {
				if (select) {
					filterStore[existingIndex].group?.push(...group);
				} else {
					const indexesToRemove = group.map((index) =>
						filterStore[existingIndex].group.indexOf(index)
					);
					filterStore[existingIndex].group = filterStore[existingIndex].group.filter(
						(_, index) => !indexesToRemove.includes(index)
					);
				}
			}
		}

		if (existingIndex !== -1) {
			filterStore[existingIndex] = {
				...filterStore[existingIndex],
				selected: select ? selected : ''
			};
		} else {
			filterStore.push({ name, selected, group });
		}

		console.log(filterStore);
		return filterStore;
	});
}
