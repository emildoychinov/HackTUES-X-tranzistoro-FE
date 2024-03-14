<script lang="ts">
	import GymInfo from "../../components/products/gym-page/Gym-info.svelte";
	import Statistic from "../../components/products/gym-page/Statistic.svelte";

</script>
<div class=gym-page>
  <GymInfo id={1}/>
  <Statistic id={1}/>
</div>

<style lang="scss">
  .gym-page {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
</style>