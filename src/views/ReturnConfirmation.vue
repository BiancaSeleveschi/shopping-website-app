<template>
  <div class="return-confirmation-page">
    <h4>Your return request for the products has been submitted successfully.  </h4>
    <h4> Please have your package ready for our courier pickup.</h4>
    <router-link to="/returns" class="btn btn-dark m-4 py-2 px-4">Go to Returns</router-link>
    <router-link to="/" class="btn btn-dark m-4 py-2 ">Return to Home</router-link>
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
</style>