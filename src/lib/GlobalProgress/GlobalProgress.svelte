<script>
  export let completed = 0;
  export let total = 0;
</script>

<div class="wrapper">
  <div class="progress">
    {completed}/{total}
  </div>
  <p class="description">Global progress</p>
</div>

<style>
  .wrapper {
    border-style: dashed;
    border-width: 3px;
    border-color: var(--primary);
    width: 250px;
    height: 250px;
    color: var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    flex-direction: column;
    box-shadow:
      0 0 50px -30px var(--primary),
      var(--primary) 0 0 50px -30px inset;
  }
  .progress {
    font-size: 48px;
    text-align: center;
  }
  .description {
    font-size: 10px;
    text-align: center;
  }
</style>
