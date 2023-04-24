import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/style.css";

const app = createApp(App);

app.directive("outside", {
  mounted(el, binding) {
    document.addEventListener("click", (event) => {
      if (event.target != el) {
        binding.value();
      }
    });
  },
});

app.use(createPinia());
app.use(router);

app.mount("#app");
