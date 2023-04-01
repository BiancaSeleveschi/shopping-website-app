<template>
  <div class="outer-card">
    <div class="text-decoration-none text-dark ">
      <router-link to="/settings" class="mt-4 px-2 body-pgf">Settings</router-link>
      <router-link to="/cards" class="px-2  body-pgf">Saved Cards</router-link>
      <router-link to="/orders" class="px-2 body-pgf">Orders</router-link>
      <router-link to="/returns" class="px-2 body-pgf">Returns</router-link>
      <router-link to="/addresses" class="px-2 body-pgf">Addresses</router-link>
      <p class="px-2 body-pgf border-top pt-2 w-100">Logout</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavProfile",
}
</script>

<style scoped>
.outer-card {
  text-align: left;
  font-family: "Malgun Gothic Semilight", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  width: 100%;
  z-index: 2;
  position: absolute;
}

.body-pgf {
  cursor: pointer;
  margin-top: -10px;
  padding: 6px;
  text-decoration: none;
  color: black;
  margin-bottom: 12px;
  display: block;
}

.body-pgf:hover {
  background-color: #e5e5e5;
}
</style>