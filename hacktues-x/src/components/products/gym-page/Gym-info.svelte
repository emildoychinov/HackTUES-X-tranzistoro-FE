<script lang="ts">
	import { Badge, Button, Card, Carousel, Indicator, Thumbnails } from 'flowbite-svelte';
	import { cubicOut } from 'svelte/easing';
	import type { GymDTO } from '../dto/product.dto';
	import { ArrowRightAltOutline, ArrowLeftSolid } from 'flowbite-svelte-icons';
	import { onMount } from 'svelte';

	export let gym: any;
	let images: any;
	let departments: any;
	let thumbnails: any;

	onMount(() => {
		if (gym) {
			console.log(gym);
			images = gym.gallery.map((image: any) => {
				return {
					alt: 'gym-image',
					src: image.url,
					title: 'gym-image'
				};
			});
			departments = gym.departments.map((department: any) => {
				return department.type;
			});
		}
		thumbnails = images.slice(0, 5);
	});

	const chunkSize = 5;
	let maxChunks: number = 0;
	export let index = 0;
	export let forward = true;
	export let newIndex = 0;
	export let currentChunk = 1;

	export const handleChangeSkipThumbnail = (option: '-' | '+') => {
		if (thumbnails && images) {
			maxChunks = Math.round(images.length / chunkSize);
			const maxIndex = Math.max(images.length - chunkSize, 0);
			if (option === '-') {
				currentChunk = Math.max(currentChunk - 1, 1);
			} else {
				currentChunk = Math.min(currentChunk + 1, maxChunks);
			}
			newIndex = (currentChunk - 1) * chunkSize;
			thumbnails = images.slice((currentChunk - 1) * chunkSize, currentChunk * chunkSize);
		}
	};

	export const handleChangeCarouselIndex = (newIx: number) => {
		index = newIx;
	};
</script>

<Card class="max-w-4xl space-y-4">
	{#if images}
		<Carousel {images} {forward} bind:index></Carousel>
	{/if}
	<div class="flex flex-row transition-all duration-300">
		<Button class="text-black" on:click={() => handleChangeSkipThumbnail('-')}>
			<ArrowRightAltOutline class="h-1/4 scale-x-[-1]" />
		</Button>
		<Thumbnails
			class="flex-wrap justify-start gap-3 bg-transparent transition-all duration-300 ease-in-out"
			let:Thumbnail
			let:image
			let:selected
			images={thumbnails}
			bind:index
		>
			<button on:click={() => handleChangeCarouselIndex(newIndex)}>
				<Thumbnail
					{...image}
					class="hover:outline-primary-500 min-w-28 max-w-32 self-start rounded-md shadow-xl hover:outline"
					activeClass="outline outline-primary-400"
				/>
			</button>
		</Thumbnails>

		<Button class="text-black" on:click={() => handleChangeSkipThumbnail('+')}>
			<ArrowRightAltOutline class=" h-1/4" />
		</Button>
	</div>

	{#if maxChunks && currentChunk}
		<div class="self-center">{currentChunk}/{maxChunks}</div>
	{/if}
	<div>
		<div class="min-w-72 font-bold">Tag</div>
		<div class="chip-container flex flex-wrap">
			{#if Array.isArray(gym.tags) && gym.tags.length}
				{#each gym.tags as tag}
					<Badge
						color="indigo"
						class="m-[1px] h-10 min-w-2 max-w-fit scale-x-90 scale-y-90 items-center justify-center rounded-2xl text-base"
					>
						{tag}
					</Badge>
				{/each}
			{/if}
		</div>

		<div class="font-bold">Departments</div>
		<div class="chip-container flex flex-wrap">
			{#if Array.isArray(departments) && departments.length}
				{#each departments as gymClass}
					<Badge
						color="indigo"
						class="m-[1px] h-10 min-w-2 max-w-fit scale-x-90 scale-y-90 items-center justify-center rounded-2xl text-base"
					>
						{gymClass}
					</Badge>
				{/each}
			{/if}
		</div>
	</div></Card
>
