<template>
  <div class="text-decoration-none text-dark outer-card">
    <router-link to="/settings" class="mt-3 body-pgf" :class="{ 'fw-bold': $route.path === '/settings' }">
      Settings
    </router-link>
    <router-link to="/orders" class=" body-pgf" :class="{ 'fw-bold': $route.path === '/orders' }">Orders
    </router-link>
    <router-link to="/returns" class=" body-pgf" :class="{ 'fw-bold': $route.path === '/returns' }">Returns
    </router-link>
    <router-link to="/addresses" class=" body-pgf" :class="{ 'fw-bold': $route.path === '/addresses' }">
      Addresses
    </router-link>
    <p @click="logout" class="body-pgf w-100 ">Logout</p>
  </div>
</template>

<script>
import {firebase} from "@/firebaseInit";

export default {
  name: "NavProfile",
  methods: {
    logout() {
      this.$emit("closeProfile");
      firebase.auth().signOut()
          .then(() => {
            this.$store.commit("RESET_USER")
            console.log('User logged out')
            this.$router.push('/login')
          })
          .catch((error) => {
            console.error('Error logging out: ', error);
          })
    },
    closeProfile() {
      this.$emit("closeProfile");
    }
  }
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

@media (max-width: 576px) {
  .outer-card {
    width: 80%;
    font-size: 14px;
    float: none;
  }
}
</style>