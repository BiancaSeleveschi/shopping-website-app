<template>
  <div>
    <h1 class="text-light title">Search</h1>
    <input
      v-model="searchWord"
      placeholder="Search"
      type="text"
      id="search"
      class="p-1 rounded rounded-2 top input-search"
    />
    <ItemCard :products="filteredProducts" :image="image" />
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Search",
  components: { ItemCard },
  data() {
    return {
      searchWord: "",
      image: "black-image.jpg",
    };
  },
  computed: {
    filteredProducts() {
      return this.$store.state.women
        .concat(this.$store.state.men)
        .filter((product) => {
          return (
            product.title.toLowerCase().includes(this.searchWord) ||
            product.brand.toLowerCase().includes(this.searchWord) ||
            product.color.toLowerCase().includes(this.searchWord) ||
            product.gender.toLowerCase().includes(this.searchWord) ||
            product.type.toLowerCase().includes(this.searchWord)
          );
        });
    },
  },
};
</script>

<style scoped>
#search {
  width: 100%;
  max-width: 280px;
  border: none;
  outline: none;
  background-color: rgba(137, 137, 133, 0.4);
  border-radius: 16px;
  border-bottom: 2px solid #c2c2c2;
  font-size: 20px;
  transition: 0.2s ease-out;
  position: absolute;
  display: grid;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
.title {
  position: absolute;
  display: grid;
  top: 20%;
  left: 50%;
  /*transform: translate(-50%, -50%);*/
  /*z-index: 1;*/
  letter-spacing: 0.1em;
  font-size: 50px;
  text-transform: uppercase;
}

#search:focus {
  background-color: rgba(169, 164, 164, 0.5);
}
</style>
