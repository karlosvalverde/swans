<template>
  <div class="container-fluid">
    <div class="who d-flex flex-wrap is-grayscale flex-row align-items-end justify-content-center h-100 text-center">
      <div class="is-card p-5 w-25" v-on:click="isActive1 = !isActive1" v-bind:class="{ is_active: isActive1 }" >
        <h2 class="p-3 mb-3">Michael Gira</h2>
        <p class="is-hidden mb-5">(February 19, 1954) is an American singer-songwriter, multi-instrumentalist, author and artist. He is the main force behind the New York City musical group Swans and fronted Angels of Light. He is also the founder of Young God Records.</p>
        <v-lazy-image class="img-fluid" src="https://i.imgur.com/h4itu5z.jpg" />
      </div>
      <div class="is-card p-5 w-25"  v-on:click="isActive2 = !isActive2" v-bind:class="{ is_active: isActive2 }">
        <h2 class="p-3 mb-3">Norman Westberg</h2>
        <p class="is-hidden mb-5"> is a guitarist from Detroit best known for his work with Swans. Present through almost the entirety of the band's existence, Westberg was brought on for Swans' debut album Filth (1983) and appeared on every album through 1991's White Light from the Mouth of Infinity (he also played on the 1995 album The Great Annihilator). Westberg became a full-time Swans member once again when Michael Gira reactivated the group in 2010.</p>
        <v-lazy-image class="img-fluid" src="https://i.imgur.com/CVmwVI9.jpg" />
      </div>
      <div class="is-card p-5 w-25"  v-on:click="isActive3 = !isActive3" v-bind:class="{ is_active: isActive3 }">
        <h2 class="p-3 mb-3">Kristof Hahn</h2>
        <p class="is-hidden mb-5">Berlin-based guitarist, has played with the likes of Alex Chilton, Tav Falco, and Chris Spedding and his most infamous role of being the lap steel guitarist for the newly reformed Swans in 2009 alongside Gira, Puleo, Westberg, Pravdica, Harris and now Wallfisch made him an irreplaceable component in the new lineup. As a composer Hahn specializes in everything from writing pop to immense and layered compositions.</p>
        <v-lazy-image class="img-fluid" src="https://i.imgur.com/ynwfTKg.jpg" />
      </div>
      <div class="is-card p-5 w-25"  v-on:click="isActive4 = !isActive4" v-bind:class="{ is_active: isActive4 }">
        <h2 class="p-3 mb-3">Phil Puleo</h2>
        <p class="is-hidden mb-5">is an American composer, drummer, illustrator and visual artist from New York. He is known as a founding member of the band Cop Shoot Cop and for his current involvement in the experimental rock group Swans. He has also collaborated with Michael Gira on his Angels of Light musical project. After briefly touring with the Swans during the mid-nineties, Puleo joined the band as a full-time member in 2010.</p>
        <v-lazy-image class="img-fluid" src="https://i.imgur.com/2oJMlpz.jpg" />
      </div>
      <div class="is-card p-5 w-25"  v-on:click="isActive5 = !isActive5" v-bind:class="{ is_active: isActive5 }">
        <h2 class="p-3 mb-3">Thor Harris</h2>
        <p class="is-hidden mb-5">(born February 7, 1965) is an artist, sculptor, musician, painter, carpenter and handyman. He is the percussionist for Swans.</p>
        <v-lazy-image class="img-fluid" src="https://i.imgur.com/yRNnhrl.jpg" />
      </div>
      <div class="is-card p-5 w-25"  v-on:click="isActive6 = !isActive6" v-bind:class="{ is_active: isActive6 }">
        <h2 class="p-3 mb-3">Christopher Pravdica</h2>
        <p class="is-hidden mb-5">is an American musician and songwriter. He is best known as the current bass guitarist of American experimental rock band Swans. </p>
        <v-lazy-image class="img-fluid" src="https://i.imgur.com/AcLQZJM.jpg" />
      </div>
    </div>
  </div>  
</template>

<script>
import VLazyImage from "v-lazy-image";

export default {
  name: "who",
  data() {
    return {
      isActive1: false,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      isActive5: false,
      isActive6: false
    }
  },
  components: {
    VLazyImage
  },
};
</script>
