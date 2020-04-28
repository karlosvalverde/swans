import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const Home = () => import("../routes/home.vue");
const About = () => import("../routes/about.vue");
const Projects = () => import("../routes/projects.vue");
const Contact = () => import("../routes/contact.vue");

export default new Router({
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/about", name: "about", component: About },
    { path: "/projects", name: "projects", component: Projects },
    { path: "/contact", name: "contact", component: Contact },
  ],
});
