<script lang='ts'>
	import { createEventDispatcher, onMount } from "svelte";
  import type { FilterMemberDTO } from "./dto/filter-member.dto";
  import { Checkbox, Group, Radio } from 'flowbite-svelte';

  export let data: FilterMemberDTO;
  export let isSingleChoice: boolean = true;
  export let parent: string = '';
  export let isSelected: boolean = false;
  export let color = "rgb(0, 184, 212)"
  let selected: string = '';
  let groupSelect: string[] = [];
  
  const dispatch = createEventDispatcher();

  onMount(() => {
    if(isSelected){
      if(isSingleChoice)
        selected = data.name;
      else
        groupSelect = [data.name];
    }
  })

</script>

<div id='member-name-container'>
  {#if isSingleChoice}
    <Radio bind:group={selected}
    on:click={() => {
      isSelected = !isSelected; 
      dispatch('radioSelection', {
        filter: data.name,
        selected: isSelected
      })
    }} checked={isSelected} name={`radio-element-${parent}`} value={data.name}>{data.name}</Radio>
  {:else}
    <Checkbox value={data.name}
    bind:group={groupSelect}
    on:change={
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
      flex-direction: column;
  }
</style>