import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const Home = () => import("../routes/home.vue");
const What = () => import("../routes/what.vue");
const Who = () => import("../routes/who.vue");
const Where = () => import("../routes/where.vue");


export default new Router({
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/what",
      name: "what",
      component: What
    },
    {
      path: "/who",
      name: "who",
      component: Who
    },
    {
      path: "/where",
      name: "where",
      component: Where
    },
  ],
});
