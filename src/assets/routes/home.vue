<template>
  <div class="home container-fluid full">
    <div class="row mx-auto w-100 is-fixed is-above-2 justify-content-center overflow-auto">
      <div class="col align-self-center text-justify">
        <h1 class="is-big text-uppercase mt-3 pr-5 text-white">Hardest band on Earth<br>
        <span class="is-secondary">Live<br>
        30. 06. 20</span><br>
        Bar<br>
        Celona</h1>
      </div>
    </div>
    <div class="row h-100">
      <div class="col align-self-center text-center scroll-hidden">
        <v-lazy-image class="img-fluid" src="https://i.imgur.com/xOftcX9.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";

export default {
  name: "home",
  components: {
    VLazyImage
  }
};
</script>
