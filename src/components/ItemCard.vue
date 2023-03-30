<template>
  <div class="shop-page">
    <img class="hero-image " :src="require(`@/assets/${image}`)"/>
    <div class="container-fluid">
      <div class="shop-section row ">
        <div v-for="(product, index) in products" :key="index"
             class="outer-card-item col-md-12 ">
          <div @click="changeIndex(index)">
            <div class="favorite-icon">
              <div v-if="productIndex === index && isFavorite && products !== favorites">
                <svg
                    @click="toggleFavorite(product)"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-heart-fill"
                    viewBox="0 0 16 16"
                >
                  <path
                      fill-rule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
              </div>
              <div v-else-if="productIndex === index && isFavorite && products === favorites">
                <p @click="toggleFavorite(product)" class="remove-fav">X</p>
              </div>
              <div v-else>
                <svg
                    @click="toggleFavorite(product)"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-heart"
                    viewBox="0 0 16 16"
                >
                  <path
                      d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <router-link
              :to="{
            name: 'ProductDetails',
            params: {
              product: product,
              id: product.id,
            },
          }"
              class="card"
          >
            <img class="card-image" :src="product.img"/>
            <div class="card-bottom text-light">
              <p class="item-card-title m-2">
                {{ product.title }} - {{ product.brand }}
              </p>
              <p class="item-price text-light mb-2">${{ product.price }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemCard",
  props: ["products", 'image'],
  data() {
    return {
      productIndex: -1,
      isFavorite: false,
      favorites: this.$store.state.favorites,
    };
  },
  methods: {
    changeIndex(index) {
      if (this.productIndex !== index) {
        this.productIndex = index;
        this.isFavorite = true;
      } else {
        this.productIndex = index;
        this.isFavorite = this.isProductFavorite(this.products[index]);
      }
    },
    isProductFavorite(product) {
      return this.favorites.find((favProduct) => favProduct.id === product.id);
    },
    toggleFavorite(product) {
      if (this.isFavorite) {
        this.$store.dispatch("removeFromFavorites", product);
      } else {
        this.$store.dispatch("addToFavorites", product);
      }
      this.isFavorite = !this.isFavorite;
    },
  },
};
</script>

<style scoped>
.shop-page {
  position: relative;
}

.hero-image {
  display: grid;
  width: 100vw;
  object-fit: cover;
}

.favorite-icon {
  position: absolute;
  right: 12px;
  top: -7px;
  background-color: transparent;
  z-index: 1;
  font-size: 30px;
  color: #000000;
  cursor: pointer;
}

.remove-fav {
  position: absolute;
  right: 5px;
  z-index: 1;
  font-size: 24px;
  color: #000000;
  cursor: pointer;
}

.shop-section {
  display: grid;
  position: absolute;
  /*position: relative;*/
  grid-template-columns: repeat(auto-fill, 20em);
  grid-gap: 0.6em;
  justify-content: center;
  width: 100%;
  height: 75%;
  margin-top: -100%;
  left: 0;
}

/*@media screen and (max-width: 768px) {*/
/*  .outer-card-item {*/
/*    transform: scale(0.8);*/
/*  }*/
/*}*/
/*@media screen and (max-width: 768px) {*/
/*  .shop-section {*/
/*    transform: scale(0.9);*/
/*  }*/
/*}*/
.outer-card-item {
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

.outer-card-item:hover {
  transform: translateY(-0.5em);
}

.outer-card-item:hover > .card > .card-bottom {
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

.outer-card-item:hover > .card > .card-image {
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
  text-align: center;
}

.item-card-title {
  font-size: 18px;
  font-weight: 700;
}
</style>
