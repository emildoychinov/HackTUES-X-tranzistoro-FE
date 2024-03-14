<script lang="ts">
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
    images: ["https://emilypost.com/client_media/images/blogs/everyday-gym.jpg","https://emilypost.com/client_media/images/blogs/everyday-gym.jpg"],
    departments: ["Wellness", "Mind-Body", "Nutrition"],
    tags: ["Health", "Wellness", "Lifestyle"],
    classes: ["Wellness Workshops", "Nutrition Classes", "Mindfulness Meditation"],
  }

</script>

<div>
  <img class="img" src={gym.images[0]} alt={gym.name}/>
  <div>{gym.name}</div>
  <!-- carousele for the other images-->
  <iframe></iframe>
  <!-- accordeon for classes, tags and classes -->
</div>

