<script>
  import dayjs from "dayjs";
  import "dayjs/locale/en";
  import relativeTime from "dayjs/plugin/relativeTime";
  import { onMount } from "svelte";

  dayjs.extend(relativeTime);

  let topStories = [];

  async function getSingleItem(id) {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);

    return await response.json();
  }

  async function getTopStories() {
    const response = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json");
    let ids = await response.json();
    ids = ids.slice(0, 10);

    const articles = [];
    for (let id of ids) {
      articles.push(await getSingleItem(id));
    }

    topStories = articles;
  }

  onMount(() => {
    getTopStories();
    setInterval(() => {
      getTopStories();
    }, 3600000);
  });
</script>

<h3>News</h3>
<div class="list-group">
  {#each topStories as story}
    <a href={story.url} class="list-group-item list-group-item-action" target="_blank" rel="noopener nofollow">
      <div class="d-flex w-100 justify-content-between">
        <h6 class="mb-1">{story.title}</h6>
        <small>{dayjs.unix(story.time).fromNow()}</small>
      </div>
      <small>Author: {story.by}</small>
    </a>
  {/each}
</div>
