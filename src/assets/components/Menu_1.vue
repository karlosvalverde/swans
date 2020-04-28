<template>
  <div id="menu-nav-1" class="row w-100 justify-content-between text-uppercase letter-spacing-small display-4">
    <div class="col w-50">
      <router-link class="rotate-1" to="/">Carlos Valverde</router-link>
    </div>
    <div class="col w-50 text-right">
      <router-link class="rotate-2" to="/about">About</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "MenuNav1",
};
</script>
