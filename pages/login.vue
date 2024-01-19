<script setup lang="ts">
import { useUsersStore } from "~/stores/users";

const formData = reactive({
  first_name: "",
  last_name: "",
  email: "",
  password: ""
})

const createUser = async () => {
  console.log(formData)
  await useUsersStore().createUser(formData)
}
</script>

<template>
  <div class="Page__login">

  </div>
</template>

<style scoped lang="scss">
.Page {
  .Login {
    &__form {
      max-width: 33vw;
      border: 1px solid #cccc;
      padding: 12px;
      border-radius: 8px;
    }
  }
}
</style>
