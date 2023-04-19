<template>
  <div>
    <h1 class="title fw-bold">ME23 Collection</h1>
    <CardItem :products="menCollection" :image="image" class="card-item"/>
  </div>
</template>

<script>
import CardItem from "@/components/CardItem";

export default {
  name: "MenCollection",
  components: { CardItem},
  data() {
    return {
      image: "me23.avif",
    };
  },
  computed: {
    menCollection() {
      return this.$store.state.men.filter(
          (p) => p.brand === "Alexander Mqueen" || p.brand === 'Gucci'
      );
    },
  },
};
</script>

<style scoped>
.title {
  top: 38%;
  left: 15%;
  font-size: 50px;
  letter-spacing: 0.1em;
  position: absolute;
  text-transform: uppercase;
  font-family: "Franklin Gothic Medium", sans-serif;
  color: #250d01;
}
</style>
