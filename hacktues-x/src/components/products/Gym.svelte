<script lang="ts">
	import type { GymDTO } from "./dto/product.dto";
  export let gym: GymDTO;
</script>

<body>
    <div class="container">
      <div class="gym-info">
        <div class="gym-name">{gym.name}</div>
        <div>Classes:</div>
        <ul class="classes-list">
          {#if Array.isArray(gym.classes)}
            {#each gym.classes as gymClass}
            <li>{gymClass}</li>
            {/each}
          {/if}
        </ul>
  
        <div>Departments:</div>
        <ul class="departments-list">
          {#if Array.isArray(gym.departments)}
            {#each gym.departments as gymDepartment}
            <li>{gymDepartment}</li>
            {/each}
          {/if}
        </ul>
      </div>
    </div>
</body>

<style>
	body {
		font-family: Arial, sans-serif;
		padding: 20px;
	}

	.container {
		display: flex;
		justify-content: center; 
	}

	.gym-info {
		margin-bottom: 20px;
		border: 1px solid #666; 
		padding: 10px; 
		width: 300px; 
	}

	.gym-info > div {
		margin-bottom: 10px;
		font-size: 18px;
		color: #333;
	}

	.gym-info .classes-list,
	.gym-info .departments-list {
		list-style-type: none;
		padding: 0;
		margin-left: 0;
	}

	.gym-info .classes-list li,
	.gym-info .departments-list li {
		margin-bottom: 5px;
		font-size: 16px;
		color: #666;
	}
</style>