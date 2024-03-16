<script lang="ts">
	import { Badge, Button, Card, Carousel } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let data:any;
	let gallery: any;
	let departments: any;
	onMount(() => {
		gallery = data.gallery.map((obj: any) => {
			return {
				src: obj.url,
				alt: 'thumbnail',
				title: 'thumbnail'
			}
		})
		departments = data.departments.map((department: any) => {
			return department.type;
		})
	})

</script>

<div id="card-container" transition:fade>
	<Card id="project-card" class="h-full max-w-4xl overflow-y-scroll object-contain">
		<div id="card-head">
			<h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
				{data.name}
			</h5>
			<h6 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{data.streetName}
			</h6>
		</div>
		<div class="max-w-4xl">
			<div class="max-w-4xl space-y-4">
				{#if gallery}
					<Carousel
						images={gallery}
						imgClass="h-full w-full rounded-sm"
						let:Indicators
						let:Controls
						class="border-gray min-h-[320px] rounded-md bg-gray-200 dark:border-gray-800"
						style="height: 100px !important"
						>
						<Controls class="text-black-400 items-center pt-4 dark:text-green-400" />
					</Carousel>
				{/if}
			</div>
			<div id="filters-container">
				<Card class="h-full overflow-y-scroll object-contain">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tags</h5>
					<div class="member-container">
						{#if Array.isArray(data.tags) && data.tags.length}
							{#each data.tags as tag}
								<Badge class="mr-1 rounded-2xl" color="indigo">{tag}</Badge>
							{/each}
						{/if}
					</div>
				</Card>
				<Card class="h-full overflow-y-scroll object-contain">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						Departments
					</h5>
					<div class="member-container">
						{#if Array.isArray(departments) && departments.length}
							{#each departments as department}
								<Badge class="border-mr-1 rounded-2xl" color="indigo">{department}</Badge>
							{/each}
						{/if}
					</div>
				</Card>
			</div>
			<Button class="mt-3 w-full" color="blue">Details</Button>
		</div></Card
	>
</div>

<style lang="scss">
	#carousel-container {
		height: 40%;
		width: 100%;
	}

	#card-container {
		width: 90%;
		margin-left: 5%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#project-card {
		height: 100% !important;
		overflow-x: hidden; /* Hide horizontal scrollbar */
		overflow-y: scroll; /* Enable vertical scrollbar */
		scrollbar-width: thin; /* Thin vertical scrollbar (works in Firefox) */
		scrollbar-color: transparent transparent; /* Make scrollbar track transparent */
	}

	/* For Webkit-based browsers (Chrome, Safari, etc.) */
	#project-card::-webkit-scrollbar {
		width: 5px; /* Set width for vertical scrollbar */
	}

	#project-card::-webkit-scrollbar-thumb {
		background-color: #888; /* Color of scrollbar thumb */
		border-radius: 5px; /* Rounded corners for thumb */
	}

	#project-card::-webkit-scrollbar-track {
		background-color: transparent; /* Make scrollbar track transparent */
	}

	#filters-container {
		height: 25%;
		padding-top: 10px;
		display: flex;
		flex-direction: row;
		gap: 10px;
		width: 100%;
	}

	.custom-badge {
		flex: 1;
		height: 90%;
	}
</style>
