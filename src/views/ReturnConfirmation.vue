<template>
  <div class="return-confirmation-page">
    <h4 class="text">Your return request for the products has been submitted successfully. </h4>
    <h4 class="text mb-4"> Please have your package ready for our courier pickup.</h4>
    <router-link to="/returns" class="btn btn-dark">Go to Returns</router-link>
    <router-link to="/" class="btn btn-dark ">Return to Home</router-link>
  </div>
</template>

<script>
export default {
  name: "ReturnConfirmation"
}
</script>

<style scoped>
.return-confirmation-page {
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
  .return-confirmation-page {
    margin-top: 45%;
  }

  .text {
    font-size: 14px;
    width: 90%;
    margin: auto;
  }

  .btn {
    width: 140px;
    margin: 10px;
    font-size: 14px;
  }
}
</style>