<script lang="ts">
	import { onMount, onDestroy, getContext, createEventDispatcher } from 'svelte';
	import L from 'leaflet';

	const dispatch = createEventDispatcher();
	export let id: number;
	let popup: L.Popup | undefined;
	let popupElement: HTMLElement;

	let open = false;

	const { getLayer }: { getLayer: () => L.Layer | undefined } = getContext('layer');
	const layer = getLayer();

	onMount(() => {
		popup = L.popup().setContent(popupElement);

		if (layer) {
			layer.bindPopup(popup);
			layer.on('popupopen', () => (dispatch('popupOpen', { id }), (open = true)));
			layer.on('popupclose', () => (dispatch('popupOpen', { id }), (open = false)));
		}
	});

	onDestroy(() => {
		layer?.unbindPopup();
		popup?.remove();
		popup = undefined;
	});
</script>

<div class="w-[100px]" bind:this={popupElement}>
	{#if open}
		<slot />
	{/if}
</div>
