import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
    history: createWebHistory('/'), // Set your base URL directly here ("/" for root)
    routes,
  });
  

export default router;