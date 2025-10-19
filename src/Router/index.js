import { createRouter, createWebHistory } from "vue-router";

import Home from "../Pages/Home.vue";
import Collections from "../Pages/Collections.vue";
import About from "../Pages/About.vue";
import Login from "../Pages/Login.vue";
import NotFound from "../Pages/Not-Found.vue";

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
