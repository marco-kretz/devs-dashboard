<script>
  import Meme from "./components/Meme.svelte";
  import Newsfeed from "./components/Newsfeed.svelte";
  import Notes from "./components/Notes.svelte";
  import Timer from "./components/Timer.svelte";
  import Todos from "./components/Todos.svelte";
  import Header from "./layout/Header.svelte";
</script>

<Header />
<main class="container mt-4">
  <div class="row g-4">
    <div class="col col-md-9">
      <div class="row g-4">
        <div class="col col-md-6">
          <h3>Time Tracking</h3>
          <Timer />
        </div>
        <div class="col col-md-6">
          <h3>Todos</h3>
          <Todos />
        </div>
        <div class="col col-md-6">
          <h3>Notes</h3>
          <Notes />
        </div>
        <div class="col col-md-6">
          <Newsfeed />
        </div>
      </div>
    </div>
    <div class="col col-md-3">
      <h3>Random Meme</h3>
      <Meme />
    </div>
  </div>
</main>
