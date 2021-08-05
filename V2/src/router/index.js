import Vue from "vue";
import VueRouter from "vue-router";
import routeList from "./config";

Vue.use(VueRouter);

const routes = routeList.map((item) => {
  return {
    path: `/${item}`,
    name: `${item}`,
    component: () => import(`@/views/${item}`),
  };
});

const router = new VueRouter({
  routes,
});

export default router;
