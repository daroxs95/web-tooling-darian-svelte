<script>
  let tasks = [];
  let newTask = "";

  export let title = "To-Do List";

  function addTask(event) {
    event.preventDefault();
    if (newTask.trim() !== "") {
      tasks = [
        ...tasks,
        { id: tasks.length + 1, text: newTask, completed: false },
      ];
      newTask = "";
    }
  }

  function toggleTaskCompletion(id) {
    tasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
  }

  function removeTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
  }

  function handleKeyPress(event, id) {
    if (event.key === "Enter") {
      toggleTaskCompletion(id);
    }
  }
</script>

<div>
  <h2>{title}</h2>

  <form on:submit={addTask}>
    <input bind:value={newTask} placeholder="Add a new task" />
    <button>Add Task</button>
  </form>

  <ul>
    {#each tasks as { id, text, completed }}
      <div
        class:completed
        role="button"
        tabindex="0"
        on:click={() => toggleTaskCompletion(id)}
        on:keypress={(e) => handleKeyPress(e, id)}
      >
        {text}
        <button on:click={() => removeTask(id)}>Remove</button>
      </div>
    {/each}
  </ul>
</div>

<style>
  div {
    margin-bottom: 0.5em;
  }

  div.completed {
    text-decoration: line-through;
  }
</style>
