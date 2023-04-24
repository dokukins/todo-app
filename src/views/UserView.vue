<template>
  <div class="flex flex-col gap-4">
    <UserHeader :user="authStore.currentUser" />
    <UserInfoMenu
      :todos-length="todoStore.getUserTodosLength"
      :todos-done-length="todoStore.getUserDoneTodosLength"
    />
  </div>
</template>

<script setup>
import UserHeader from "../components/User/UserHeader.vue";
import UserInfoMenu from "../components/User/UserInfoMenu.vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "../stores/authStore";
import { useTodoStore } from "../stores/todoStore";
import { onBeforeMount } from "vue";

const authStore = useAuthStore();
const todoStore = useTodoStore();

const route = useRoute();
const router = useRouter();

const signOutUser = async () => {
  await authStore.signOutUser();
  router.push("/");
};

onBeforeMount(async () => {
  await todoStore.fetchTodoDataByUser(authStore.currentUser.id);
});
</script>

<style lang="scss" scoped></style>
