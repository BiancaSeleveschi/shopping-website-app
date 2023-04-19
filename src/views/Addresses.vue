<template>
  <div class="addresses-page">
    <h2 id="title">My account</h2>
    <div class="border-top pt-5 w-100"></div>
    <NavProfile class="outer-card"/>
    <div class="d-inline-bloc bg-secondary bg-opacity-10 " id="address-card">
      <h4 class=" m-5 border border-1 bg-white p-3 address-title">My addresses</h4>
      <AddressList :addresses="deliveryAddresses"/>
      <AddressList :addresses="billingAddresses"/>

      <div class="mt-5 pt-5">
        <button class="btn btn-dark d-inline-block w-25 p-4 mx-5 mb-3 mt-5 address-title"
                @click="openAddressForm">Add delivery address
        </button>
        <button class="btn btn-dark d-inline-block w-25 p-4 mx-5 mb-3 mt-5 address-title"
                @click="openBillingAddressForm">Add billing address
        </button>
        <div v-show="showAddingDeliveryAddressForm">
          <AddressForm :addressInitial="address"
                       titleInitial="Delivery address"
                       :isAddressSavedInitial="false"
                       :index="currentDeliveryAddressesIndex"
                       @closeDeliveryAddressForm="closeAddingDeliveryAddressForm"/>
        </div>
        <div class="my-4 p-2 m-auto bg-success bg-opacity-10 alert" v-show="isAddressSaved">
          The address have been saved
        </div>
        <div v-show="showAddingBillingAddressForm">
          <AddressForm :addressInitial="address"
                       titleInitial="Billing address"
                       :isAddressSavedInitial="false"
                       :index="currentDeliveryAddressesIndex"
                       @closeDeliveryAddressForm="closeAddingDeliveryAddressForm"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddressForm from "@/components/AddressForm";
import AddressList from "@/components/AddressList";
import NavProfile from "@/components/NavProfile";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Addresses",
  components: {NavProfile, AddressList, AddressForm},
  data() {
    return {
      address: {
        country: '',
        city: '',
        street: '',
        number: '',
        blockStaircase: '',
        postcode: '',
      },
      isAddressSaved: false,
      showAddingDeliveryAddressForm: false,
      showAddingBillingAddressForm: false,
      isLoggedIn: this.$store.state.user.isLoggedIn,
      deliveryAddresses: this.$store.state.user.deliveryAddresses,
      billingAddresses: this.$store.state.user.billingAddresses,
    }
  },
  computed: {
    currentDeliveryAddressesIndex() {
      if (this.isLoggedIn) {
        return this.deliveryAddresses.length
      }
      return this.$store.state.deliveryAddresses.length
    },
    currentBillingAddressesIndex() {
      if (this.isLoggedIn) {
        return this.$store.state.user.billingAddresses.length
      }
      return this.$store.state.billingAddresses.length
    },
  },
  methods: {
    closeAddingDeliveryAddressForm() {
      this.isAddressSaved = true
      setTimeout(() => {
        this.isAddressSaved = false;
        this.showAddingDeliveryAddressForm = true;
      }, 3000)
      this.showAddingDeliveryAddressForm = !this.showAddingDeliveryAddressForm;

    }, closeAddingBillingAddressForm() {
      // this.isAddressSaved = true
      let clear = () => (this.isAddressSaved = false)
      this.isAddressSaved = true
      setTimeout(clear, 3000)
      this.showAddingBillingAddressForm = !this.showAddingBillingAddressForm;
    },
    openAddressForm() {
      this.showAddingDeliveryAddressForm = !this.showAddingDeliveryAddressForm;
      this.showAddingBillingAddressForm = false;
    },
    openBillingAddressForm() {
      this.showAddingBillingAddressForm = !this.showAddingBillingAddressForm;
      this.showAddingDeliveryAddressForm = false;
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

.addresses-page {
  font-family: "Malgun Gothic Semilight", sans-serif;
  padding-bottom: 150px;
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

.address-title {
  text-align: center;
  letter-spacing: 2px;
}

.alert {
  width: 300px;
}

</style>