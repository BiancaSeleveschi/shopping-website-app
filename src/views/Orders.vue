<template>
  <div class="orders-page">
    <h2 class="title">My account</h2>
    <div class="border-top pt-5 w-100">
      <NavProfile class="outer-card bg-light"/>
      <div class="bg-secondary bg-opacity-50" id="orders-card">
        <h4 class="border border-1 bg-white p-3 order-title">My orders</h4>
        <div v-for="(order, index) in $store.state.user?.orders" :key="index"
             class="border border-dark bg-light rounded-2 order-div">
          <h5 class="order-id py-2 fw-bold">Order: #{{ order.orderNumber }}</h5>
          <button class="btn btn-dark details " @click="showOrder(index)">
            {{ index === indexOrder ? 'Close' : 'See more' }}
          </button>
          <p class="border border-dark border-pgf"></p>
          <p class="date-status">Data: <span class="fw-bold">{{ order.orderDate }}</span></p>
          <p class="date-status w-100">Estimate arrival date: <span class="fw-bold">{{
              order.estimateArrivalDate
            }}</span></p>
          <p class="date-status w-100">Status: <span class="fw-bold">{{ order.status }}</span></p>
          <p class="amount me-3">Total: <span class="text-danger">${{ order.amount }}</span></p>

          <router-link
              v-if="order.status === 'Received' && isWithinThirtyDays(order.estimateArrivalDate) "
              :to="{name: 'ReturnItem', params: { order: order}, }"
              id="return" class="text-decoration-none w-100 fw-bold">Return
          </router-link>


          <div v-show="index === indexOrder" class="pt-5 product-list-div">

            <h5 class="products-header d-block m-auto">Products ordered</h5>
            <div v-for="(item,index) in order.productList"
                 :key="index" class="cart-item m-auto">
              <img :src="item.product.img" alt="Product image"/>
              <div>
                <h3 class="item-product-title">{{ item.product.title }}</h3>
                <p class="size mt-3 ">Size: <span id="size"> {{ item.size }}</span></p>
                <p class="quantity " type="number">Quantity: {{ item.quantity }}
                <p class="price">${{ item.quantityPrice }}</p>
              </div>
            </div>
            <div v-if="order.deliveryAddress" class="address-item  m-auto">
              <h5 class="mb-2 address-title"> Delivery address</h5>
              <p class="address">{{ order.deliveryAddress.city }}, {{
                  order.deliveryAddress.country
                }},{{ order.deliveryAddress.street }},{{ order.deliveryAddress.number }}
                {{ order.deliveryAddress.blockStaircase }}</p>
              <p class="pt-5 " id="postcode">{{ order.deliveryAddress.postcode }}</p>
            </div>

            <div v-if="order.billingAddress" class="address-item m-auto">
              <h5 class="mb-2 address-title">Billing address</h5>
              <p class="address">{{ order.billingAddress.city }}, {{
                  order.billingAddress.country
                }},{{ order.billingAddress.street }},{{ order.billingAddress.number }}
                {{ order.billingAddress.blockStaircase }}</p>
              <p class="pt-5 " id="postcode">{{ order.billingAddress.postcode }}</p>
            </div>
            <p class="payment-item m-auto"> Payment method: <span
                class="payment-item-span fw-bold">{{ order.paymentMethod }}</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavProfile from "@/components/NavProfile";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Orders",
  components: {NavProfile},
  data() {
    return {
      indexOrder: -1,
    }
  },
  methods: {
    showOrder(index) {
      this.indexOrder = this.indexOrder !== index ? index : -1;
    },
    isWithinThirtyDays(arrivalDate) {
      const currentDate = new Date();
      const parsedArrivalDate = new Date(arrivalDate);
      const thirtyDays = 30 * 24 * 60 * 60 * 1000;
      const timeDifference = currentDate.getTime() - parsedArrivalDate.getTime();
      return timeDifference < thirtyDays;
    },
  }
}
</script>

<style scoped>
.title {
  margin-top: 130px;
  margin-bottom: 50px;
  letter-spacing: 2px;
}

.order-id {
  float: left;

}

.border-pgf {
  margin-top: 60px;
}

#orders-card {
  display: grid;
  width: 65%;
  padding-bottom: 5%;
  margin-right: 60px;
  margin-bottom: 100px;
  border: 1px solid grey;
  float: right;
}

#return {
  color: grey;
  float: left;
  text-align: start;
}

#return:hover {
  color: #3f3f3f;
}

#size {
  text-transform: uppercase;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid #000000;
  padding: 4px;
}

.order-title {
  text-align: center;
  letter-spacing: 2px;
  margin: 30px 50px 30px 50px;
}

.order-div {
  width: 92%;
  padding: 20px;
  margin: auto auto 15px;
}

.orders-page {
  padding-bottom: 150px;
}

.product-list-div {
  margin-top: 10%;
  padding-bottom: 20px;
}

.btn {
  float: right;
  border-radius: 0;
}

.amount {
  float: right;
  margin-top: -40px;
}

.date-status {
  float: left;
  text-align: start;
}

.outer-card {
  text-align: left;
  float: left;
  margin-left: 13%;
  font-family: "Malgun Gothic Semilight", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  border: 1px solid grey;
  width: 16%;
}

.cart-item {
  grid-template-columns: 3fr 6fr 1fr;
}

.products-header,
.payment-item,
.address-item,
.cart-item {
  width: 70%;
  border-bottom: solid 1px #333;
  display: grid;
  padding: 20px;
  background-color: #ffffff;
}

.address-item {
  height: 110px;
  alignment: left;
}

.products-header,
.payment-item {
  text-align: start;
}

.address-title {
  width: 100%;
  text-align: start;
}

img {
  position: relative;
  width: 100%;
  display: block;
  left: 0;
  object-position: top;
  animation: fade-in 0.5s forwards;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.address, #postcode {
  display: grid;
  position: absolute;
  float: left;
  font-size: 16px;
}

.item-product-title, .size, .quantity {
  padding-left: 20px;
}

.address {
  margin-top: 30px;
}

.item-product-title {
  display: flex;
  position: relative;
  font-size: 16px;
  text-align: start;
  text-decoration: none;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.034);
  transition: 0.5s;
}

.price {
  justify-content: right;
  display: grid;
  position: relative;
  margin-top: 130px;
  margin-right: -20px;
}

.size, .quantity {
  text-align: start;
}

.size {
  transform: translateY(100%);
}

.quantity {
  transform: translateY(180%);
}

@media (max-width: 576px) {
  #orders-card {
    width: 90%;
    float: none;
    margin-left: 20px;
  }

  .outer-card {
    display: none;
  }

  .title {
    margin-top: 100px;
    margin-bottom: 20px;
    letter-spacing: 2px;
  }

  .date-status, .address, #postcode, .payment-item-span {
    font-size: 14px;
  }

  img {
    width: 80%;
  }

  .orders-page {
    padding-bottom:  50px;
  }

  .order-id {
    font-size: 16px;
  }

  .payment-item {
    width: 90%;
    margin-bottom: 20px;
  }

  .details {
    font-size: 14px;
    margin-right: 7px;
  }

  .order-title {
    font-size: 18px;
    padding: 10px;
    margin: 30px;
  }

  .cart-item {
    width: 90%;
    margin-top: 10%;
  }

  .order-div {
    width: 90%;
    padding: 15px 10px 20px 10px;
    margin: auto auto 15px;
  }

  .item-product-title, .size, .quantity {
    font-size: 13px;
    padding-left: 10px;
  }

  .products-header {
    font-size: 18px;
  }

  .address-title {
    font-size: 16px;
  }

  .date-status {
    margin-bottom: 3px;
  }

  .products-header {
    width: 90%;
  }

  .border-pgf {
    margin-top: 50px;
  }

  .product-list-div {
    margin-top: 20%;
  }

  .size {
    transform: translateY(-50%);
  }

  .quantity {
    transform: translateY(-100%);
  }

  .amount {
    margin-top: -22px;
    font-size: 14px;
  }

  .price {
    font-size: 14px;
    margin-top: -55px;
    margin-right: -20px;
  }

  .address-item {
    width: 90%;
  }
  #return {
    font-size: 14px;
    margin-top: -15px;
  }
}

</style>