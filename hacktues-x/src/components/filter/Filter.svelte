<script lang='ts'>
	import FilterMember from "./Filter-member.svelte";
	import type { FilterMemberDTO } from "./dto/filter-member.dto";

  export let title = '';
  export let members:FilterMemberDTO[] = [];

</script>


<div id='filter-name'>
  <h1>{title}</h1>
  <ul id='member-list'>
    {#each members as member}
      <li>
        <FilterMember data={member}></FilterMember>
      </li>
    {/each}
  </ul>
</div>

<style lang='scss'>
  #member-list{
    list-style-type: none;
  }
</style>