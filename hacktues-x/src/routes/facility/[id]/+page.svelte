<script lang="ts">
	import { onMount } from "svelte";
	import GymPage from "../Gym-page.svelte";
	import type { GymDTO } from "../../../components/products/dto/product.dto";
  export let id: string;
  onMount(() => {
    const urlParams = new URLSearchParams(window.location.search);
    id = urlParams.get('id') as string;
  });
    //TO-DO - fetch Gym by param id
  export let gym: GymDTO[] = [];
</script>
<GymPage gym={gym[0]}/>