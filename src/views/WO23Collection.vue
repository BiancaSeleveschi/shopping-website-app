<template>
  <div>
    <h4 class="fst-italic text-light text shadow">
      Experience the perfect blend of comfort and style with our new women's
      ready-to-wear collection,designed for modern, confident women.
    </h4>
    <ItemCard class="item-card" :products="womenCollection" />
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard";

export default {
  name: "WCollection",
  components: { ItemCard },
  computed: {
    womenCollection() {
      return this.$store.state.women.filter(
        (p) => p.brand === "Versace" || p.brand === "Massimo Dutti"
      );
    },
  },
  // mounted() {
  //   (document.body.style.backgroundImage =
  //     "url('https://www.dior.com/couture/var/dior/storage/images/pushs-editos/folder-permanent-femme/folder-summer-2023/327r12a2793x9000/39427812-1-eng-GB/327r12a2793x9000_1440_1200.jpg?imwidth=720')"),
  //     (document.body.style.backgroundSize = "cover");
  //   document.body.style.backgroundPosition = "top";
  // },
};
</script>

<style scoped>
.text {
  margin-top: 300px;
  margin-left: 550px;
  margin-right: 550px;
}
.item-card {
  margin-top: 300px;
}
</style>
