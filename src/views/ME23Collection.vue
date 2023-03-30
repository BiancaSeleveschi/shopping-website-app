<template>
  <div>
    <h4 class="shadow text-me23">
      The spirit of the collection can be felt throughout the Men’s
      Ready-to-Wear selection, with an array of styles channeling a similar
      aesthetic.
    </h4>
    <h1 class="title-me23  fw-bold">ME23 Collection</h1>
    <ItemCard :products="menCollection" :image="image"/>
    <Service/>
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard";
import Service from "@/components/Service";

export default {
  name: "MenCollection",
  components: {Service, ItemCard},
  data() {
    return {
      image: "men23.webp",
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
.title-me23,
.text-me23 {
  position: absolute;
  display: grid;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "JetBrains Mono Light", sans-serif;
  z-index: 1;
}
.text-me23 {
  top: 30%;
  left: 75%;
  color: #522b1a;
  padding: 60px;
  border-radius: 1px 200px 1px 220px;
}
.title-me23 {
  letter-spacing: 0.1em;
  font-size: 50px;
  top: 30%;
  left: 23%;
  text-transform: uppercase;
  color: #522b1a;
}
</style>
