<template>
  <div id="menu-nav-2" class="row w-100 text-uppercase letter-spacing-small display-4">
    <div class="col w-50">
      <router-link class="ml-3" to="/projects">Projects</router-link>
    </div>
    <div class="col w-50 text-right">
      <router-link class="mr-0" to="/contact">Contact</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "MenuNav2",
};
</script>
