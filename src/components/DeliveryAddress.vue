<template>
  <div>
    <div v-if="!isAddressSaved"
        class="m-auto my-4 border border-2 w-50 m-auto p-4 rounded rounded-4 bg-white">
      <h4 class="py-4" id="address-title">Add delivery address</h4>
      <div class="w-50 col-div mb-5 d-block m-auto">
        <span class=" address-pgf ">Country*</span>
        <input
            v-model="deliveryAddress.country"
            type="text"
            class="w-100 address-input"
            required
        />
        <span class="address-alert" v-show="isCountryIncomplete">Please enter a country</span>
      </div>
      <div class=" w-50 col-div mb-5 d-block m-auto">
        <p class="address-pgf">Town/City*</p>
        <input
            v-model="deliveryAddress.city"
            type="text"
            class="w-100 address-input"
            required
        />
        <span class="address-alert" v-show="isCityIncomplete">Please enter a city/town</span>
      </div>
      <div class=" w-50 col-div mb-5 d-block m-auto">
        <p class="address-pgf">Street*</p>
        <input
            v-model="deliveryAddress.street"
            type="text"
            class="w-100 address-input"
            required
        />
        <span class="address-alert" v-show="isStreetIncomplete">Enter a street</span>
      </div>
      <div class=" w-50 col-div mb-5 d-block m-auto">
        <p class="address-pgf">Number*</p>
        <input
            v-model="deliveryAddress.number"
            type="number"
            class="w-100 address-input"
            required
        />
        <span class="address-alert" v-show="isNumberIncomplete">Enter a house/block number</span>
      </div>
      <div class=" w-50 col-div mb-5 d-block m-auto">
        <p class="address-pgf">Block staircase, floor, apartment</p>
        <input
            v-model="deliveryAddress.blockStaircase"
            type="text"
            class="w-100 address-input"
        />
      </div>
      <div class=" w-50 col-div mb-5 d-block m-auto">
        <p class="address-pgf">Postcode*</p>
        <input
            v-model="deliveryAddress.postcode"
            type="number"
            class="w-100 address-input"
            required
        />
        <span class="address-alert" v-show="isPostcodeIncomplete">Please enter a postcode</span>
      </div>
      <button v-if="!isAddressSaved" @click="saveAddress" class="btn btn-primary mb-5">Save</button>
      <button v-else @click="updateAddress(deliveryAddress, index)" class="btn btn-primary mb-5">Save</button>
    </div>

    <div v-if="isAddressWithoutAccountSaved">
      <div v-if="!isEditActive " id="address-form">
        <div id="address-saved-form"
             class="px-5 pt-3 m-auto mt-4 border border-2 w-50 m-auto rounded rounded-4">
          <h5 class=" px-4 my-address"> Delivery address </h5>
          <div class="edit-delete ps-2 d-inline-block " @click="removeAddress">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 class="bi bi-trash3" viewBox="0 0 16 16">
              <path
                  d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
            </svg>
          </div>
          <div class="edit-delete d-inline-block"
               @click="editAddress">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil"
                 viewBox="0 0 16 16">
              <path
                  d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
            </svg>
          </div>
          <p class=" px-4 address">{{ address.city }}, {{ address.country }},{{
              address.street
            }},{{ address.number }},
            {{ address.blockStaircase }}</p>
          <p class=" px-4 address" id="postcode">{{ address.postcode }}</p>
        </div>
      </div>


      <div v-else>
        <div
            class="m-auto my-4 border border-2 w-50 m-auto p-4 rounded rounded-4 bg-white">
          <h4 class="py-4" id="address-title">Add delivery address</h4>
          <div class="w-50 col-div mb-5 d-block m-auto">
            <span class=" address-pgf ">Country*</span>
            <input
                v-model="deliveryAddress.country"
                type="text"
                class="w-100 address-input"
                required
            />
            <span class="address-alert" v-show="isCountryIncomplete">Please enter a country</span>
          </div>
          <div class=" w-50 col-div mb-5 d-block m-auto">
            <p class="address-pgf">Town/City*</p>
            <input
                v-model="deliveryAddress.city"
                type="text"
                class="w-100 address-input"
                required
            />
            <span class="address-alert" v-show="isCityIncomplete">Please enter a city/town</span>
          </div>
          <div class=" w-50 col-div mb-5 d-block m-auto">
            <p class="address-pgf">Street*</p>
            <input
                v-model="deliveryAddress.street"
                type="text"
                class="w-100 address-input"
                required
            />
            <span class="address-alert" v-show="isStreetIncomplete">Enter a street</span>
          </div>
          <div class=" w-50 col-div mb-5 d-block m-auto">
            <p class="address-pgf">Number*</p>
            <input
                v-model="deliveryAddress.number"
                type="number"
                class="w-100 address-input"
                required
            />
            <span class="address-alert" v-show="isNumberIncomplete">Enter a house/block number</span>
          </div>
          <div class=" w-50 col-div mb-5 d-block m-auto">
            <p class="address-pgf">Block staircase, floor, apartment</p>
            <input
                v-model="deliveryAddress.blockStaircase"
                type="text"
                class="w-100 address-input"
            />
          </div>
          <div class=" w-50 col-div mb-5 d-block m-auto">
            <p class="address-pgf">Postcode*</p>
            <input
                v-model="deliveryAddress.postcode"
                type="number"
                class="w-100 address-input"
                required
            />
            <span class="address-alert" v-show="isPostcodeIncomplete">Please enter a postcode</span>
          </div>
          <button v-if="!isAddressSaved" @click="saveAddress" class="btn btn-primary mb-5">Save</button>
          <button v-else @click="updateAddress(deliveryAddress, index)" class="btn btn-primary mb-5">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "DeliveryAddress",
  props: ['address', 'isAddressSavedInitial', 'index'],
  data() {
    return {
      selectedAddress: null,
      addressIndex: -1,


      deliveryAddress: this.address,
      isCountryIncomplete: false,
      isCityIncomplete: false,
      isStreetIncomplete: false,
      isNumberIncomplete: false,
      isPostcodeIncomplete: false,
      isAddressSaved: this.isAddressSavedInitial,
      isAddressComplete: false,
      isEditActive: false,
      deliveryAddressIndex: this.index,
      isAddressWithoutAccountSaved: false
    };
  },
  mounted() {
    console.log(this.deliveryAddress)
  },
  methods: {
    removeAddress() {
      let index = 0;
      this.$store.state.deliveryAddress.splice(index,1)
    },
    editAddress() {
      this.isAddressSaved = true
      this.isEditActive = true
    },
    saveAddress() {
      this.isCountryIncomplete = this.deliveryAddress.country === "";
      this.isCityIncomplete = this.deliveryAddress.city === "";
      this.isStreetIncomplete = this.deliveryAddress.street === "";
      this.isNumberIncomplete = this.deliveryAddress.number === "";
      this.isPostcodeIncomplete = this.deliveryAddress.postcode === "";
      this.isAddressComplete = !this.isCountryIncomplete && !this.isCityIncomplete
          && !this.isStreetIncomplete && !this.isNumberIncomplete && !this.isPostcodeIncomplete;
      if (!this.isAddressSaved && this.isAddressComplete && this.$store.state.user.isLogged) {
        this.$store.dispatch('saveAddress', this.deliveryAddress)
        this.isAddressSaved = true
        this.deliveryAddress = {
          country: '',
          city: '',
          street: '',
          number: '',
          blockStaircase: '',
          postcode: '',
        }
        this.isEditActive = false
        this.$emit('closeDeliveryAddressForm')
      }
      if (!this.isAddressSaved && this.isAddressComplete && !this.$store.state.user.isLogged) {
        // this.$store.state.deliveryAddress.push(this.deliveryAddress);
        this.$store.dispatch('saveAddressWithoutAccount', this.deliveryAddress)
        this.isAddressWithoutAccountSaved = true
        this.isAddressSaved = true;
        this.deliveryAddress = {
          country: '',
          city: '',
          street: '',
          number: '',
          blockStaircase: '',
          postcode: '',
        }
        this.isEditActive = false

        this.$emit('closeDeliveryAddressForm')
      }
    },
    updateAddress(deliveryAddress, index) {
      this.isCountryIncomplete = deliveryAddress.country === "";
      this.isCityIncomplete = deliveryAddress.city === "";
      this.isStreetIncomplete = deliveryAddress.street === "";
      this.isNumberIncomplete = deliveryAddress.number === "";
      this.isPostcodeIncomplete = deliveryAddress.postcode === "";
      this.isAddressComplete = !this.isCountryIncomplete && !this.isCityIncomplete
          && !this.isStreetIncomplete && !this.isNumberIncomplete && !this.isPostcodeIncomplete;
      if (this.isAddressComplete && this.isAddressSaved) {
        this.$store.dispatch('updateAddress', {deliveryAddress, index})
        this.$emit('closeDeliveryAddressForm')
        this.isEditActive = false

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


#address-form {
  height: 170px;
}

.my-address {
  letter-spacing: 2px;
  float: left;
}

.edit-delete {
  float: right;
  display: grid;
  cursor: pointer;
}


.edit-delete:hover {
  color: #5b5b5b;
}

.address,
#postcode {
  display: grid;
  position: absolute;
  float: left;
  font-size: 16px;
}

#address-saved-form {
  height: 115px;
}

#address-saved-form:hover {
  background-color: #dcdcdc;
  cursor: pointer;
}


.address {
  margin-top: 30px;
}

#postcode {
  margin-top: 50px;
}



</style>