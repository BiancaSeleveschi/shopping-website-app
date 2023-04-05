<template>
  <div>
    <div v-if="!isBillingAddressSaved" class="m-auto bg-white my-4 border border-2 w-50 m-auto p-4 rounded rounded-4">
      <h4 class="billing-address p-4" id="billing-address-title">Billing address</h4>
      <div class="w-50 col-div mb-5 d-block m-auto">
        <p class="address-pgf">Address*</p>
        <input
            v-model="billingAddress.address"
            type="text"
            class="w-100 address-input"
            required
        />
        <span class="address-alert" v-show="isBillingAddressIncomplete">Please enter an address</span>
      </div>
      <div class=" w-50 col-div mb-5 d-block m-auto">
        <p class="address-pgf">Town/City*</p>
        <input
            v-model="billingAddress.town"
            type="text"
            class="w-100 address-input"
            required
        />
        <span class="address-alert" v-show="isTownBillingAddressIncomplete">Enter a town/city</span>
      </div>
      <div class=" w-50 col-div mb-5 d-block m-auto">
        <p class="address-pgf">Postcode*</p>
        <input
            v-model="billingAddress.postcode"
            type="number"
            class="w-100 address-input"
            required
        />
        <span class="address-alert" v-show="isPostcodeBillingAddressIncomplete">Enter a postcode</span>
      </div>
      <div>
        <button @click="saveBillingAddress" data-bs-dismiss="alert" class="btn btn-primary mb-5">Save
        </button>
      </div>
    </div>

    <div v-if="showAlertBillingAddressSaved"
         class=" alert alert-success fade show active" :class="{ hidden: showAlert }">
      The billing address have been saved.

    </div>

    <div v-else-if="isBillingAddressSaved && isEditActive"
         class="m-auto bg-white my-4 border border-2 w-50 m-auto p-4 rounded rounded-4">
      <h4 class="billing-address p-4">Billing address</h4>
      <div class="w-50 col-div mb-5 d-block m-auto">
        <p class="address-pgf">Address*</p>
        <input
            v-model="billingAddress.address"
            type="text"
            class="w-100 address-input"
            required
        />
        <span class="address-alert" v-show="isBillingAddressIncomplete">Please enter an address</span>
      </div>
      <div class=" w-50 col-div mb-5 d-block m-auto">
        <p class="address-pgf">Town/City*</p>
        <input
            v-model="billingAddress.town"
            type="text"
            class="w-100 address-input"
            required
        />
        <span class="address-alert" v-show="isTownBillingAddressIncomplete">Enter a town/city</span>
      </div>
      <div class=" w-50 col-div mb-5 d-block m-auto">
        <p class="address-pgf">Postcode*</p>
        <input
            v-model="billingAddress.postcode"
            type="number"
            class="w-100 address-input"
            required
        />
        <span class="address-alert" v-show="isPostcodeBillingAddressIncomplete">Enter a postcode</span>
      </div>
      <button @click="updateBillingAddress(billingAddress, index)" class="btn btn-primary mb-5">Save edit</button>
    </div>

    <div v-else-if="isBillingAddressSaved && !isEditActive" id="billing-address-card">
      <div id="address-saved-form" class="px-5 pt-3 m-auto mt-4 border border-2 w-50 m-auto rounded rounded-4">
        <h5 class=" px-4 my-address"> Billing address </h5>
        <div class="delete-div d-inline-block px-2" @click="removeBillingAddress">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
               class="bi bi-trash3" viewBox="0 0 16 16">
            <path
                d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
          </svg>
        </div>
        <div class="edit-card d-inline-block" @click="editBillingAddress">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil"
               viewBox="0 0 16 16">
            <path
                d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
          </svg>
        </div>
        <p class=" px-4 address">{{ billingAddress.address }}, {{ billingAddress.town }}</p>
        <p class=" px-4 address" id="postcode">{{ billingAddress.postcode }}</p>
      </div>
    </div>


  </div>
</template>

<script>

export default {
  name: "BillingAddressForm",
  props: ['isBillingAddressSavedInitial', 'address', 'index'],
  data() {
    return {
      billingAddress: this.address,
      // billingAddressInitial: {
      //   address: '',
      //   town: '',
      //   postcode: '',
      // },
      showAlert: true,
      billingAddressesWithoutAccount: [],
      isLoggedIn: this.$store.state.user.isLogged,
      indexAddressToEdit: this.index,
      isBillingAddressIncomplete: false,
      isTownBillingAddressIncomplete: false,
      isPostcodeBillingAddressIncomplete: false,
      isEditActive: false,
      showAlertBillingAddressSaved: false,
      isBillingAddressSaved: this.isBillingAddressSavedInitial,
      isBillingAddressSavedInitial2: this.isBillingAddressSavedInitial,
    }
  },

  methods: {
    saveBillingAddress() {
      this.billingAddress = {
        address: this.billingAddress.address,
        town: this.billingAddress.town,
        postcode: this.billingAddress.postcode,
      }
      this.isBillingAddressIncomplete = this.billingAddress.address === '';
      this.isTownBillingAddressIncomplete = this.billingAddress.town === '';
      this.isPostcodeBillingAddressIncomplete = this.billingAddress.postcode === '';
      this.isBillingAddressSaved = !this.isBillingAddressIncomplete
          && !this.isTownBillingAddressIncomplete && !this.isPostcodeBillingAddressIncomplete;
      if (this.isBillingAddressSaved && this.isLoggedIn) {
        this.$store.dispatch('saveBillingAddress', this.billingAddress)
        this.$emit('showBillingAddress')
        // this.isBillingAddressSaved = false;
        // this.isEditActive = false;
        // this.showAlertBillingAddressSaved = true;
        // setTimeout(() => {
        //   this.showAlertBillingAddressSaved = false;
        //   this.hideAlert();
        // }, 3000);
        // this.billingAddress = {
        //   address: '',
        //   town: '',
        //   postcode: '',
        // };
      } else if (!this.isLoggedIn && this.isBillingAddressSaved) {
        this.billingAddressesWithoutAccount.push(this.billingAddress)
      }
    },
    updateBillingAddress(billingAddress, index) {
      this.isEditActive = false;
      this.isBillingAddressSaved = true;
      this.$store.dispatch('updateBillingAddress', {billingAddress, index})
    },
    editBillingAddress() {
      this.isBillingAddressSaved = true;
      this.isEditActive = true;
    },
    removeBillingAddress(index) {
      this.$store.dispatch('removeAddress', index)
    },
  }
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

.billing-address {
  letter-spacing: 2px;
}


#billing-address-card {
  height: 170px;
}

.my-address {
  letter-spacing: 2px;
  float: left;
}

.edit-card {
  float: right;
  display: grid;
  cursor: pointer;
}

.delete-div {
  float: right;
  display: grid;
  cursor: pointer;
}

.edit-card:hover,
.delete-div:hover {
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

.address {
  margin-top: 30px;
}

#postcode {
  margin-top: 50px;
}

.alert {
  width: 150px;
  height: 150px;
  background: #a0d985;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}

.alert.hidden {
  background-color: #ffffff;
  cursor: pointer;
  -webkit-transition: background-color 2s ease-out;
  -moz-transition: background-color 2s ease-out;
  -o-transition: background-color 2s ease-out;
  transition: background-color 2s ease-out;
}

</style>