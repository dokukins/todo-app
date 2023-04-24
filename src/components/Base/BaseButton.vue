<template>
  <button
    :class="` ${colorVariants[color]} text-white  font-medium rounded-lg text-sm px-4 py-2 `"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps(["color"]);
const colorVariants = {
  blue: `
    bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
    focus:ring-blue-300 dark:bg-blue-600 
    dark:hover:bg-blue-700 dark:focus:ring-blue-800
    `,
  red: "bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800",
  green:
    "bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
};
</script>

<style lang="scss" scoped></style>
