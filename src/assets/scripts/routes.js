import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const Home = () => import("../routes/home.vue");
const Who = () => import("../routes/who.vue");
const Where = () => import("../routes/where.vue");
const When = () => import("../routes/when.vue");

export default new Router({
  routes: [{
      path: "/",
      name: "home",
      component: Home
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
    {
      path: "/when",
      name: "when",
      component: When
    },
  ],
});
