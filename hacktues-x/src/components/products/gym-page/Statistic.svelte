<script lang="ts">
	import { Button, Card } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import Chart, { type ChartItem } from 'chart.js/auto';
	import type { GymDTO } from '../dto/product.dto';

	export let id: number;
	//TODO - fetch statistic from db by gym ID

	export let gym: GymDTO = {
		id: 10,
		name: 'Health Hub',
		logo: 'healthhub_logo.png',
		location: {
			lon: 144.9631,
			lat: -37.8136
		},
		images: [
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg',
			'https://emilypost.com/client_media/images/blogs/everyday-gym.jpg'
		],
		departments: ['Wellness', 'Mind-Body', 'Nutrition'],
		tags: ['Health', 'Wellness', 'Lifestyle'],
		classes: ['Wellness Workshops', 'Nutrition Classes', 'Mindfulness Meditation']
	};

	export let selected: string = '';

	const handleSelection = (selection: string) => {
		selected = selection === selected ? '' : selection;
	};
	const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

	export let stat = {
		'00:00': 5,
		'00:30': 0,
		'01:00': 0,
		'01:30': 0,
		'02:00': 0,
		'02:30': 0,
		'03:00': 0,
		'03:30': 0,
		'04:00': 0,
		'04:30': 0,
		'05:00': 0,
		'05:30': 0,
		'06:00': 0,
		'06:30': 0,
		'07:00': 0,
		'07:30': 20,
		'08:00': 15,
		'08:30': 25,
		'09:00': 30,
		'09:30': 35,
		'10:00': 40,
		'10:30': 35,
		'11:00': 45,
		'11:30': 50,
		'12:00': 40,
		'12:30': 35,
		'13:00': 30,
		'13:30': 35,
		'14:00': 30,
		'14:30': 25,
		'15:00': 30,
		'15:30': 25,
		'16:00': 20,
		'16:30': 25,
		'17:00': 35,
		'17:30': 70,
		'18:00': 60,
		'18:30': 50,
		'19:00': 45,
		'19:30': 40,
		'20:00': 35,
		'20:30': 30,
		'21:00': 25,
		'21:30': 20,
		'22:00': 15,
		'22:30': 10,
		'23:00': 5,
		'23:30': 5
	};

	export let selectedMinHour: string = Object.keys(stat)[0];
	export let selectedMaxHour: string = Object.keys(stat)[Object.keys(stat).length - 1];

	let chart: Chart;

	onMount(() => {
		const ctx = document.getElementById('fitnessChart');
		if (ctx) {
			chart = new Chart(ctx as ChartItem, {
				type: 'bar',
				data: {
					labels: Object.keys(stat),
					datasets: [
						{
							label: 'Fitness Usage',
							data: Object.values(stat),
							borderColor: 'rgb(255, 255, 255)',
							backgroundColor: 'rgb(50, 120, 255)'
						}
					]
				},
				options: {
					scales: {
						y: {
							beginAtZero: true
						}
					}
				}
			});
		}
	});

	const updateChart = () => {
		const filteredStat = {};
		const keys = Object.keys(stat);
		for (let i = 0; i < keys.length; i++) {
			const key = keys[i];

			if (
				Date.parse('11/01/2011' + ' ' + key) >= Date.parse('11/01/2011' + ' ' + selectedMinHour) &&
				Date.parse('11/01/2011' + ' ' + key) <= Date.parse('11/01/2011' + ' ' + selectedMaxHour)
			) {
				filteredStat[key] = stat[key];
			}
		}
		chart.data.labels = Object.keys(filteredStat);
		chart.data.datasets[0].data = Object.values(filteredStat);
		chart.update();
	};
</script>

<Card>
	<canvas id="fitnessChart" width="400" height="200"></canvas>
	<div class="chip-container">
		<div class="font-bold">Departments</div>
		<br />
		{#each gym.departments as department}
			<Card
				on:click={() => handleSelection(department)}
				class={'h-1 max-w-fit scale-x-75 scale-y-75 items-center justify-center rounded-3xl text-black hover:bg-slate-400' +
					(selected === department ? ' bg-slate-400 ' : ' bg-slate-300 ')}
			>
				<div class="self-center">{department}</div>
			</Card>
		{/each}
	</div>

	<div class="hours-selection">
		<label for="minHour">Min Hour:</label>
		<select id="minHour" bind:value={selectedMinHour} on:change={updateChart}>
			{#each Object.keys(stat) as hour}
				<option value={hour}>{hour}</option>
			{/each}
		</select>

		<label for="maxHour">Max Hour:</label>
		<select id="maxHour" bind:value={selectedMaxHour} on:change={updateChart}>
			{#each Object.keys(stat) as hour}
				<option value={hour}>{hour}</option>
			{/each}
		</select>

		<label for="day">Day: </label>
		<div class="flex flex-row flex-wrap justify-around rounded-md border">
			{#each daysOfWeek as day}
				<Button class="w-1/3 rounded-md  border text-black  hover:bg-slate-100" value={day}>
					{day}
				</Button>
			{/each}
		</div>
	</div>
</Card>

<style lang="scss">
	.chip-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.hours-selection {
		margin-top: 20px;
		display: flex;
		flex-direction: column;
	}
</style>
