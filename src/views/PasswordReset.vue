<template>
  <div class="reset-div">
    <h3 class="reset-title text-uppercase">Reset your password</h3>
    <div v-if="!isValid">
      <div class="my-5 d-block m-auto ">
        <p class="mb-5 ">Please enter your email address to receive an email with instructions to reset your
          password.</p>
        <input v-on:keyup.enter="resetPassword"
               v-model="emailAddress" class="reset-input   w-25" placeholder="Email" type="email" required/>
        <p v-if="alert" class="alert-message text-danger">{{ alertMessage }}</p>
      </div>
      <button class="send-button p-2" @click="resetPassword">Send</button>
    </div>
    <div v-else>
      <p>An email with instructions to reset your password has been sent.</p>
    </div>
    <Service class="service-in-password"/>
  </div>
</template>

<script>
import Service from "@/components/Footer";

export default {
  name: "PasswordReset",
  components: {Service},
  data() {
    return {
      emailAddress: '',
      alert: false,
      alertMessage: '',
      isValid: false,
    }
  },
  methods: {
    resetPassword() {
      if (this.emailAddress === '') {
        this.alert = true;
        this.isValid = false;
        this.alertMessage = 'Please enter email'
      } else if (!this.emailAddress.includes('@')) {
        this.alert = true;
        this.isValid = false;
        this.alertMessage = 'Please enter a valid email address'
      }
      // this.alert = this.emailAddress === ''
      // this.alertMessage = 'Please enter email'
      // this.alert = !this.emailAddress.includes('@');
      // this.alertMessage = 'Please enter a valid email address'
      // else {
      //   this.alert = true;
      //   this.alertMessage = 'This address is not registered in our database'
      // }
      else {
        this.isValid = true;
      }
    }
  }
}
</script>

<style scoped>

.reset-title {
  margin-top: 9%;
  margin-bottom: 7%;
  font-family: "JetBrains Mono Light", sans-serif;
}

.reset-input {
  border: none;
  border-bottom: 1px solid #000000;
  outline: none;
}

.send-button {
  background-color: #ffffff;
  border: 1px solid black;
  color: black;
  width: 200px;
}


.send-button:hover {
  background-color: #000000;
  border: none;
  color: #ffffff;
}

.alert-message {
  font-size: 14px;
}
.service-in-password {
  margin-top: 20%;
}
</style>