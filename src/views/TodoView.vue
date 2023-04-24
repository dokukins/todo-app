<template>
  <div v-if="!todo">loading...</div>

  <div v-else class="container p-8 my-12 w-4/5 h-full bg-white rounded-lg">
    <div class="flex justify-between items-center mb-4">
      <span class="bg-blue-100 text-blue-700 rounded-md px-2 py-1">deisgn</span>
      <div class="flex gap-x-0.5">
        <span class="w-2 h-2 rounded-full bg-gray-200"></span>
        <span class="w-2 h-2 rounded-full bg-gray-200"></span>
        <span class="w-2 h-2 rounded-full bg-gray-200"></span>
      </div>
    </div>
    <div class="flex flex-col gap-2 mb-1">
      <div class="flex items-center gap-4">
        <h1 class="text-3xl">{{ todo.todo_name }}</h1>
        <span
          :class="[
            todo.todo_done ? 'bg-green-500' : 'bg-red-500',
            'px-2 py-1 text-white',
          ]"
          @click="todoStore.toggleTodoDone(todo.id)"
          >{{ todo.todo_done ? "Done" : "Not" }}</span
        >
      </div>
      <p class="text-gray-500">
        Todo descirption: Lorem ipsum dolor sit amet consectetur adipisicing.
        Todo descirption: Lorem ipsum dolor sit amet consectetur adipisicing.
        Todo descirption: Lorem ipsum dolor sit amet consectetur adipisicing.
        Todo descirption: Lorem ipsum dolor sit amet consectetur adipisicing.
        Todo descirption: Lorem ipsum dolor sit amet consectetur adipisicing.
        Todo descirption: Lorem ipsum dolor sit amet consectetur adipisicing.
        Todo descirption: Lorem ipsum dolor sit amet consectetur adipisicing.
        Todo descirption: Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
    </div>
    <hr />
    <div class="flex items-center justify-between">
      <div class="mt-4 flex items-center gap-x-1">
        <span class="w-6 h-6 rounded-full bg-red-500"></span>
        <span class="w-6 h-6 rounded-full bg-red-500"></span>
        <span class="w-6 h-6 rounded-full bg-red-500"></span>
      </div>
      <div>
        {{ todoTime(todo.created_at) }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed, onBeforeMount, ref } from "vue";
import { useTodoStore } from "../stores/todoStore";
import { useAuthStore } from "../stores/authStore";
const todoStore = useTodoStore();
const authStore = useAuthStore();
const route = useRoute();
let id = route.params.id;

let todo = computed(() => {
  return todoStore.getUserTodoById(id);
});

let todoTime = (time) => {
  let splittedTime = time.split("T");
  return `${splittedTime[0]}, ${splittedTime[1].slice(0, 8)}`;
};

onBeforeMount(async () => {
  await todoStore.fetchTodoDataByUser(authStore.getCurrentUser.id);
  // todoFetched = await todoStore.fetchTodoDataByUserAndId(
  //   authStore.getCurrentUser.id,
  //   id
  // );
});
</script>

<style lang="scss" scoped></style>
