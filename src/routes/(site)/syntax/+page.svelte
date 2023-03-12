<script>
  const list = [1, 2, 3, 4, 5];
</script>

<ul class="landing-container">
  {#each list as num}
    {#if num % 2 === 0}
      <li>{num}</li>
    {:else}
      <li>'odd'</li>
    {/if}
  {/each}
</ul>

<style>
</style>
