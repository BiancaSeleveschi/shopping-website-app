<template>
  <div class="navbar-grid">
    <nav class="navbar navbar-expand-lg p-3" id="navbar">
      <div class="container-fluid">
        <h1 class="navbar-brand text-light">M.E.D.U.Z.Z.A</h1>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav fw-bold ms-auto">
            <router-link class="nav-link" to="/">Home</router-link>
            <router-link class="nav-link" to="/women">Women</router-link>
            <router-link class="nav-link" to="/men">Men</router-link>
            <router-link class="nav-link" to="/about">About</router-link>
          </div>
          <div class="right">
            <div @click="showLoginBox" class="navbar-login">Login</div>
            <router-link to="/favorites"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-heart text-light fw-bold mx-3"
                viewBox="0 0 16 16"
              >
                <path
                  d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                />
              </svg>
            </router-link>
            <router-link to="/search" class="searchBox rounded-5 me-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                class="bi bi-search text-dark"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </router-link>
            <div class="cart rounded-5" @click="showCart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                class="bi bi-bag text-dark"
              >
                <path
                  d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                />
              </svg>
              <span class="notification-counter text-light fw-bold">{{
                cartItemCount
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div v-show="showLogin">
      <Login @toggleLoginButton="showLogin = false" />
    </div>
    <div v-show="showCartDetails">
      <NavCart @toggleCart="showCartDetails = false" />
    </div>
  </div>
</template>

<script>
import NavCart from "@/components/NavCart";
import Login from "@/components/Login";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  components: { NavCart, Login },
  data() {
    return {
      scrollPosition: null,
      productName: "",
      showCartDetails: false,
      showLogin: false,
      cart: this.$store.state.cart,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  computed: {
    cartItemCount() {
      return this.$store.state.cart.length;
    },
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    showCart() {
      this.showCartDetails = !this.showCartDetails;
      this.showLogin = false;
    },
    showLoginBox() {
      this.showLogin = !this.showLogin;
      this.showCartDetails = false;
    },
  },
};
</script>

<style scoped>
.navbar-grid {
  display: grid;
  align-items: center;
}

#navbar {
  display: grid;
  align-items: center;
  grid-template-columns: 3fr 1fr 1fr;
  background-color: transparent;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  margin: 0;
  padding: 0;
  transition: 0.3s all linear;
  z-index: 1;
}

#navbar:hover {
  background: #000000;
  color: white;
}

.navbar-brand {
  font-size: 24px;
  display: flex;
}

.navbar-nav {
  letter-spacing: 0.1em;
  display: flex;
  float: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.nav-link:hover {
  color: #b4b4b4;
}

.nav-link {
  color: #ffffff;
}

.right {
  float: right;
  position: absolute;
  right: 0;
  display: flex;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: right;
  padding-right: 2em;
}

.navbar-login {
  font-size: 13px;
  cursor: pointer;
  color: white;
}

.navbar-login:hover {
  color: #b4b4b4;
}

.searchBox,
.cart {
  float: right;
  padding: 8px;
  align-items: self-end;
  display: grid;
  cursor: pointer;
  background: #fff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.notification-counter {
  float: right;
  position: absolute;
  right: 25px;
  top: -8px;
  background-color: red;
  border-radius: 20px;
  padding: 5px;
  font-size: 9px;
  width: 20px;
  height: 20px;
}
</style>
