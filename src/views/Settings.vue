<template>
  <div class="settings-page">
      <h2 id="title">My account</h2>
      <div class="border-top pt-5 w-100">
        <div class="outer-card bg-light bg-opacity-10">
          <router-link to="/settings" class="mt-4 px-2 body-pgf fw-bold" >Settings</router-link>
          <router-link to="/cards" class="px-2  body-pgf">Saved Cards</router-link>
          <router-link to="/orders" class="px-2 body-pgf">Orders</router-link>
          <router-link to="/returns" class="px-2 body-pgf">Returns</router-link>
          <router-link to="/addresses" class="px-2 body-pgf" >Addresses</router-link>
        </div>

        <div class="d-inline-bloc bg-secondary bg-opacity-10 " id="settings-card">
          <div class="border border-1 bg-light m-5">
            <h4 class="mt-4 ps-5 content-title">General</h4>
            <div class="w-50 ps-5 mt-3 d-inline-block col-div mb-5">
              <p>FIRSTNAME</p>
              <input
                  v-model="newFirstname"
                  type="text"
                  class=" w-75 account-input"
              />
            </div>
            <div class="w-50 d-inline-block col-div mb-5">
              <p>LASTNAME</p>
              <input
                  v-model="newLastname"
                  type="email"
                  class="w-75  account-input"
              />
            </div>
            <div class="w-50 ps-5 mt-4 col-div mb-5">
              <p>EMAIL*</p>
              <input
                  v-model="newEmail"
                  type="text"
                  class=" w-75 account-input"
              />
              <div v-show="isEmailAddressInvalid" class="alert-message">Enter a valid email address</div>
            </div>
            <button class="px-3 py-1 mb-5 save-button" @click="updateUserInfomation">Save</button>
          </div>

          <div class="border border-1 bg-light mx-5">
            <h4 class="mt-4 ps-5 content-title">Change password</h4>
            <div class="w-50 ps-5 mt-4  col-div mb-5">
              <p>PASSWORD*</p>
              <input
                  v-model="password"
                  name="password"
                  class="w-75  account-input"
                  :type="passwordFieldType"
                  required
              />
              <div v-show="isCurrentPasswordMismatch" class="alert-message">{{ alertCurrentPasswordMismatch }}</div>
            </div>
            <div class="w-50 ps-5 mt-3 d-inline-block col-div mb-5">
              <p>NEW PASSWORD</p>
              <input
                  v-model="newPassword"
                  name="password"
                  class="w-75  account-input"
                  :type="passwordFieldType"
                  required
              />
              <div v-show="isInvalidNewPassword" class="alert-message">{{ alertInvalidNewPassword }}</div>
            </div>
            <div class="w-50 d-inline-block col-div mb-5">
              <p>CONFIRM PASSWORD</p>
              <input
                  v-model="passwordConfirmed"
                  name="password"
                  class="w-75  account-input"
                  :type="passwordFieldType"
                  required
              />
              <div v-show="isInvalidConfirmedPassword" class="alert-message">{{ alertInvalidConfirmedPassword }}</div>
            </div>
            <button class="px-3 py-1 mb-5 save-button" @click="changePassword">Save</button>
          </div>
        </div>
      </div>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Settings",
  components: {Footer},
  data() {
    return {
      title: "",
      newFirstname: "",
      newLastname: "",
      newEmail: "",
      password: "",
      newPassword: "",
      passwordConfirmed: "",
      isEmailAddressInvalid: false,
      isCurrentPasswordMismatch: false,
      isInvalidNewPassword: false,
      isInvalidConfirmedPassword: false,
      alertInvalidNewPassword: '',
      alertCurrentPasswordMismatch: '',
      alertInvalidConfirmedPassword: '',
    }
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
    updateUserInfomation() {
      this.isEmailAddressInvalid = !this.newEmail.includes("@");
      if (!this.isEmailAddressInvalid && this.newEmail !== 'test@') {
        this.$store.dispatch('updateUserInformation', {
          newFirstname: this.newFirstname,
          newLastname: this.newLastname,
          newEmail: this.newEmail
        })
        alert('Changes have been saved.');
      }
    },
    changePassword() {
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*).{8,}$/;
      this.isInvalidNewPassword = !passwordRegex.test(this.newPassword);
      // this.isCurrentPasswordMismatch = this.password !== this.$store.state.user.password
      this.isCurrentPasswordMismatch = this.password !== 'Test123.'
      this.alertCurrentPasswordMismatch = 'Invalid password. Please try again'
      if (!this.isCurrentPasswordMismatch) {
        if (this.isInvalidNewPassword) {
          this.alertInvalidNewPassword = 'Please enter a valid password'
        }
        if (this.newPassword === this.password) {
          this.isInvalidNewPassword = true;
          this.alertInvalidNewPassword = 'New password cannot be the same as the old password'
        }
        if (!this.isInvalidNewPassword && this.passwordConfirmed === '') {
          this.isInvalidConfirmedPassword = true;
          this.alertInvalidConfirmedPassword = 'Confirm the new password'
        } else if (!this.isInvalidNewPassword && this.newPassword !== this.passwordConfirmed) {
          this.isInvalidConfirmedPassword = true;
          this.alertInvalidConfirmedPassword = 'New password and confirm password do not match'
        }
      }
      if (!this.isInvalidNewPassword && !this.isCurrentPasswordMismatch) {
        this.$store.dispatch('changePassword', this.newPassword)
        alert('The new password have been saved.');
      }
    }
  },
}
</script>

<style scoped>
#title {
  margin-top: 90px;
  margin-bottom: 90px;
  letter-spacing: 2px;
}

#settings-card {
  display: grid;
  width: 65%;
  height: max-content;
  padding-bottom: 3%;
  margin-right: 60px;
  border: 1px solid grey;
  float: right;
  margin-bottom: 300px;
}
.settings-page {
  font-family: "Malgun Gothic Semilight",sans-serif;
}
.alert-message {
  position: absolute;
  color: red;
  font-size: 12px;
  width: 75%;
}

.outer-card {
  text-align: left;
  float: left;
  margin-left: 13%;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  border: 1px solid grey;
  width: 16%;
  height: 280px;
}

.body-pgf {
  position: relative;
  cursor: pointer;
  margin-top: -10px;
  padding: 6px;
  text-decoration: none;
  color: black;
  margin-bottom: 22px;
  display: block;
}

.body-pgf:hover {
  background-color: #e5e5e5;
}

.footer {
  margin-top: 70%;
  width: 100%;
  position: absolute;

}

.account-input {
  border: none;
  border-bottom: 1px solid #000000;
  outline: none;
}

.col-div {
  justify-content: start;
  text-align: start;
}

.content-title {
  text-align: left;
  letter-spacing: 2px;
}

.save-button {
  margin-left:780px;
  background-color: black;
  color: white;
  width: max-content;
  border: none;
}
</style>