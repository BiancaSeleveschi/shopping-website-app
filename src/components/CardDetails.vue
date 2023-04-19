<template>
  <div class="m-auto my-4 border border-2 bg-secondary bg-opacity-10 m-auto p-4 rounded rounded-4 payment-page">
    <p v-show="!isDisposableCardInitial" @click="closeCardDetails" id="card-close">X</p>
    <h4 class=" p-4">Enter your card details</h4>
    <div class="w-75 mb-5 d-block m-auto">
      <p class="card-info-pgf">Name on card*</p>
      <input
          v-model="cardholderName"
          type="text"
          class="w-100 card-input"
          required
      />
      <span class="card-alert" v-show="isCardholderNameInputIncomplete">Please enter the cardholder name</span>
    </div>
    <div class=" w-75 mb-5 d-block m-auto">
      <p class="card-info-pgf">Number*</p>
      <input
          v-model="cardNumber"
          type="number"
          class="w-100 card-input"
          required
      />
      <span class="card-alert" v-show="isCardNumberInputIncomplete">Enter the card number</span>
    </div>

    <p class="w-100 ms-5 ps-1 card-info-pgf">Expiration Date*</p>
    <div class="w-50 mb-5 d-inline-block ">
      <select v-model="month" class="p-1 w-50 card-input">
        <option v-for="(month, index) in months" :key="index">
          <p>{{ month }}</p>
        </option>
      </select>
      <span v-show="isExpirationMonthInputIncomplete" class="card-alert ms-5 ps-1">
       Enter a valid date</span>
    </div>
    <div class="w-50 mb-5 d-inline-block ">
      <select v-model="year" class="w-75 p-1 card-input" id="year-select">
        <option v-for="(year, index) in years" :key="index">
          <p>{{ year }}</p>
        </option>
      </select>
      <span class="card-alert" v-show="isExpirationYearInputIncomplete">This field is required</span>
    </div>

    <p class="w-100 ms-5 ps-1 card-info-pgf">CVV/CVC*</p>
    <div class="w-50 mb-5 d-inline-block ">
      <input
          v-model="cvv"
          type="number"
          class="w-100 card-input"
          required
      />
      <span class="card-alert" v-show="isCvvInputIncomplete">Enter a CVV/CVC</span>
    </div>
    <p @click="showCvvDetails = !showCvvDetails" id="cvv-pgf" class="d-inline-block me-3 ms-2">What is this?</p>
    <div v-show="showCvvDetails" id="cvv-inf-card">
      <p class="close-button pe-2" @click="showCvvDetails=false">X</p>
      <img class="m-auto pb-3 d-block"
           src="https://www.dolcegabbana.com/on/demandware.static/-/Library-Sites-Dolcegabbana/default/dw53bc0150/Checkout/cvnimage.png"/>
      <p class="fw-bold px-1">What is a Card Verification Value/Code (CVV/CVC)?</p>
      <p class="px-2">For MasterCard and Visa, enter last three digits on the signature strip.</p>
    </div>
    <button @click="saveCardDetails" class="py-1 px-4 d-block m-auto mb-4" id="place-order-button">
      {{ isDisposableCardInitial ? 'Place Order' : 'Save' }}
    </button>
  </div>
</template>

<script>
export default {
  name: "CardDetails",
  props: ['isDisposableCard'],
  data() {
    return {
      cardholderName: '',
      cardNumber: '',
      month: '',
      year: '',
      cvv: '',
      isCvvInputIncomplete: false,
      isExpirationMonthInputIncomplete: false,
      isExpirationYearInputIncomplete: false,
      isDisposableCardInitial: this.isDisposableCard,
      isCardNumberInputIncomplete: false,
      isCardholderNameInputIncomplete: false,
      isCardDetailsComplete: false,
      showCvvDetails: false,
    }
  },
  computed: {
    months() {
      let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      return months.map(m => m.toLocaleString('en-US', {minimumIntegerDigits: 2}));
    },
    years() {
      const currentYear = new Date().getFullYear();
      const years = [];
      for (let i = 0; i < 13; i++) {
        years.push(currentYear + i);
      }
      return years
    }
  },
  methods: {
    saveCardDetails() {
      let card = {
        cardholderName: this.cardholderName,
        cardNumber: this.cardNumber,
        month: this.month,
        year: this.year,
        cvv: this.cvv,
      }
      const regexCardholderName = /^[a-zA-Z\s]+$/;
      this.isCardholderNameInputIncomplete = !regexCardholderName.test(card.cardholderName)

      const regexCardNumber = /^(?:[0-9]{4}\s?){3}[0-9]{4}$/;
      this.isCardNumberInputIncomplete = !regexCardNumber.test(card.cardNumber);

      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth() + 1;
      this.isExpirationMonthInputIncomplete = this.month === '' || (this.year == currentYear && parseInt(this.month) < currentMonth);
      this.isExpirationYearInputIncomplete = card.year === '';

      const regexCVV = /^[0-9]{3,4}$/;
      this.isCvvInputIncomplete = !regexCVV.test(card.cvv)
      this.isCardDetailsComplete = !this.isCardholderNameInputIncomplete && !this.isCardNumberInputIncomplete &&
          !this.isExpirationYearInputIncomplete && !this.isExpirationYearInputIncomplete && !this.isCvvInputIncomplete
      if (this.isDisposableCardInitial && this.isCardDetailsComplete) {
        // this.$store.dispatch('submitOrder', card)
        this.$emit('closeCardDetails')
      } else if (!this.isDisposableCardInitial && this.isCardDetailsComplete) {
        this.$store.dispatch('saveCard', card)
        this.$emit('closeCardDetails')
      }
    },
    closeCardDetails() {
      this.$emit('closeCardDetails')
    }
  },
}
</script>

<style scoped>
#cvv-pgf {
  font-size: 14px;
  color: #3d3a3a;
  cursor: pointer;
}

#place-order-button {
  border: 1px solid black;
  text-decoration: none;
  text-align: center;
  color: #ffffff;
  background-color: #000000;
}

#place-order-button:hover {
  color: #000000;
  background-color: #ffffff;
}

#card-close {
  display: grid;
  font-size: 20px;
  margin-top: -2%;
  cursor: pointer;
  justify-content: end;
  color: black;
}

#year-select {
  margin-left: -55px;
}

#cvv-inf-card {
  font-family: "Malgun Gothic Semilight", sans-serif;
  background-color: #ffffff;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: right;
  border: 1px solid black;
  border-radius: 10px;
  width: 350px;
  height: 450px;
  margin-top: -540px;
  left: 49%;
  z-index: 1;
}

#cvv-inf-card:before {
  content: "";
  position: absolute;
  height: 0px;
  width: 0px;
  left: 29%;
  top: 100%;
  border-width: 15px;
  border-color: transparent transparent transparent #000000;
  border-style: solid;
  transform: rotate(90deg);
  z-index: -6;
}

.close-button {
  cursor: pointer;
  font-size: 20px;
  margin-left: 200px;
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
  position: relative;
  color: red;
  font-size: 14px;
  float: left
}

.card-info-pgf {
  margin-bottom: 0;
  float: left;
  text-align: start;
}

</style>