<template>
  <div id="address-saved-form" class="px-5 pt-3 m-auto mt-4 border border-2 w-50 m-auto rounded rounded-4">
    <h5 class=" px-4 my-address"> {{ title }} </h5>
    <div v-if="title === 'Delivery address'">
      <div class="delete-div d-inline-block px-2" @click="removeAddress">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
             class="bi bi-trash3" viewBox="0 0 16 16">
          <path
              d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
        </svg>
      </div>
        <div class="edit-card d-inline-block" @click="editAddress">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil"
               viewBox="0 0 16 16">
            <path
                d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
          </svg>
        </div>
      <p class=" px-4 address">{{ address.city }}, {{ address.country }},{{ address.street }},{{ address.number }},
        {{ address.blockStaircase }}</p>
      <p class=" px-4 address" id="postcode">{{ address.postcode }}</p>
    </div>


    <div v-else-if="title === 'Billing address'">
      <div class="delete-div d-inline-block px-2" @click="removeAddress">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
             class="bi bi-trash3" viewBox="0 0 16 16">
          <path
              d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
        </svg>
      </div>
      <div class="edit-card d-inline-block" @click="editAddress">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil"
             viewBox="0 0 16 16">
          <path
              d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
        </svg>
      </div>
      <p class=" px-4 address">{{ address.address }}, {{ address.town }}</p>
      <p class=" px-4 address" id="postcode">{{ address.postcode }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddressSaved",
  props: ['addressInitial', 'title'],
  data() {
    return {
      address: this.addressInitial,
      country: '',
      city: '',
      street: '',
      number: '',
      blockStaircase: '',
      postcode: '',
      // billingAddress: '',
      townBillingAddress: '',
      postcodeBillingAddress: '',
      isBillingAddressIncomplete: false,
      isTownBillingAddressIncomplete: false,
      isPostcodeBillingAddressIncomplete: false,
      isBillingAddressSaved: false,
    };
  },
  methods: {
    editAddress() {
      this.$emit('editAddress');
    },
    removeAddress(index) {
      this.$store.dispatch('removeAddress', index)
    },
    removeBillingAddress(index) {
      this.$store.dispatch('removeAddress', index)
    },
  },
}
</script>

<style scoped>

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


</style>