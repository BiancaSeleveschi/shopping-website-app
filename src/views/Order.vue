<template>
  <div>
    <h2 class="title fw-bold">Continue to Checkout</h2>
    <div v-if="!isClicked"
         class="form m-auto border border-2 m-auto p-5 rounded rounded-4">
      <p class="fw-bold pgf-form">Enter your email address to proceed</p>
      <span class="span-form mb-2">We need your email address to send updates about your order.</span>
      <span class="mt-3">Email*</span>
      <input
          v-model="emailAddress"
          type="text"
          class="w-100 p-1 mb-2" id="email-input"
          v-on:keyup.enter="goToNextStep"
          required
      />
      <span v-show="showEmailAlert" class="text-danger" id="email-alert">Please enter a valid email</span>
      <button @click="goToNextStep"
              class="btn btn-dark rounded rounded-0 mt-3 p-2">Continue
      </button>
    </div>
    <div v-else-if="isClicked">
      <div class="form m-auto border border-2 p-5 rounded rounded-4">
        <h5 class="fw-bold mb-2 form-name">Welcome!</h5>
        <span class="span-pgf-form">{{ emailAddress }}</span>
      </div>
      <div class="form m-auto border border-2 my-5 p-5 rounded rounded-4">
        <h5 class="fw-bold mb-3 form-name">Guest Checkout</h5>
        <p class="span-pgf-form">Not ready to become a member just yet?</p>
        <router-link to="/checkout" class="btn btn-dark rounded rounded-0 mt-2 p-2">Continue to checkout</router-link>
      </div>
    </div>
    <Service class="service-comp"/>
  </div>
</template>

<script>
import Service from "@/components/Service";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Order",
  components: {Service},
  data() {
    return {
      emailAddress: '',
      isClicked: false,
      showEmailAlert: false,
    }
  },
  methods: {
    goToNextStep() {
      this.showEmailAlert = !this.emailAddress.includes("@");
      this.isClicked = !this.showEmailAlert
    },
  },
}
</script>

<style scoped>
.form {
  position: relative;
  display: grid;
  width: 25%;
  text-align: start;
  margin-bottom: 25%;
  background-color: #e5e5e5;
}

.title {
  margin-top: 5%;
  margin-bottom: 4%;
  letter-spacing: 2px;
}

.pgf-form {
  letter-spacing: 1px;
}

.form-name {
  letter-spacing: 1px;
}

.span-pgf-form {
  font-size: 14px;
}

.span-form {
  font-size: 12px;
}

.service-comp {
  margin-top: 17%;
}

#email-alert {
  color: red;
  margin-top: -7px;
  font-size: 14px;
}
#email-input {
  border: none;
  border-bottom: 1px solid #000000;
  outline: none;
}
</style>