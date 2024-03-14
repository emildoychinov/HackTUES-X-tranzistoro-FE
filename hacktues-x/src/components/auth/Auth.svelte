<script lang="ts">
	import { Card, Button, Label, Input, Toggle } from 'flowbite-svelte';
	import { AUTH_ACTIONS } from './enums/auth-options.enum';
	import { fade } from 'svelte/transition';

	let isChecked: boolean = false;
	let action: AUTH_ACTIONS = AUTH_ACTIONS.REGISTER;
</script>

<!-- TODO: login/register requests on button click based on auth action -->
<Card>
	<form class="flex flex-col space-y-6" action="/">
		<h3 class="text-xl font-medium text-gray-900 dark:text-white">Welcome to AtlasFlow!</h3>
		<Label class="space-y-2">
			<span>Email</span>
			<Input type="email" name="email" placeholder="name@company.com" required />
		</Label>
		<Label class="space-y-2">
			<span>Password</span>
			<Input type="password" name="password" placeholder="•••••••••••••••" required />
		</Label>
		{#if action === AUTH_ACTIONS.REGISTER}
			<div transition:fade={{ duration: 300 }}>
				<Label class="space-y-2">
					<span>Confirm Password</span>
					<Input type="password" name="password" placeholder="•••••••••••••••" required />
				</Label>
			</div>
		{/if}
		<Button type="submit" color="blue" class="w-full">{action}</Button>
		<Toggle
			color="blue"
			checked={false}
			on:change={() => {
				isChecked = !isChecked;
				action = isChecked ? AUTH_ACTIONS.LOGIN : AUTH_ACTIONS.REGISTER;
			}}>{action}</Toggle
		>
	</form>
</Card>
