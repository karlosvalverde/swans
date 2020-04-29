<template>
  <header
    id="menu-nav-1"
    class="row w-100 justify-content-between text-uppercase letter-spacing-small display-4"
  >
    <div class="col w-50">
      <router-link class="rotate-1" to="/">Swans</router-link>
    </div>
    <div class="col w-50">
      <div class="row">
        <div class="col text-center">
          <router-link class="rotate-2" to="/who">Who</router-link>
        </div>
        <div class="col text-center">
          <router-link class="rotate-2" to="/where">Where</router-link>
        </div>
        <div class="col text-right">
          <router-link class="rotate-2" to="/when">When</router-link>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "MenuNav"
};
</script>
