<template>
  <header>
    <div
      class="header row w-100 secondary fixed-top justify-content-between text-uppercase letter-spacing-small text-center"
    >
      <div class="col-6 my-auto text-left">
        <router-link class="d-inline" to="/">
          <img class="logo-big m-3" src="../images/logo.svg" />
        </router-link>
      </div>
      <div class="break"></div>
      <div class="col pt-2 my-auto">
        <h2>
          <router-link to="/who">Who</router-link>
        </h2>
      </div>
      <div class="col pt-2 my-auto">
        <h2>
          <router-link to="/where">Where</router-link>
        </h2>
      </div>
      <div class="col pt-2 my-auto">
        <h2>
          <router-link to="/when">When</router-link>
        </h2>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "MenuNav"
};
</script>
