<template>
  <div>
    <h4 class="fst-italic text-light text-wo23">
      Experience the perfect blend of comfort and style with our new women's
      ready-to-wear collection,designed for modern, confident women.
    </h4>
    <h1 class="title shadow text-light fw-bold">WO23 Collection</h1>
    <ItemCard :products="womenCollection" :image="image" />
    <img :src="image" />
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard";

export default {
  name: "WCollection",
  components: { ItemCard },
  data() {
    return {
      image: "wo23.avif",
    };
  },
  computed: {
    womenCollection() {
      return this.$store.state.women.filter(
        (p) => p.brand === "Versace" || p.brand === "Massimo Dutti"
      );
    },
  },
};
</script>

<style scoped>
.title,
.text-wo23 {
  position: absolute;
  display: grid;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
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
