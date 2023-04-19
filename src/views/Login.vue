<template>
  <div class="login-page mb-5 p-5">
    <div>
      <h1 id="signIn-title">SIGN IN</h1>
      <div v-show="isAuthInvalid"
           class="alert-message">
        {{ message }}
      </div>
      <input
          v-model="emailAddress"
          class="d-flex m-auto mb-4 email-pass"
          type="emailAddress"
          name="emailAddress"
          placeholder="Email"
          required
      />
      <input
          v-model="password"
          class="d-flex m-auto email-pass"
          :type="passwordFieldType"
          name="password"
          placeholder="Password"
          required
      />
      <span class="password-toggle" @click="togglePasswordVisibility">{{ passwordToggleLabel }}</span>
      <router-link to="/password" id="forgot-password" class="m-auto mb-3">Forgot my password</router-link>
      <div class="account-pgf mb-5">
        <input type="checkbox" name="example" value="1"/>
        Sign-up for newsletter
      </div>
      <button class="m-auto my-5 login" @click="login">Login</button>
      <router-link to="/register" class="create-account-button d-block my-5 p-2 m-auto">Create account</router-link>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data() {
    return {
      showPassword: false,
      isAuthInvalid: false,
      emailAddress: "",
      password: "",
      message: '',
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
    login() {
      this.isAuthInvalid = this.emailAddress !== "test@yahoo.com" || this.password !== "Test123."
      if (!this.isAuthInvalid) {
        this.$store.dispatch("signIn", this.emailAddress, this.password);
        this.$router.push('/')
      } else {
        this.message = 'Username and/or password incorrect!';
      }
    },
  },
}
;
</script>

<style scoped>
#signIn-title {
  margin-top: 150px;
  margin-bottom: 50px;
}

#forgot-password {
  font-size: 12px;
  text-decoration: underline;
  color: black;
  position: relative;
  display: grid;
  width: max-content;
}

#forgot-password:hover {
  color: #7c7c7c;
}

.email-pass {
  padding: 3px;
  display: grid;
  width: 330px;
  border: none;
  border-bottom: 1px solid #000000;
  outline: none;
}

.password-toggle {
  position: relative;
  bottom: 28px;
  left: 140px;
  transform: translateY(-50%);
  font-size: 14px;
  color: #999;
  cursor: pointer;
}

.login-page {
  font-family: "JetBrains Mono Light", sans-serif;
}

.alert-message {
  color: red;
  font-size: 12px;
  margin-left: -128px;
}

.login {
  width: 200px;
  padding: 5px;
  justify-content: center;
  background-color: #ffffff;
  color: #000000;
  cursor: pointer;
  margin-top: 100px;
  border: 2px solid black;
  margin-bottom: 300px;
}

.login:hover {
  background-color: #000000;
  color: #ffffff;
  border: 2px solid black;
}

.create-account-button {
  cursor: pointer;
  background-color: #000000;
  border: 1px solid black;
  color: #ffffff;
  text-decoration: none;
  width: 300px;
}

.create-account-button:hover {
  background-color: #ffffff;
  color: #000000;
}


</style>
