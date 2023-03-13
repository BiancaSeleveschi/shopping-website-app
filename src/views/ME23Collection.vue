<template>
  <div>
    <h4 class="text-light text-me23">
      The spirit of the collection can be felt throughout the Men’s
      Ready-to-Wear selection, with an array of styles channeling a similar
      aesthetic.
    </h4>
    <h1 class="title shadow text-light fw-bold">ME23 Collection</h1>
    <ItemCard :products="menCollection" :image="iamge" />
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard";
export default {
  name: "MenCollection",
  components: { ItemCard },
  data() {
    return {
      iamge: "me23.webp",
    };
  },
  computed: {
    menCollection() {
      return this.$store.state.men.filter(
        (p) => p.brand === "Valentino" || p.brand === "Gucci"
      );
    },
  },
};
</script>

<style scoped>
.title,
.text-me23 {
  position: absolute;
  display: grid;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "JetBrains Mono Light";
  z-index: 1;
}
.title {
  letter-spacing: 0.1em;
  font-size: 50px;
  display: grid;
  top: 50%;
  text-transform: uppercase;
}
</style>
