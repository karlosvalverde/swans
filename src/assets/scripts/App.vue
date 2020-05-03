<template>
  <div id="app">
    <div class="container-fluid">
      <menu-nav-1></menu-nav-1>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
      <menu-nav-2></menu-nav-2>
    </div>
  </div>
</template>

<script>
import MenuNav1 from "../components/Menu_1.vue";
import MenuNav2 from "../components/Menu_2.vue";
export default {
  name: "app",
  components: {
    MenuNav1,
    MenuNav2
  }
};
</script>
