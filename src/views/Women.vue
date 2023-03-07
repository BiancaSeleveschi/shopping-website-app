<template>
  <div :style="{ 'background-image': `url(${image})` }">
    <ItemCard class="item-card" :products="$store.state.women" />
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Women",
  components: { ItemCard },
  data() {
    return {
      image: require("@/assets/women.webp"),
    };
  },
};
</script>

<style scoped>
body {
  display: grid;
  position: fixed;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-position: initial;
  background-image: url("@/assets/women.webp");
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
/*.item-card {*/
/*  margin-top: 750px;*/
/*}*/
</style>
