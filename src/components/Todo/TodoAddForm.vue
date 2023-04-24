<template>
  <form @submit.prevent="addTodo" class="mt-4 shadow-md">
    <BaseInput
      v-model="todoName"
      input-icon="add"
      :placeholder-title="'Add todo'"
    >
      <BaseButton
        type="submit"
        class="absolute right-2.5 bottom-2.5"
        color="blue"
        >Add</BaseButton
      >
    </BaseInput>
  </form>
</template>

<script setup>
import BaseInput from "../Base/BaseInput.vue";
import BaseButton from "../Base/BaseButton.vue";
import { ref } from "vue";
import { useTodoStore } from "../../stores/todoStore";
import { useAuthStore } from "../../stores/authStore";
const todoStore = useTodoStore();
const todoName = ref("");
const authStore = useAuthStore();

const addTodo = async () => {
  await todoStore.insertData(todoName.value, authStore.currentUser.id);
  todoName.value = "";
};
</script>

<style lang="scss" scoped></style>
