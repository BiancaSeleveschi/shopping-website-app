<template>
  <div>
    <h1 class="title-women text-dark fw-bold">Women</h1>
    <CardItem :products="this.$store.state.women" :image="image"/>
    <Footer class="footer"/>
  </div>
</template>

<script>
import CardItem from "@/components/CardItem";
import Footer from "@/components/Footer";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Women",
  components: {Footer, CardItem},
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
/*.footer {*/
/*  margin-top: 70%;*/
/*  width: 100%;*/
/*  position: absolute;*/
/*}*/
</style>
