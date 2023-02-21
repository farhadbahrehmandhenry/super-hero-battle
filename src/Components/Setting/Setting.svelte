<script>
  import {goto} from '$app/navigation';
  let playOption = 'singlePlayer';
  
  const handleSettingChange = (e) => {
    playOption = e.target.value;
  }

  const handleStart = () => {
    goto(`/${playOption}`);
  }
</script>

<div id="settings-container">
  <div class="options">
    <label for="single-player">Single Player</label>
    <input type="radio" id="single-player" name="play-setting" value="singlePlayer" on:click={handleSettingChange} checked>
    <label for="multi-player">Multi Player</label>
    <input type="radio" id="multi-player" name="play-setting" value="multiPlayer" on:click={handleSettingChange}>
  </div>
  <button class="start-btn" on:click={handleStart}>
    <!-- <a href="/{playOption}">Start</a> -->
    START
  </button>
</div>
<style>
  #settings-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1.5rem;
  }
  input[type="radio"] {
    position: relative;
    cursor: pointer;
  }

  input[type="radio"]::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #333;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
  }

  input[type="radio"]::after {
    content: "";
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    background-color: #fff;
    border: 1px solid #fff;
    border-radius: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    z-index: 2;
  }

  input[type="radio"]:checked::after {
    background-color: #333;
  }
  .start-btn {
    border: none;
    outline: none;
    width: 4rem;
    height: 2rem;
    border: 2px solid black;
    font-family: 'Carter One', cursive;
    background-color: red;
    cursor: pointer;
    margin-top: 1rem;
    font-size: 1rem;
  }

  .start-btn:hover {
    background-color: black;
    color: white;
  }
</style>