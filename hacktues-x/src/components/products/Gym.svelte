<script lang="ts">
	import { Card } from "flowbite-svelte";
	import type { GymDTO } from "./dto/product.dto";
  export let gym: GymDTO;
</script>

<Card class="container" href='/facility/2'>
	<img class="img" src="https://emilypost.com/client_media/images/blogs/everyday-gym.jpg" alt={gym.name}/>
  <div class="text-center text-xl font-bold">{gym.name}</div>
</Card>

<style>
	.container {
		display: flex;
		justify-content: center; 
		align-items: center;
		font-family: Arial, sans-serif;
		flex-direction: column;
		max-width: 20%;
		max-height: 10%;
	}

	.img {
		object-fit: scale-down;
		height: 80%;
		width: 80%;
		align-self: center;
	}

</style>