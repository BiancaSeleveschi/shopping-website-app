<template>
  <div class="item-details-page bg-black">
    <div v-if="product" class="product container">
      <div class="d-inline-block pt-5 row w-100">
        <div class="img-div">
          <img @click="openModal" :src="product.img" alt="Image" class="img-fluid"/>
          <div v-if="isModalOpen" class="modal" @click="closeModal">
            <div class="modal-content">
              <img :src="product.img" alt="Image" id="modal-img" class="m-auto"/>
            </div>
          </div>
        </div>
        <div class="text-light product-details">
          <p class="fw-bold" id="brand">{{ product.brand }}</p>
          <h1 class="product-title">{{ product.title }}</h1>
          <p class="product-price">${{ product.price }}</p>
          <p class="mt-3" id="prod-description">
            {{ product.description }}
          </p>
          <div class="m-auto">
            <div v-if="!isFavorite(product)">
              <button @click="addToFavorite(product)"
                      class="bg-black text-white border border-3 add-fav-button">Add favorite
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart"
                     viewBox="0 0 16 16">
                  <path
                      d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                </svg>
              </button>
            </div>
            <div v-else>
              <button @click="removeFromFavorite(product)"
                      class="remove-fav-button bg-white text-black border border-white">
                Remove favorite 🤍
              </button>
            </div>
          </div>
          <div class="border border-white mt-4"></div>
          <form class="product-details-bottom">
            <select class="select me-4 m-auto" v-model="size" :class="{ error: error }">
              <option value="Size" disabled>Size</option>
              <option value="xs">xs</option>
              <option value="s">s</option>
              <option value="m">m</option>
              <option value="l">l</option>
              <option value="xl">xl</option>
              <option value="xxl">xxl</option>
            </select>
            <div class="add-cart ms-4 m-auto" @click="addToCart(product, size)">
              Add to cart
            </div>
          </form>
          <div v-show="showSuccessAlertForProductAddedToCart" class="overlay">
            <transition name="fade">
              <div class="alert alert-success px-5 py-4" id="alert-cart" role="alert">
                The product has been added to cart
              </div>
            </transition>
          </div>
          <div v-show="showLoginMessageForFav" class="overlay">
            <transition name="fade">
              <div class="alert-log alert alert-warning py-4"
                   role="alert">
                Please log in to add to favorites
              </div>
            </transition>
          </div>
          <div v-show="showLoginMessageForAddToCart" class="overlay">
            <transition name="fade">
              <div class="alert-log alert alert-warning py-4"
                   role="alert">
                Please log in to add to cart
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ItemDetails",
  props: ["id", "product"],
  data() {
    return {
      favorites: this.$store.state.user?.favorites,
      image: require("@/assets/black.jpg"),
      size: "Size",
      error: false,
      showSuccessAlertForProductAddedToCart: false,
      showLoginMessageForFav: false,
      showLoginMessageForAddToCart: false,
      quantity: 1,
      isUserLoggedIn: this.$store.getters.isUserLoggedIn,
      isModalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = !this.isModalOpen;
    },
    async addToCart(product, size) {
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
      let clear = () => (this.showSuccessAlertForProductAddedToCart = false)
      if (size !== "Size" && this.isUserLoggedIn) {
        await this.$store.dispatch("addToCart", item);
        this.showSuccessAlertForProductAddedToCart = true;
        setTimeout(clear, 3000);
      }
      if (!this.isUserLoggedIn) {
        this.showLoginMessageForAddToCart = true;
        let clear = () => (this.showLoginMessageForAddToCart = false)
        if (this.showLoginMessageForAddToCart) {
          setTimeout(clear, 3000);
        }
      } else if (size === "Size") {
        this.error = true;
      }
    },
    isFavorite(product) {
      return this.$store.state.user?.favorites?.some(favoriteProduct => favoriteProduct.id === product.id);
    },
    async addToFavorite(product) {
      if (!this.$store.getters.isUserLoggedIn) {
        this.showLoginMessageForFav = true;
        let clear = () => (this.showLoginMessageForFav = false)
        if (this.showLoginMessageForFav) {
          setTimeout(clear, 3000);
        }
      }
      if (!product.isFavorite) {
        product.isFavorite = true;
        await this.$store.dispatch("addToFavorites", product);
      }
    },
    async removeFromFavorite(product) {
      product.isFavorite = false;
      await this.$store.dispatch("removeFromFavorites", product.id);
    },
  },
};
</script>
<style scoped>

#brand {
  letter-spacing: 0.2em;
  font-size: 18px;
}

#prod-description {
  font-size: 20px;
}

#alert-cart {
  top: 16%;
  left: 66%;
  height: max-content;
  width: 30%;
}

.img-fluid {
  cursor: pointer;
  position: relative;
}

.product-details {
  width: 50%;
  display: inline-block;
  font-family: "JetBrains Mono Light", sans-serif;
}

.img-div {
  width: 40%;
  float: left;
  margin-right: 120px;
  display: inline-block;
}

.overlay {
  width: 100%;
  border-bottom: solid 1px #333;
  display: grid;
  background-color: #a2a2a2;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.alert-log {
  width: 36%;
  margin: auto;
  height: max-content;
  z-index: 2;
}

.product {
  margin-top: 10%;
  display: flex;
  position: relative;
  padding-bottom: 100px;
}

.item-details-page {
  z-index: 1;
  position: relative;
}

.add-fav-button,
.remove-fav-button, .select, .add-cart {
  width: 210px;
  padding: 10px;
}

.add-fav-button,
.remove-fav-button {
  border-radius: 10px;
  text-transform: uppercase;
  margin: 20px;
}


.bi-heart {
  margin-left: 10px;
  margin-right: -10px;
}

.product-details-bottom {
  display: flex;
  flex-direction: row;
  margin-top: 45px;
}

.select,
.add-cart {
  display: block;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  text-transform: uppercase;
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
  cursor: pointer;
  position: fixed;
  padding-top: 3%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.9);
}

.modal-content {
  padding-top: 4%;
  background-color: transparent;
}

@media (max-width: 576px) {
  .product-title, .product-price, #prod-description, #brand {
    font-size: 13px;
  }

  .img-div {
    width: 70%;
    margin: 30px 60px 10px 60px;
  }

  .add-fav-button, .remove-fav-button, .add-cart,
  .select {
    font-size: 12px;
    padding: 5px;
    width: 150px;
    margin: 0px;
  }

  .product-details {
    width: 95%;
    margin-top: 20px;
    margin-left: 7%;
  }

  #modal-img {
    width: 80%;
    padding-top: 30%;
  }

  .product-details-bottom {
    margin-top: 20px;
  }

  .modal-content {
    margin: auto;
  }

  #alert-cart, .alert-log {
    font-size: 15px;
    top: -32%;
    width: 80%;
    left: 0%;
    margin: auto;
  }
}
</style>
