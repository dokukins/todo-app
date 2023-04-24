<template>
  <nav class="flex items-center gap-4">
    <RouterLink
      class="text-lg text-gray-700 hover:text-blue-600 font-medium"
      to="/"
      >Home</RouterLink
    >
    <RouterLink
      class="text-lg text-gray-700 font-medium hover:text-blue-600"
      to="/about"
      >About</RouterLink
    >

    <RouterLink
      class="text-lg text-gray-700 font-medium hover:text-blue-600"
      v-if="authStore.currentUser"
      :to="'/user/' + authStore.getCurrentUser.id"
    >
      <span class="">User</span>
    </RouterLink>
    <VUserLink @logout="signOutUser" :user="authStore.getCurrentUser" />
  </nav>
</template>

<script setup>
import VUserLink from "./VUserLink.vue";
import { useAuthStore } from "../../stores/authStore";
import { useRouter } from "vue-router";
const authStore = useAuthStore();
const router = useRouter();

const signOutUser = async () => {
  await authStore.signOutUser();
  router.push("/register");
};
</script>

<style lang="scss" scoped></style>
