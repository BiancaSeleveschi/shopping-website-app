<template>
  <div class="order-confirmation-page">
    <h4 class="text">Your order has been placed successfully. </h4>
    <h4 class="mb-4 text">You will receive an email confirmation shortly.</h4>
    <router-link to="/orders" class="btn btn-dark">Go to Orders</router-link>
    <router-link to="/" class="btn btn-dark">Return to Home</router-link>
  </div>
</template>

<script>
export default {
  name: "OrderConfirmation",
  mounted() {
    const queryParams = this.$route.query;
    console.log("query params:", queryParams)
    console.log("query params status:", queryParams.redirect_status)
  },
}
</script>

<style scoped>
.order-confirmation-page {
  font-family: "Malgun Gothic Semilight", sans-serif;
  margin-top: 22%;
  position: relative;
  padding-bottom: 400px;
}

.btn {
  width: 150px;
  margin: 20px;
  padding: 10px
}

@media (max-width: 576px) {
  .text {
    font-size: 14px;
  }

  .btn {
    width: 130px;
    margin: 10px;
    font-size: 14px;
  }
}
</style>