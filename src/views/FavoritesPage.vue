<template>
  <div class="favorite-page">
    <h1 class="title text-light">Favorite products</h1>
    <ItemCard :products="this.$store.state.user.favorites" :image="image"/>
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard";

export default {
  name: "FavoritesPage",
  components: {ItemCard},
  data() {
    return {
      image: "black.jpg",
    };
  },
};
</script>

<style scoped>
.favorite-page .title {
  letter-spacing: 7px;
  font-size: 50px;
  z-index: 1;
  left: 50%;
  top: 20%;
  text-transform: uppercase;
  position: absolute;
  display: grid;
  transform: translate(-50%, -50%);
  font-family: "JetBrains Mono Light", sans-serif;
}
</style>
