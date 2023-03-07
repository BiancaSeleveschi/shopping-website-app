<template>
  <div class="product" :style="{ 'background-image': `url(${image})` }">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <img :src="product.img" alt="Image" class="img-fluid" />
        </div>
        <div class="col-md-6 text-light text-div">
          <p class="fw-bold">{{ product.brand }}</p>
          <h1 class="title">{{ product.title }}</h1>
          <p class="price">${{ product.price }}</p>
          <p class="description my-5">{{ product.description }}</p>
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
        <!--      <i class="uil uil-arrow-left" @click="$router.go(-1)"></i>-->
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
    };
  },
  created() {
    this.productId = this.$route.params.id;
    this.productDetails = this.$route.params.details;
    console.log(this.productId);
    console.log(this.product);
    console.log(this.productDetails);
  },
  // mounted() {
  //Muta in style aceasta stilizare
  //   document.body.style.backgroundImage =
  //     "url('https://w0.peakpx.com/wallpaper/20/604/HD-wallpaper-black-screen-solid-dark-plain-all-phone-pure-noir-colors.jpg')";
  // },
  methods: {
    addToCart() {
      if (this.size !== "Size") {
        this.$store.dispatch("addProductToCart", {
          product: this.product,
          quantity: 1,
          quantityPrice: this.product.price,
          size: this.size,
        });
      } else {
        this.error = true;
      }
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

.title {
  font-family: "Times New Roman";
}

.description {
  font-size: 18px;
  padding-bottom: 60px;
  border-bottom: 1px solid white;
  font-family: "Times New Roman";
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
</style>
