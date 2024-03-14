<script lang='ts'>
	import { filterStore } from "../../stores/filter.stores";

  
  import Filter from "./Filter.svelte";
  import type { FilterDTO } from "./dto/filter.dto";
  export let filters: FilterDTO[] = [];
  //TODO: print filters to test
  const handleFilters = () => {
    // Subscribe to the filters store
    const unsubscribe = filterStore.subscribe(value => {
        // Log the current value of the filters store
        console.log(value);
    });

    // Unsubscribe from the store to prevent memory leaks
    unsubscribe();
}

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
  <button id='apply-filters' on:click={handleFilters}>
    Apply
  </button>
</div>

<style lang='scss'>
  #filter-container {
    display: flex;
    flex-direction: column;
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

  #apply-filters{
    width: 100%;
    margin-top: 10px;
    border-radius: 5px;
    border: 0px;
    background-color: rgb(0, 217, 255)
  }

  #apply-filters:hover{
    background-color: rgb(2, 191, 224)
  }

</style>