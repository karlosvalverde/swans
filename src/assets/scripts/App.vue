<template>
  <div id="app">
    <div class="container-fluid full">
      <div class="row">
        <div class="col align-items-start">
          <menu-nav-1></menu-nav-1>
        </div>
      </div>
      <div class="row align-items-end justify-content-between">
        <menu-nav-2></menu-nav-2>
      </div>
      <div class="row h-100">  
        <div class="col align-self-center">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
        
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
    MenuNav2,
  },
};
</script>
