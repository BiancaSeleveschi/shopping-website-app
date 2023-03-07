<template>
  <div class="item-card-div">
    <div
      v-for="(product, index) in products"
      :key="product.id"
      class="d-inline-block mx-2"
    >
      <router-link
        :to="{
          name: 'ProductDetails',
          params: { product: product, gender: product.gender, id: product.id },
        }"
        class="text-decoration-none"
      >
        <div class="card card-div" id="card-img">
          <img
            :src="product.img"
            v-on:mouseover="setHover(true, index)"
            v-on:mouseout="setHover(false, index)"
          />
          <div v-if="indexProductDetails === index">
            <div class="card-body">
              <p class="card-title">
                {{ product.title }}
              </p>
              <p>{{ product.brand }}</p>
              <p class="item-description">$ {{ product.price }}</p>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemCard",
  props: ["products"],
  data() {
    return {
      indexProductDetails: -1,
      hover: false,
      active: true,
    };
  },
  methods: {
    setHover(value, index) {
      this.indexProductDetails =
        this.indexProductDetails !== index ? index : -1;
      this.hover = value;
    },
  },
};
</script>

<style scoped>
.item-card-div {
  margin-top: 600px;
}
.card-div {
  width: 400px;
}

#card-img:hover {
  transform: scale(1.1);
  cursor: pointer;
  margin: 20px 20px 35px 35px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: white;
  border: 3px black solid;
}

.card-body {
  background: black;
}
</style>
