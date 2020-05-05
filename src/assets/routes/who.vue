<template>
  <div class="container-fluid">
    <div class="who d-flex flex-wrap is-grayscale flex-row align-content-around justify-content-center h-100 text-center">
      <div class="is-card p-5 w-25" v-on:click="isActive1 = !isActive1" v-bind:class="{ active: isActive1 }" >
        <img class="img-fluid" src="../images/michael-gira.jpg">
        <h2 class="p-3 mt-5">Michael Gira</h2>
        <p class="is-hidden">(February 19, 1954) is an American singer-songwriter, multi-instrumentalist, author and artist. He is the main force behind the New York City musical group Swans and fronted Angels of Light. He is also the founder of Young God Records.</p>
      </div>
      <div class="is-card p-5 w-25"  v-on:click="isActive2 = !isActive2" v-bind:class="{ active: isActive2 }">
        <img class="img-fluid" src="../images/norman-westberg.jpg">
        <h2 class="p-3 mt-5">Norman Westberg</h2>
        <p class="is-hidden"> is a guitarist from Detroit best known for his work with Swans. Present through almost the entirety of the band's existence, Westberg was brought on for Swans' debut album Filth (1983) and appeared on every album through 1991's White Light from the Mouth of Infinity (he also played on the 1995 album The Great Annihilator). Westberg became a full-time Swans member once again when Michael Gira reactivated the group in 2010.</p>
      </div>
      <div class="is-card p-5 w-25"  v-on:click="isActive3 = !isActive3" v-bind:class="{ active: isActive3 }">
        <img class="img-fluid" src="../images/christoph-hahn.jpg">
        <h2 class="p-3 mt-5">Kristof Hahn</h2>
        <p class="is-hidden">Berlin-based guitarist, has played with the likes of Alex Chilton, Tav Falco, and Chris Spedding and his most infamous role of being the lap steel guitarist for the newly reformed Swans in 2009 alongside Gira, Puleo, Westberg, Pravdica, Harris and now Wallfisch made him an irreplaceable component in the new lineup. As a composer Hahn specializes in everything from writing pop to immense and layered compositions.</p>
      </div>
      <div class="is-card p-5 w-25"  v-on:click="isActive4 = !isActive4" v-bind:class="{ active: isActive4 }">
        <img class="img-fluid" src="../images/phil-puleo.jpg">
        <h2 class="p-3 mt-5">Phil Puleo</h2>
        <p class="is-hidden">is an American composer, drummer, illustrator and visual artist from New York. He is known as a founding member of the band Cop Shoot Cop and for his current involvement in the experimental rock group Swans. He has also collaborated with Michael Gira on his Angels of Light musical project. After briefly touring with the Swans during the mid-nineties, Puleo joined the band as a full-time member in 2010.</p>
      </div>
      <div class="is-card p-5 w-25"  v-on:click="isActive5 = !isActive5" v-bind:class="{ active: isActive5 }">
        <img class="img-fluid" src="../images/thor-harris.jpg">
        <h2 class="p-3 mt-5">Thor Harris</h2>
        <p class="is-hidden">(born February 7, 1965) is an artist, sculptor, musician, painter, carpenter and handyman. He is the percussionist for Swans.</p>
      </div>
      <div class="is-card p-5 w-25"  v-on:click="isActive6 = !isActive6" v-bind:class="{ active: isActive6 }">
        <img class="img-fluid" src="../images/christopher-pravdica.jpg">
        <h2 class="p-3 mt-5">Christopher Pravdica</h2>
        <p class="is-hidden">is an American musician and songwriter. He is best known as the current bass guitarist of American experimental rock band Swans. </p>
      </div>
    </div>
  </div>  
</template>

<script>
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
};
</script>
