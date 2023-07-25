<template>
  <div class="address-form-page m-auto my-4 border border-2 m-auto p-4 rounded rounded-4 bg-white">
    <h4 v-if="isAddressSaved" class=" title">Edit address</h4>
    <h4 v-else class="py-4 title">
      {{ title === 'Delivery address' ? 'Add delivery address' : 'Add billing address' }}</h4>
    <div class="col-div d-block m-auto">
      <p class="address-pgf">Country*</p>
      <input
          v-model="address.country"
          type="text"
          class="w-100 address-input"
          required
      />
      <span class="address-alert" v-show="isCountryInputIncomplete">Please enter a country</span>
    </div>
    <div class="col-div d-block m-auto">
      <p class="address-pgf">Town/City*</p>
      <input
          v-model="address.city"
          type="text"
          class="w-100 address-input"
          required
      />
      <span class="address-alert" v-show="isCityInputIncomplete">Please enter a city/town</span>
    </div>
    <div class=" col-div d-block m-auto">
      <p class="address-pgf">Street*</p>
      <input
          v-model="address.street"
          type="text"
          class="w-100 address-input"
          required
      />
      <span class="address-alert" v-show="isStreetInputIncomplete">Enter a street</span>
    </div>
    <div class=" col-div d-block m-auto">
      <p class="address-pgf">Number*</p>
      <input
          v-model="address.number"
          type="number"
          class="w-100 address-input"
          required
      />
      <span class="address-alert" v-show="isNumberInputIncomplete">Enter a house/block number</span>
    </div>
    <div class=" col-div d-block m-auto">
      <p class="address-pgf">Block staircase, floor, apartment</p>
      <input
          v-model="address.blockStaircase"
          type="text"
          class="w-100 address-input"
      />
    </div>
    <div class=" col-div d-block m-auto">
      <p class="address-pgf">Zip Code*</p>
      <input
          v-model="address.postcode"
          type="number"
          class="w-100 address-input"
          required
      />
      <span class="address-alert" v-show="isPostcodeInputIncomplete">Please enter a postcode</span>
    </div>
    <button @click="!isAddressSaved ? saveAddress() : updateAddress()" class="btn btn-primary button">
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
    async saveAddress() {
      let address = {
        country: '',
        city: '',
        street: '',
        number: '',
        blockStaircase: '',
        postcode: '',
        id: uuid(),
      }
      this.isCountryInputIncomplete = this.address.country === "";
      this.isCityInputIncomplete = this.address.city === "";
      this.isStreetInputIncomplete = this.address.street === "";
      this.isNumberInputIncomplete = this.address.number === "";
      this.isPostcodeInputIncomplete = this.address.postcode === "";
      this.isAddressComplete = !this.isCountryInputIncomplete && !this.isCityInputIncomplete
          && !this.isStreetInputIncomplete && !this.isNumberInputIncomplete && !this.isPostcodeInputIncomplete;
      if (this.isAddressComplete && !this.isAddressSaved) {
        if (this.title === 'Delivery address') {
          await this.$store.dispatch('addDeliveryAddress', this.address)
          this.address = address
          this.$emit('closeAddressForm')
        } else if (this.title === 'Billing address') {
          await this.$store.dispatch('addBillingAddress', this.address)
          this.$emit('closeAddressForm')
          this.address = address
        }
      }
    },
    async updateAddress() {
      this.isCountryInputIncomplete = this.address.country === "";
      this.isCityInputIncomplete = this.address.city === "";
      this.isStreetInputIncomplete = this.address.street === "";
      this.isNumberInputIncomplete = this.address.number === "";
      this.isPostcodeInputIncomplete = this.address.postcode === "";
      this.isAddressComplete = !this.isCountryInputIncomplete && !this.isCityInputIncomplete
          && !this.isStreetInputIncomplete && !this.isNumberInputIncomplete && !this.isPostcodeInputIncomplete;
      if (this.isAddressComplete && this.isAddressSaved) {
        if (this.title === 'Delivery address') {
          await this.$store.dispatch('updateDeliveryAddress', this.address, this.addressIndex)
          this.$emit('closeAddressForm')
        } else if (this.title === 'Billing address') {
          await this.$store.dispatch('updateBillingAddress', this.address, this.addressIndex)
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
.button {
  margin-bottom: 30px;
}
.address-form-page, .col-div {
  width: 50%;
}

.address-pgf {
  margin-bottom: 0;
  float: left;
  font-family: "JetBrains Mono Light", sans-serif;
}

.col-div {
  padding-bottom: 30px;
}

.title {
  padding-bottom: 30px;
  padding-top: 30px;
}

@media (max-width: 576px) {
  .address-form-page {
    width: 90%;
  }

  .col-div {
    width: 70%;
    font-size: 12px;
    padding-bottom: 18px;
  }

  .title {
    font-size: 16px;
    padding-bottom: 10px;
    padding-top: 15px;
  }

  .button {
    font-size: 12px;
    margin-bottom: 8px;
    margin-top: 10px;
  }

  .address-alert {
    font-size: 11px;
  }
}
</style>