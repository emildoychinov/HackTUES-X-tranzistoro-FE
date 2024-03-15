<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import type { FilterMemberDTO } from './dto/filter-member.dto';
	import { Checkbox, Group, Radio } from 'flowbite-svelte';

	export let data: any;
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
				dispatch('checkboxSelection', {
					filter: data,
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
