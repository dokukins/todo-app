<template>
  <div
    class="w-10 h-10 bg-gray-500 rounded-full cursor-pointer relative"
    @click.stop="showProfile"
    v-outside="closeProfile"
  >
    <ul
      v-if="profileVisible && user"
      class="min-w-[12rem] w-auto p-2 z-10 rounded-lg shadow-xl select-none bg-white absolute top-14 right-0"
    >
      <li class="p-1 hover:bg-blue-500 hover:text-white rounded-md">
        <RouterLink :to="`/user/${user?.id}`">Profile</RouterLink>
      </li>
      <li class="p-1 hover:bg-blue-500 hover:text-white rounded-md">
        <RouterLink :to="`/user/${user?.id}`">Link</RouterLink>
      </li>
      <li class="p-1 hover:bg-blue-500 hover:text-white rounded-md">
        <RouterLink :to="`/user/${user?.id}`">Link</RouterLink>
      </li>
      <li
        class="p-1 hover:bg-blue-500 hover:text-white rounded-md"
        @click="$emit('logout')"
      >
        Logout
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emits = defineEmits(["logout"]);
const props = defineProps({
  user: Object,
});

let profileVisible = ref(false);

const showProfile = () => {
  profileVisible.value = !profileVisible.value;
};

const closeProfile = () => {
  profileVisible.value = false;
};
</script>

<style lang="scss" scoped></style>
