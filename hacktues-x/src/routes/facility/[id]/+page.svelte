<script lang="ts">
	import { onMount } from "svelte";
	import GymPage from "../Gym-page.svelte";
  export let id:string;
  onMount(() => {
    const urlParams = new URLSearchParams(window.location.search);
    id = urlParams.get('id');
  });

</script>
<GymPage/>