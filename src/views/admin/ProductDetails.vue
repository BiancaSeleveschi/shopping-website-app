<template>
  <div class="mb-5 pb-5">
    <h1 class="my-5 py-5">Edit Product</h1>
    <div class="w-25 col-div mb-5 d-block m-auto">
      <p class="prod-pgf">Title</p>
      <input
          v-model="prod.title"
          type="text"
          class="w-100 prod-input"
          required
      />
      <span class="prod-alert" v-show="showAlertTitleIncomplete ">This field is required</span>
    </div>
    <div class="w-25 col-div mb-5 d-block m-auto">
      <p class="prod-pgf">Price</p>
      <input
          v-model="prod.price"
          type="number"
          class="w-100 prod-input"
          required
      />
      <span class="prod-alert" v-show="showAlertPriceIncomplete">This field is required</span>
    </div>
    <div class=" w-25 col-div mb-5 d-block m-auto">
      <p class="prod-pgf">Description</p>
      <input
          v-model="prod.description"
          type="text"
          class="w-100 prod-input"
          required
      />
      <span class="prod-alert" v-show="showAlertDescriptionIncomplete">This field is required</span>
    </div>
    <div class=" w-25 col-div mb-5 d-block m-auto">
      <p class="prod-pgf">Color</p>
      <input
          v-model="prod.color"
          type="text"
          class="w-100 prod-input"
          required
      />
      <span class="prod-alert" v-show="showAlertColorIncomplete">This field is required</span>
    </div>
    <div class=" w-25 col-div mb-5 d-block m-auto">
      <p class="prod-pgf">Brand</p>
      <input
          v-model="prod.brand"
          type="text"
          class="w-100 prod-input"
      />
      <span class="prod-alert" v-show="showAlertBrandIncomplete">This field is required</span>
    </div>
    <div class=" w-25 col-div mb-5 d-block m-auto">
      <p class="prod-pgf">Type</p>
      <input
          v-model="prod.type"
          type="text"
          class="w-100 prod-input"
          required
      />
      <span class="prod-alert" v-show="showAlertTypeIncomplete">This field is required</span>
    </div>
    <button @click="updateProduct" class="btn btn-dark mb-5">Save</button>
    <div v-show="showSuccessAlert" class="overlay">
      <transition name="fade">
        <div class="alert alert-success m-auto py-4 w-25" id="alert-cart" role="alert">
          The product has been updated
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  props: ["id", "product"],
  data() {
    return {
      prod: this.product,
      showAlertTitleIncomplete: false,
      showAlertPriceIncomplete: false,
      showAlertDescriptionIncomplete: false,
      showAlertColorIncomplete: false,
      showAlertBrandIncomplete: false,
      showAlertTypeIncomplete: false,
      showAlertGenderIncomplete: false,
      showSuccessAlert: false,
    }
  },
  methods: {
    updateProduct() {
      this.showAlertTitleIncomplete = this.product.title === '';
      this.showAlertPriceIncomplete = this.product.price === '';
      this.showAlertDescriptionIncomplete = this.product.description === '';
      this.showAlertColorIncomplete = this.product.color === '';
      this.showAlertBrandIncomplete = this.product.brand === '';
      this.showAlertTypeIncomplete = this.product.type === '';
      let clear = () => (this.showSuccessAlert = false)
      if (!this.showAlertTitleIncomplete && !this.showAlertPriceIncomplete &&
          !this.showAlertDescriptionIncomplete && !this.showAlertColorIncomplete
          && !this.showAlertBrandIncomplete && !this.showAlertTypeIncomplete) {
        this.$store.dispatch('updateProduct', this.prod)
        this.showSuccessAlert = true;
        setTimeout(clear, 3000);
      }
    },
  }
}
</script>

<style scoped>
input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
  appearance: textfield;
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

.prod-input {
  border: none;
  border-bottom: 1px solid #000000;
  outline: none;
}

.prod-alert {
  color: red;
  font-size: 14px;
  float: left
}

.prod-pgf {
  margin-bottom: 0;
  float: left;
  font-family: "JetBrains Mono Light", sans-serif;
}
</style>