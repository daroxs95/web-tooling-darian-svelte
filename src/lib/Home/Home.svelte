<div class="fullscreen">
  <slot />
</div>

<style>
  .fullscreen {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: var(--bg);
  }
</style>
