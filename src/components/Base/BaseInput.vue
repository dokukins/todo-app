<template>
  <label
    for="input"
    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
  ></label>
  <div class="relative">
    <span
      class="material-icons absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none"
    >
      {{ inputIcon }}
    </span>
    <input
      type="text"
      name="input"
      id="input"
      :placeholder="placeholderTitle"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="block w-full p-4 pl-10 rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
    />

    <slot></slot>
  </div>
</template>

<script setup>
defineProps(["modelValue", "placeholderTitle", "inputIcon"]);
defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped></style>
