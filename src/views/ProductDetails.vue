<template>
  <div class="product" :style="{ 'background-image': `url(${image})` }">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <img
            @click="openModal"
            :src="product.img"
            alt="Image"
            class="img-fluid"
          />
          <div v-if="isModalOpen" class="modal" @click="closeModal">
            <div class="modal-content">
              <span class="close">X</span>
              <img :src="product.img" />
            </div>
          </div>
        </div>
        <div class="col-md-6 text-light text-div">
          <p class="fw-bold" id="brand">{{ product.brand }}</p>
          <h1 id="prod-title">{{ product.title }}</h1>
          <p id="prod-price" class="fs-5">${{ product.price }}</p>
          <p class="mt-3" id="prod-description">
            {{ product.description }}
          </p>
          <div @click="addToFavorites" class="favorite-icon my-4">
            <div v-if="!isFavorite">
              <svg
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
            <div v-else>
              <svg
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
          </div>
          <form class="cart">
            <select
              class="select"
              defaultValue="ceva"
              v-model="this.size"
              :class="{ error: error }"
            >
              <option value="Size" disabled>Size</option>
              <option value="xs">xs</option>
              <option value="s">s</option>
              <option value="m">m</option>
              <option value="l">l</option>
              <option value="xl">xl</option>
              <option value="xxl">xxl</option>
            </select>
            <button class="cart-button" @click="addToCart()">
              Add to cart
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  props: ["gender", "id", "product"],
  data() {
    return {
      size: "Size",
      error: false,
      image: require("@/assets/black-image.jpg"),
      isModalOpen: false,
      isFavorite: false,
    };
  },
  created() {
    this.productId = this.$route.params.id;
    this.productDetails = this.$route.params.details;
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
      this.isFavorite = !this.isFavorite;
    },
    closeModal() {
      this.isModalOpen = !this.isModalOpen;
    },
    addToCart() {
      if (this.size !== "Size") {
        this.$store.dispatch("addToCart", {
          product: this.product,
          quantity: 1,
          quantityPrice: this.product.price,
          size: this.size,
        });
      } else {
        this.error = true;
      }
    },
    addToFavorites() {
      this.isFavorite = !this.isFavorite;
      this.dispatch("addToFavorites");
    },
  },
};
</script>
<style scoped>
body {
  background-image: url("@/assets/black-image.jpg");
}
.text-div {
  margin-left: 110px;
  font-family: "JetBrains Mono Light";
  text-align: center;
  justify-content: center;
}

.product {
  display: flex;
  position: fixed;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  right: 0;
  bottom: 0;
  z-index: -5;
}
#brand {
  margin-top: 5%;
  display: grid;
  letter-spacing: 0.2em;
  font-size: 18px;
}

#prod-description {
  font-size: 20px;
}
.favorite-icon {
  padding-bottom: 30px;
  border-bottom: 1px solid white;
  font-size: 2rem;
  transition: transform 0.2s ease-in-out;
}
.cart {
  display: flex;
  flex-direction: row;
  color: white;
}

.select {
  margin-left: 80px;
  margin-right: 10px;
}

.select,
.cart-button {
  display: block;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  align-self: center;
  font-size: 19px;
  width: 220px;
  height: 45px;
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  text-transform: uppercase;
  margin-top: 40px;
  border: 3px solid white;
}

.select:hover,
.cart-button:hover {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  border-radius: 0.5em;
  border: 0.2em solid rgb(0, 0, 0);
}

.error {
  background-color: rgb(103, 0, 0);
}

.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 12%;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
}

.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  background-color: transparent;
}

.close {
  position: absolute;
  right: 12px;
  z-index: 1;
  font-size: 30px;
  color: #000000;
  cursor: pointer;
}
img {
  width: 100%;
  height: auto;
  cursor: pointer;
}
</style>
