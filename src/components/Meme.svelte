<script>
  import { onMount } from "svelte";

  let isLoading = true;
  let meme = null;

  onMount(() => {
    fetchMeme();
  });

  async function fetchMeme() {
    isLoading = true;

    try {
      const response = await self.fetch(`https://meme-api.herokuapp.com/gimme`);
      meme = await response.json();
      isLoading = false;
    } catch {
      throw new Error();
    }
  }
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
{:else}
  <p>Loading...</p>
{/if}
