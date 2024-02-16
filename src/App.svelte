<script>
  import Todo from "./lib/Todo.svelte";
  import Home from "./lib/Home/Home.svelte";
  import GlobalProgress from "./lib/GlobalProgress/GlobalProgress.svelte";
  import ItemProgress from "./lib/ItemProgress/ItemProgress.svelte";
  import ArrowDown from "./lib/Icons/ArrowDown.svelte";
  import Add from "./lib/Icons/Add.svelte";
  import { onMount } from "svelte";

  let lists = [];

  let selectedList = null;
  let mounted = false;

  $: {
    if (!selectedList && mounted) {
      localStorage.setItem("sort_me_out_lists", JSON.stringify(lists));
    }
  }

  onMount(() => {
    lists = JSON.parse(localStorage.getItem("sort_me_out_lists")) || [];
    localStorage.setItem("sort_me_out_lists", JSON.stringify(lists));
    mounted = true;
  });
</script>

<main id="home">
  {#if selectedList}
    <div class="view">
      <Todo
        bind:todo={selectedList}
        onDelete={() => {
          lists = lists.filter((list) => list !== selectedList);
          selectedList = null;
        }}
      />
    </div>
  {:else}
    <Home>
      <GlobalProgress
        total={lists.reduce((p, c) => p + c.tasks.length, 0)}
        completed={lists.reduce(
          (p, c) => p + c.tasks.filter((task) => task.completed).length,
          0
        )}
      />
      <a class="bottom" href="#lists">
        <ArrowDown />
      </a>
    </Home>
    <div id="lists" class={`lists ${lists.length > 0 ? "no_empty" : ""}`}>
      {#each lists as list}
        <button
          class="list"
          on:click={() => {
            selectedList = list;
          }}
        >
          <ItemProgress
            title={list.title}
            total={list.tasks.length}
            completed={list.tasks.filter((task) => task.completed).length}
          />
        </button>
      {/each}
      <button
        class="list"
        on:click={() => {
          lists.push({ title: "😎", tasks: [] });
          selectedList = lists[lists.length - 1];
        }}
      >
        <ItemProgress>
          <Add />
        </ItemProgress>
      </button>
      <a class="bottom upside_down" href="#home">
        <ArrowDown />
      </a>
    </div>
  {/if}
</main>

<style>
  .lists {
    position: relative;
    display: flex;
    gap: 6rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 6rem 0;
    padding-bottom: 10rem;
    min-height: 100vh;
  }

  .lists.no_empty .list:nth-child(even) {
    margin-left: 6rem;
  }

  .lists.no_empty .list:nth-child(odd) {
    margin-right: 6rem;
  }

  .bottom {
    position: absolute;
    bottom: 1rem;
  }

  .view {
    margin: 6rem 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    min-height: 100vh;
  }

  .upside_down {
    transform: rotate(180deg);
  }
</style>
