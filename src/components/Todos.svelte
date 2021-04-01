<script>
  import { Trash } from "svelte-bootstrap-icons";
  import { todos } from "../store";

  let newItem = "";

  function addItem() {
    const newTodos = [...$todos, { text: newItem, status: false, date: Date.now() }];
    todos.set(newTodos);
    newItem = "";
  }

  function removeItem(indexToRemove) {
    if ($todos.length === 1 && indexToRemove === 0) {
      todos.set([]);
    } else if (indexToRemove > -1) {
      const newTodos = $todos.filter((element, index) => {
        return index !== indexToRemove;
      });
      todos.set(newTodos);
    }
  }
</script>

<form on:submit|preventDefault={addItem}>
  <div class="input-group mb-2">
    <input bind:value={newItem} type="text" class="form-control" id="newItem" placeholder="New todo..." />
    <button type="submit" class="btn btn-outline-primary">Add</button>
  </div>
</form>

<ul class="list-group">
  {#each $todos as todo, index}
    <li
      class="list-group-item d-flex flex-row justify-content-between {todo.status === true
        ? 'list-group-item-success'
        : ''}"
    >
      <div>{todo.text}</div>
      <div class="d-flex align-items-baseline">
        <input class="form-check-input me-2" type="checkbox" bind:checked={todo.status} />
        <Trash on:click={() => removeItem(index)} class="text-danger pe-auto" />
      </div>
    </li>
  {/each}
</ul>
