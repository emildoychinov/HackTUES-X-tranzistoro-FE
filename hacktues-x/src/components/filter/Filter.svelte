<script lang="ts">
	import { filterStore, updateFilterStore } from '../../stores/filter.stores';
	import FilterMember from './Filter-member.svelte';
	import type { FilterDTO } from './dto/filter.dto';
	import { Button, Dropdown, DropdownItem } from 'flowbite-svelte';
	import type { FILTER_TYPES } from './enums/filter-types.enum';
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { getData } from '$lib/helpers/interceptor';

	export let data: FilterDTO;
	let serverData: any;
	let group: string[] = [];
	let selected: string = '';
	let showList = false;

	onMount(async () => {
		serverData = (await getData(`/facilities/${data.type}`)).data;
	})


	//TODO: send to server
	const handleFilters = () => {
		const unsubscribe = filterStore.subscribe((value) => {
			console.log(value);
		});
		unsubscribe();
	};
</script>

{#if serverData}
	<div id="filter-name">
		<Button class='w-[200px]' color="alternative">{data.title}</Button>
	
		<Dropdown class='w-[200px] relative h-fit max-h-[500px] overflow-scroll'>
			{#each serverData as member}
				<DropdownItem>
					<FilterMember
						parent={data.title}
						data={member}
						isSingleChoice={data.isSingle ?? true}
						isSelected={group.includes(member) || selected === member}
						on:radioSelection={(event) => {
							selected = event.detail.selected ? event.detail.filter : '';
							updateFilterStore(data.title, selected, undefined);
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
							updateFilterStore(data.title, undefined, group);
							handleFilters();
						}}
					/>
				</DropdownItem>
			{/each}
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
