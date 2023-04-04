<template>
  <div>
    <h1 id="title">{{ isOrderSuccessfulPlaced ? '' : 'Card Information' }}</h1>
    <div v-if="!isOrderSuccessfulPlaced"
         class="m-auto my-4 border border-2 bg-secondary bg-opacity-10 m-auto p-4 rounded rounded-4 payment-page">
      <h4 class=" p-4">Enter your card details</h4>
      <div class="w-75 col-div mb-5 d-block m-auto">
        <p class="card-info-pgf">Cardholder Name*</p>
        <input
            v-model="cardholderName"
            type="text"
            class="w-100 card-input"
            required
        />
        <span class="card-alert" v-show="isCardholderNameIncomplete">Please enter the cardholder name</span>
      </div>
      <div class=" w-75 col-div mb-5 d-block m-auto">
        <p class="card-info-pgf">Card Number*</p>
        <input
            v-model="cardNumber"
            type="number"
            class="w-100 card-input"
            required
        />
        <span class="card-alert" v-show="isCardNumberIncomplete">Enter the card number</span>
      </div>
      <div id="exp-date-div" class=" px-3 mb-5 d-inline-block m-auto">
        <p class="card-info-pgf">Expiration Date*</p>
        <input
            v-model="expirationDate"
            placeholder='MM/YY'
            type="text"
            class="w-100 card-input"
            required
        />
        <span class="card-alert" v-show="isExpirationDateIncomplete">Enter the expiration date</span>
      </div>
      <div id="cvv-div" class=" px-3 d-inline-block m-auto">
        <p class="card-info-pgf">CVV*</p>
        <input
            v-model="cvv"
            type="number"
            class="w-100 card-input"
            required
        />
        <span class="card-alert" v-show="isCvvIncomplete">Enter a CVV</span>
      </div>
      <button @click="submitOrder" class="py-1 px-3 d-block m-auto mb-4" id="place-order-button">Place Order</button>
    </div>
    <div v-else id="successful-div">
      <h4>Your order has been placed successfully. </h4>
      <h4>You will receive an email confirmation shortly.</h4>
    </div>

    <Footer class="card-footer"/>
  </div>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  name: "PaymentInformation",
  components: {Footer},
  data() {
    return {
      cardholderName: '',
      cardNumber: '',
      expirationDate: '',
      cvv: '',
      isCvvIncomplete: false,
      isExpirationDateIncomplete: false,
      isCardNumberIncomplete: false,
      isCardholderNameIncomplete: false,
      isOrderSuccessfulPlaced: false,
    }
  },
  methods: {
    submitOrder() {
      this.isCardholderNameIncomplete = this.cardholderName !== 'SELE'
      this.isCardNumberIncomplete = this.cardNumber !== 12345678
      this.isExpirationDateIncomplete = this.expirationDate !== '11/23'
      this.isCvvIncomplete = this.isCvvIncomplete !== 234
      this.isOrderSuccessfulPlaced = !this.isCardholderNameIncomplete && !this.isCardNumberIncomplete &&
          !this.isExpirationDateIncomplete && !this.isCvvIncomplete
    },
  }
}
</script>

<style scoped>
.payment-page {
  font-family: "Malgun Gothic Semilight", sans-serif;
  width: 470px;
}

input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
  appearance: textfield;
}


.card-input {
  border: none;
  border-bottom: 1px solid #000000;
  outline: none;
}

.card-alert {
  color: red;
  font-size: 14px;
  float: left
}

.card-footer {
  margin-top: 8%;
}

.card-info-pgf {
  margin-bottom: 0;
  float: left;
}

#exp-date-div {
  width: 190px;
}
#cvv-div {
  width: 150px;
}

#place-order-button {
  border: 1px solid black;
  text-decoration: none;
  text-align: center;
  color: #000000;
  background-color: #ffffff;
}

#place-order-button:hover {
  color: #ffffff;
  background-color: #000000;
}

#successful-div {
  font-family: "Malgun Gothic Semilight", sans-serif;
  margin-top: 22%;
  margin-bottom: 26%;
}

#title {
  font-family: "Malgun Gothic Semilight", sans-serif;
  margin-top: 5%;
  margin-bottom: 4%;
  letter-spacing: 2px;
}
</style>