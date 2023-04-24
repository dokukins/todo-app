import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

import { useAuthStore } from "../stores/authStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/user/:id",
      name: "user",
      component: () => import("../views/UserView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/todo/:id",
      name: "todo",
      component: () => import("../views/TodoView.vue"),
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach(async (to, from) => {
  const authStore = useAuthStore();
  await authStore.getLoggedInUser();
  if (to.meta.requiresAuth && !authStore.currentUser && to.name !== "login") {
    return { name: "login" };
  }
});

export default router;
