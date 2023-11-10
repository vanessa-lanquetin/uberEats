import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./pages/home.vue";
import RestaurantView from "./pages/Restaurant.vue";

const routes = [
  { path: "/", component: Home },
  { name: 'Restaurant',path: "/restaurant/:name", component: RestaurantView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const VueApp = createApp(App);

VueApp.use(router);

VueApp.mount("#app");
