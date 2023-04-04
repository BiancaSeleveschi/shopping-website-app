<template>
  <div class="addresses-page">
    <div>
      <h2 id="title">My account</h2>
      <div class="border-top pt-5 w-100">
        <div class="outer-card bg-light bg-opacity-10">
          <router-link to="/settings" class="mt-4 px-2 body-pgf ">Settings</router-link>
          <router-link to="/cards" class="px-2  body-pgf">Saved Cards</router-link>
          <router-link to="/orders" class="px-2 body-pgf">Orders</router-link>
          <router-link to="/returns" class="px-2 body-pgf">Returns</router-link>
          <router-link to="/addresses" class="px-2 body-pgf fw-bold">Addresses</router-link>
        </div>
        <div class="d-inline-bloc bg-secondary bg-opacity-10 " id="address-card">
          <div class="border border-1 bg-white m-5">
            <h4 class="my-4  content-addresses-title">My addresses</h4>
          </div>
          <div>
            <div v-for="(address, index) in this.$store.state.user.addresses" :key="index">
              <AddressForm :address="address" :isAddressSavedInitial="true"/>
            </div>
          </div>
          <div>
            <div v-for="(billingAddress, index) in this.$store.state.user.billingAddresses" :key="index">
              <BillingAddressForm :address="billingAddress"
                                  :index="index"
                                  :isBillingAddressSavedInitial="true"
              />
            </div>
          </div>
          <div>
            <div>
              <button class="ccc border border-1 btn btn-dark d-inline-block w-25  mx-5 mb-3 mt-5">
                <p class="pt-3 content-addresses-title" @click="openAddressForm">Add delivery address</p>
              </button>
              <button class="ccc border border-1 btn btn-dark d-inline-block w-25  mx-5 mb-3 mt-5">
                <p class="pt-3 content-addresses-title" @click="openBillingAddressForm">Add billing address</p>
              </button>
            </div>
          </div>
          <div v-show="showAddressForm">
            <AddressForm :address="address" :isAddressSavedInitial="false"/>
          </div>
          <div v-show="showBillingAddressForm">
            <BillingAddressForm
                :address="billingAddress"
                :index="currentIndex"
                :isBillingAddressSavedInitial="false"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddressForm from "@/components/AddressForm";
import BillingAddressForm from "@/components/BillingAddressForm";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Addresses",
  components: {BillingAddressForm, AddressForm},
  data() {
    return {
      isBillingAddressSavedInitial: false,
      address: {
        country: '',
        city: '',
        street: '',
        number: '',
        blockStaircase: '',
        postcode: '',
      },
      billingAddress: {
        address: '',
        town: '',
        postcode: '',
      },
      isAddressSaved: false,
      showAddressForm: false,
      showBillingAddressForm: false,
      isEditAddressClicked: false,
    }
  },
  computed: {
    currentIndex() {
      return this.$store.state.user.addresses.length
    }
  },
  methods: {
    openAddressForm() {
      this.showAddressForm = !this.showAddressForm;
      this.showBillingAddressForm = false;
    },
    openBillingAddressForm() {
      this.showBillingAddressForm = !this.showBillingAddressForm;
      this.showAddressForm = false;
    },
    removeAddress(index) {
      this.$store.dispatch('removeAddress', index)
    },
    removeBillingAddress(index) {
      this.$store.dispatch('removeBillingAddress', index)
    },
    updateBillingAddress({billingAddress, index}) {
      this.$store.dispatch('updateBillingAddress', {billingAddress, index})
    },
    editAddress() {
      this.isEditAddressClicked = true;

    },
    // updateAddress() {
    //   // let address = {
    //   //   // country: this.
    //   // }
    // },
    saveAddress() {
      this.$store.dispatch('saveAddress',)
      this.isEditAddressClicked = false;
    },
    // editAddress(address, index) {
    //   this.$store.dispatch('updateAddress', address, index)
    // },

  },
}
</script>

<style scoped>
#title {
  margin-top: 90px;
  margin-bottom: 90px;
  letter-spacing: 2px;
}

#address-card {
  display: grid;
  width: 65%;
  padding-bottom: 5%;
  margin-right: 60px;
  margin-bottom: 100px;
  border: 1px solid grey;
  float: right;
}

.changed-address {
  width: 125%;
  margin-left: 25%;
}

.addresses-page {
  font-family: "Malgun Gothic Semilight", sans-serif;
}

.address-billing-address-form {
  width: 130%;
  margin-left: -15%;
}

.add-button {
  /*width: 210px;*/
  display: inline-block;
  margin-right: 6%;
  margin-left: 6%;
  color: white;
  /*border: 1px solid black;*/
  background-color: black;
}

.add-button:hover {
  background-color: white;
  border: 1px solid black;
  color: black;
}

.edit-delete {
  cursor: pointer;
}

.edit-delete:hover {
  color: #ffffff;
}


.my-address {
  border: 1px solid #a4a4a4;
  padding: 7px;
  margin-left: 40%;
}

.my-billing-address {
  border: 1px solid #a4a4a4;
  padding: 7px;
  margin-left: 10%;
}

.address {
  margin-bottom: -5px;
}

.outer-card {
  text-align: left;
  float: left;
  margin-left: 13%;
  font-family: "Malgun Gothic Semilight", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  border: 1px solid grey;
  width: 16%;
}

.body-pgf {
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

.content-addresses-title {
  text-align: center;
  letter-spacing: 2px;
}


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

.my-address,
#address-title {
  letter-spacing: 2px;
}

.my-address {
  float: left;
}


</style>