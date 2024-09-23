import { createRouter, createWebHistory } from "vue-router";
import Main from "../layouts/Main.vue";
import SelfCheck from "../components/SelfCheck.vue";
import MakeChart from "../components/MakeChart.vue";
import SelectType from "../components/SelectType.vue";
import SelfCheckTypeB from "../components/SelfCheckTypeB.vue";
import MakeChartTypeB from "../components/MakeChartTypeB.vue";

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
  {
    path: "/result",
    name: "MakeChart",
    component: MakeChart,
    props: (route) => ({
      yesCount: JSON.parse(route.query.yesCount || "{}"),
      noCount: JSON.parse(route.query.noCount || "{}"),
      types: JSON.parse(route.query.types || "[]"),
    }),
  },
  {
    path: "/selecttype",
    name: "SelectType",
    component: SelectType,
  },
  {
    path: "/selfcheckB",
    name: "SelfCheckTypeB",
    component: SelfCheckTypeB,
  },
  {
    path: "/resultB",
    name: "MakeChartTypeB",
    component: MakeChartTypeB,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
