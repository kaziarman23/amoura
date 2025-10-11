import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/home.vue";
import Collections from "../pages/collections.vue";
import About from "../pages/about.vue";
import Login from "../pages/login.vue";
import NotFound from "../pages/not-found.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/Collections", name: "Collections", component: Collections },
  { path: "/about", name: "About", component: About },
  { path: "/login", name: "Login", component: Login },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
