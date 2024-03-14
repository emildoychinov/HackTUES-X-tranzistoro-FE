<script lang='ts'>
	import { filterStore } from "../../stores/filter.stores";

  
  import Filter from "./Filter.svelte";
  import type { FilterDTO } from "./dto/filter.dto";
  export let filters: FilterDTO[] = [];

  const handleFilters = () => {
    const unsubscribe = filterStore.subscribe(value => {
        console.log(value);
    });
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
  <div id='button-container'>
    <button id='apply-filters' on:click={handleFilters}>
      Apply
    </button>
  </div>
</div>

<style lang='scss'>

  #button-container{
    display: flex;
    width: 100%;
    padding-left: 10px;
  }
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

  #apply-filters {
    width: 100%;
    margin-top: 10px;
    border-radius: 5px;
    border: none;
    background-color: rgb(0, 184, 212);
    color: #fff;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  #apply-filters:hover {
    background-color: rgb(0, 152, 172);
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  #apply-filters:focus {
    outline: none;
  }

  #apply-filters:hover{
    background-color: rgb(2, 191, 224)
  }

</style>