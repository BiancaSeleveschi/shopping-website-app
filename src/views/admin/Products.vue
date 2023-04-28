<template>
  <div class="admin-page">
    <router-link to="/admin/products/form" class="text-decoration-none d-block m-auto mb-4 p-3 btn btn-primary">Add new Product</router-link>
    <router-link to="/admin/product/list" class="text-decoration-none d-block m-auto mb-4 p-3 btn btn-primary">
      Edit/Delete Product
    </router-link>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Products"
}
</script>

<style scoped>
.admin-page {
  margin-top: 7%;
  margin-bottom: 20%;
}
.btn {
  width: 300px;
}
</style>