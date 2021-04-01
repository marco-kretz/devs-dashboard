<script>
  import { onMount } from "svelte";
  import { memeAutoload } from "../store";

  let meme = null;
  let autoloadInterval = null;

  onMount(() => {
    fetchMeme();
    setAutoload($memeAutoload);
  });

  async function fetchMeme() {
    try {
      const response = await self.fetch(`https://meme-api.herokuapp.com/gimme`);
      meme = await response.json();
    } catch {
      throw new Error();
    }
  }

  function setAutoload(autoload) {
    if (autoload === true && autoloadInterval === null) {
      autoloadInterval = setInterval(() => {
        fetchMeme();
      }, 60000);
    } else if (autoload === false && autoloadInterval !== null) {
      clearInterval(autoloadInterval);
      autoloadInterval = null;
    }
  }

  $: setAutoload($memeAutoload);
</script>

{#if meme}
  <div class="card mb-2">
    <div class="card-header">
      {meme.title}
    </div>
    <img src={meme.url} class="card-img-top w-100" alt={meme.title} />
    <div class="card-footer text-muted">
      Author: {meme.author} | reddit.com
    </div>
  </div>

  <button on:click={fetchMeme} class="btn btn-outline-primary w-100">Get new one</button>
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="memeAutoloadToggle" bind:checked={$memeAutoload} />
    <label class="form-check-label" for="memeAutoloadToggle">Auto-refresh once per minute</label>
  </div>
{:else}
  <p>Loading...</p>
{/if}
