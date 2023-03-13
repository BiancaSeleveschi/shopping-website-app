<template>
  <div>
    <h1 class="title text-light fw-bold">Men</h1>
    <ItemCard :products="this.$store.state.men" :image="iamge" />
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Men",
  components: { ItemCard },
  data() {
    return {
      iamge: "men.webp",
    };
  },
};
</script>

<style>
.title {
  letter-spacing: 0.2em;
  font-size: 50px;
  display: grid;
  z-index: 1;
  left: 50%;
  top: 35%;
  text-transform: uppercase;
  position: absolute;
  display: grid;
  transform: translate(-50%, -50%);
  font-family: "JetBrains Mono Light";
}
</style>
