<script>
  import { PlusCircle } from "svelte-bootstrap-icons";


  let activeNote = 0;
  let notes = [
    { title: "Erste", text: "Das ist eine tollte Notiz" },
    { title: "ZweiteASD", text: "Lorem ipsum trallalalala" },
  ];

  function addNote() {
    const newNote = { title: "New note", text: "" };

    notes = [...notes, newNote];
  }
</script>

<!-- Tabs -->
<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  {#each notes as note, index}
    <li class="nav-item" role="presentation">
      <button
        class="nav-link {index === activeNote ? 'active' : ''}"
        id="pills-{index}-tab"
        data-bs-toggle="pill"
        data-bs-target="#notes-pill-{index}"
        type="button"
        role="tab"
        aria-controls="pills-{index}"
        aria-selected="true"
        contentEditable
      >{note.title}</button>
    </li>
  {/each}
  <li lass="nav nav-pills mb-3">
    <button on:click={addNote} class="nav-link">
      <PlusCircle />
    </button>
  </li>
</ul>

<!-- Tab content-->
<div class="tab-content" id="pills-tabContent">
  {#each notes as note, index}
    <div
      class="tab-pane fade {index === activeNote ? 'show active' : ''}"
      id="notes-pill-{index}"
      role="tabpanel"
      aria-labelledby="pills-{index}-tab"
    >
      {note.text}
    </div>
  {/each}
</div>
