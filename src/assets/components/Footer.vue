<template>
  <footer>
    <div class="footer row m-0 pt-2 w-100 fixed-bottom secondary text-uppercase letter-spacing-small">
      <div class="col my-auto">
        <h2>
          <router-link to="/projects">Projects</router-link>
        </h2>  
      </div>
      <div class="col my-auto text-right">
        <h2>
          <router-link to="/contact">Contact</router-link>
        </h2>  
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "MyFooter"
};
</script>
