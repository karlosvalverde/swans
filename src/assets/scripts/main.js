/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import Vue from "vue";
import VueLazyLoad from "vue-lazyload";
import router from "./routes";
import App from "./App.vue";

import "bootstrap";
import "../styles/main.scss";

/**
 * Write any other JavaScript below
 */

Vue.use(VueLazyLoad);

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
