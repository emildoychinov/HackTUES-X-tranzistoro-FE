<script lang='ts'>
	import Auth from "../../components/auth/Auth.svelte";


</script>

<div id='parent-container'>
  <Auth></Auth>
</div>

<style lang="scss">
  #parent-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 20px);
    width: calc(100vw - 20px); 
  }
</style>