<template>
  <div class="outer-card">
    <div v-show="!hasAccount" class="d-block m-auto">
      <div class="card-body">
        <h1 id="signIn-title">SIGN IN</h1>
        <input
          class="d-flex m-auto mb-4"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          v-model="password"
          class="d-flex m-auto mb-1"
          :type="passwordFieldType"
          id="password"
          name="password"
          placeholder="Password"
          required
        />
        <span class="password-sign-in" @click="togglePasswordVisibility">{{
          passwordToggleLabel
        }}</span>
        <router-link to="/password" class="forgot-password mb-2"
          >Forgot my password</router-link
        >
        <p class="account-pgf mb-5">
          <input type="checkbox" name="example" value="1" />
          Sign-up for newsletter
        </p>
        <button class="d-flex m-auto my-5 login">Login</button>
        <router-link
          to="/new-account"
          class="card-footer-account d-flex m-auto"
        >
          <div class="p-2" id="create-account" @click="createAccount">
            Create account
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data() {
    return {
      hasAccount: false,
      showPassword: false,
      password: "",
    };
  },
  computed: {
    passwordFieldType() {
      return this.showPassword ? "text" : "password";
    },
    passwordToggleLabel() {
      return this.showPassword ? "Hide" : "Show ";
    },
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    toggleLoginButton() {
      this.$emit("toggleLoginButton");
    },
    createAccount() {
      this.hasAccount = !this.hasAccount;
      this.$emit("createAccount");
    },
  },
};
</script>

<style scoped>
#signIn-title {
  margin-top: 150px;
  margin-bottom: 50px;
  font-family: "JetBrains Mono Light";
}

#password,
#email {
  padding: 3px;
  width: 300px;
  border: none;
  border-bottom: 1px solid #000000;
  outline: none;
  font-family: "JetBrains Mono Light";
}
.forgot-password {
  font-size: 12px;
  text-decoration: underline;
  font-family: "JetBrains Mono Light";
  color: black;
  position: relative;
  display: grid;
}
.forgot-password:hover {
  color: #7c7c7c;
}
.login {
  width: 150px;
  padding: 5px;
  justify-content: center;
  background-color: #ffffff;
  color: #000000;
  cursor: pointer;
  margin-top: 100px;
  border: 1px solid black;
}
.login:hover {
  background-color: #000000;
  color: #ffffff;
  border: 2px solid black;
}
.account-pgf {
  font-family: "JetBrains Mono Light";
}
.password-sign-in {
  position: absolute;
  display: grid;
  top: 33%;
  left: 56%;
  transform: translateY(-50%);
  font-size: 14px;
  color: #999;
  cursor: pointer;
}
.card-footer-account {
  justify-content: center;
}
#create-account {
  bottom: 15%;
  position: fixed;
  cursor: pointer;
  width: 300px;
  background-color: #000000;
  color: #ffffff;
}
#create-account:hover {
  border: 1px solid black;
  background-color: #ffffff;
  color: #000000;
}
</style>
