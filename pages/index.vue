<script setup lang="ts">
// import { useGeneralStore } from "~/stores/general";
//
// const generalStore = useGeneralStore()
//
// if (!generalStore.contacts) await generalStore.fetchAllData()
</script>

<template>
  <div class="Page_index"></div>
</template>

<style scoped lang="scss">
.Page {

  &_index {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    max-width: 1200px;

    &__container {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    }

    &__form {
      margin: 20px;
      border: 1px solid black;
      padding: 12px;
      border-radius: 12px;
      width: 100%;
    }
  }
}
</style>
