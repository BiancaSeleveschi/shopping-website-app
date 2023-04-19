<template>
  <div class="bg-black">
    <h1 class="title text-light">Favorite products</h1>
    <CardItem :products="favorites" :image="image" class="card-item"/>
  </div>
</template>

<script>
import CardItem from "@/components/CardItem";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Favorites",
  components: {CardItem},
  data() {
    return {
      image: "black.jpg",
      favorites: this.$store.state.user.favorites,
    };
  },
};
</script>

<style scoped>
.title {
  letter-spacing: 7px;
  font-size: 50px;
  z-index: 2;
  left: 50%;
  top: 20%;
  text-transform: uppercase;
  position: absolute;
  display: grid;
  transform: translate(-50%, -50%);
  font-family: "JetBrains Mono Light", sans-serif;
}


.card-item {
  margin-bottom: 50px;
  margin-top: -10%;
}
</style>
