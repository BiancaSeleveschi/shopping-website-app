<template>
  <div :style="{ 'background-image': `url(${image})` }">
    <ItemCard class="item-card" :products="$store.state.men" />
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Men",
  components: { ItemCard },
  data() {
    return {
      image: require("@/assets/men.webp"),
    };
  },
};
</script>

<style scoped>
body {
  background-image: url("@/assets/men.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>
