<template>
  <div>
    <h1 id="title">{{ isOrderSuccessfulPlaced ? '' : 'Card Information' }}</h1>
    <div v-if="!isOrderSuccessfulPlaced">
      <CardDetails :isOneTimePayment="true"
                   @closeCardDetails="saveOrder"/>
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
import CardDetails from "@/components/CardDetails";

export default {
  name: "PaymentInformation",
  components: {CardDetails, Footer},
  props: ['isCardSavedForFuturePaymentsInitial'],
  data() {
    return {
      isOrderSuccessfulPlaced: false,
    }
  },
  methods: {
    saveOrder() {
      this.isOrderSuccessfulPlaced = true;
    },
  }
}
</script>

<style scoped>

#successful-div {
  font-family: "Malgun Gothic Semilight", sans-serif;
  margin-top: 22%;
  margin-bottom: 26%;
}

#title {
  font-family: "Malgun Gothic Semilight", sans-serif;
  margin-top: 100px;
  margin-bottom: 100px;
  letter-spacing: 2px;
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


.card-footer {
  margin-top: 300px;
  margin-left: -2px;
  width: 100%;
  position: relative;
  display: flex;
}


</style>