<template>
  <div>
    <ItemCard :products="this.$store.state.favoritesProducts" :image="image" />
  </div>
</template>

<script>
export default {
  name: "FavoritesPage",
  data() {
    return {
      image: "black-image.jpg",
    };
  },
};
</script>

<style scoped></style>
