<script setup>
import { onBeforeMount } from "vue";
import { RouterView } from "vue-router";
import { useAuthStore } from "./stores/authStore";

import VHeader from "./components/Header/VHeader.vue";

const authStore = useAuthStore();

onBeforeMount(async () => {
  await authStore.getLoggedInUser();
});
</script>

<template>
  <div class="bg-gray-100 w-full min-h-screen flex flex-col">
    <VHeader />

    <main class="container">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
