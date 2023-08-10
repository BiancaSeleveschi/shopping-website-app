<template>
  <div class="return-item-page">
    <div class="border-top pt-5 w-100">
      <NavProfile class="outer-card"/>
      <div v-if="order" class="bg-secondary bg-opacity-50" id="orders-card">
        <h3 class="order-id fw-bold">Order: #{{ orderNumber }}</h3>
        <h5 class="products-header d-block m-auto">Products ordered</h5>
        <div v-for="(item,index) in order.productList"
             :key="index" class="cart-item m-auto">
          <img :src="item.product.img" alt="Product image" class="product-img"/>
          <div class="product-content">
            <h3 class="item-product-title">{{ item.product.title }}</h3>
            <p class="size mt-3 ">Size: <span id="size"> {{ item.size }}</span></p>
            <p class="quantity " type="number">Quantity: {{ item.quantity }}
            <div class="fw-bold select">
              <input v-model="item.selected" type="checkbox" name="example" :value="item.product"/>
              <span class="ms-2"> Return this product</span>
            </div>
            <p class="price me-2">${{ item.quantityPrice }}</p>
          </div>
        </div>
        <textarea v-model="message" class="message m-auto mt-5" @input="checkCharacterLimit"
                  placeholder="Write your message"></textarea>
        <p>{{ remainingChars }} characters remaining</p>
        <p v-show="showImportantAlert" class="text-danger">Make sure that you have selected the right products.</p>
        <button @click="sendProductToReturn" class="btn btn-dark w-25 m-auto p-2 mt-3 position-relative">SEND</button>
      </div>
    </div>
    <div v-show="showSelectProductAlert " class="overlay">
      <transition name="fade">
        <div class="alert alert-danger pt-4 pb-2"
             role="alert">
          <p> Please select the product you wish to return </p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import NavProfile from "@/components/NavProfile";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "ReturnItem",
  components: {NavProfile},
  props: ['order'],
  data() {
    return {
      message: '',
      maxChars: 1000,
      orderNumber: this.order.orderNumber,
      hasReturned: false,
      isFirstClick: false,
      showImportantAlert: false,
      showSelectProductAlert: false,
      currentDate: new Date(),
    }
  },
  computed: {
    remainingChars() {
      return this.maxChars - this.message.length;
    }
  },
  methods: {
    getSelectedProducts() {
      return this.order.productList.filter(item => item.selected);
    },
    checkCharacterLimit() {
      if (this.message.length > this.maxChars) {
        this.message = this.message.slice(0, this.maxChars);
      }
    },
    getEstimatedPickupDate() {
      let estimatedPickupDate = new Date();
      estimatedPickupDate.setDate(this.currentDate.getDate() + 2);
      let year = estimatedPickupDate.getFullYear();
      let month = String(estimatedPickupDate.getMonth() + 1).padStart(2, '0');
      let day = String(estimatedPickupDate.getDate()).padStart(2, '0');
      let formattedEstimatedPickupDate = `${year}-${month}-${day}`;
      return formattedEstimatedPickupDate;
    },
    getCurrentDate() {
      let year = this.currentDate.getFullYear();
      let month = String(this.currentDate.getMonth() + 1).padStart(2, '0');
      let day = String(this.currentDate.getDate()).padStart(2, '0');
      let formattedDate = `${year}-${month}-${day}`;
      return formattedDate;
    },
    async sendProductToReturn() {
      let randomNum = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
      let orderToReturn = {
        productList: this.getSelectedProducts(),
        returnDate: this.getCurrentDate(),
        returnNumber: randomNum,
        orderNumber: this.orderNumber,
        message: this.message,
        estimatedPickupDate: this.getEstimatedPickupDate(),
        status: 'Pending',
      }
      if (orderToReturn.productList.length > 0) {
        if (this.isFirstClick) {
          this.isFirstClick = false;
        } else {
          if (!this.hasReturned) {
            this.showImportantAlert = true;
          } else {
            await this.$store.dispatch('setReturn', orderToReturn);
            this.$router.push('/return/confirmation')
          }
        }
        this.hasReturned = true;
      } else {
        this.showSelectProductAlert = true;
        let clear = () => (this.showSelectProductAlert = false)
        if (this.showSelectProductAlert) {
          setTimeout(clear, 3000);
        }
      }
    },
  }
}
</script>

<style scoped>

#orders-card {
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

.order-id {
  padding: 50px;
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

.alert {
  position: absolute;
  top: 35%;
  left: 35%;
  width: 30%;
  font-size: 16px;
  height: max-content;
  z-index: 2;
}

.return-item-page {
  padding-top: 10%;
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
  margin-top: 30px;
}

.products-header,
.cart-item {
  width: 70%;
  border-bottom: solid 1px #333;
  display: grid;
  padding: 20px;
  background-color: #ffffff;
}

.message {
  width: 70%;
  height: 300px;
  background-color: #ffffff;
}

.products-header {
  text-align: start;
}


.product-img {
  position: relative;
  width: 100%;
  display: block;
  padding-right: 30px;
  object-position: top;
  animation: fade-in 0.5s forwards;
  user-select: none;
}

.item-product-title {
  display: flex;
  position: relative;
  font-size: 16px;
  width: max-content;
  text-align: start;
  text-decoration: none;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.034);
  transition: 0.5s;
}

.price {
  display: flex;
  justify-content: right;
  transform: translateY(70%) translateX(13%);
}

.size, .quantity {
  text-align: start;
}

.select {
  text-align: start;
  transform: translateY(140%);
}

@media (max-width: 576px) {
  #orders-card {
    width: 90%;
    margin-top: 15%;
    float: none;
    margin-left: 20px;
    font-size: 14px;
  }

  .outer-card {
    display: none;
  }

  .product-img {
    padding-right: 15px;
  }

  .select {
    width: 160px;
    transform: translateY(0%);
  }

  .order-id {
    font-size: 16px;
    padding: 20px;
  }

  .price {
    justify-content: left;
    transform: translateY(-70%) translateX(0%);
    font-size: 14px;
    margin-top: -35px;
    margin-right: -20px;
  }

  .btn {
    font-size: 14px;
  }

  .cart-item {
    width: 90%;
  }

  .return-item-page {
    padding-top: 2%;
  }

  .item-product-title, .size, .quantity {
    font-size: 13px;
    width: 120%;
  }

  .products-header {
    font-size: 18px;
  }

  .products-header {
    width: 90%;
  }

  .size {
    transform: translateY(-50%);
  }

  .quantity {
    transform: translateY(-100%);
  }

  .alert {
    position: absolute;
    top: 20%;
    left: 10%;
    width: 80%;
    font-size: 14px;
  }

  .message {
    width: 80%;
    height: 100px;
    background-color: #ffffff;
  }
}

</style>