<script>
  export let completed = 0;
  export let total = 0;
  export let title = "";
  export let size = 200;

  $: progress = (completed / total) * 100;
</script>

<div class="wrapper" style="width: {size}px; height: {size}px">
  <slot />
  {#if title}
    <div class="progress">
      {title}
    </div>
  {/if}
  {#if total}
    <p class="description">
      {completed}/{total}
    </p>
  {/if}
  <svg
    width={size}
    height={size}
    viewBox="0 0 {size} {size}"
    class="circular-progress"
    style="--progress: {progress}; --size: {size}px"
  >
    <circle class="bg"></circle>
    <circle class="fg"></circle>
  </svg>
</div>

<style>
  .wrapper {
    position: relative;
    color: var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    box-shadow:
      0 0 50px -30px var(--primary),
      var(--primary) 0 0 50px -30px inset;
  }
  .wrapper:hover {
    box-shadow:
      0 0 60px -30px var(--primary),
      var(--primary) 0 0 60px -30px inset;
  }
  .progress {
    font-size: 48px;
    text-align: center;
  }
  .description {
    font-size: 10px;
    text-align: center;
  }

  .circular-progress {
    position: absolute;
    top: 0;
    left: 0;
    --half-size: calc(var(--size) / 2);
    --stroke-width: 10px;
    --radius: calc((var(--size) - var(--stroke-width)) / 2);
    --circumference: calc(var(--radius) * pi * 2);
    --dash: calc((var(--progress) * var(--circumference)) / 100);
  }

  .circular-progress circle {
    cx: var(--half-size);
    cy: var(--half-size);
    r: var(--radius);
    stroke-width: var(--stroke-width);
    fill: none;
    stroke-linecap: round;
  }

  .circular-progress circle.bg {
    stroke: transparent;
  }

  .circular-progress circle.fg {
    transform: rotate(-90deg);
    transform-origin: var(--half-size) var(--half-size);
    stroke-dasharray: var(--dash) calc(var(--circumference) - var(--dash));
    transition: stroke-dasharray 0.3s linear 0s;
    stroke: var(--primary);
  }
</style>
