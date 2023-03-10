<template>
  <div>
    <h1 class="title text-light fw-bold">Women</h1>
    <ItemCard :products="this.$store.state.women" :image="image" />
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Women",
  components: { ItemCard },
  data() {
    return {
      image: "women.webp",
    };
  },
};
</script>

<style scoped>
.title {
  letter-spacing: 0.1em;
  font-size: 50px;
  display: grid;
  z-index: 1;
  left: 50%;
  top: 35%;
  text-transform: uppercase;
  position: absolute;
  display: grid;
  transform: translate(-50%, -50%);
}
</style>
