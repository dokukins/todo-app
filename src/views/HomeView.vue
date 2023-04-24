<script setup>
import TodoAddForm from "../components/Todo/TodoAddForm.vue";
import TodoList from "../components/Todo/TodoList.vue";
import VLoader from "../components/VLoader.vue";
import { onBeforeMount, ref } from "vue";

import { useAuthStore } from "../stores/authStore";
import { useTodoStore } from "../stores/todoStore";

const authStore = useAuthStore();
const todoStore = useTodoStore();

let loading = ref(true);

onBeforeMount(async () => {
  loading.value = true;
  await todoStore.fetchTodosData();
  await todoStore.fetchTodoDataByUser(authStore.currentUser.id);
  loading.value = false;
});
</script>

<template>
  <TodoAddForm />
  <TodoList v-if="!loading && todoStore.getUserTodosLength" />
  <VLoader
    v-else-if="loading"
    width="10rem"
    height="10rem"
    border-width="1rem"
  />
  <div v-else>
    <p class="text-3xl text-center mt-12">
      No todo added yet. Please use forma bove to add todo
    </p>
  </div>
</template>
