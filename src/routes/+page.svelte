<script>
  import Header from '../Components/Header/Header.svelte';
  import Setting from '../Components/Setting/Setting.svelte';
</script>

<div class="landing-container">
  <Header size='5rem'></Header>
  <Setting></Setting>
</div>

<style>
  .landing-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }
</style>
