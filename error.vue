<template>
  <div class="Layout_default">
    <div class="Layout__header">
      <HeaderDesktop/>
      <h1>Error</h1>
    </div>
    <slot/>
  </div>
</template>

<style scoped lang="scss">
.Layout_default {
  background-color: rgba(255, 0, 0, 0.57);
  height: 100vh;
  color: white;
  font-size: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
