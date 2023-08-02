<template>
  <div class="settings-page">
    <h2 class="title">My account</h2>
    <div class="border-top pt-5 w-100">
      <NavProfile class="outer-card bg-light"/>
      <div class="d-inline-bloc bg-secondary bg-opacity-10 " id="settings-card">
        <div class="border border-1 bg-light profile-div">
          <h4 class="content-title">General</h4>
          <div class=" mt-3 d-inline-block col-div">
            <p class="settings-pgf">FIRSTNAME*</p>
            <input
                v-model="user.firstName"
                type="text"
                class="account-input"
            />
            <p v-show="!isFirstNameInputCompleted" class="alert-message">{{ firstNameMessageAlert }}</p>

          </div>
          <div class="d-inline-block col-div">
            <p class="settings-pgf">LASTNAME*</p>
            <input
                v-model="user.lastName"
                type="email"
                class="account-input"
            />
            <p v-show="!isLastNameInputCompleted" class="alert-message">{{ lastNameMessageAlert }}</p>

          </div>
          <div class="col-div">
            <p class="settings-pgf email-pgf">EMAIL*</p>
            <input
                v-model="user.emailAddress"
                type="text"
                class="account-input"
            />
            <p v-show="isEmailAddressInvalid" class="alert-message">Enter a valid email address</p>
          </div>
          <button class="btn btn-primary save-button" @click="updateProfile">Save</button>
          <div v-show="showInformationSavedAlert" class="overlay">
            <transition name="fade">
              <div class="alert alert-success py-4"
                   role="alert">
                Changes have been saved
              </div>
            </transition>
          </div>
        </div>

        <div class="border border-1 profile-div bg-light">
          <h4 class="content-title">Change password</h4>
          <div class="mt-4 col-div">
            <p class="settings-pgf">PASSWORD*</p>
            <input
                v-model="password"
                name="password"
                class="account-input"
                :type="currentPasswordFieldType"
                required
            />
            <div v-show="isCurrentPasswordMismatch" class="alert-message">{{
                currentPasswordMismatchMessageAlert
              }}
            </div>
            <span class="password-toggle" @click="toggleCurrentPasswordVisibility">{{
                currentPasswordToggleLabel
              }}</span>
            <router-link to="/password" class="forgot-password">Forgot my password</router-link>
          </div>
          <div class="mt-3 d-inline-block col-div">
            <p class="settings-pgf">NEW PASSWORD*</p>
            <input
                v-model="newPassword"
                name="password"
                class="account-input"
                :type="newPasswordFieldType"
                required
            />
            <p v-show="isInvalidNewPassword" class="alert-message">{{ invalidNewPasswordMessageAlert }}</p>
            <span class="password-toggle" @click="toggleNewPasswordVisibility">{{ newPasswordToggleLabel }}</span>
          </div>
          <div class="d-inline-block col-div">
            <p class="settings-pgf">CONFIRM PASSWORD*</p>
            <input
                v-model="passwordConfirmed"
                name="password"
                class="account-input"
                :type="confirmedNewPasswordFieldType"
                required
            />
            <p v-show="isInvalidConfirmedPassword" class="alert-message">{{ invalidConfirmedPasswordMessageAlert }}</p>
            <span class="password-toggle" @click="toggleConfirmedPasswordVisibility">{{
                confirmedNewPasswordToggleLabel
              }}</span>
          </div>
          <button class="btn btn-primary save-button" @click="changePassword">Save</button>
          <div v-show="showPasswordChangedSuccessfullyAlert" class="overlay">
            <transition name="fade">
              <div class="alert alert-success py-4 "
                   role="alert">
                Your password has been changed
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import NavProfile from "@/components/NavProfile";
import {firebase, EmailAuthProvider} from "@/firebaseInit";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Settings",
  components: {NavProfile},
  data() {
    return {
      user: this.$store.state.user,
      firstName: "",
      lastName: "",
      emailAddress: "",
      newEmail: "",
      password: "",
      newPassword: "",
      passwordConfirmed: "",
      isFirstNameInputCompleted: false,
      isLastNameInputCompleted: false,
      isEmailAddressInvalid: false,
      showCurrentPassword: false,
      showNewPassword: false,
      showConfirmedPassword: false,
      isCurrentPasswordMismatch: false,
      isInvalidNewPassword: false,
      isInvalidConfirmedPassword: false,
      showInformationSavedAlert: false,
      showPasswordChangedSuccessfullyAlert: false,
      firstNameMessageAlert: '',
      lastNameMessageAlert: '',
      invalidNewPasswordMessageAlert: '',
      currentPasswordMismatchMessageAlert: '',
      invalidConfirmedPasswordMessageAlert: '',
    }
  },
  computed: {
    currentPasswordFieldType() {
      return this.showCurrentPassword ? "text" : "password";
    },
    newPasswordFieldType() {
      return this.showNewPassword ? "text" : "password";
    },
    confirmedNewPasswordFieldType() {
      return this.showConfirmedPassword ? "text" : "password";
    },
    currentPasswordToggleLabel() {
      return this.showCurrentPassword ? "Hide" : "Show ";
    },
    newPasswordToggleLabel() {
      return this.showNewPassword ? "Hide" : "Show ";
    },
    confirmedNewPasswordToggleLabel() {
      return this.showConfirmedPassword ? "Hide" : "Show ";
    },
  },
  methods: {
    toggleCurrentPasswordVisibility() {
      this.showCurrentPassword = !this.showCurrentPassword;
    },
    toggleNewPasswordVisibility() {
      this.showNewPassword = !this.showNewPassword;
    },
    toggleConfirmedPasswordVisibility() {
      this.showConfirmedPassword = !this.showConfirmedPassword;
    },
    async updateProfile() {
      const user = this.$store.state.user
      const db = firebase.firestore();

      this.isLastNameInputCompleted = this.verifyLastName();
      this.isFirstNameInputCompleted = this.verifyFirstName();
      this.isEmailAddressInvalid = !this.user.emailAddress.includes("@") || this.user.emailAddress === '';
      if (!this.isEmailAddressInvalid && this.isLastNameInputCompleted && this.isFirstNameInputCompleted) {
        {
          const docRef = db.collection("users").doc(user.id);
          await docRef.update({
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            emailAddress: this.user.emailAddress,
          });
          console.log(docRef)
          this.showInformationSavedAlert = true;
          setTimeout(() => {
            this.showInformationSavedAlert = false;
          }, 3000);
        }
      }
    },
    verifyFirstName() {
      const regex = /^[a-zA-Z]+$/;
      if (this.user.firstName === '') {
        this.isFirstNameInputCompleted = false;
        this.firstNameMessageAlert = 'This field is required'
      } else if (!regex.test(this.user.firstName)) {
        this.isFirstNameInputCompleted = false;
        this.firstNameMessageAlert = 'Please enter only characters'
      } else {
        this.isFirstNameInputCompleted = true;
      }
      return this.isFirstNameInputCompleted
    },
    verifyLastName() {
      const regex = /^[a-zA-Z]+$/;
      if (this.user.lastName === '') {
        this.isLastNameInputCompleted = false;
        this.lastNameMessageAlert = 'This field is required'
      } else if (!regex.test(this.user.lastName)) {
        this.isLastNameInputCompleted = false;
        this.lastNameMessageAlert = 'Please enter only characters'
      } else {
        this.isLastNameInputCompleted = true;
      }
      return this.isLastNameInputCompleted
    },
    changePassword() {
      const authUser = firebase.auth().currentUser;
      try {
        const credential = EmailAuthProvider.credential(
            authUser.email,
            this.password
        )
        authUser.reauthenticateWithCredential(credential)
            .then(() => {
              this.isCurrentPasswordMismatch = false;
              this.isInvalidNewPassword = this.verifyNewPassword();
              if (!this.isInvalidNewPassword) {
                this.isInvalidConfirmedPassword = this.verifyConfirmedPassword();
              } else {
                this.isInvalidConfirmedPassword = false;
              }
              if (!this.isCurrentPasswordMismatch && !this.isInvalidNewPassword && !this.isInvalidConfirmedPassword) {
                authUser.updatePassword(this.newPassword)
                    .then(() => {
                      console.log('Password changed successfully!')
                      this.showPasswordChangedSuccessfullyAlert = true
                      let clear = () => (this.showPasswordChangedSuccessfullyAlert = false)
                      if (this.showPasswordChangedSuccessfullyAlert) {
                        setTimeout(clear, 3000);
                      }
                    }).catch((error) => {
                  console.log('An error occurred', error)
                });
              }
            }).catch(e => {
          console.log("Current password is invalid!", e)
          this.isCurrentPasswordMismatch = true;
          this.currentPasswordMismatchMessageAlert = 'Invalid password. Please try again'
        })
      } catch (error) {
        console.error('Error changing password:', error)
      }
    },
    verifyNewPassword() {
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*).{8,}$/;
      if (this.newPassword === this.password) {
        this.isInvalidNewPassword = true;
        this.invalidNewPasswordMessageAlert = 'New password cannot be the same as the old password'
      } else if (this.newPassword === '' || !passwordRegex.test(this.newPassword)) {
        this.isInvalidNewPassword = true;
        this.invalidNewPasswordMessageAlert = 'Please enter a valid password'
      } else {
        this.isInvalidNewPassword = false;
      }
      return this.isInvalidNewPassword
    },
    verifyConfirmedPassword() {
      if (this.passwordConfirmed === '') {
        this.isInvalidConfirmedPassword = true;
        this.invalidConfirmedPasswordMessageAlert = 'Confirm the new password'
      } else if (this.newPassword !== this.passwordConfirmed) {
        this.isInvalidConfirmedPassword = true;
        this.invalidConfirmedPasswordMessageAlert = 'New password and confirm password do not match'
      } else {
        this.isInvalidConfirmedPassword = false;
      }
      return this.isInvalidConfirmedPassword
    }
  }
  ,
}
;
</script>

<style scoped>
#settings-card {
  display: flow;
  float: right;
  width: 65%;
  height: max-content;
  padding-bottom: 3%;
  margin-right: 60px;
  border: 1px solid grey;
  margin-bottom: 300px;
}

.profile-div {
  padding: 25px;
  margin: 30px;
}

.title {
  margin-top: 150px;
  margin-bottom: 50px;
  letter-spacing: 2px;
}

.settings-pgf {
  margin-top: 10px;
  margin-bottom: 5px;
}

.forgot-password {
  font-size: 14px;
  margin-top: 18px;
  text-decoration: underline;
  color: black;
  position: relative;
  display: grid;
  width: max-content;
}

.email-pgf {
  padding-top: 20px;
}

.forgot-password:hover {
  color: #7c7c7c;
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
  top: 15%;
  left: 35%;
  width: 30%;
  height: max-content;
  z-index: 2;
}

.settings-page {
  font-family: "Malgun Gothic Semilight", sans-serif;
}

.alert-message {
  position: absolute;
  color: red;
  font-size: 14px;
  width: 75%;
}

.password-toggle {
  right: 45px;
  font-size: 14px;
  color: #999;
  cursor: pointer;
  position: relative;
  width: 15%;
}

.outer-card {
  text-align: left;
  z-index: 5;
  float: left;
  margin-left: 13%;
  font-family: "Malgun Gothic Semilight", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  border: 1px solid grey;
  width: 16%;
}

.account-input {
  width: 75%;
  border: none;
  border-bottom: 1px solid #000000;
  outline: none;
}

.col-div {
  justify-content: start;
  text-align: start;
  width: 50%;

}

.content-title {
  text-align: left;
  letter-spacing: 2px;
}

.save-button {
  margin-left: 70%;
  margin-top: 3%;
}

@media (max-width: 576px) {
  #settings-card {
    width: 90%;
    float: none;
    margin-left: 20px;
    padding: -20px;
    margin-bottom: 100px;
  }

  .settings-pgf {
    margin-top: 20px;
    margin-bottom: 1px;
  }

  .outer-card {
    display: none;
  }

  .profile-div {
    padding: 5px;
    width: 90%;
    margin: 15px;
  }

  .title {
    margin-top: 120px;
    margin-bottom: 20px;
    letter-spacing: 2px;
  }

  .col-div {
    width: 90%;
    margin: auto;
    font-size: 14px;
  }

  .save-button {
    font-size: 13px;
    margin: 20px 0px 20px 160px;
  }

  .content-title {
    font-size: 18px;
    margin: 15px 0px 0px 15px;
  }

  .password-toggle, .alert-message {
    font-size: 12px;
  }

  .password-toggle {
    float: right;
    transform: translateY(-110%) translateX(100%);
  }

  .account-input {
    width: 100%;
  }

  .forgot-password {
    font-size: 12px;
    margin-bottom: -20px;
  }
}
</style>