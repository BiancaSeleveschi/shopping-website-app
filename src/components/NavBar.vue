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
            <router-link to="/search" class="searchBox rounded-5 me-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search text-dark"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </router-link>
            <router-link to="/checkout" class="cart rounded-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bag text-dark"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  components: ["toggle"],
  data() {
    return {
      scrollPosition: null,
      productName: "",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    toggleCart() {
      this.$emit("toggle");
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
}
.navbar-brand {
  font-size: 24px;
  display: flex;
}
.navbar-nav {
  letter-spacing: 0.1em;
  display: flex;
}
.nav-link:hover {
  color: #b4b4b4;
}
.nav-link {
  color: white;
}

.right {
  display: flex;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: right;
  padding-right: 2em;
}
.searchBox,
.cart {
  padding: 8px;
  align-items: self-end;
  display: grid;
  cursor: pointer;
  background: #fff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}
</style>
