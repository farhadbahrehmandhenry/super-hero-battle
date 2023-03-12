<script>
  // @ts-nocheck

  import PlayerCart from '../PlayerCart/PlayerCart.svelte';

  export let playOption = 'singlePlayer';
  export let characters;
  let isFetching = false;
  let superHero, ComputerSuperHero;
  let superHeroResult = 0;
  let computerResult = 0;
  let winner;

  const scales = {
    combat: 3,
    durability: 2,
    intelligence: 2,
    power: 4,
    speed: 3,
    strength: 5,
  };

  const handleFetchSuperHero = () => {
    isFetching = true;
    superHero = undefined;
    ComputerSuperHero = undefined;
    winner = undefined;
    superHeroResult = 0;
    computerResult = 0;

    setTimeout(() => {
      // TODO handle multiplayer
      const randomNumberOne = Math.floor(Math.random() * characters.length) + 1;
      const randomNumberTwo = Math.floor(Math.random() * characters.length) + 1;

      superHero = characters[randomNumberOne];
      ComputerSuperHero = characters[randomNumberTwo];

      for (const k in scales) {
        superHeroResult += superHero.powerstats[k];
        computerResult += ComputerSuperHero.powerstats[k];
      }

      if (superHeroResult > computerResult) {
        winner = 'superHero';
      } else if (superHeroResult < computerResult) {
        winner = 'computer';
      } else {
        winner = 'draw';
      }

      isFetching = false;
    }, 3000);
  };
</script>

<div class="playgorund-container">
  <button
    class="fetch-btn"
    on:click={handleFetchSuperHero}
    disabled={isFetching}>Fetch your super hero</button
  >
  <div class="players-container">
    <PlayerCart
      player="PLAYER ONE"
      {isFetching}
      hero={superHero}
      winner={winner === 'superHero'}
      score={superHeroResult}
    />
    <PlayerCart
      player={playOption === 'multiPlayer' ? 'PLAYER TWO' : 'COMPUTER'}
      {isFetching}
      hero={ComputerSuperHero}
      winner={winner === 'computer'}
      score={computerResult}
    />
  </div>
</div>

<style>
  .playgorund-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80vh;
    width: 80vw;
    min-height: 30rem;
  }
  .players-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    flex-direction: row;
    height: calc(100% - 3rem);
    width: 100%;
  }
  .fetch-btn {
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
  }

  .fetch-btn:hover {
    background-color: black;
    color: white;
  }

  .fetch-btn:disabled {
    background-color: gray;
    color: black;
    opacity: 0.5;
  }
</style>
