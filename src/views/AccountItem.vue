<template>
  <div>
    <div class="container">
      <div class="row d-flex">
        <h2 class="create-account-title col-6 col-div d-inline-block">
          CREATE ACCOUNT
        </h2>
        <router-link to="/sign/in" class="login col-4"
          >I Already Have It</router-link
        >
        <div class="col-12 col-div">
          <p class="account-pgf">TITLE*</p>
          <select
            class="w-25 mb-5 account-input"
            v-model="account.title"
            required
          >
            <option v-for="(title, index) in titles" :key="index">
              {{ title }}
            </option>
          </select>
        </div>
        <div class="col-6 col-div">
          <p>FIRST NAME</p>
          <input
            v-model="account.firstName"
            type="text"
            class="w-75 mb-5 account-input"
          />
        </div>
        <div class="col-6 col-div">
          <p>LAST NAME</p>
          <input
            v-model="account.lastName"
            type="text"
            class="w-75 mb-5 account-input"
          />
        </div>
        <div class="col-6 col-div">
          <p>EMAIL*</p>
          <input
            v-model="account.email"
            type="email"
            class="w-75 mb-5 account-input"
            required
          />
        </div>
        <div class="col-6 col-div mb-4">
          <p>PASSWORD*</p>
          <input
            v-model="password"
            placeholder="Password"
            name="password"
            class="w-75 mb-4 account-input"
            :type="passwordFieldType"
            required
          />
          <span class="password-toggle" @click="togglePasswordVisibility">{{
            passwordToggleLabel
          }}</span>
        </div>
        <p class="account-pgf fs-5 my-4">CONSENT TO PERSONAL DATA PROCESSING</p>
        <p class="account-pgf">
          <input type="checkbox" name="example" value="1" />
          I agree to the collection and use of my personal data for marketing
          purposes
        </p>
        <p class="account-pgf mb-5">
          <input type="checkbox" name="example" value="1" />
          I agree to the collection and use of my personal data for marketing
          purposes
        </p>
        <button class="mb-5 p-2" id="create-account-button">
          Create account
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountItem",
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
      password: "",
      showPassword: false,
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
    addPassword() {
      if (
        this.newPassword.length >= 8 &&
        /\d/.test(this.newPassword) &&
        /[A-Z]/.test(this.newPassword) &&
        /[$@#&!]/.test(this.newPassword)
      ) {
        this.passwords.push(this.newPassword);
        this.newPassword = "";
      } else {
        alert(
          "Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character ($@#&!)"
        );
      }
    },
  },
};
</script>

<style scoped>
.create-account-title {
  margin-top: 100px;
  font-family: "JetBrains Mono Light";
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
  font-family: "JetBrains Mono Light";
}

.account-input {
  border: none;
  border-bottom: 1px solid #000000;
  outline: none;
}

.col-div {
  justify-content: start;
  text-align: start;
  font-family: "JetBrains Mono Light";
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
  top: 50%;
  right: 25%;
  transform: translateY(-50%);
  font-size: 14px;
  color: #999;
  cursor: pointer;
}
</style>
