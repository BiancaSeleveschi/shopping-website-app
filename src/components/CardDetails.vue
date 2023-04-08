<template>
  <div class="m-auto my-4 border border-2 bg-secondary bg-opacity-10 m-auto p-4 rounded rounded-4 payment-page">
    <p v-show="!isOneTimePayment" @click="closeCard" id="card-close">X</p>
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
          name="expiration" pattern="[0-9]{2}/[0-9]{2}" required
          class="w-100 card-input"
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
    <button @click="save" class="py-1 px-3 d-block m-auto mb-4" id="place-order-button">
      {{ isOneTimePayment ? 'Place Order' : 'Save' }}
    </button>
  </div>
</template>

<script>
export default {
  name: "CardDetails",
  props: ['isOneTimePayment'],
  data() {
    return {
      cardholderName: '',
      cardNumber: '',
      expirationDate: '',
      cvv: '',
      isCvvIncomplete: false,
      isExpirationDateIncomplete: false,
      isOneTimePaymentInitial: this.isOneTimePayment,
      isCardNumberIncomplete: false,
      isCardholderNameIncomplete: false,
      isCardDetailsComplete: false,
    }
  },
  methods: {
    save() {
      let card = {
        cardholderName: this.cardholderName,
        cardNumber: this.cardNumber,
        expirationDate: this.expirationDate,
        cvv: this.cvv,
      }
      const regexCardholderName = /^[a-zA-Z\s]+$/;
      this.isCardholderNameIncomplete = !regexCardholderName.test(this.cardholderName)
      const regexCardNumber = /^(?:[0-9]{4}\s?){3}[0-9]{4}$/;
      this.isCardNumberIncomplete = !regexCardNumber.test(this.cardNumber);
      const regexExpiration = /^\d{2}\/\d{2}$/;
      this.isExpirationDateIncomplete = !regexExpiration.test(this.expirationDate);
      const regexCVV = /^[0-9]{3,4}$/;
      this.isCvvIncomplete = !regexCVV.test(this.cvv)
      this.isCardDetailsComplete = !this.isCardholderNameIncomplete && !this.isCardNumberIncomplete &&
          !this.isExpirationDateIncomplete && !this.isCvvIncomplete
      if (this.isOneTimePaymentInitial && this.isCardDetailsComplete) {
        // this.$store.dispatch('submitOrder', card)
        this.$emit('closeCardDetails')
      } else if (!this.isOneTimePaymentInitial && this.isCardDetailsComplete) {
        this.$store.dispatch('saveCard', card)
        this.$emit('closeCardDetails')
      }
    },
    closeCard() {
      this.$emit('closeCardDetails')
    }
  },
}
</script>

<style scoped>

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

#card-close {
  display: grid;
  font-size: 20px;
  margin-top: -2%;
  cursor: pointer;
  justify-content: end;
  color: black;
}
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

.card-info-pgf {
  margin-bottom: 0;
  float: left;
}

</style>