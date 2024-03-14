import { writable } from 'svelte/store';
import type { DepartmentStore } from './interfaces/department-store-interface';

const initialfilterStore: DepartmentStore | any = "";
export const departmentStore = writable(initialfilterStore);

export function updateDepartment(
	selected: string | undefined,
) {
	departmentStore.update((departmentStore) =>{
    (departmentStore as DepartmentStore).selected = selected;
    return departmentStore;
  });
}
