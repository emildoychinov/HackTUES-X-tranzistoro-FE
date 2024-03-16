<script lang="ts">
	import { filterStore, updateFilterStore } from '../../stores/filter.stores';
	import FilterMember from './Filter-member.svelte';
	import type { FilterDTO } from './dto/filter.dto';
	import { Button, Dropdown, DropdownItem } from 'flowbite-svelte';
	import { FILTER_TYPES } from './enums/filter-types.enum';
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { getData } from '$lib/helpers/interceptor';
	import { departmentStore } from '../../stores/department.store';
	import { lngLatStore } from '../../stores/lngLat.store';
	import { viewStore } from '../../stores/view.store';
	import { SCREEN_VIEWS } from '../../stores/enums/view.enum';
	import { mapBoundsStore } from '../../stores/map-bounds.store';
	import { markerLocationsStore, setMarkerLocations } from '../../stores/marker-locations.store';
	import {
		markerServerDataStore,
		setMarkerServerData,
		updateMarkerServerData
	} from '../../stores/marker-server-data.store';
	import { setRequestOptions, updateRequestOptions } from '../../stores/request-options.store';

	export let data: FilterDTO;
	let serverData: any;
	let group: string[] = [];
	let selected: string = '';
	let showList = false;

	onMount(async () => {
		serverData = (
			await getData(
				data.type !== FILTER_TYPES.COMPANIES ? `facilities/${data.type}` : `companies/grid`
			)
		).data;
		console.log(serverData);
	});

	//TODO: send to server
	const handleFilters = () => {
		const unsubscribe = filterStore.subscribe(async (values) => {
			if ($lngLatStore) {
				if ($viewStore === SCREEN_VIEWS.GRID) {
					const requestOptions = {
						userLat: $lngLatStore.lat,
						userLon: $lngLatStore.long
					};
					for (let value of values) {
						console.log(value);
						requestOptions[value.name == FILTER_TYPES.COMPANIES ? 'companyIds' : value.name] =
							value?.group ?? [];
					}
					$departmentStore = (await getData('facilities/grid', requestOptions)).data;
					console.log($departmentStore);
				} else {
					const requestOptions = $mapBoundsStore;
					for (let value of values) {
						requestOptions[value.name == FILTER_TYPES.COMPANIES ? 'companyIds' : value.name] =
							value?.group ?? [];
					}
					setRequestOptions(requestOptions);
					setMarkerServerData((await getData('facilities/map', requestOptions)).data);
					const coords = Object.values($markerServerDataStore).map((value: any) => {
						return [+value.lat, +value.lon];
					});
					setMarkerLocations([$lngLatStore, ...coords]);
				}
			}
		});

		unsubscribe();
	};
</script>

{#if serverData}
	<div id="filter-name">
		<Button class="w-[200px] shadow-xl" color="alternative">{data.title}</Button>

		<Dropdown class="relative h-fit max-h-[500px] w-[200px] overflow-scroll">
			{#if serverData && Array.isArray(serverData) && serverData.length > 0}
				{#each serverData as member}
					<DropdownItem>
						<FilterMember
							id={member.id ?? 0}
							parent={data.title}
							data={member.name ?? member}
							isSingleChoice={data.isSingle ?? true}
							isSelected={group.includes(member) || selected === member}
							on:radioSelection={(event) => {
								selected = event.detail.selected ? event.detail.filter : '';
								updateFilterStore(data.title.toLowerCase(), selected, undefined);
								handleFilters();
							}}
							on:checkboxSelection={(event) => {
								if (event.detail.selected) {
									group.push(event.detail.filter);
								} else {
									const filterIndex = group.indexOf(event.detail.filter);
									if (filterIndex > -1) {
										group = group.filter((member) => member !== event.detail.filter);
									}
								}
								updateFilterStore(data.title.toLowerCase(), undefined, group);
								handleFilters();
							}}
						/>
					</DropdownItem>
				{/each}
			{/if}
		</Dropdown>
	</div>
{/if}

<style lang="scss">
	#title::after {
		content: '';
		display: block;
		width: 100%;
		height: 1px;
		background-color: rgba(0, 0, 0, 0.21);
	}

	#title {
		font-size: 1.5em;
	}
</style>
