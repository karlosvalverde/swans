<template>
  <div id="app">
    <div class="container-fluid">
      <my-header></my-header>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
      <my-footer></my-footer>
    </div>
  </div>
</template>

<script>
import MyHeader from "../components/Header.vue";
import MyFooter from "../components/Footer.vue";

export default {
  name: "app",
  components: {
    MyHeader,
    MyFooter
  }
};
</script>
