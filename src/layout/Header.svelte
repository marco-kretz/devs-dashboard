<script>
  import { onMount } from "svelte";

  let currentDate = "";

  function getCurrentTimeString() {
    const currentDate = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return new Intl.DateTimeFormat("en-US", options).format(currentDate);
  }

  onMount(() => {
    currentDate = getCurrentTimeString();

    // Update date one a minute
    setInterval(() => {
      currentDate = getCurrentTimeString();
    }, 60000);
  });
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">Developer's Dashboard</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
      </ul>
      <div class="d-flex text-white">{currentDate}</div>
    </div>
  </div>
</nav>
