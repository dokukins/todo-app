<template>
  <header class="bg-gray-200 flex h-16 shadow-md">
    <div class="container flex justify-between items-center">
      <RouterLink to="/">
        <h1 class="text-3xl">TODO APP</h1>
      </RouterLink>
      <VNavbar />
    </div>
  </header>
</template>

<script setup>
import VNavbar from "./VNavbar.vue";
</script>

<style lang="scss" scoped></style>
