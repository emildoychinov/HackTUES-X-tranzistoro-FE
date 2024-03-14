<script lang="ts">
	import FilterContainer from '../components/filter/Filter-container.svelte';
	const filters = [
		{
			title: 'testFilter',
			isSingle: true,
			members: [
				{ name: 'test1' },
				{ name: 'test2' },
				{ name: 'test3' },
				{ name: 'test4' },
				{ name: 'test5' }
			]
		},
		{
			title: 'testFilter2',
			isSingle: true,
			members: [
				{ name: 'test1' },
				{ name: 'test2' },
				{ name: 'test3' },
				{ name: 'test4' },
				{ name: 'test5' }
			]
		},
		{
			title: 'testFilter3',
			isSingle: false,
			members: [
				{ name: 'test1' },
				{ name: 'test2' },
				{ name: 'test3' },
				{ name: 'test4' },
				{ name: 'test5' }
			]
		}
	];
</script>

<div id="parent-container">
	<div id="filters" class="scroll-hidden">
		<FilterContainer {filters} />
	</div>
	<div id="page-content" class="scroll-hidden"></div>
</div>

<style lang="scss">
	#parent-container {
		height: calc(100vh - 20px);
		width: calc(100vw - 20px);
		margin: 0;
		overflow: hidden;
	}

	#parent-container {
		display: flex;
		flex-direction: row;
		overflow: hidden; /* Prevent overflow */
	}

	#filters {
		height: 100%;
		width: 20%;
		padding-left: 1em;
	}

	#page-content {
		height: 100%;
		width: 80%;
	}

	.scroll-hidden {
		overflow: hidden;
	}
</style>
