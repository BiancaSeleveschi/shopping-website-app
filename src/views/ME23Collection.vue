<template>
  <div>
    <h1></h1>
    <h4 class="fst-italic text-light text">
      The spirit of the collection can be felt throughout the Men’s
      Ready-to-Wear selection, with an array of styles channeling a similar
      aesthetic.
    </h4>
    <ItemCard class="item-card" :products="menCollection" />
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard";
export default {
  name: "MenCollection",
  components: { ItemCard },
  computed: {
    menCollection() {
      return this.$store.state.men.filter(
        (p) => p.brand === "Valentino" || p.brand === "Gucci"
      );
    },
  },
  // mounted() {
  //   document.body.style.backgroundImage =
  //     "url('https://www.dior.com/couture/var/dior/storage/images/pushs-editos/folder-spring-23/folder-wave-1/313c203a5725c830/38409176-1-eng-GB/313c203a5725c830_1440_1200.jpg?imwidth=720')";
  //   document.body.style.backgroundSize = "cover";
  //   document.body.style.backgroundPosition = "top";
  // },
};
</script>

<style scoped>
.text {
  margin-top: 150px;
  margin-left: 550px;
  margin-right: 550px;
}
.item-card {
  margin-top: 450px;
}
body {
  /*position: center;*/
}
</style>
