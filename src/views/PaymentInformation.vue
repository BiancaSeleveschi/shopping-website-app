<template>
  <div class="payment-page">
    <h1 id="title">{{ isOrderSuccessfulPlaced ? '' : 'Card Information' }}</h1>
    <div v-if="!isOrderSuccessfulPlaced">
      <CardDetails :isDisposableCard="true" @closeCardDetails="saveOrder"/>
    </div>
    <div v-else class="order-successful-placed-div">
      <h4>Your order has been placed successfully. </h4>
      <h4>You will receive an email confirmation shortly.</h4>
    </div>
  </div>
</template>

<script>
import CardDetails from "@/components/CardDetails";

export default {
  name: "PaymentInformation",
  components: {CardDetails},
  data() {
    return {
      isOrderSuccessfulPlaced: false,
    }
  },
  methods: {
    saveOrder() {
      this.$store.commit('saveOrder')
      this.isOrderSuccessfulPlaced = true;
    },
  }
}
</script>

<style scoped>


.order-successful-placed-div {
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

.payment-page {
  padding-bottom: 200px;
}
</style>