<template>
  <div id="app">
    <NavBar @toggle="toggleCart" />
    <router-view :class="{ opacity: openThisCart }" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  components: { NavBar },
  data() {
    return {
      openThisCart: false,
    };
  },
  methods: {
    toggleCart() {
      this.openThisCart = !this.openThisCart;
    },
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
}
</style>
