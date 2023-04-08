<template>
  <div class="m-auto my-4 border border-2 w-50 m-auto p-4 rounded rounded-4 bg-white">
    <h4 v-if="isAddressSaved" class="py-4" id="address-title">Edit address</h4>
    <h4 v-else class="py-4" id="address-title">
      {{ title === 'Delivery address' ? 'Add delivery address' : 'Add billing address' }}</h4>
    <div class="w-50 col-div mb-5 d-block m-auto">
      <span class=" address-pgf ">Country*</span>
      <input
          v-model="address.country"
          type="text"
          class="w-100 address-input"
          required
      />
      <span class="address-alert" v-show="isCountryIncomplete">Please enter a country</span>
    </div>
    <div class=" w-50 col-div mb-5 d-block m-auto">
      <p class="address-pgf">Town/City*</p>
      <input
          v-model="address.city"
          type="text"
          class="w-100 address-input"
          required
      />
      <span class="address-alert" v-show="isCityIncomplete">Please enter a city/town</span>
    </div>
    <div class=" w-50 col-div mb-5 d-block m-auto">
      <p class="address-pgf">Street*</p>
      <input
          v-model="address.street"
          type="text"
          class="w-100 address-input"
          required
      />
      <span class="address-alert" v-show="isStreetIncomplete">Enter a street</span>
    </div>
    <div class=" w-50 col-div mb-5 d-block m-auto">
      <p class="address-pgf">Number*</p>
      <input
          v-model="address.number"
          type="number"
          class="w-100 address-input"
          required
      />
      <span class="address-alert" v-show="isNumberIncomplete">Enter a house/block number</span>
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
      <p class="address-pgf">Postcode*</p>
      <input
          v-model="address.postcode"
          type="number"
          class="w-100 address-input"
          required
      />
      <span class="address-alert" v-show="isPostcodeIncomplete">Please enter a postcode</span>
    </div>
    <button v-if="!isAddressSaved" @click="saveAddress" class="btn btn-primary mb-5">Save</button>
    <button v-else @click="updateAddress(index)" class="btn btn-primary mb-5">Save</button>
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
      addressIndex: this.index,
      title: this.titleInitial,
      isCountryIncomplete: false,
      isCityIncomplete: false,
      isStreetIncomplete: false,
      isNumberIncomplete: false,
      isPostcodeIncomplete: false,
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
      this.isCountryIncomplete = address.country === "";
      this.isCityIncomplete = address.city === "";
      this.isStreetIncomplete = address.street === "";
      this.isNumberIncomplete = address.number === "";
      this.isPostcodeIncomplete = address.postcode === "";
      this.isAddressComplete = !this.isCountryIncomplete && !this.isCityIncomplete
          && !this.isStreetIncomplete && !this.isNumberIncomplete && !this.isPostcodeIncomplete;
      if (!this.isAddressSaved && this.isAddressComplete && this.isLoggedIn && this.title === 'Delivery address') {
        this.$store.dispatch('saveDeliveryAddress', address)
        this.address = newAddress
        this.$emit('closeAddressForm')
      } else if (!this.isAddressSaved && this.isAddressComplete && this.isLoggedIn && this.title === 'Billing address') {
        this.$store.dispatch('saveBillingAddress', address)
        this.address = newAddress
        this.$emit('closeAddressForm')
      } else if (!this.isAddressSaved && this.isAddressComplete && !this.isLoggedIn && this.title === 'Billing address') {
        this.$store.state.billingAddresses.push(address)
        this.address = newAddress
        this.$emit('closeAddressForm')
      } else if (!this.isAddressSaved && this.isAddressComplete && !this.isLoggedIn && this.title === 'Delivery address') {
        this.$store.state.deliveryAddress.push(address)
        this.address = newAddress
        this.$emit('closeAddressForm')
      }
    },
    updateAddress(address, index) {
      this.isCountryIncomplete = address.country === "";
      this.isCityIncomplete = address.city === "";
      this.isStreetIncomplete = address.street === "";
      this.isNumberIncomplete = address.number === "";
      this.isPostcodeIncomplete = address.postcode === "";
      this.isAddressComplete = !this.isCountryIncomplete && !this.isCityIncomplete
          && !this.isStreetIncomplete && !this.isNumberIncomplete && !this.isPostcodeIncomplete;
      if (this.isAddressComplete && this.isAddressSaved && this.isLoggedIn && this.title === 'Delivery address') {
        this.$store.dispatch('updateDeliveryAddress', {address, index})
        this.$emit('closeAddressForm')
      } else if (this.isAddressComplete && this.isAddressSaved && this.isLoggedIn && this.title === 'Billing address') {
        this.$store.dispatch('updateBillingAddress', {address, index})
        this.$emit('closeAddressForm')
      } else if (this.isAddressComplete && this.isAddressSaved && !this.isLoggedIn && this.title === 'Billing address') {
        this.$store.state.deliveryAddress[index] = address
        this.$emit('closeAddressForm')
      } else if (this.isAddressComplete && this.isAddressSaved && !this.isLoggedIn && this.title === 'Delivery address') {
        this.$store.state.billingAddresses[index] = address
        this.$emit('closeAddressForm')
      }
    }
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

#address-title {
  letter-spacing: 2px;
}

</style>