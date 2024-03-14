<script lang='ts'>
	import { createEventDispatcher } from "svelte";
  import type { FilterMemberDTO } from "./dto/filter-member.dto";
  import { Checkbox, Radio } from 'flowbite-svelte';

  export let data: FilterMemberDTO;
  export let isSingleChoice: boolean = true;
  export let parent: string = '';

</script>

<div id='member-name-container'>
  {#if isSingleChoice}
    <Radio name={`radio-element-${parent}`}>{data.name}</Radio>
  {:else}
    <Checkbox>{data.name}</Checkbox>
  {/if}
</div>

<style lang="scss">
  #member-name-container {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: row;
  }

  #member-name {
      margin-right: 10px;
  }
</style>