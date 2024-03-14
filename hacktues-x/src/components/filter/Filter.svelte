<script lang='ts'>
	import { updateFilterStore } from "../../stores/filter.stores";
	import FilterMember from "./Filter-member.svelte";
	import type { FilterDTO } from "./dto/filter.dto";

  export let data: FilterDTO;
  let group: string[] = [];
  let selected: string = '';

</script>


<div id='filter-name'>
  <h1 id='title'>{data.title}</h1>
  <ul id='member-list'>
    {#if Array.isArray(data.members) && data.members.length > 0}
      {#each data.members as member, index}
        <li id='filter-member'>
          <FilterMember 
            value={index} 
            parent={data.title} 
            data={member} 
            isSingleChoice={data.isSingle ?? true}

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
        </li>
      {/each}
    {/if}
  </ul>
</div>

<style lang='scss'>
  #member-list{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    list-style-type: none;
    list-style-position:inside;
    margin:0;
    padding:0;
  }

  #filter-member{
    width: 100%;  
    padding-left: 20px;
  }

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