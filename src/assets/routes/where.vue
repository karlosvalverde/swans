<template>
  <div class="container-fluid full">
    <div class="row h-100">
      <div class="col align-self-center text-center serif bg-dark p-5">
        <!-- <p class="display-4">studio (at) carlos-valverde (dot) com</p> -->
        <GmapMap ref="mapRef" :center="{ lat: 10, lng: 10 }" style="width: 500px; height: 300px">
          <GmapMarker
            v-for="(m, index) in markers"
            :key="index"
            :position="m.position"
            @click="center = m.position"
          />
        </GmapMap>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name: "where",
  mounted() {
     // At this point, the child GmapMap has been mounted, but
     // its map has not been initialized.
     // Therefore we need to write mapRef.$mapPromise.then(() => ...)

    this.$refs.mapRef.$mapPromise.then((map) => {
      map.panTo({lat: 1.38, lng: 103.80})
    });
  }
};
</script>
