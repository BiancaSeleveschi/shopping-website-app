<template>
  <div>
    <h1 class="title text-black fw-bold">Men</h1>
    <ItemList :products="men" :image="image" class="card-item"/>
  </div>
</template>

<script>
import ItemList from "@/components/ItemList";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Men",
  components: { ItemList},
  data() {
    return {
      image: "men2.avif",
      men: this.$store.state.men,
    };
  },
};
</script>

<style scoped>
.title {
  letter-spacing: 0.2em;
  z-index: 1;
  left: 32%;
  top: 24%;
  font-size: 50px;
  text-transform: uppercase;
  position: absolute;
  display: grid;
  font-family: "Franklin Gothic Medium", sans-serif;
}
</style>
