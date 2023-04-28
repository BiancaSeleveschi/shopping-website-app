<template>
  <div class="mt-5 pt-5 category-page">
    <div class="products-button p-4 ">
      <p if="isEditActivated" class="border border-success ">Women</p>
      <button class="d-inline mx-2 w-25 btn btn-secondary">Edit</button>
      <button class="d-inline mx-2 w-25 btn btn-danger">Delete</button>
    </div>
    <div class="products-button p-4 mx-2 ">Men</div>
  </div>
</template>

<script>
export default {
  name: "CategoryList",
  data() {
    return {
      women: this.$store.state.women,
      categories: ['men', 'women'],
    }
  }
}
</script>

<style scoped>
.category-page {
  /*margin-top: 40%;*/
  margin-bottom: 30%;
}

.products-button {
  width: 500px;
  margin-top: 5%;
  border: 1px solid black;
  border-radius: 5px;
  /*margin-bottom: 25%;*/
  font-size: 22px;
}
</style>