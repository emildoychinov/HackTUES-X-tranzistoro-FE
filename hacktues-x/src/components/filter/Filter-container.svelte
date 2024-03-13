<script lang='ts'>
  
  import Filter from "./Filter.svelte";
  import  type { FilterDTO } from "./dto/filter.dto";
  export let filters: FilterDTO[] = [];
  
</script>

<div id='filter-container'>
  <ul id='filter-list'>
    {#each filters as filter}
      <li>
        <Filter members={filter.members} title={filter.title}></Filter>
      </li>
    {/each}
  </ul>
</div>

<style lang='scss'>
  #filter-list{
    list-style-type: none;
  }
</style>
