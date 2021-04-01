<script>
  import { onMount } from "svelte";
  import Meme from "./components/Meme.svelte";
  import Timer from "./components/Timer.svelte";
  import Todos from "./components/Todos.svelte";
  import Header from "./layout/Header.svelte";

  let isLoading = true;
  let memes = [];

  onMount(async () => {
    loadMore();
  });

  async function fetchMemes(count = 8) {
    const response = await self.fetch(`https://meme-api.herokuapp.com/gimme/${count}`);

    try {
      const data = await response.json();
      return data.memes;
    } catch {
      throw new Error();
    }
  }

  async function loadMore() {
    isLoading = true;
    const data = await fetchMemes();
    memes = [...memes, ...data];
    isLoading = false;
  }
</script>

<Header />
<main class="container mt-4">
  <div class="row g-4">
    <div class="col">
      <h3>Time Tracking</h3>
      <Timer />
    </div>
    <div class="col">
      <h3>Todos</h3>
      <Todos />
    </div>
    <div class="col-3">
      <h3>Random Meme</h3>
      <Meme />
    </div>
  </div>
</main>
