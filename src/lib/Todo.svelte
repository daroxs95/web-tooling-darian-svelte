<script>
  import Delete from "./Icons/Delete.svelte";
  import { onMount } from "svelte";

  export let todo = null;

  console.log({ todo });
  export let onDelete = () => {};

  let editTitle = false;

  let newTask = "";
  let newTitle = "";

  function addTask(event) {
    if (!todo) return;
    event.preventDefault();
    if (newTask.trim() !== "") {
      todo.tasks = [
        ...todo.tasks,
        { id: todo.tasks.length + 1, text: newTask, completed: false },
      ];
      newTask = "";
    }
  }

  function toggleTaskCompletion(id) {
    if (!todo) return;
    todo.tasks = todo?.tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
  }

  function removeTask(id) {
    if (!todo) return;
    todo.tasks = todo?.tasks.filter((task) => task.id !== id);
  }

  function handleKeyPress(event, id) {
    if (event.key === "Enter") {
      toggleTaskCompletion(id);
    }
  }

  onMount(() => {
    window.scrollTo(0, 0);
  });
</script>

<div class="wrapper">
  {#if editTitle}
    <input
      type="text"
      bind:value={newTitle}
      on:blur={() => {
        todo.title = newTitle;
        editTitle = false;
      }}
    />
  {:else}
    <div
      class="title"
      role="button"
      tabindex="0"
      on:click={() => (editTitle = true)}
      on:keypress={(e) => {
        if (e.key === "Enter") {
          editTitle = false;
        }
      }}
    >
      {todo?.title}
    </div>
  {/if}

  <button class="back" on:click={() => (todo = null)} title="Go back">
    <Delete />
  </button>

  <form on:submit={addTask}>
    <input bind:value={newTask} placeholder="Add a new task" />
    <button class="button">Add Task</button>
  </form>

  <ul>
    {#each todo?.tasks as { id, text, completed }}
      <div
        class="task"
        class:completed
        role="button"
        tabindex="0"
        on:click={() => toggleTaskCompletion(id)}
        on:keypress={(e) => handleKeyPress(e, id)}
      >
        {text}
        <button on:click={() => removeTask(id)}>
          <Delete />
        </button>
      </div>
    {/each}
  </ul>

  <button
    class="button delete"
    on:click={() => {
      onDelete();
    }}
  >
    Delete list
  </button>
</div>

<style>
  .wrapper {
    color: var(--primary);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  form {
    margin-bottom: 3rem;
  }

  .task {
    margin-bottom: 0.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .task.completed {
    text-decoration: line-through;
  }

  .title {
    margin-bottom: 0.5em;
    text-align: center;
    font-size: 50px;
  }

  .back {
    position: absolute;
    top: 0;
    right: 0;
    background: none;
    border: none;
    cursor: pointer;
    padding: 1rem;
  }

  .delete.button {
    margin-top: 10rem;
  }

  ul {
    width: 100%;
  }
</style>
