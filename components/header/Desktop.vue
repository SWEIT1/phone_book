<template>
  <div class="Header">
    <div class="Header__logo">
      <h1>Finance Manager</h1>
    </div>
    <div class="Header__navigation">
      <nuxt-link to="/">About</nuxt-link>
      <nuxt-link to="/">Contacts</nuxt-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.Header {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 20px 80px;
  background-color: #01499c;
  justify-content: space-between;
  color: white;

  &__navigation {
    display: flex;
    gap: 8px;
  }
}
</style>
