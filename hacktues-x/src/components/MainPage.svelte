<script lang="ts">
	import { Toggle, WidgetPlaceholder } from 'flowbite-svelte';
	import FilterContainer from './filter/Filter-container.svelte';
	import { FILTER_TYPES } from './filter/enums/filter-types.enum';
	import Info from './info/Info.svelte';
	import Navbar from './navigation-bar/Navbar.svelte';
	import GymsContainer from './products/Gyms-container.svelte';
	import { setViews, viewStore } from '../stores/view.store';
	export let isChecked: boolean = false;
	const filters = [
		{
			type: FILTER_TYPES.TAGS,
			title: 'Tags',
			isSingle: false
		},
		{
			type: FILTER_TYPES.DEPARTMENTS,
			title: 'Departments',
			isSingle: false
		},
		{
			type: FILTER_TYPES.COMPANIES,
			title: 'Companies',
			isSingle: false
		}
	];
</script>

<div id="parent-container">
	<Navbar />
	<div id="filters" class="scroll-hidden">
		<FilterContainer {filters} />
		<Toggle
			color="blue"
			checked={isChecked}
			on:change={() => {
				isChecked = !isChecked;
				setViews(isChecked);
			}}>{`Load ${$viewStore} View`}</Toggle
		>
	</div>
	<div id="page-content" class="scroll-hidden">
		{#if isChecked}
			<Info />
		{:else}
			<GymsContainer />
		{/if}
	</div>
</div>

<style lang="scss">
	#parent-container {
		height: 100%;
		width: 100%;
		margin: 0;
		overflow: hidden;
	}

	#parent-container {
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	#filters,
	#nav-bar {
		height: 10%;
		width: 100%;
	}

	#filters {
		margin-left: 5%;
		width: 90%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	#page-content {
		height: 80%;
		width: 100%;
	}

	.scroll-hidden {
		overflow: hidden;
	}
</style>
