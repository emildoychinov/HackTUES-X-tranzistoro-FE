<script lang="ts">
	import type { GymDTO } from "./dto/product.dto";
  export let gym: GymDTO;
</script>

<a class="container" href='/'>
	<img class="img" src="https://emilypost.com/client_media/images/blogs/everyday-gym.jpg" alt={gym.name}/>
  <div >{gym.name}</div>
</a>

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