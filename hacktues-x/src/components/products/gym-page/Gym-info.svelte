<script lang="ts">
	import { Card, Carousel, Thumbnails } from "flowbite-svelte";
  import type { GymDTO } from "../dto/product.dto";

  export let id: number;
  //fetch data

  export let gym: GymDTO =   {
    id: 10,
    name: "Health Hub",
    logo: "healthhub_logo.png",
    location: {
      lon: 144.9631,
      lat: -37.8136,
    },
    images: ["https://emilypost.com/client_media/images/blogs/everyday-gym.jpg","https://emilypost.com/client_media/images/blogs/everyday-gym.jpg","https://emilypost.com/client_media/images/blogs/everyday-gym.jpg","https://emilypost.com/client_media/images/blogs/everyday-gym.jpg","https://emilypost.com/client_media/images/blogs/everyday-gym.jpg"],
    departments: ["Wellness", "Mind-Body", "Nutrition"],
    tags: ["Health", "Wellness", "Lifestyle"],
    classes: ["Wellness Workshops", "Nutrition Classes", "Mindfulness Meditation"],
  }

  export const images = gym.images.map((image) => {
    return {
      alt: gym.name,
      src: image,
      title: gym.name,
    }
  }
  )
  let index = 0;
  let forward = true;

</script>

<Card class="max-w-4xl space-y-4">

  <Carousel {images} {forward}  let:Controls bind:index duration={3000}>
    <Controls />
  </Carousel>
  <Thumbnails imgClass="rounded p-1" {images} {forward} bind:index let:selected />

  <div class="font-bold">Tag</div>
  <div class="chip-container">
    {#each gym.tags as tag}
    <Card class="scale-x-90 scale-y-90 rounded-3xl h-3 min-w-3 max-w-fit m-[1px] items-center justify-center bg-slate-300 text-black">
      <div class="self-center">{tag}</div>
    </Card>
    {/each}
  </div>

  <div class="font-bold">Classes</div>
  <div class="chip-container">
    {#each gym.classes as gymClass}
      <Card class="scale-x-90 scale-y-90 rounded-3xl h-3 min-w-3 max-w-fit m-[1px] items-center justify-center bg-slate-300 text-black">
        <div class="self-center">{gymClass}</div>
      </Card>
    {/each}
  </div>
</Card>


<style lang="scss">
  .chip-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

</style>
