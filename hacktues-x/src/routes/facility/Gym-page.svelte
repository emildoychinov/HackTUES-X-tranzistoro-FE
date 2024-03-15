<script lang="ts">
	import Navbar from '../../components/navigation-bar/Navbar.svelte';
	import type { GymDTO } from '../../components/products/dto/product.dto';
	import GymInfo from '../../components/products/gym-page/Gym-info.svelte';
	import Statistic from '../../components/products/gym-page/Statistic.svelte';

	export let gym: GymDTO;
</script>

<div class="gym-page">
	<Navbar />
	<div class="self-center text-4xl font-extrabold">Hellbind fitness</div>
	<div class="gym-containers">
		<GymInfo gymPar={gym} />
		<Statistic id={1} />
	</div>
</div>

<style lang="scss">
	.gym-page {
		display: flex;
		flex-direction: column;
	}
	.gym-containers {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}
</style>
