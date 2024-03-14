<script lang='ts'>
	import { createEventDispatcher } from "svelte";
  import type { FilterMemberDTO } from "./dto/filter-member.dto";
  import { Checkbox, Radio } from 'flowbite-svelte';

  export let data: FilterMemberDTO;
  export let isSingleChoice: boolean = true;
  export let parent: string = '';
  export let value: number = 0;
  let isSelected: boolean = false;
  const dispatch = createEventDispatcher();

</script>

<div id='member-name-container'>
  {#if isSingleChoice}
    <Radio on:click={() => {
      isSelected = !isSelected; 
      dispatch('radioSelection', {
        filter: data.name,
        selected: isSelected
      })
    }} checked={isSelected} name={`radio-element-${parent}`}>{data.name}</Radio>
  {:else}
    <Checkbox {value} on:change={
      () => { 
        isSelected = !isSelected; 
        dispatch('checkboxSelection', {
          filter: data.name,
          selected: isSelected
        })
      }
    } name={`${parent}-${data.name}`} >{data.name} </Checkbox>
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