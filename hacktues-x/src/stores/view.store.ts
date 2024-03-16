import { writable } from 'svelte/store';
import { SCREEN_VIEWS } from './enums/view.enum';

export const viewStore = writable(SCREEN_VIEWS.GRID);

export function setViews(flag: boolean) {
	viewStore.update((value) => {
		value = flag ? SCREEN_VIEWS.MAP : SCREEN_VIEWS.GRID;
		return value;
	});
}
