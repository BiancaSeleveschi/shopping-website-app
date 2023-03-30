<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {Navbar},
  // created() {
  //   const men = localStorage.getItem('men');
  //   if (men) {
  //     this.$store.commit('setMen', JSON.parse(men));
  //   }
  // },
  created() {
    this.$store.commit("INIT_STORE");
    this.$store.commit("UPDATE_STORE");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  width: 100%;
  top: 0;
  left: 0;
}
</style>
