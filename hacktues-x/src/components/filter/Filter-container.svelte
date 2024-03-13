<script lang='ts'>
  
  import Filter from "./Filter.svelte";
  import  type { FilterDTO } from "./dto/filter.dto";
  export let filters: FilterDTO[] = [];
  
</script>

<div id='filter-container'>
  <ul id='filter-list'>
    {#if Array.isArray(filters) && filters.length > 0}
      {#each filters as filter}
        <li>
          <Filter data={filter}></Filter>
        </li>
      {/each}
    {/if}
  </ul>
</div>

<style lang='scss'>
  #filter-list{
    list-style-type: none;
  }
</style>
