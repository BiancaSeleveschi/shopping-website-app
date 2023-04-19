<template>
  <div class="pass-reset-page">
    <h3 class="title text-uppercase">Reset your password</h3>
    <div v-if="!isValid">
      <div class="my-5 d-block m-auto">
        <p class="mb-5">Enter your email address to receive an email with instructions to reset your
          password.</p>
        <input v-on:keyup.enter="resetPassword"
               v-model="emailAddress" class="pass-reset-input w-25" placeholder="Email" type="email" required/>
        <p v-if="alert" class="alert-message w-25 d-block m-auto text-danger">{{ alertMessage }}</p>
      </div>
      <button class="send-button p-2" @click="resetPassword">Send</button>
    </div>
    <div v-else>
      <p>An email with instructions to reset your password has been sent.</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "PasswordReset",
  data() {
    return {
      emailAddress: '',
      alertMessage: '',
      alert: false,
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

.title {
  margin-top: 8%;
  margin-bottom: 7%;
  font-family: "JetBrains Mono Light", sans-serif;
}

.pass-reset-page {
  position: relative;
  width: 100%;
  height: 50em;
}

.pass-reset-input {
  border: none;
  border-bottom: 1px solid #000000;
  outline: none;
}

.send-button {
  background-color: #ffffff;
  border: 1px solid black;
  color: black;
  width: 200px;
  margin-bottom: 20%;
}


.send-button:hover {
  background-color: #000000;
  border: none;
  color: #ffffff;
}

.alert-message {
  font-size: 14px;
  text-align: start;
}

</style>