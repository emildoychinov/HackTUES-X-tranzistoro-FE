<script lang='ts'>
	import Card from "../card/Card.svelte";
    import Map from "../map/Map.svelte";


</script>

<div id='page-container'>
    <div id='map'>
        <Map></Map>
    </div>
    <div id='info'>
        <Card></Card>
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