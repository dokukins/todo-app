<template>
  <SignIn />
  <RouterLink to="/register" class="flex justify-center">
    Doesn't have account? Go to sign up page
  </RouterLink>
</template>

<script setup>
import SignIn from "../components/Auth/SignIn.vue";
</script>

<style lang="scss" scoped></style>
