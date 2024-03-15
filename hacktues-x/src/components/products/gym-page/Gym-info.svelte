<script lang="ts">
  import { Button, Card, Carousel, Indicator, Thumbnails } from 'flowbite-svelte';
  import { cubicOut } from 'svelte/easing';
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
	const chunkSize = 5;
  export let thumbnails = images.slice(0, 5);
  export let index = 0;
  export let forward = true;
  export let newIndex = 0;
	export let currentChunk = 1;
	export const maxChunks = Math.round(images.length / chunkSize);

  export const handleChangeSkipThumbnail = (option: '-' | '+') => {
		
    const maxIndex = Math.max(images.length - chunkSize, 0); // Ensure maxIndex is not negative

    if (option === '-') {
			currentChunk = Math.max(currentChunk - 1, 1)
    } else {
			currentChunk = Math.min(currentChunk + 1, maxChunks);
    }
		newIndex = (currentChunk-1)*chunkSize;
    thumbnails = images.slice((currentChunk-1)*chunkSize, (currentChunk)*chunkSize);
  };

  export const handleChangeCarouselIndex = (newIx: number) => {
    index = newIx;
  };
</script>

<Card class="max-w-4xl space-y-4">
  <Carousel {images} {forward} bind:index>
  </Carousel>

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

	<div class="self-center">{currentChunk}/{maxChunks}</div>
	<div>
  <div class="min-w-72 font-bold">Tag</div>
  <div class="chip-container flex flex-wrap">
    {#each gym.tags as tag}
      <Card class="m-[1px] h-1 min-w-2 max-w-fit scale-x-90 scale-y-90 items-center justify-center rounded-3xl bg-slate-300 text-black">
        <div class="self-center">{tag}</div>
      </Card>
    {/each}
  </div>

  <div class="font-bold">Classes</div>
  <div class="chip-container flex flex-wrap">
    {#each gym.classes as gymClass}
      <Card class="m-[1px] h-3 min-w-3 max-w-fit scale-x-90 scale-y-90 items-center justify-center rounded-3xl bg-slate-300 text-black">
        <div class="self-center">{gymClass}</div>
      </Card>
    {/each}
  </div>
</Card>
