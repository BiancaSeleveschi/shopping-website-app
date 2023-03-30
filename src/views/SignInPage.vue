<template>
  <div class="outer-card-sign-in">
    <div v-show="!hasAccount" class="d-block m-auto">
      <div class="card-body">
        <h1 id="signIn-title">SIGN IN</h1>
        <div v-if="isAuthInvalid"
             class="alert-message d-flex m-auto mb-2 w-25">
          {{ message }}
        </div>
        <input
            v-model="email"
            class="d-flex m-auto mb-4 w-25"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
        />
        <input
            v-model="password"
            class="d-flex m-auto mb-1 w-25"
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
        >Forgot my password
        </router-link
        >
        <p class="account-pgf mb-5">
          <input type="checkbox" name="example" value="1"/>
          Sign-up for newsletter
        </p>
        <button class="d-flex m-auto my-5 login" @click="signIn( email, password)">Login</button>
        <router-link
            to="/new-account"
            class="card-footer-account d-flex m-auto"
        >
          <div class="p-2" id="create-account-div">
            Create account
          </div>
        </router-link>
      </div>
    </div>
    <Service/>
  </div>
</template>

<script>
import Service from "@/components/Service";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  components: {Service},
  data() {
    return {
      hasAccount: false,
      showPassword: false,
      email: "",
      password: "",
      isAuthInvalid: false,
      message: '',
    };
  },
  mounted() {
    console.log(this.$store.state.user.isLogged)
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
    },
    signIn() {
      this.isAuthInvalid = this.email !== "test@yahoo.com" || this.password !== "Test123."
      if (!this.isAuthInvalid) {
        this.$store.dispatch("signIn", {
          email: this.email,
          password: this.password,
        });
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
.outer-card-sign-in {
  font-family: "JetBrains Mono Light", sans-serif;
}

#signIn-title {
  margin-top: 150px;
  margin-bottom: 50px;
}

#password,
#email {
  padding: 3px;
  width: 300px;
  border: none;
  border-bottom: 1px solid #000000;
  outline: none;
}

.alert-message {
  color: red;
  font-size: 12px;
}

.forgot-password {
  font-size: 12px;
  text-decoration: underline;
  color: black;
  position: relative;
  display: grid;
}

.forgot-password:hover {
  color: #7c7c7c;
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
}

.login:hover {
  background-color: #000000;
  color: #ffffff;
  border: 2px solid black;
}

.account-pgf {
}

.password-sign-in {
  position: absolute;
  display: grid;
  top: 35%;
  left: 60%;
  transform: translateY(-50%);
  font-size: 14px;
  color: #999;
  cursor: pointer;
}

.card-footer-account {
  justify-content: center;
  text-decoration: none;
}

#create-account-div {
  margin-top: 10%;
  margin-bottom: 10%;
  cursor: pointer;
  width: 300px;
  background-color: #000000;
  color: #ffffff;
}

#create-account-div:hover {
  border: 1px solid black;
  background-color: #ffffff;
  color: #000000;
}
</style>
