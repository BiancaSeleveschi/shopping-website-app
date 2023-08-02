<template>
  <div class="returns-page">
    <h2 class="title">My account</h2>
    <div class="border-top pt-5 w-100">
      <NavProfile class="outer-card bg-light"/>
      <div class="bg-secondary bg-opacity-50" id="returns-card">
        <h4 class="border border-1 bg-white p-3 return-title">My returns</h4>
        <div v-for="(returnedOrder, index) in $store.state.user?.returns" :key="index"
             class="border border-dark bg-light rounded-2 return-div">
          <h5 class="return-number mb-1 d-block fw-bold">Return: #{{ returnedOrder.returnNumber }}</h5>
          <p class="details" @click="showReturn(index, returnedOrder)">
            {{ index === indexReturn ? 'close' : 'view details' }}
          </p>
          <p class="w-100 content-body">Data: <span class="fw-bold">{{ returnedOrder.returnDate }}</span></p>
          <p class="w-100 content-body">Returned products from the order:
            <span class="fw-bold">#{{ returnedOrder.orderNumber }}</span></p>
          <div v-show="index === indexReturn" class="my-5 pt-5">
            <p class="return-type w-100 content-body">Return type:
              <span class="fw-bold">Courier</span></p>
            <p class="refund-type w-100 content-body">Money refund option:
              <span class="fw-bold">Refund to the card</span></p>
            <p class="refund-type w-100 content-body">Status:
              <span class="fw-bold">{{ getStatus(returnedOrder) }}</span></p>
            <p v-show="returnedOrder.status === 'Pending'" class="pickup-date w-100 content-body">Estimate pickup date:
              <span class="fw-bold">{{ returnedOrder.estimatedPickupDate }}</span></p>
            <p class="message content-body">Message: {{ returnedOrder.message }}</p>
            <h4 class="products-header m-auto">Returned products</h4>
            <div v-for="(item,index) in returnedOrder.productList"
                 :key="index" class="cart-item m-auto ">
              <img :src="item.product.img" alt="Product image" class="product-image"/>
              <div>
                <h3 class="item-product-title">{{ item.product.title }}</h3>
                <p class="size ">Size: <span id="size"> {{ item.size }}</span></p>
                <p class="quantity " type="number">Quantity: {{ item.quantity }}</p>
              </div>
            </div>
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
  name: "Returns",
  components: {NavProfile},
  data() {
    return {
      indexReturn: -1,
      currentDate: new Date(),
    }
  },
  methods: {
    showReturn(index, returnedOrder) {
      this.indexReturn = this.indexReturn !== index ? index : -1;
      this.getReturnDate(returnedOrder.returnDate)
    },
    getStatus(returnedOrder) {
      let randomDays = Math.floor(Math.random() * (5 - 3 + 1)) + 3;
      let estimatedDate = new Date(returnedOrder.estimatedPickupDate.getTime() + randomDays * 24 * 60 * 60 * 1000);
      if (this.currentDate > estimatedDate) {
        return 'Pending';
      }
      return 'Received';
    },
    getReturnDate(returnDate) {
      let estimatedArrivalDate = new Date(returnDate);
      const thirtyDaysInMilliseconds = 30 * 24 * 60 * 60 * 1000;
      const difference = this.currentDate.getTime() - estimatedArrivalDate.getTime();
      return difference > thirtyDaysInMilliseconds;
    }
  }
}
</script>

<style scoped>
#returns-card {
  display: grid;
  width: 65%;
  padding-bottom: 5%;
  margin-right: 60px;
  margin-bottom: 100px;
  border: 1px solid grey;
  float: right;
}

#size {
  text-transform: uppercase;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid #000000;
  padding: 4px;
}

.returns-page {
  padding-bottom: 150px;
}

.title {
  margin-top: 150px;
  margin-bottom: 50px;
  letter-spacing: 2px;
}

.return-number {
  float: left;
}

.details {
  float: right;
  cursor: pointer;
}

.details:hover {
  color: grey;
}

.return-title {
  text-align: center;
  letter-spacing: 2px;
  margin: 30px 50px 30px 50px;
}

.content-body {
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
.cart-item {
  width: 95%;
  border-bottom: solid 1px #333;
  display: grid;
  padding: 20px;
  background-color: #ffffff;

}

.products-header {
  text-align: start;
}

img {
  position: relative;
  width: 80%;
  display: block;
  left: 0;
  object-position: top;
  animation: fade-in 0.5s forwards;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.size {
  transform: translateY(100%);
}

.quantity {
  transform: translateY(180%);
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

.return-div {
  width: 92%;
  padding: 20px;
  margin: auto auto 15px;
}

.size, .quantity {
  text-align: start;
}

@media (max-width: 576px) {
  #returns-card {
    width: 90%;
    float: none;
    margin-left: 20px;
  }

  .size {
    transform: translateY(0%);
  }

  .quantity {
    transform: translateY(0%);
  }

  .outer-card {
    display: none;
  }

  .title {
    margin-top: 120px;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
  }

  .content-body {
    font-size: 14px;
  }

  .returns-page {
    padding-bottom: 50px;
  }

  .return-number {
    font-size: 16px;
  }

  .details {
    font-size: 14px;
    margin-right: 7px;
  }

  .return-title {
    font-size: 18px;
    padding: 10px;
    margin: 30px;
  }

  .return-div {
    width: 90%;
    padding: 15px 10px 0px 10px;
    margin: auto auto 15px;
  }

  .item-product-title, .size, .quantity {
    font-size: 13px;
    padding-left: 15px;
  }

  .products-header {
    font-size: 18px;
  }

  .quantity {
    margin-top: -8px;
  }
}
</style>