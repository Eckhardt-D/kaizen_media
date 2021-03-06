import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Packages from "./views/Packages.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/packages",
      name: "packages",
      component: Packages
    }
  ]
});
