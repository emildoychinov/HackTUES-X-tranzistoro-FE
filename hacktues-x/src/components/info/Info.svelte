<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import Card from '../card/Card.svelte';
	import Map from '../map/Map.svelte';
	import type { CardDTO } from '../card/dto/card.dto';
	import { getData } from '$lib/helpers/interceptor';
	let isCardOpen = false;
	let selectedCard = 2;
	let data: any = undefined;
</script>

<div id="page-container">
	<!-- TODO: use the marker ids to fetch the page based on them -->
	<div id="map">
		<Map
			on:openCard={async (event) => {
				isCardOpen = true;
				data = (await getData(`facilities/${event.detail.data.id}`)).data;
			}}
		></Map>
	</div>
	<div id="info" transition:fade>
		{#if isCardOpen && data}
			{#key data}
				<Card {data}></Card>
			{/key}
		{/if}
	</div>
</div>

<style lang="scss">
	#page-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 90%;
		height: 90%;
		margin-left: 5%;
		margin-bottom: 5%;
	}

	#map,
	#info {
		flex: 1;
		height: 100%;
	}
</style>
