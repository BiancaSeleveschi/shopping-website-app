<template>
  <div class="shop-page">
    <img class="hero-image" :src="require(`@/assets/${image}`)" />
    <div class="shop-section">
      <div v-for="product in products" :key="product.id" class="outer-card">
        <router-link
          :to="{
            name: 'ProductDetails',
            params: {
              product: product,
              gender: product.gender,
              id: product.id,
            },
          }"
          class="card"
        >
          <img class="card-image" :src="product.img" />
          <div class="card-bottom text-light">
            <p class="item-title my-2">
              {{ product.title }} - {{ product.brand }}
            </p>
            <p class="item-price text-light">${{ product.price }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemCard",
  props: ["products", "image", "category"],
};
</script>

<style scoped>
.shop-page {
  position: absolute;
}
.hero-image {
  display: grid;
  width: 100vw;
  object-fit: cover;
}
.shop-section {
  display: grid;
  position: absolute;
  grid-template-columns: repeat(auto-fill, 20em);
  grid-gap: 0.4em;
  justify-content: center;
  width: 100vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.outer-card {
  position: relative;
  transition: transform 0.6s;
  cursor: pointer;
  overflow: hidden;
}

.card {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 320px;
  height: 360px;
  background: black;
  cursor: pointer;
  border: none;
  overflow: hidden;
  transition: transform 0.6s;
  justify-content: flex-end;
  align-items: center;
  text-decoration: none;
}

.outer-card:hover {
  transform: translateY(-0.5em);
}

.outer-card:hover > .card > .card-bottom {
  opacity: 1;
}

.card-image {
  position: absolute;
  width: inherit;
  height: inherit;
  object-fit: cover;
  display: block;
  object-position: top;
  transition: transform 0.6s;
  filter: brightness(80%);
}

.outer-card:hover > .card > .card-image {
  transform: scale(1.1);
}

.card-bottom:hover > .card-image {
  transform: scale(1.1);
}

.card-bottom {
  display: flex;
  flex-direction: column;
  position: relative;
  background: black;
  width: 100%;
  height: 110px;
  z-index: 1;
  opacity: 0;
  transition: opacity 1s;
  justify-content: center;
}

.item-title {
  font-size: 18px;
  font-weight: 700;
}
</style>
