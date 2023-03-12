<script>
  // @ts-nocheck

  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import Header from '../../Components/Header/Header.svelte';
  import Playground from '../../Components/Playground/Playground.svelte';

  const { playOption } = $page.params;

  let characters;

  onMount(async () => {
    const response = await fetch(
      'https://akabab.github.io/superhero-api/api/all.json'
    );
    characters = await response.json();
  });
</script>

<div class="play-container">
  <button class="back-btn"><a href="/">Back</a></button>
  <Header size="3rem" />
  {#if playOption === 'multiPlayer'}
    <h3>Development in progress</h3>
  {:else if characters === undefined}
    <h3>Loading...</h3>
  {:else}
    <Playground {playOption} {characters} />
  {/if}
</div>

<style>
  .play-container {
    width: 100%;
    height: 100%;
    min-height: 30rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }

  .back-btn {
    border: none;
    outline: none;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border: 2px solid black;
    font-family: 'Carter One', cursive;
    background-color: red;
    cursor: pointer;
    margin-bottom: 1rem;
    font-size: 1rem;
    position: fixed;
    top: 1rem;
    left: 1rem;
  }

  .back-btn:hover {
    background-color: black;
    color: white;
  }

  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    color: white;
  }
</style>
