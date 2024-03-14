<script lang='ts'>
  
  import Filter from "./Filter.svelte";
  import type { FilterDTO } from "./dto/filter.dto";
  export let filters: FilterDTO[] = [];
  
</script>

<div id='filter-container'>
  <ul id='filter-list'>
    {#if Array.isArray(filters) && filters.length > 0}
      {#each filters as filter}
        <li id='filter'>
          <Filter data={filter}></Filter>
        </li>
      {/each}
    {/if}
  </ul>
</div>

<style lang='scss'>
  #filter-container {
    display: flex;
    align-items: flex-start;
    width: 100%;
    overflow-x: hidden; 
    overflow-y: auto; 
    max-height: 100%; 
  }
  #filter-list {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    list-style-type: none;
    padding: 0; 
    margin: 0; 
  }
  
  #filter{
    width: 90%;
  }

  #filter-container::-webkit-scrollbar {
    width: 6px; 
  }

  #filter-container::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2); 
    border-radius: 3px; 
  }

  #filter-container::-webkit-scrollbar-track {
    background-color: transparent;
  }
</style>