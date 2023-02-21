<script>
  export let size = '5rem';
</script>

<h1 class="header" style='--size: {size}'>Super Hero Battle</h1>

<style>
  .header {
    font-size: var(--size);
    display: flex;
    justify-self: flex-start;
    align-items: flex-start;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
    text-align: center;
  }
</style>