<template>
  <div class="account-div">
    <div class="container">
      <div class="row d-flex">
        <h2 class="create-account-title col-6 col-div d-inline-block">
          CREATE ACCOUNT
        </h2>
        <router-link to="/sign/in" class="login col-4"
        >I Already Have It
        </router-link
        >
        <div class="col-12 col-div mb-5">
          <p class="account-pgf">TITLE*</p>
          <select
              class="w-25  account-input"
              v-model="account.title"
              required
          >
            <option v-for="(title, index) in titles" :key="index">
              {{ title }}
            </option>
          </select>
          <div v-if="alertMessageGenre" class="alert-message">Please choose a genre.</div>
        </div>
        <div class="col-6 col-div mb-5">
          <p>FIRST NAME</p>
          <input
              v-model="account.firstName"
              type="text"
              class="w-75  account-input"
          />
        </div>
        <div class="col-6 col-div mb-5">
          <p>LAST NAME</p>
          <input
              v-model="account.lastName"
              type="text"
              class="w-75  account-input"
          />
        </div>
        <div class="col-6 col-div mb-5">
          <p>EMAIL*</p>
          <input
              v-model="account.email"
              type="email"
              class="w-75  account-input"
              required
          />
          <div v-if="alertMessageEmail" class="alert-message">Please enter a valid email address.</div>
        </div>
        <div class="col-6 col-div mb-5">
          <p>PASSWORD*</p>
          <input
              v-model="account.password"
              placeholder="Password"
              name="password"
              class="w-75  account-input"
              :type="passwordFieldType"
              required
          />
          <span class="password-toggle" @click="togglePasswordVisibility">{{
              passwordToggleLabel
            }}</span>
          <div v-if="alertMessagePassword" class="alert-message">Password must contain at least 8 characters including
            uppercase
            and lowercase letters, numbers, and special characters.
          </div>
        </div>
        <p class="account-pgf fs-5 my-4">CONSENT TO PERSONAL DATA PROCESSING</p>
        <div class="account-pgf">
          <input v-model="isCheckboxChecked" type="checkbox" name="example" value="1"/>
          I agree to the collection and use of my personal data for marketing
          purposes
          <p v-if="alertMessageCheckbox" class="alert-message">Please agree to the terms and conditions to create an account.
          </p>
        </div>
        <button
            class="mt-5 p-2"
            id="create-account-button"
            @click="createAccount"
        >
          Create account
        </button>
      </div>
    </div>
    <Service class="service-in-account"/>
  </div>
</template>

<script>
import Service from "@/components/Service";
export default {
  name: "AccountItem",
  components: {Service},
  data() {
    return {
      titles: ["-", "MRS.", "MR."],
      account: {
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
      isCheckboxChecked: false,
      showPassword: false,
      alertMessageGenre: false,
      alertMessageEmail: false,
      alertMessagePassword: false,
      alertMessageCheckbox: false,
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
    createAccount() {
      this.alertMessageGenre = this.account.title === '';
      this.alertMessageEmail = !this.account.email.includes("@");
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*).{8,}$/;
      this.alertMessagePassword = !passwordRegex.test(this.account.password);
      this.alertMessageCheckbox = !this.isCheckboxChecked;
      if (!this.alertMessageGenre && !this.alertMessageEmail && !this.alertMessagePassword && !this.alertMessageCheckbox) {
        this.$router.push('/')
      }
    },
  },
};
</script>

<style scoped>
.create-account-title {
  margin-top: 100px;
  font-family: "JetBrains Mono Light", sans-serif;
}

.login {
  margin-top: 115px;
  margin-bottom: 65px;
  margin-left: 50px;
  justify-content: end;
  text-align: end;
  color: #727272;
}

.login:hover {
  color: #000000;
}

.account-pgf {
  justify-content: start;
  text-align: start;
  font-family: "JetBrains Mono Light", sans-serif;
}

.account-input {
  border: none;
  border-bottom: 1px solid #000000;
  outline: none;
}

.col-div {
  justify-content: start;
  text-align: start;
  font-family: "JetBrains Mono Light", sans-serif;
}

.alert-message {
  color: red;
  font-size: 12px;
  width: 75%;
}

#create-account-button {
  position: relative;
  background-color: black;
  color: white;
  left: 64%;
  width: 300px;
}

#create-account-button:hover {
  background-color: white;
  color: black;
}

.password-toggle {
  position: absolute;
  display: grid;
  top: 53%;
  right: 25%;
  transform: translateY(-50%);
  font-size: 14px;
  color: #999;
  cursor: pointer;
}
.service-in-account {
  margin-top: 11%;
}
</style>
