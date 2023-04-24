<template>
  <div class="font-rubik max-w-xl mx-auto mt-12">
    <form action="" class="space-y-5" @submit.prevent="signUp">
      <div>
        <label for="email" class="mb-1 block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray disabled:text-gray-500"
          placeholder="Email"
          v-model="email"
        />
      </div>
      <div>
        <label
          for="password"
          class="mb-1 block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <button
        type="submit"
        class="rounded-xl border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:bg-blue-700 hover:border-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/authStore";

const authStore = useAuthStore();

const router = useRouter();
const email = ref("");
const password = ref("");

const signUp = async () => {
  await authStore.signUp(email.value, password.value);
  router.push("/");
};
</script>

<style lang="scss" scoped></style>
