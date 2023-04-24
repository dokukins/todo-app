<template>
  <div class="">
    <header
      class="flex flex-col gap-4 items-center justify-center relative mt-16"
    >
      <div class="flex justify-center items-center mt-4">
        <span
          class="w-32 h-32 border-8 border-gray-200 bg-gray-500 rounded-full absolute -top-8"
        ></span>
      </div>
      <div
        class="container pt-24 pb-8 flex flex-col place-items-center gap-4 bg-white rounded-lg shadow-md"
      >
        <h1>{{ user.email }}</h1>
        <p>{{ user.id }}</p>
        <p>User bio</p>
        <p>{{ user.created_at.slice(0, 10) }}</p>
      </div>
    </header>
  </div>
</template>

<script setup>
const props = defineProps({
  user: Object,
});
</script>

<style lang="scss" scoped></style>
