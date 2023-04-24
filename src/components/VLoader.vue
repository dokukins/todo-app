<template>
  <div class="flex justify-center mt-40">
    <span
      class="loader"
      :style="{ width, height, border: `${borderWidth} solid ${color}` }"
    ></span>
  </div>
</template>

<script setup>
const props = defineProps({
  width: {
    type: String,
    default: "3rem",
  },
  height: {
    type: String,
    default: "3rem",
  },
  borderWidth: {
    type: String,
    default: "0.5rem",
  },
  color: {
    type: String,
    default: "black",
  },
});
</script>

<style scoped>
.loader {
  display: inline-block;
  border: 0.5rem solid v-bind(props[color]);
  border-radius: 50%;
  border-bottom-color: transparent !important;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
