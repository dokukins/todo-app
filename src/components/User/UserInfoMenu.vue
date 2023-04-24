<template>
  <div class="min-w-[13rem] min-h-[13rem] p-4 bg-white rounded-lg shadow-md">
    <p>Todos: {{ todosLength }}</p>
    <p>Todos done: {{ todosDoneLength }}</p>
    <p>Todos in progress: {{ todosLength - todosDoneLength }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  todosLength: Number,
  todosDoneLength: Number,
});
</script>

<style lang="scss" scoped></style>
