<template>
  <li
    class="flex items-center justify-between bg-white py-4 px-4 first:mt-4 last:mb-4 rounded-md shadow-md"
  >
    <span class="flex items-center gap-1">
      <span
        class="material-icons text-gray-400 hover:text-gray-700 active:text-gray-900 select-none cursor-pointer"
        @click="$emit('toggleEdit', todo.id, todo)"
      >
        edit
      </span>
      <Transition
        name="done"
        tag="span"
        class="flex items-center"
        @click="$emit('toggleDone', todo.id)"
      >
        <span
          class="material-icons text-green-600 select-none cursor-pointer"
          v-if="todo.todo_done"
        >
          done
        </span>
        <span
          class="material-icons text-red-600 select-none cursor-pointer"
          v-else
        >
          close
        </span>
      </Transition>
      <span
        class="text-2xl font-rubik cursor-pointer"
        @click="$router.push(`/todo/${todo.id}`)"
      >
        {{ todo.todo_name }}
      </span>
    </span>
    <span
      class="material-icons text-gray-400 hover:text-gray-700 active:text-gray-900 cursor-pointer select-none"
      @click="$emit('deleteTodo', todo.id)"
    >
      delete
    </span>
  </li>
</template>

<script setup>
defineProps({
  todo: Object,
});

defineEmits(["toggleDone", "deleteTodo", "toggleEdit"]);
</script>

<style lang="css" scoped>
.done-move,
.done-enter-active,
.done-leave-active {
  transition: all 0.5s ease;
}

.done-enter-from,
.done-leave-to {
  transform: rotate(180deg);
}

.done-leave-active {
  display: none;
}
</style>
