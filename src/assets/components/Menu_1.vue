<template>
  <header>
    <div
      class="header row w-100 secondary is-fixed is-above justify-content-between text-uppercase letter-spacing-small"
    >
      <div class="col w-50 my-auto">
        <router-link class="d-inline" to="/">
          <img class="logo-big m-3" src="../images/logo.svg" />
        </router-link>
      </div>
      <div class="col w-50 pt-2 my-auto">
        <div class="row">
          <div class="col text-right">
            <h2>
              <router-link to="/who">Who</router-link>
            </h2>
          </div>
          <div class="col text-right">
            <h2>
              <router-link to="/where">Where</router-link>
            </h2>
          </div>
          <div class="col text-right">
            <h2>
              <router-link to="/when">When</router-link>
            </h2>
          </div>
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
