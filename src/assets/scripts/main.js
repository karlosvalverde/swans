/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
import router from "./routes";
import App from "./App.vue";

import "bootstrap";
import "../styles/main.scss";

/**
 * Write any other JavaScript below
 */

Vue.use(VueGoogleMaps, {
  load: {
    key: 'MY_KEY',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then set installComponents to 'false'.
  //// If you want to automatically install all the components this property must be set to 'true':
  installComponents: true
});


new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
