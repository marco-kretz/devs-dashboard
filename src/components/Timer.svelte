<script>
  let isRunning = false;
  let timer = 0;
  let timerInterval = null;

  $: hours = Math.floor(timer / 3600);
  $: minutes = Math.floor((timer % 3600) / 60);
  $: seconds = Math.floor((timer % 3600) % 60);

  function startTimer() {
    if (timerInterval === null) {
      timerInterval = setInterval(() => {
        timer += 1;
      }, 1000);
      isRunning = true;
    }
  }

  function stopTimer() {
    if (timerInterval !== null) {
      clearInterval(timerInterval);
      timerInterval = null;
      isRunning = false;
    }
  }

  function resetTimer() {
    stopTimer();
    timer = 0;
  }
</script>

<div class="timer-container d-flex flex-row justify-content-center border rounded mb-2">
  <div class="hours">
    {#if hours < 10}0{/if}{hours}
  </div>
  <div class="minutes">
    {#if minutes < 10}0{/if}{minutes}
  </div>
  <div class="seconds">
    {#if seconds < 10}0{/if}{seconds}
  </div>
</div>
<div class="btn-group w-100" role="group" aria-label="Timer controls">
  <button on:click={startTimer} disabled={isRunning} class="btn btn-primary">Start</button>
  <button on:click={stopTimer} disabled={!isRunning} class="btn btn-danger">Stop</button>
  <button on:click={resetTimer} disabled={!isRunning} class="btn btn-warning">Reset</button>
</div>

<style>
  .timer-container > div {
    font-size: 3rem;
  }

  .timer-container > div:not(:last-child)::after {
    content: ":";
  }
</style>
