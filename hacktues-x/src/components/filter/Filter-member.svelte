<script lang='ts'>
	import { createEventDispatcher } from "svelte";
  import type { FilterMemberDTO } from "./dto/filter-member.dto";
  import { Checkbox, Radio } from 'flowbite-svelte';
	import { updateFilterStore } from "../../stores/filter.stores";

  export let data: FilterMemberDTO;
  export let isSingleChoice: boolean = true;
  export let parent: string = '';
  export let group: number[] = [];
  export let selected: any = '';
  export let value: number = 0;
  let isSelected: boolean = false;

</script>

<div id='member-name-container'>
  {#if isSingleChoice}
    <Radio on:click={() => {
      isSelected = !isSelected; 
      updateFilterStore(parent, data.name, undefined, isSelected)
    }} checked={isSelected} name={`radio-element-${parent}`}>{data.name}</Radio>
  {:else}
    <Checkbox {value} on:change={
      () => { 
        group = [], group.push(value), 
        isSelected = !isSelected; 
        updateFilterStore(parent, undefined, group, isSelected)
      }
    } bind:selected name={`${parent}-${data.name}`} >{data.name} </Checkbox>
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
</style>