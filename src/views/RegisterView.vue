<template>
  <SignUp />
  <RouterLink to="/login" class="flex justify-center">
    Already has account? Go to sign in page
  </RouterLink>
</template>

<script setup>
import SignUp from "../components/Auth/SignUp.vue";
</script>

<style lang="scss" scoped></style>
