<template>
  <div class="addresses-page">
    <div>
      <h2 id="title">My account</h2>
      <div class="border-top pt-5 w-100">
        <div class="outer-card bg-light bg-opacity-10">
          <router-link to="/settings" class="mt-4 px-2 body-pgf " >Settings</router-link>
          <router-link to="/cards" class="px-2  body-pgf">Saved Cards</router-link>
          <router-link to="/orders" class="px-2 body-pgf">Orders</router-link>
          <router-link to="/returns" class="px-2 body-pgf">Returns</router-link>
          <router-link to="/addresses" class="px-2 body-pgf fw-bold" >Addresses</router-link>
        </div>
        <div class="d-inline-bloc bg-secondary bg-opacity-10 " id="address-card">
          <div class="border border-1 bg-light m-5">
            <h4 class="my-4  content-addresses-title">My addresses</h4>
          </div>
          <div>
            <div class="border border-1 d-inline-block w-25 bg-light m-5">
              <p class="my-4 content-addresses-title">Delivery address</p>
            </div>
            <div class="border border-1 d-inline-block w-25 bg-light m-5">
              <p class="my-4 content-addresses-title">Billing address</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Addresses",
  components: {Footer},
}
</script>

<style scoped>
#title {
  margin-top: 90px;
  margin-bottom: 90px;
  letter-spacing: 2px;
}

#address-card {
  display: grid;
  width: 65%;
  height: max-content;
  padding-bottom: 15%;
  margin-right: 60px;
  border: 1px solid grey;
  float: right;
  margin-bottom: 100px;
}

.addresses-page {
  font-family: "Malgun Gothic Semilight",sans-serif;
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
  margin-top: 50%;
  position: absolute;
  width: 100%;
}


.content-addresses-title {
  text-align: center;
  letter-spacing: 2px;
}

</style>