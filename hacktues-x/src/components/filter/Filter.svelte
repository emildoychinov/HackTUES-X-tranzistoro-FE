<script lang='ts'>
	import { writable } from "svelte/store";
	import { updateFilterStore } from "../../stores/filter.stores";
	import FilterMember from "./Filter-member.svelte";
	import type { FilterDTO } from "./dto/filter.dto";
  import { AccordionItem, Accordion } from 'flowbite-svelte';

  export let data: FilterDTO;
  let group: string[] = [];
  let selected: string = '';
  let showList = false;

</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div id='filter-name'> 
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <Accordion>
    <AccordionItem>
      <span slot="header" id='title'>{data.title}</span>
      {#each data.members as member}
        <p class="pl-3 pb-1">
          <FilterMember 
            parent={data.title} 
            data={member}
            isSingleChoice={data.isSingle ?? true}
            isSelected={group.includes(member.name) || selected === member.name}
  
            on:radioSelection={(event) => {
              selected = event.detail.selected ? event.detail.filter : '';
              updateFilterStore(data.title, selected, undefined);
            }}
  
            on:checkboxSelection={(event) => {
  
              if(event.detail.selected){
                group.push(event.detail.filter);
              }else{
                const filterIndex = group.indexOf(event.detail.filter);
                if(filterIndex > -1){
                  group = group.filter(member => member !== event.detail.filter)
                }
              }
              updateFilterStore(data.title, undefined, group);
  
            }}
  
          />
        </p>
      {/each}
    </AccordionItem>
  </Accordion>
</div>

<style lang='scss'>
  #title::after{
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.21);
  }

  #title{
    font-size: 1.5em;
  }

</style>