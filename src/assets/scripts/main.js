/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import Vue from "vue";
import router from "./routes";
import App from "./App.vue";

import "bootstrap";
import "../styles/main.scss";

// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
