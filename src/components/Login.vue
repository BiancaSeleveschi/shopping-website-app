<template>
  <div class="outer-card-login" @click="toggleLoginButton">
    <div class="card-login border border-dark" @click.stop>
      <div class="card-close" @click="toggleLoginButton">X</div>
      <router-link to="/sign/in" class="card-body d-block m-auto">
        <div class="p-2" id="sign-in-div" @click="toggleLoginButton">
          Sign In
        </div>
      </router-link>
      <router-link to="/new-account" class="card-footer">
        <div class="p-2" id="create-account" @click="toggleLoginButton">
          Create account
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  methods: {
    toggleLoginButton() {
      this.$emit("toggleLoginButton");
    },
  },
};
</script>

<style scoped>
.outer-card-login {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: right;
  width: 100%;
  height: 100%;
  top: 70px;
  z-index: 1;
}
.card-login {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 17%;
  height: 23%;
  background: #ffffff;
  transform: translateX(-4%);
}
.card-body {
  text-decoration: none;
  border: none;
}
.outer-card-login .card-login:before {
  content: "";
  position: fixed;
  height: 0px;
  width: 0px;
  right: 110px;
  top: -30px;
  border-width: 15px;
  border-color: transparent white transparent transparent;
  border-style: solid;
  transform: rotate(90deg);
  z-index: -6;
}
.card-close {
  display: grid;
  font-size: 22px;
  position: relative;
  cursor: pointer;
  justify-content: end;
  right: 5px;
}
#sign-in-div {
  width: 150px;
  background-color: #006b6e;
  color: #ffffff;
}

#sign-in-div:hover {
  background-color: #939393;
  color: #000000;
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
#create-account {
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
#create-account:hover {
  background-color: #939393;
  color: black;
}
</style>
