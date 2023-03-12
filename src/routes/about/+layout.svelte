<script>
</script>

<div>
  <header>This is a fixed header</header>
  <main>
    <slot />
  </main>
  <header>This is a fixed footer</header>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
  }
</style>
