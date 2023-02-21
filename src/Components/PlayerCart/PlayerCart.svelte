<script>
  export let player = `PLAYER ONE`;
  export let isFetching;
  export let hero;
  export let winner;
  export let score;
</script>

<div class="player-container">
  {#if winner}
    <div class="result">{winner ? 'WINNER' : 'LOSER'}</div>
  {/if}
  <div class="head">
    <h2>{player}</h2>
  </div>
  <div class="player-detail-conatiner">
    <img 
      src={!isFetching && hero ? hero.images.md : 'images/profile.png'} 
      alt="profile-pic" 
      style='--opacity: {!isFetching && hero ? 1 : 0.6}'
      class={!isFetching && hero ? '' : 'animate'}
    >

    {#if hero}
      <ul>
        <li>Name: {!isFetching && hero ? hero.name : 'loading...'}</li>
        <li>Combat: {!isFetching && hero ? hero.powerstats.combat : 'loading...'}</li>
        <li>Durability: {!isFetching && hero ? hero.powerstats.durability : 'loading...'}</li>
        <li>Inteligence: {!isFetching && hero ? hero.powerstats.intelligence : 'loading...'}</li>
        <li>Power: {!isFetching && hero ? hero.powerstats.power : 'loading...'}</li>
        <li>Speed: {!isFetching && hero ? hero.powerstats.speed : 'loading...'}</li>
        <li>Strength: {!isFetching && hero ? hero.powerstats.strength : 'loading...'}</li>
      </ul>
      <div>sum: {!isFetching && hero ? score : 'loading...'}</div>
    {/if}
    
  </div>
</div>
<style>
  .player-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid black;
    height: 100%;
    width: calc(100%/2);
    position: relative;
    min-width: 12rem;
    min-height: 25rem;
    position: relative;
  }
  .result {
    height: 3rem;
    width: 6rem;
    background: red;
    position: absolute;
    top: -0.5rem;
    left: -2rem;
    transform: rotate(-45deg);
    border-top-right-radius: 200px;
    border-top-left-radius: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h2 {
    text-align: center;
  }

  li {
    list-style: none;
  }
  .head {
    margin-top: 1rem;
  }

  .animate {
    animation: beat 3s infinite;
  }

  .player-detail-conatiner {
    height: calc(100% - 5rem);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  img {
    background: black;
    opacity: var(--opacity);
    border-radius: 25px;
    height: 10rem;
    width: 10rem;
    justify-self: start;
    margin-bottom: 0.5rem;
  }

  @keyframes beat {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.05);
    }
    50% {
      transform: scale(1.1);
    }
    75% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
</style>