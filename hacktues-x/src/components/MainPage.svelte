<script lang="ts">
	import FilterContainer from './filter/Filter-container.svelte';
	import Info from './info/Info.svelte';
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
	<div id="nav-bar"></div>
	<div id="filters" class="scroll-hidden">
		<FilterContainer {filters} />
	</div>
	<div id="page-content" class="scroll-hidden">
		<Info></Info>
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
		justify-content: center;
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
