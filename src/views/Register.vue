<template>
  <div class="register-page">
    <div class="container">
      <div class="row d-flex">
        <h2 class="d-inline-block title">
          CREATE ACCOUNT
        </h2>
        <router-link to="/login" class="login">I Already Have It</router-link>
        <div class="title-div">
          <p class="pgf">TITLE*</p>
          <select class="account-input" v-model="account.title" required>
            <option v-for="(title, index) in titles" :key="index">
              {{ title }}
            </option>
          </select>
          <div v-if="isGenreNotSelected" class="alert-register">Please choose a genre.</div>
        </div>
        <div class="col-account">
          <p class="pgf">FIRST NAME*</p>
          <input
              v-model="account.firstName"
              type="text"
              class="account-input"
          />
          <p v-show="!isFirstNameInputCompleted" class="alert-register">{{ firstNameMessageAlert }}</p>
        </div>
        <div class="col-account">
          <p class="pgf">LAST NAME*</p>
          <input
              v-model="account.lastName"
              type="text"
              class="account-input"
          />
          <p v-show="!isLastNameInputCompleted" class="alert-register">{{ lastNameMessageAlert }}</p>
        </div>
        <div class="col-account">
          <p class="pgf">EMAIL*</p>
          <input
              v-model="account.emailAddress"
              type="email"
              class="account-input"
              required
          />
          <div v-show="isEmailAddressIncomplete" class="alert-register">Please enter a valid email address</div>
        </div>
        <div class="col-account mt-2">
          <p class="pgf">PASSWORD*</p>
          <input
              v-model="account.password"
              placeholder="Password"
              name="password"
              class="account-input"
              :type="passwordFieldType"
              required
          />
          <span class="password-toggle" @click="togglePasswordVisibility">{{
              passwordToggleLabel
            }}</span>
          <div v-show="isPasswordIncomplete" class="alert-register">Password must contain at least 8 characters
            including
            uppercase and lowercase letters, numbers, and special characters
          </div>
        </div>
        <p class="consent-pgf mt-4 mb-3">CONSENT TO PERSONAL DATA PROCESSING</p>
        <div class="agree-div mb-5">
          <input v-model="isCheckboxChecked" type="checkbox" name="example" value="1"/>
          I agree to the collection and use of my personal data for marketing purposes
          <p v-show="isCheckboxNotClicked" class="alert-register">Please agree to the terms and conditions to create an
            account
          </p>
        </div>
        <div class="mb-5 create-button">
          <button class="p-2 create-account-button" @click="createAccount">Create account</button>
        </div>
      </div>
    </div>
    <div v-show="accountExists" class="overlay">
      <transition name="fade">
        <div class="alert alert-danger m-auto py-4"
             role="alert">
          The email address is already in use by another account.
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import {firebase} from "@/firebaseInit";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Register",
  data() {
    return {
      titles: ["-", "MRS.", "MR."],
      account: {
        title: "",
        firstName: "",
        lastName: "",
        emailAddress: "",
        password: "",
        cart: [],
        favorites: [],
        deliveryAddresses: [],
        billingAddresses: [],
        orders: [],
        returns: [],
      },
      firstNameMessageAlert: '',
      lastNameMessageAlert: '',
      isCheckboxChecked: false,
      showPassword: false,
      accountExists: false,
      isGenreNotSelected: false,
      isEmailAddressIncomplete: false,
      isPasswordIncomplete: false,
      isLastNameInputCompleted: false,
      isFirstNameInputCompleted: false,
      isCheckboxNotClicked: false,
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
      const auth = firebase.auth();
      this.isGenreNotSelected = this.account.title === '';
      this.isFirstNameInputCompleted = this.verifyFirstName();
      this.isLastNameInputCompleted = this.verifyLastName();
      this.isEmailAddressIncomplete = !this.account.emailAddress.includes("@");
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*).{8,}$/;
      this.isPasswordIncomplete = !passwordRegex.test(this.account.password);
      this.isCheckboxNotClicked = !this.isCheckboxChecked;
      if (!this.isGenreNotSelected && this.isFirstNameInputCompleted && this.isLastNameInputCompleted &&
          !this.isEmailAddressIncomplete && !this.isPasswordIncomplete && !this.isCheckboxNotClicked) {
        auth.createUserWithEmailAndPassword(this.account.emailAddress, this.account.password)
            .then(userCredential => {
              this.account.uid = userCredential.user.uid
              delete this.account.password
              this.$store.dispatch('addUser', this.account)
              this.$router.push("/login")
            }).catch(e => {
          console.log(e)
          this.accountExists = true;
          setTimeout(() => {
            this.accountExists = false;
          }, 5000);
        })
      }
    },
    verifyFirstName() {
      const regex = /^[a-zA-Z]+$/;
      if (this.account.firstName === '') {
        this.isFirstNameInputCompleted = false;
        this.firstNameMessageAlert = 'This field is required'
      } else if (!regex.test(this.account.firstName)) {
        this.isFirstNameInputCompleted = false;
        this.firstNameMessageAlert = 'Please enter only characters'
      } else {
        this.isFirstNameInputCompleted = true;
      }
      return this.isFirstNameInputCompleted
    },
    verifyLastName() {
      const regex = /^[a-zA-Z]+$/;
      if (this.account.lastName === '') {
        this.isLastNameInputCompleted = false;
        this.lastNameMessageAlert = 'This field is required'
      } else if (!regex.test(this.account.lastName)) {
        this.isLastNameInputCompleted = false;
        this.lastNameMessageAlert = 'Please enter only characters'
      } else {
        this.isLastNameInputCompleted = true;
      }
      return this.isLastNameInputCompleted
    },
  },
};
</script>

<style scoped>
.register-page {
  margin-top: 100px;
  margin-bottom: 100px;
}

.create-button {
  margin-left: 220px;
  margin-top: 20px;
}

.login {
  margin-left: 26%;
  margin-top: -90px;
  color: #727272;
}

.login:hover {
  color: #000000;
}

.pgf {
  margin-top: 20px;
  margin-bottom: 0px;
}

.create-account-button {
  background-color: black;
  border: 1px solid black;
  color: white;
  width: 30%;
  right: 50px;
}

.title {
  margin-bottom: 5%;
}

.create-account-button:hover {
  background-color: white;
  color: black;
}

.col-account, .consent-pgf, .title, .agree-div {
  justify-content: start;
  text-align: start;
  font-family: "JetBrains Mono Light", sans-serif;
}

.account-input {
  border: none;
  position: relative;
  border-bottom: 1px solid #000000;
  outline: none;
  width: 400px;
}

.overlay {
  width: 100%;
  border-bottom: solid 1px #333;
  display: grid;
  background-color: #a2a2a2;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.alert {
  position: absolute;
  top: 35%;
  left: 35%;
  width: 30%;
  height: max-content;
  z-index: 2;
}

.title {
  margin-top: 80px;

}

.alert-register {
  color: red;
  font-size: 12px;
  width: 75%;
}

.password-toggle {
  position: relative;
  right: 45px;
  transform: translateY(-50%);
  font-size: 14px;
  color: #999;
  cursor: pointer;
}

.consent-pgf {
  font-size: 20px;
}

.title-div {
  width: 100%;
  justify-content: start;
  text-align: start;
  font-family: "JetBrains Mono Light", sans-serif;
}

.col-account {
  width: 50%;
}

@media (max-width: 576px) {
  .title {
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 20px;
  }

  .login {
    justify-content: start;
    text-align: start;
    margin-bottom: 20px;
    margin-left: 0px;
    margin-top: 0px;
  }

  .account-input {
    width: 250px;
    font-size: 14px;
  }
  .alert-register {
    width: 130%;
  }
  .alert {
    top:  25%;
    left:  10%;
    font-size: 14px;
    width: 80%;
  }
  .register-page {
    margin-bottom: 50px;
  }

  .col-account, .title-div {
    width: 230px;
  }

  .password-toggle {
    left: 205px;
    bottom: 22px;
  }

  .pgf {
    margin-bottom: 0px;
    margin-top: 10px;
    font-size: 14px;
  }

  .col-account, .consent-pgf {
    font-size: 14px;
  }

  .create-button {
    margin-left: 30px;
    margin-top: 0px;
  }

  .create-account-button {
    width: 60%;
    font-size: 12px;
  }

  .agree-div {
    font-size: 12px;
  }
}
</style>
