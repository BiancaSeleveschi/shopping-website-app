<template>
  <div>
    <h1 class="title-women text-dark fw-bold">Women</h1>
    <ItemCard :products="this.$store.state.women" :image="image"/>
    <Service/>
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard";
import Service from "@/components/Service";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Women",
  components: {Service, ItemCard},
  data() {
    return {
      image: "womennn.webp",
    };
  },
  mounted() {
    console.log(this.$store.state.women)
  }
};
</script>

<style scoped>
.title-women {
  letter-spacing: 0.2em;
  font-size: 60px;
  z-index: 1;
  left: 15%;
  top: 35%;
  text-transform: uppercase;
  position: absolute;
  display: grid;
  font-family: "JetBrains Mono Light", sans-serif;
}
</style>
