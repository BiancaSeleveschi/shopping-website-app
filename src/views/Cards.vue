<template>
  <div><h2 id="title">My account</h2>
    <div class="border-top pt-5 w-100">
      <div class="outer-card bg-light bg-opacity-10">
        <router-link to="/settings" class="mt-4 px-2 body-pgf">Settings</router-link>
        <router-link to="/cards" class="px-2  body-pgf fw-bold">Saved Cards</router-link>
        <router-link to="/orders" class="px-2 body-pgf">Orders</router-link>
        <router-link to="/returns" class="px-2 body-pgf">Returns</router-link>
        <router-link to="/addresses" class="px-2 body-pgf">Addresses</router-link>
      </div>
    </div>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Cards",
  components: {Footer}
}
</script>

<style scoped>
#title {
  margin-top: 90px;
  margin-bottom: 90px;
  letter-spacing: 2px;
}

.outer-card {
  text-align: left;
  float: left;
  margin-left: 13%;
  font-family: "Malgun Gothic Semilight", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  border: 1px solid grey;
  width: 16%;
  height: 280px;
}

.body-pgf {
  position: relative;
  cursor: pointer;
  margin-top: -10px;
  padding: 6px;
  text-decoration: none;
  color: black;
  margin-bottom: 22px;
  display: block;
}
.body-pgf:hover {
  background-color: #e5e5e5;
}

.footer {
  margin-top: 30%;
  width: 100%;
  position: absolute;
}
</style>