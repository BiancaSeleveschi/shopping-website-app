<template>
  <div>
    <h1 class="title text-black fw-bold">Women</h1>
    <ItemList :products="women" :image="image" class="card-item"/>
  </div>
</template>

<script>
import ItemList from "@/components/ItemList";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Women",
  components: { ItemList},
  data() {
    return {
      image: "women.avif",
      women: this.$store.state.women,
    };
  },
};
</script>

<style scoped>
body{
  background-image:
      linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),
      url('@/assets/women.avif');
}
.title {
  letter-spacing: 0.2em;
  z-index: 1;
  left: 73%;
  top: 20%;
  font-size: 50px;
  text-transform: uppercase;
  position: absolute;
  display: grid;
  font-family: "Franklin Gothic Medium", sans-serif;
}
</style>
