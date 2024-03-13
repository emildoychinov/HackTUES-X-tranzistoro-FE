<script lang='ts'>
	import FilterMember from "./Filter-member.svelte";
	import type { FilterDTO } from "./dto/filter.dto";

  export let data: FilterDTO;

</script>


<div id='filter-name'>
  <h1>{data.title}</h1>
  <ul id='member-list'>
    {#if Array.isArray(data.members) && data.members.length > 0}
      {#each data.members as member}
        <li>
          <FilterMember data={member}></FilterMember>
        </li>
      {/each}
    {/if}
  </ul>
</div>

<style lang='scss'>
  #member-list{
    list-style-type: none;
  }
</style>