import { createRouter, createWebHistory } from "vue-router";
import Main from "../layouts/Main.vue";
import SelfCheck from "../components/SelfCheck.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/selfcheck",
    name: "SelfCheck",
    component: SelfCheck,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
