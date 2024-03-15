<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { Checkbox, Group, Radio } from 'flowbite-svelte';
	import { FILTER_TYPES } from './enums/filter-types.enum';

	export let data: any;
	export let id: any = 0;
	export let isSingleChoice: boolean = true;
	export let parent: string = '';
	export let isSelected: boolean = false;
	export let color = 'rgb(0, 184, 212)';
	let selected: string = '';
	let groupSelect: string[] = [];

	const dispatch = createEventDispatcher();

	onMount(() => {
		if (isSelected) {
			if (isSingleChoice) selected = data;
			else groupSelect = [data];
		}
	});
</script>

<div id="member-name-container">
	{#if isSingleChoice}
		<Radio
			bind:group={selected}
			on:click={() => {
				isSelected = !isSelected;
				dispatch('radioSelection', {
					filter: data,
					selected: isSelected
				});
			}}
			checked={isSelected}
			name={`radio-element-${parent}`}
			value={data}>{data}</Radio
		>
	{:else}
		<Checkbox
			value={data}
			bind:group={groupSelect}
			on:change={() => {
				isSelected = !isSelected;
				if (!groupSelect.length) {
					isSelected = false;
				}
				console.log(isSelected, id);
				dispatch('checkboxSelection', {
					filter: parent.toLowerCase() === FILTER_TYPES.COMPANIES ? id : data,
					selected: isSelected
				});
			}}
			name={`${parent}-${data}`}
			>{data}
		</Checkbox>
	{/if}
</div>

<style lang="scss">
	#member-name-container {
		width: 100%;
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		flex-direction: column;
	}
</style>
