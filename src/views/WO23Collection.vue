<template>
  <div>
    <h4 class="text-dark text-wo23">
      Experience the perfect blend of comfort and style with our new women's
      ready-to-wear collection,designed for modern, confident women.
    </h4>
    <h1 class="title-wo23 text-dark fw-bold">WO23 Collection</h1>
    <ItemCard :products="womenCollection" :image="image"/>
    <Service/>
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard";
import Service from "@/components/Service";

export default {
  name: "WCollection",
  components: {Service, ItemCard},
  data() {
    return {
      image: "woo23.webp",
    };
  },
  computed: {
    womenCollection() {
      return this.$store.state.women.filter(
          (p) => p.brand === "Dolce & Gabbana"
      );
    },
  },
};
</script>

<style scoped>
.title-wo23,
.text-wo23 {
  position: absolute;
  display: grid;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "JetBrains Mono Light", sans-serif;
  z-index: 1;
}

.text-wo23 {
  top: 30%;
  left: 75%;
  background-color: #ecdada;
  padding: 65px;
  border-radius: 200px 1px 220px 1px;
}

.title-wo23 {
  letter-spacing: 0.1em;
  font-size: 50px;
  top: 30%;
  left: 20%;
  text-transform: uppercase;
}
</style>
