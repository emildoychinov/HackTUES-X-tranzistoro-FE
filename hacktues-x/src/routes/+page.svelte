<script lang="ts">
	import MainPage from '../components/MainPage.svelte';
</script>

<div id="parent-container">
	<MainPage />
</div>

<style lang="scss">
	#parent-container {
		height: 100vh;
		width: 100vw;
		margin: 0;
		overflow: hidden;
	}
	:global(body) {
		color: rgb(207, 207, 207);
		height: 100vh;
		touch-action: manipulation;
		background: #dddddd;
	}
</style>
