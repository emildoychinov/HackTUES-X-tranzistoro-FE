<script lang="ts">
	import { Button, Card, Carousel, Thumbnails } from 'flowbite-svelte';
	import type { GymDTO } from '../dto/product.dto';
	import { ArrowRightAltOutline, ArrowLeftSolid } from 'flowbite-svelte-icons';

	export let gymPar: GymDTO;

	export let gym: GymDTO = {
		id: 10,
		name: 'Health Hub',
		logo: 'healthhub_logo.png',
		location: {
			lon: 144.9631,
			lat: -37.8136
		},
		images: [
			'https://desktop.bg/system/images/382880/normal/gaming_essentials_venom_amd.png',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg'
		],
		departments: ['Wellness', 'Mind-Body', 'Nutrition'],
		tags: ['Health', 'Wellness', 'Lifestyle'],
		classes: ['Wellness Workshops', 'Nutrition Classes', 'Mindfulness Meditation']
	};

	export const images = gym.images.map((image) => {
		return {
			alt: gym.name,
			src: image,
			title: gym.name
		};
	});

	export let thumbnails = images.slice(0, 5);
	export let index = 0;
	export let forward = true;
	export let newIndex = 0;

	export const handleChangeSkipThumbnail = (option: '-' | '+') => {
		const chunkSize = 5;
		const maxIndex = Math.max(images.length - chunkSize, 0); // Ensure maxIndex is not negative

		if (option === '-') {
			newIndex = Math.max(index + newIndex - chunkSize, 0);
			thumbnails = images.slice(newIndex, newIndex + chunkSize);
			console.log(newIndex);
		} else {
			newIndex = Math.min(index + chunkSize + newIndex, maxIndex);
			thumbnails = images.slice(newIndex, newIndex + chunkSize);
			console.log(newIndex);
		}
	};

	export const handleChangeCarouselIndex = (newIndex: number) => {
		index = newIndex;
	};
</script>

<Card class="max-w-4xl space-y-4">
	<Carousel {images} {forward} bind:index let:Controls>
		<Controls />
	</Carousel>

	<div class="flex flex-row">
		<Thumbnails
			class="flex-wrap justify-start gap-3 bg-transparent"
			let:Thumbnail
			let:image
			let:selected
			images={thumbnails}
			bind:index
		>
			<Thumbnail
				{...image}
				{selected}
				class="hover:outline-primary-500 min-w-28 max-w-32 self-start rounded-md shadow-xl hover:outline"
				activeClass="outline outline-primary-400"
				on:click={() => handleChangeCarouselIndex(index)}
			/>
		</Thumbnails>

		<Button class="text-black" on:click={() => handleChangeSkipThumbnail('-')}>
			<ArrowRightAltOutline class="h-1/4 scale-x-[-1]" />
		</Button>

		<Button class="text-black" on:click={() => handleChangeSkipThumbnail('+')}>
			<ArrowRightAltOutline class=" h-1/4" />
		</Button>
	</div>

	<div class="min-w-72 font-bold">Tag</div>
	<div class="chip-container">
		{#each gym.tags as tag}
			<Card
				class="m-[1px] h-3 min-w-3 max-w-fit scale-x-90 scale-y-90 items-center justify-center rounded-3xl bg-slate-300 text-black"
			>
				<div class="self-center">{tag}</div>
			</Card>
		{/each}
	</div>

	<div class="font-bold">Classes</div>
	<div class="chip-container">
		{#each gym.classes as gymClass}
			<Card
				class="m-[1px] h-3 min-w-3 max-w-fit scale-x-90 scale-y-90 items-center justify-center rounded-3xl bg-slate-300 text-black"
			>
				<div class="self-center">{gymClass}</div>
			</Card>
		{/each}
	</div>
</Card>

<style lang="scss">
	.chip-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
</style>
