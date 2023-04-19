<template>
  <div id="app">
    <Navbar/>
    <router-view></router-view>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  components: {Footer, Navbar},
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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}
.footer {
  bottom: 0;
  z-index: 0;
}
</style>
