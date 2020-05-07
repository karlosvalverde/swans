<template>
  <div class="where container-fluid">
    <div class="row w-100">
      <div class="col-6 pr-5 is-fixed is-above-1 secondary my-auto">
        <b-carousel
          class="w-100"
          id="carousel-fade"
          fade
        >
          <b-carousel-slide
            img-src="https://www.revolvermag.com/sites/default/files/styles/banner/public/media/images/article/swanscatherine-ceresole.jpg"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="https://www.sala-apolo.com/uploads/media/default/0001/02/thumb_1493_default_wide.jpeg"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="https://i.pinimg.com/originals/b5/fd/8c/b5fd8cb3444a05a71f9a065a8fd510e9.jpg"
          ></b-carousel-slide>
        </b-carousel>
        <div>
          <h3 class="mt-3 font-weight-bold">Bar Celona</h3>
          <p>C/ d'en Pepí 64 - 08004<br>
          Barcelona</p>
        </div>  
      </div>
      <div class="break"></div>
      <div class="col-6 ml-auto pb-5 mb-5 is-scrolled overflow-auto w-100 text-center">    
        <div class="grid">
          <div class="item-1 m-5m-5">
            <h2>AND</h2>
          </div>
          <div class="item">
            <LazyYoutubeVideo src="https://www.youtube.com/embed/w5ZkzUGKQzo" />
          </div>
          <div class="item-1 m-5">
            <h2>HERE</h2>
          </div>       
          <div class="item">
            <LazyYoutubeVideo src="https://www.youtube.com/embed/edyKvdCqodQ" />
          </div>  
          <div class="item-1 m-5">
            <h2>WE HAVE</h2>
          </div>
          <div class="item">
            <LazyYoutubeVideo src="https://www.youtube.com/embed/MaCQAxkLcYk" />
          </div>
          <div class="item-1 m-5">
            <h2>A SELECTION</h2>
          </div>
          <div class="item">
            <LazyYoutubeVideo src="https://www.youtube.com/embed/Qr_yDyhv0kc" />
          </div>
          <div class="item-1 m-5">
            <h2>OF</h2>
          </div>
          <div class="item">
            <LazyYoutubeVideo src="https://www.youtube.com/embed/GC3uv_aYDPI" />
          </div>
          <div class="item-1 m-5">
            <h2>MUSIC</h2>
          </div>
          <div class="item">
            <LazyYoutubeVideo src="https://www.youtube.com/embed/ikCCQFKvYcc" />
          </div>
          <div class="item-1 m-5">
            <h2> & </h2>
          </div>
          <div class="item">
            <LazyYoutubeVideo src="https://www.youtube.com/embed/6qDq9eGUmMI" />
          </div>
          <div class="item-1 m-5">
            <h2>VIDEOS</h2>
          </div>
          <div class="item">
            <LazyYoutubeVideo src="https://www.youtube.com/embed/n8_ryhF690M" />
          </div>
          
        </div>
      </div>
    </div>
  </div>       
</template>

<script>
import LazyYoutubeVideo from "vue-lazy-youtube-video";
import VLazyImage from "v-lazy-image";

export default {
  name: "where",
  components: {
    LazyYoutubeVideo,
    VLazyImage,
  }
};
</script>
