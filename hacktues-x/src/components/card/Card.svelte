<script lang="ts">
	import { Badge, Button, Card, Carousel, Thumbnails, Toggle } from "flowbite-svelte";
    import type { CardDTO } from "./dto/card.dto";

    export const data: CardDTO = {
        name: 'Premium Gym Flais Nadejda',
        address: 'g.k Nadejda, ul. "Lyuborodie", 1220 Sofia',
        people: 7,
        tags: ['hello', 'asdfasdfasdfsadfasdfasfdasd','hello','hello','hello','hello','hello','hello','hello','hello','hello','hello','hello','hello'],
        departments: ['hello', 'hello','hello','hello','hello','hello','hello','hello','hello','hello','hello','hello','hello','hello'],
        images : [
        {
            alt: 'Image',
            src: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg',
            title: ''
        },
        {
            alt: 'Image 2',
            src: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Everest%2C_Nepal%2C_Himalayas.jpg',
            title: ''
        }
        ]   
    };
</script>

<div id='card-container'>
    <Card id='project-card' class='h-full max-w-4xl object-contain overflow-y-scroll'>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
        <h6 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.address}</h6>
        <div class="max-w-4xl">
            <div class="max-w-4xl space-y-4">
                <Carousel images={data.images} imgClass="h-full w-full rounded-sm" let:Indicators let:Controls class="rounded-md border-gray dark:border-gray-800 min-h-[320px] bg-gray-200">
                  <Controls class="items-center text-black-400 dark:text-green-400 pt-4" />
                </Carousel>
              </div>
        <div id='filters-container'>
            <Card class='object-contain h-full overflow-y-scroll'>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tags</h5>
                <div class='member-container'>
                    {#each data.tags as tag}
                        <Badge class='rounded-2xl mr-1' color='indigo'>{tag}</Badge>
                    {/each}
                </div>
            </Card>
            <Card class='object-contain h-full overflow-y-scroll'>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Departments</h5>
                <div class='member-container'>
                    {#each data.departments as department}
                        <Badge class='rounded-2xl border-mr-1' color='indigo'>{department}</Badge>
                    {/each}
                </div>
            </Card>
        </div>
        <Button class='mt-3 w-full' color='blue'>Details</Button>
    </Card>
</div>

<style lang='scss'>

    #carousel-container{
        height: 40%;
        width: 100%;
    }

    #card-container{
        width: 90%;
        margin-left: 5%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #project-card {
        height: 100% !important;
        overflow-x: hidden; /* Hide horizontal scrollbar */
        overflow-y: scroll; /* Enable vertical scrollbar */
        scrollbar-width: thin; /* Thin vertical scrollbar (works in Firefox) */
        scrollbar-color: transparent transparent; /* Make scrollbar track transparent */
    }

    /* For Webkit-based browsers (Chrome, Safari, etc.) */
    #project-card::-webkit-scrollbar {
        width: 5px; /* Set width for vertical scrollbar */
    }

    #project-card::-webkit-scrollbar-thumb {
        background-color: #888; /* Color of scrollbar thumb */
        border-radius: 5px; /* Rounded corners for thumb */
    }

    #project-card::-webkit-scrollbar-track {
        background-color: transparent; /* Make scrollbar track transparent */
    }


    #filters-container{
        height: 25%;
        padding-top: 10px;
        display: flex;
        flex-direction: row;
        gap: 10px;
        width: 100%;
    }
    
    .custom-badge{
        flex: 1;
        height: 90%;
    }

</style>

