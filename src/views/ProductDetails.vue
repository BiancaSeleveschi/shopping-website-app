<template>
  <div>
    <div
        v-if="product"
        class="product bg bg-black"
    >
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
                <img :src="product.img" alt="Image"/>
              </div>
            </div>
          </div>

          <div class="col-md-6 text-light text-div">
            <p class="fw-bold" id="brand">{{ product.brand }}</p>
            <h1>{{ product.title }}</h1>
            <p class="fs-5">${{ product.price }}</p>
            <p class="mt-3" id="prod-description">
              {{ product.description }}
            </p>
            <div class=" m-auto my-4">
              <div v-if="!isFavorite">
                <button @click="toggleFavorite(product) "
                        class="p-2 bg bg-black text-white border border-3 add-fav-button">Add favorite
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
                </button>
              </div>
              <div v-else>
                <button @click="toggleFavorite(product)"
                        class=" bg bg-white text-black border border-white remove-fav-button">
                  Remove favorite 🤍
                </button>
              </div>
            </div>
            <div class="border-product-details"></div>
            <form class="cart-details">
              <select class="select" v-model="size" :class="{ error: error }">
                <option value="Size" disabled>Size</option>
                <option value="xs">xs</option>
                <option value="s">s</option>
                <option value="m">m</option>
                <option value="l">l</option>
                <option value="xl">xl</option>
                <option value="xxl">xxl</option>
              </select>
              <div class="add-cart" @click="addToCart(product, size)">
                Add to cart
              </div>
            </form>
            <div v-if="showAlert" role="alert"
                 class="alert-message p-2 d-flex m-auto mt-2" > The product has been added to cart</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  props: ["id", "product"],
  data() {
    return {
      size: "Size",
      error: false,
      quantity: 1,
      image: require("@/assets/black.jpg"),
      isModalOpen: false,
      isFavorite: false,
      showAlert: false,
      favorites: this.$store.state.user.favorites,
    };
  },
  mounted() {
    this.checkFavorite();
  },
  methods: {
    checkFavorite() {
      if (this.favorites.find((favorite) => favorite.id === this.id)) {
        this.isFavorite = true;
      }
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = !this.isModalOpen;
    },
    addToCart(product, size) {
      let item = {
        product: {
          brand: product.brand,
          title: product.title,
          price: product.price,
          description: product.description,
          id: product.id,
          img: product.img
        },
        size: size,
        quantity: 1,
        quantityPrice: product.price,
      };
      if (size !== "Size") {
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
        }, 3000);
        this.$store.dispatch("addToCart", item);
      } else {
        this.error = true;
      }
    },
    toggleFavorite(product) {
      if (this.isFavorite) {
        this.$store.dispatch("removeFromFavorites", product);
      } else {
        this.$store.dispatch("addToFavorites", product);
      }
      this.isFavorite = !this.isFavorite;
    },
  }
  ,
}
;
</script>
<style scoped>
.text-div {
  margin-left: 110px;
  font-family: "JetBrains Mono Light", sans-serif;
  text-align: center;
  justify-content: center;
}

.product {
  display: flex;
  position: absolute;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  right: 0;
  margin-bottom: 300px;
  z-index: -5;
}

#brand {
  display: grid;
  letter-spacing: 0.2em;
  font-size: 18px;
}

#prod-description {
  font-size: 20px;
}

.add-fav-button,
.remove-fav-button {
  border-radius: 10px;
  text-transform: uppercase;
  font-size: 17px;
  width: 220px;
  height: 46px;
}

.border-product-details {
  border: 1px solid white;
  margin-top: 7%;
}

.bi-heart {
  margin-left: 10px;
  margin-right: -10px;
}

.cart-details {
  display: flex;
  flex-direction: row;
}

.select {
  margin-left: 80px;
  margin-right: 10px;
}

.select,
.add-cart {
  display: block;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  font-size: 19px;
  width: 220px;
  height: 46px;
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  text-transform: uppercase;
  margin-top: 40px;
  border: 3px solid white;
}

.add-cart {
  padding-top: 7px;
}

.select:hover,
.add-cart:hover {
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

.alert-message {
  background-color: #cdffbf;
  opacity: 1;
  color: #000000;
  width: 400px;
  justify-content: center;
  border-radius: 10px;
}
</style>
