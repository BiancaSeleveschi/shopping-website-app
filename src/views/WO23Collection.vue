<template>
  <div>
    <h4 class="shadow text">
      Experience the perfect blend of comfort and style with our new women's
      ready-to-wear collection,designed for modern, confident women.
    </h4>
    <h1 class="title fw-bold ">WO23 Collection</h1>
    <ItemList :products="womenCollection" :image="image" class="card-item"/>
  </div>
</template>

<script>
import ItemList from "@/components/ItemList";

export default {
  name: "WCollection",
  components: {ItemList},
  data() {
    return {
      image: "wo23.avif",
    };
  },
  computed: {
    womenCollection() {
      return this.$store.state.women.filter((p) => p.brand === "Dolce & Gabbana");
    },
  },
};
</script>

<style scoped>
.text {
  top: 20%;
  left: 65%;
  width: 500px;
  height: 250px;
  color: #000000;
  z-index: 1;
  padding: 60px;
  border-radius: 1px 200px 1px 220px;
  position: absolute;
}

.title {
  letter-spacing: 0.1em;
  z-index: 1;
  top: 32%;
  left: 5%;
  font-size: 50px;
  position: absolute;
  text-transform: uppercase;
  color: #777777;
  font-family: "Franklin Gothic Medium", sans-serif;
}

@media (max-width: 576px) {
  .title {
    font-size: 30px;
    top: 17%;
    color: lightblue;
    left: 8%;
  }

  .text {
   display: none;
  }
}
</style>
