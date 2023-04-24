<template>
  <TransitionGroup name="list" tag="ul" class="flex flex-col gap-y-4">
    <TodoListItem
      v-for="todo in todoStore.todosByUserId"
      :key="todo.created_at"
      :todo="todo"
      @toggle-done="toggleDone"
      @toggle-edit="toggleEdit"
      @delete-todo="deleteTodo"
    />
  </TransitionGroup>

  <TodoEditModal v-if="editVisible">
    <template #header>
      <h3>Edit todo ID</h3>
    </template>
    <template #input>
      <BaseInput
        placeholder-title="Change todo name"
        :input-icon="'edit'"
        v-model="editValue"
      />
    </template>
    <template #buttons>
      <div class="flex justify-center gap-24">
        <BaseButton @click="saveEdit" color="green"> Save </BaseButton>
        <BaseButton @click="cancelEdit" color="red"> Discard </BaseButton>
      </div>
    </template>
  </TodoEditModal>
</template>

<script setup>
import { ref } from "vue";
import { useTodoStore } from "../../stores/todoStore";
import TodoListItem from "./TodoListItem.vue";
import TodoEditModal from "./TodoEditModal.vue";
import BaseInput from "../Base/BaseInput.vue";
import BaseButton from "../Base/BaseButton.vue";

const todoStore = useTodoStore();

const selectedTodo = ref({});
const editVisible = ref(false);
const editValue = ref("");

const saveTodo = (todo) => {
  selectedTodo.value = todo;
};

const saveEdit = () => {
  selectedTodo.value.todo_name = editValue.value;
  todoStore.updateData(selectedTodo.value.id, editValue.value);
  editValue.value = "";
  editVisible.value = !editVisible.value;
};
const cancelEdit = () => {
  editValue.value = "";
  editVisible.value = !editVisible.value;
};

const toggleEdit = (id, todo) => {
  saveTodo(todo);
  editVisible.value = !editVisible.value;

  console.log("🚀 ~ file: TodoList.vue:26 ~ toggleEdit ~ todo:", todo);
  console.log("🚀 ~ file: TodoList.vue:26 ~ toggleEdit ~ id:", id);
};

const toggleDone = (id) => {
  console.log(id);
  todoStore.toggleTodoDone(id);
};

const deleteTodo = (id) => {
  console.log(id);
  todoStore.deleteData(id);
};
</script>

<style lang="css" scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
</style>
