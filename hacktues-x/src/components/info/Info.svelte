<script lang='ts'>
	import { fade, fly } from "svelte/transition";
	import Card from "../card/Card.svelte";
    import Map from "../map/Map.svelte";
	import type { CardDTO } from "../card/dto/card.dto";
    let isCardOpen = false;
    let selectedCard = 2;

    export const data1: CardDTO = {
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

    export const data2: CardDTO = {
        name: 'Premium Gym Pulse Nadejda',
        address: 'g.k Musagenica, ul. "Test", 1221 Sofia',
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

    export const data3: CardDTO = {
        name: 'Premium Gym MNG',
        address: 'g.k Musagenica, ul. "Test", 1221 Sofia',
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

    export const data4: CardDTO = {
        name: 'Premium Gym Titan',
        address: 'g.k Musagenica, ul. "Test", 1221 Sofia',
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

    export const data5: CardDTO = {
        name: 'Premium Gym At Home',
        address: 'g.k Musagenica, ul. "Test", 1221 Sofia',
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

    export const data6: CardDTO = {
        name: 'Premium Gym Goshko',
        address: 'g.k Musagenica, ul. "Test", 1221 Sofia',
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

    export const data = {
        0 : {
            data: data3
        },
        1 : {
            data: data1
        },
        2 : {
            data: data2
        },
        3 : {
            data: data4
        },
        4 : {
            data: data5
        },
        5 : {
            data: data6
        }

    }

</script>

<div id='page-container'>
    <!-- TODO: use the marker ids to fetch the page based on them -->
    <div id='map'>
        <Map on:openCard={(event) => {
            selectedCard = event.detail.id;
            isCardOpen = !isCardOpen;
        }}></Map>
    </div>
    <div id='info' transition:fade>
        {#if isCardOpen}
            <Card data={data[selectedCard].data}></Card>
        {/if}
    </div>
</div>

<style lang='scss'>
    #page-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between ;
        width: 90%;
        height: 90%;
        margin-left: 5%;
        margin-bottom: 5%;
    }
    
    #map, #info{
        flex: 1;
        height: 100%;
    }

</style>