<template>
  <div class="outer-card card-container" @click="toggleCartButton">
    <div class="cart border border-dark" @click.stop>
      <div class="cart-header">
        <div class="shopping-bag p-2">Shopping bag</div>
        <div class="cart-close" @click="toggleCartButton">X</div>
      </div>
      <div class="cart-body">
        <CartItem />
      </div>
      <div class="subtotal p-3">Subtotal: $ {{ this.$store.getters.getCartTotalPrice }}</div>
      <router-link class="cart-footer" to="/order/summary">
        <div class="checkout text-uppercase bg-black text-light p-2">Proceed to checkout</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import CartItem from "@/components/CartItem";

export default {
  name: "NavCart",
  components: {CartItem},
  data() {
    return {
      cartTotalPrice: this.$store.getters.getCartTotalPrice,
    };
  },
  computed: {
    // cartTotalPrice() {
    //   return this.$store.getters.getCartTotalPrice;
    // },
  },
  methods: {
    toggleCartButton() {
      this.$emit("toggleCart");
    },
  },
};
</script>

<style scoped>
.outer-card {
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  justify-content: right;
  width: 100%;
  height: 100%;
  top: 70px;
  z-index: 1;
}

.outer-card .cart {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 360px;
  height: 450px;
  background-color: #dedede;
  transform: translateX(-4%);
  z-index: 1;

}

.cart-header {
  position: relative;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
  background-color: #cccccc;
  width: 100%;
  justify-content: center;
  top: 0;
}

.outer-card .cart .cart-header:before {
  content: "";
  position: fixed;
  height: 0px;
  width: 0px;
  right: 22px;
  top: -30px;
  border-width: 15px;
  border-color: transparent white transparent transparent;
  border-style: solid;
  transform: rotate(90deg);
  z-index: -6;
}

.cart-close {
  display: grid;
  font-size: 20px;
  position: relative;
  cursor: pointer;
  justify-content: end;
  align-self: center;
  right: 5px;
  color: black;
}

.shopping-bag {
  position: relative;
  font-size: 16px;
  display: flex;
  justify-content: center;
  width: 100%;
}

.cart-body {
  background: #ffffff;
  overflow: auto;
  height: 285px;
}

.subtotal {
  background-color: #e8e8e8;
  top: 0;
}

.cart-footer {
  position: fixed;
  bottom: 0;
  display: flex;
  border-top: 1px solid black;
  width: 100%;
  height: 70px;
  justify-content: center;
  background-color: #cccccc;
}

.checkout {
  margin-bottom: 10px;
  display: block;
  bottom: 0;
  width: 230px;
  position: fixed;
  z-index: -1;
  cursor: pointer;
}
</style>
