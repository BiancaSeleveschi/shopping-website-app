<template>
  <div class="search-div" :style="{ 'background-image': `url(${image})` }">
    <h1 class="text-light">Search</h1>
    <input
      v-model="searchWord"
      placeholder="Search"
      type="text"
      class="mt-4 p-1 rounded rounded-2 top"
    />
    <ItemCard class="item-card" :products="filteredProducts" />
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
      image: require("@/assets/black-image.jpg"),
    };
  },
  mounted() {
    document.body.style.backgroundImage =
      "url('https://w0.peakpx.com/wallpaper/20/604/HD-wallpaper-black-screen-solid-dark-plain-all-phone-pure-noir-colors.jpg')";
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
  methods: {},
};
</script>

<style scoped>
body {
  background-image: url("@/assets/black-image.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.search-div {
  margin-top: 100px;
}
.item-card {
  margin-top: 100px;
}
input {
  width: 100%;
  max-width: 280px;
  padding: 10px 15px;
  border: none;
  outline: none;
  background-color: rgba(137, 137, 133, 0.4);
  border-radius: 16px;
  border-bottom: 2px solid #c2c2c2;
  font-size: 20px;
  transition: 0.2s ease-out;
}

input:focus {
  background-color: rgba(169, 164, 164, 0.5);
}
h1 {
  font-weight: 100;
  letter-spacing: 10px;
  text-transform: uppercase;
  font-family: "Magisho", sans-serif;
}
</style>
