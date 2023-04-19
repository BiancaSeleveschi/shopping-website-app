<template>
  <div class="outer-card" @click="toggleLoginButton">
    <div class="card border border-dark" @click.stop>
      <div class="close" @click="toggleLoginButton">X</div>
      <router-link to="/login" class="card-body d-block m-auto">
        <div class="p-2 login-div" @click="toggleLoginButton">
          Sign In
        </div>
      </router-link>
      <router-link to="/register" class="card-footer">
        <div class="p-2 create-account" @click="toggleLoginButton">
          Create account
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "LoginForm",
  methods: {
    toggleLoginButton() {
      this.$emit("toggleLoginButton");
    },
  },
};
</script>

<style scoped>

.outer-card {
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  justify-content: right;
  width: 100%;
  height: 100%;
  top: 70px;
  z-index: 2;
}

.card {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 300px;
  height: 200px;
  background: #ffffff;
  transform: translateX(-4%);
}

.card-body {
  text-decoration: none;
  border: none;
}

.card:before {
  content: "";
  position: fixed;
  height: 0px;
  width: 0px;
  right: 140px;
  top: -30px;
  border-width: 15px;
  border-color: transparent white transparent transparent;
  border-style: solid;
  transform: rotate(90deg);
  z-index: -6;
}

.login-div {
  width: 150px;
  margin-top: -20px;
  background-color: #006b6e;
  color: #ffffff;
}

.login-div:hover {
  background-color: #939393;
  color: #000000;
}

.create-account {
  display: block;
  bottom: 35px;
  width: 200px;
  position: fixed;
  z-index: -1;
  cursor: pointer;
  border: none;
  background-color: #000000;
  color: #ffffff;
}

.create-account:hover {
  background-color: #939393;
  color: black;
}

.close {
  display: grid;
  font-size: 22px;
  position: relative;
  cursor: pointer;
  justify-content: end;
  right: 5px;
}

.card-footer {
  position: fixed;
  bottom: 0;
  display: flex;
  border-top: 1px solid black;
  width: 100%;
  height: 110px;
  justify-content: center;
  background-color: #006b6e;
  color: black;
}

</style>
