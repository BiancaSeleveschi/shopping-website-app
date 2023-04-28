<template>
  <div class="m-auto my-4 border border-2 w-50 m-auto p-4 rounded rounded-4 bg-white">
    <h4 v-if="isAddressSaved" class="py-4 title">Edit address</h4>
    <h4 v-else class="py-4 title">
      {{ title === 'Delivery address' ? 'Add delivery address' : 'Add billing address' }}</h4>
    <div class="w-50 col-div mb-5 d-block m-auto">
      <p class="address-pgf">Country*</p>
      <input
          v-model="address.country"
          type="text"
          class="w-100 address-input"
          required
      />
      <span class="address-alert" v-show="isCountryInputIncomplete ">Please enter a country</span>
    </div>
    <div class="w-50 col-div mb-5 d-block m-auto">
      <p class="address-pgf">Town/City*</p>
      <input
          v-model="address.city"
          type="text"
          class="w-100 address-input"
          required
      />
      <span class="address-alert" v-show="isCityInputIncomplete">Please enter a city/town</span>
    </div>
    <div class=" w-50 col-div mb-5 d-block m-auto">
      <p class="address-pgf">Street*</p>
      <input
          v-model="address.street"
          type="text"
          class="w-100 address-input"
          required
      />
      <span class="address-alert" v-show="isStreetInputIncomplete">Enter a street</span>
    </div>
    <div class=" w-50 col-div mb-5 d-block m-auto">
      <p class="address-pgf">Number*</p>
      <input
          v-model="address.number"
          type="number"
          class="w-100 address-input"
          required
      />
      <span class="address-alert" v-show="isNumberInputIncomplete">Enter a house/block number</span>
    </div>
    <div class=" w-50 col-div mb-5 d-block m-auto">
      <p class="address-pgf">Block staircase, floor, apartment</p>
      <input
          v-model="address.blockStaircase"
          type="text"
          class="w-100 address-input"
      />
    </div>
    <div class=" w-50 col-div mb-5 d-block m-auto">
      <p class="address-pgf">Zip Code*</p>
      <input
          v-model="address.postcode"
          type="number"
          class="w-100 address-input"
          required
      />
      <span class="address-alert" v-show="isPostcodeInputIncomplete">Please enter a postcode</span>
    </div>
    <button @click="!isAddressSaved ? saveAddress() : updateAddress()" class="btn btn-primary mb-5">
      {{ !isAddressSaved ? 'Save' : 'Update' }}
    </button>
  </div>
</template>

<script>

import {v4 as uuid} from "uuid";

export default {
  name: "AddressForm",
  props: ['addressInitial', 'titleInitial', 'isAddressSavedInitial', 'index'],
  data() {
    return {
      address: this.addressInitial,
      isAddressSaved: this.isAddressSavedInitial,
      isLoggedIn: this.$store.state.user.isLoggedIn,
      currentDeliveryAddressesIndex: this.$store.getters.getCurrentDeliveryAddressesIndex,
      currentBillingAddressesIndex: this.$store.getters.getCurrentBillingAddressesIndex,
      addressIndex: this.index,
      title: this.titleInitial,
      isCountryInputIncomplete: false,
      isCityInputIncomplete: false,
      isStreetInputIncomplete: false,
      isNumberInputIncomplete: false,
      isPostcodeInputIncomplete: false,
      isAddressComplete: false,
    };
  },
  methods: {
    saveAddress() {
      let address = {
        country: this.address.country,
        city: this.address.city,
        street: this.address.street,
        number: this.address.number,
        blockStaircase: this.address.blockStaircase,
        postcode: this.address.postcode,
        id: uuid(),
      }
      let newAddress = {
        country: '',
        city: '',
        street: '',
        number: '',
        blockStaircase: '',
        postcode: '',
      }
      this.isCountryInputIncomplete = address.country === "";
      this.isCityInputIncomplete = address.city === "";
      this.isStreetInputIncomplete = address.street === "";
      this.isNumberInputIncomplete = address.number === "";
      this.isPostcodeInputIncomplete = address.postcode === "";
      this.isAddressComplete = !this.isCountryInputIncomplete && !this.isCityInputIncomplete
          && !this.isStreetInputIncomplete && !this.isNumberInputIncomplete && !this.isPostcodeInputIncomplete;
      if (!this.isAddressSaved && this.isAddressComplete) {
        if (this.isLoggedIn && this.title === 'Delivery address') {
          this.$store.dispatch('saveDeliveryAddress', address)
          this.address = newAddress
          this.$emit('closeAddressForm')
        } else if (this.isLoggedIn && this.title === 'Billing address') {
          this.$store.dispatch('saveBillingAddress', address)
          this.address = newAddress
          this.$emit('closeAddressForm')
        } else if (!this.isLoggedIn && this.title === 'Billing address') {
          this.$store.dispatch('saveBillingAddress', address)
          // this.address = newAddress
          this.$emit('closeAddressForm')
        } else if (!this.isLoggedIn && this.title === 'Delivery address') {
          this.$store.dispatch('saveDeliveryAddress', address)
          // this.address = newAddress
          this.$emit('closeAddressForm')
        }
      }
    },
    updateAddress() {
      this.isCountryInputIncomplete = this.address.country === "";
      this.isCityInputIncomplete = this.address.city === "";
      this.isStreetInputIncomplete = this.address.street === "";
      this.isNumberInputIncomplete = this.address.number === "";
      this.isPostcodeInputIncomplete = this.address.postcode === "";
      this.isAddressComplete = !this.isCountryInputIncomplete && !this.isCityInputIncomplete
          && !this.isStreetInputIncomplete && !this.isNumberInputIncomplete && !this.isPostcodeInputIncomplete;
      if (this.isAddressComplete && this.isAddressSaved) {
        if (this.isLoggedIn && this.title === 'Delivery address') {
          this.$store.dispatch('updateDeliveryAddress', this.address, this.addressIndex)
          this.$emit('closeAddressForm')
        } else if (this.isLoggedIn && this.title === 'Billing address') {
          this.$store.dispatch('updateBillingAddress', this.address, this.addressIndex)
          this.$emit('closeAddressForm')
        } else if (!this.isLoggedIn && this.title === 'Billing address') {
          this.$store.state.deliveryAddresses[this.addressIndex] = this.address
          this.$emit('closeAddressForm')
        } else if (!this.isLoggedIn && this.title === 'Delivery address') {
          this.$store.state.billingAddresses[this.addressIndex] = this.address
          this.$emit('closeAddressForm')
        }
      }
    },
  },
}
</script>


<style scoped>
input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
  appearance: textfield;
}

.address-input {
  border: none;
  border-bottom: 1px solid #000000;
  outline: none;
}

.address-alert {
  color: red;
  font-size: 14px;
  float: left
}

.address-pgf {
  margin-bottom: 0;
  float: left;
  font-family: "JetBrains Mono Light", sans-serif;
}

</style>