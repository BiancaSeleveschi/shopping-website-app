<template>
  <div>
    <h1 class="title text-dark fw-bold">Men</h1>
    <CardItem :products="this.$store.state.men" :image="image"/>
    <Footer class="cls"/>
  </div>
</template>

<script>
import CardItem from "@/components/CardItem";
import Footer from "@/components/Footer";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Men",
  components: {Footer, CardItem},
  data() {
    return {
      image: "menn.jpg",
    };
  },  mounted() {
    console.log(this.$store.state.men)
  }
};
</script>

<style scoped>
.title {
  letter-spacing: 0.2em;
  font-size: 60px;
  z-index: 1;
  left: 20%;
  top: 35%;
  text-transform: uppercase;
  position: absolute;
  display: grid;
  font-family: "JetBrains Mono Light", sans-serif;
}
</style>
