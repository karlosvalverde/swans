/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import Vue from "vue";
import router from "./routes";
import App from "./App.vue";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap";
import "../styles/main.scss";

/**
 * Write any other JavaScript below
 */

 Vue.use(BootstrapVue);
 Vue.use(IconsPlugin);

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
