<template>
  <div>
    <h1 class="title">Checkout</h1>
    <div v-if="(isLoggedIn && !addressIsSaved) || (!isLoggedIn && !addressIsSaved)">
      <div class="m-auto my-4 border border-2 w-50 m-auto p-4 rounded rounded-4">
        <h4 class=" py-5" id="address-title">Add your address</h4>
        <div class=" w-50 col-div mb-5 d-block m-auto">
          <span class=" account-pgf ">Country*</span>
          <input
              v-model="country"
              type="text"
              class="w-100 account-input"
              required
          />
          <span class="address-alert" v-show="isCountryIncomplete">Please enter a country</span>
        </div>
        <div class=" w-50 col-div mb-5 d-block m-auto">
          <p class="account-pgf">Town/City*</p>
          <input
              v-model="city"
              type="text"
              class="w-100 account-input"
              required
          />
          <span class="address-alert" v-show="isCityIncomplete">Please enter a city/town</span>
        </div>
        <div class=" w-50 col-div mb-5 d-block m-auto">
          <p class="account-pgf">Street*</p>
          <input
              v-model="street"
              type="text"
              class="w-100 account-input"
              required
          />
          <span class="address-alert" v-show="isStreetIncomplete">Enter a street</span>
        </div>
        <div class=" w-50 col-div mb-5 d-block m-auto">
          <p class="account-pgf">Number*</p>
          <input
              v-model="number"
              type="number"
              class="w-100 account-input"
              required
          />
          <span class="address-alert" v-show="isNumberIncomplete">Enter a house/block number</span>
        </div>
        <div class=" w-50 col-div mb-5 d-block m-auto">
          <p class="account-pgf">Block staircase, floor, apartment</p>
          <input
              v-model="blockStaircase"
              type="text"
              class="w-100 account-input"
          />
        </div>
        <div class=" w-50 col-div mb-5 d-block m-auto">
          <p class="account-pgf">Postcode*</p>
          <input
              v-model="postcode"
              type="number"
              class="w-100 account-input"
              required
          />
          <span class="address-alert" v-show="isPostcodeIncomplete">Please enter a postcode</span>
        </div>
        <button @click="saveAddress" class="btn btn-primary mb-5">Save</button>
      </div>
    </div>
    <div v-else id="address-form" class="px-5 m-auto my-4 border border-2 w-50 m-auto p-4 rounded rounded-4">
      <h5 class=" px-4 my-address">My address</h5>
      <div class="edit-card" @click="editAddress">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil"
             viewBox="0 0 16 16">
          <path
              d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
        </svg>
      </div>
      <p class=" px-4 city-address">{{ city }}, {{ country }}</p>
      <p class=" px-4 " id="street-number"> {{ street }},{{ number }}, {{ blockStaircase }} </p>
      <p class=" px-4" id="postcode">{{ postcode }}</p>
    </div>


    <div v-if="!isBillingAddressSaved " class="m-auto my-4 border border-2 w-50 m-auto p-4 rounded rounded-4">
      <h4 class="billing-address p-4" id="billing-address-title">Billing address</h4>
      <p class="billing-address ">Enter your billing address</p>
      <div class="w-50 col-div mb-5 d-block m-auto">
        <p class="account-pgf">Address*</p>
        <input
            v-model="billingAddress"
            type="text"
            class="w-100 account-input"
            required
        />
        <span class="address-alert" v-show="isBillingAddressIncomplete">Please enter an address</span>
      </div>
      <div class=" w-50 col-div mb-5 d-block m-auto">
        <p class="account-pgf">Town/City*</p>
        <input
            v-model="townBillingAddress"
            type="text"
            class="w-100 account-input"
            required
        />
        <span class="address-alert" v-show="isTownBillingAddressIncomplete">Enter a town/city</span>
      </div>
      <div class=" w-50 col-div mb-5 d-block m-auto">
        <p class="account-pgf">Postcode*</p>
        <input
            v-model="postcodeBillingAddress"
            type="number"
            class="w-100 account-input"
            required
        />
        <span class="address-alert" v-show="isPostcodeBillingAddressIncomplete">Enter a postcode</span>
      </div>
      <button @click="saveBillingAddress" class="btn btn-primary mb-5">Save</button>
    </div>
    <div v-else id="billing-address-card" class="px-5 m-auto my-4 border border-2 w-50 m-auto p-4 rounded rounded-4">
      <h5 class=" px-4 my-address">Billing address</h5>
      <div class="edit-card" @click="editBillingAddress">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil"
             viewBox="0 0 16 16">
          <path
              d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
        </svg>
      </div>
      <p class=" px-4 city-address">{{ billingAddress }}, {{ townBillingAddress }}</p>
      <p class=" px-4" id="postcode-billing">{{ postcodeBillingAddress }}</p>
    </div>


    <div class="summary-card border border-2 m-auto w-50 pt-3 px-5 rounded rounded-4">
      <div class="p-4 m-auto shipping ">
        <h4 class="mb-5 summary-title">Shipping method</h4>
        <p v-if="showShippingMethodAlert" class="shipping-method-alert">Please select a shipping method</p>
        <div><input v-model="isCheckboxStandardChecked" @click="selectShippingMethod" type="checkbox" name="example"
                    value="1"/>
          STANDARD
          <p class="shipping-method">4-5 working days <span class="shipping-price-standard">Free</span></p></div>
        <div><input v-model="isCheckboxExpressChecked" @click="selectShippingMethod" type="checkbox" name="example"
                    value="1"/>
          EXPRESS
          <span class="shipping-method">2-3 working days
          <span class="shipping-price-express"> $35.00</span></span>
        </div>
      </div>
      <div class="p-4 m-auto payment ">
        <h4 class="mb-5 summary-title">Payment method</h4>
        <p v-if="showPaymentMethodAlert" class="payment-method-alert">Please select a payment method</p>
        <div>
          <input v-model="isCheckboxAlipayChecked" @click="selectPaymentMethod" type="checkbox" name="example"
                 value="1"/>
          Alipay
          <img src="https://www.dolcegabbana.com/on/demandware.static/-/Sites/default/dw825d10fa/images/alipay.png"
               class="alipay-img"/>
          <span class="payment-method ">FREE</span>
        </div>
        <div class="my-2">
          <input v-model="isCheckboxCreditCardChecked" @click="selectPaymentMethod" type="checkbox" name="example"
                 value="1"/>
          Credit Card <img
            src="https://www.dolcegabbana.com/on/demandware.static/Sites-dolcegabbana-Site/-/default/dwb03681c3/images/master.png"
            class="first-credit-card"/>
          <img
              src="https://www.dolcegabbana.com/on/demandware.static/Sites-dolcegabbana-Site/-/default/dw14dc6ef9/images/visa.png"
              class="m-2"/>
          <img
              src="https://www.dolcegabbana.com/on/demandware.static/Sites-dolcegabbana-Site/-/default/dw26f78c16/images/maestro.png"
              class="m-2"/>
          <img
              src="https://www.dolcegabbana.com/on/demandware.static/Sites-dolcegabbana-Site/-/default/dw30c08c97/images/amex.png"
              class="m-2"/>
          <img
              src="https://www.dolcegabbana.com/on/demandware.static/Sites-dolcegabbana-Site/-/default/dw6553d119/images/discover.png"
              class="m-2"/>
          <img
              src="https://www.dolcegabbana.com/on/demandware.static/Sites-dolcegabbana-Site/-/default/dw64b12464/images/diners.png"
              class="m-2"/>
          <span class="payment-method my-2">FREE </span>
        </div>
        <div>
          <input v-model="isCheckboxAmazonPayChecked" @click="selectPaymentMethod" type="checkbox" name="example"
                 value="1"/>
          Amazon Pay<img
            src="https://www.dolcegabbana.com/on/demandware.static/-/Sites/default/dwf3851a2f/DG/AmazonPayM.png"
            class="mx-5"/>
          <span class="payment-method">FREE </span>
        </div>
      </div>
      <div class="p-4 m-auto order-summary">
        <h4 class="fw-bold mb-5 ">ORDER SUMMARY</h4>
        <p>Subtotal: ${{ subtotal }}</p>
        <p>Shipping: $ {{ shippingFinalCost }}</p>
        <div class="mb-4">
          <div v-if="!showEnterCouponCode">
            <span class="coupon-code-span" @click="addCouponCode">+ Enter coupon code</span>
          </div>
          <div v-else>
            <span class="coupon-code-span" @click="addCouponCode">- Enter coupon code</span>
            <input v-model="couponCode" class="coupon-code-input" type="text" v-on:keyup.enter='applyCouponCode'/>
            <button @click="applyCouponCode" class="coupon-code-button">Apply</button>
          </div>
          <p v-show="showCouponCodeAlert" class="coupon-code-alert">The coupon code is not valid.</p>
        </div>
        <h5 class="fw-bold py-3 border-top border-bottom">Total: ${{ cartTotalPrice }} </h5>
        <router-link to="/" class="footer-back">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-backspace"
               viewBox="0 0 16 16">
            <path
                d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"/>
            <path
                d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z"/>
          </svg>
          Back to shopping
        </router-link>
        <button class="btn btn-dark footer-checkout" @click="goToCheckout">CHECKOUT</button>
      </div>
    </div>
    <Service class="service-comp "/>
  </div>
</template>

<script>
import Service from "@/components/Service";

export default {
  name: "CheckoutPage",
  components: {Service},
  data() {
    return {
      country: '',
      city: '',
      street: '',
      number: '',
      blockStaircase: '',
      postcode: '',
      billingAddress: '',
      townBillingAddress: '',
      postcodeBillingAddress: '',
      cart: this.$store.state.user.cart,
      isLoggedIn: this.$store.state.user.isLogged,
      showEnterCouponCode: false,
      showCouponCodeAlert: false,
      showShippingMethodAlert: false,
      showPaymentMethodAlert: false,
      isCheckboxStandardChecked: false,
      isCheckboxExpressChecked: false,
      isCheckboxAlipayChecked: false,
      isCheckboxCreditCardChecked: false,
      isCheckboxAmazonPayChecked: false,

      isCountryIncomplete: false,
      isCityIncomplete: false,
      isStreetIncomplete: false,
      isNumberIncomplete: false,
      isPostcodeIncomplete: false,
      isBillingAddressIncomplete: false,
      isTownBillingAddressIncomplete: false,
      isPostcodeBillingAddressIncomplete: false,
      isBillingAddressSaved: false,
      addressIsSaved: false,
      couponCode: '',
      expressShipping: 35.00,
      subtotal: this.$store.getters.getCartTotalPrice,
    };
  },
  computed: {
    shippingFinalCost() {
      let shippingCost = 0
      if (this.isCheckboxStandardChecked) {
        shippingCost = 0
      } else if (this.isCheckboxExpressChecked) {
        shippingCost = this.expressShipping;
      }
      return shippingCost.toFixed(2)
    },
    cartTotalPrice() {
      let total;
      let price = parseFloat(this.subtotal.replace('.', ''));
      if (!this.isCheckboxStandardChecked && !this.isCheckboxExpressChecked) {
        total = price;
      } else {
        total = price + parseFloat(this.shippingFinalCost);
      }
      return total.toLocaleString('pt-BR', {maximumFractionDigits: 2})
    }
  },
  methods: {
    saveAddress() {
      this.isCountryIncomplete = this.country === "";
      this.isCityIncomplete = this.city === "";
      this.isStreetIncomplete = this.street === "";
      this.isNumberIncomplete = this.number === "";
      this.isPostcodeIncomplete = this.postcode === "";
      this.addressIsSaved = !this.isCountryIncomplete && !this.isCityIncomplete
          && !this.isStreetIncomplete && !this.isNumberIncomplete && !this.isPostcodeIncomplete;
    },
    editAddress() {
      this.addressIsSaved = false;
    },
    saveBillingAddress() {
      this.isBillingAddressIncomplete = this.billingAddress === '';
      this.isTownBillingAddressIncomplete = this.townBillingAddress === '';
      this.isPostcodeBillingAddressIncomplete = this.postcodeBillingAddress === '';
      this.isBillingAddressSaved = !this.isBillingAddressIncomplete && !this.isTownBillingAddressIncomplete && !this.isPostcodeBillingAddressIncomplete;
    },
    editBillingAddress() {
      this.isBillingAddressSaved = false;
    },
    selectShippingMethod() {
      if (this.isCheckboxStandardChecked) {
        this.isCheckboxStandardChecked = !this.isCheckboxStandardChecked;
        this.isCheckboxExpressChecked = false;
        // eslint-disable-next-line no-dupe-else-if
      } else if (this.isCheckboxExpressChecked) {
        this.isCheckboxExpressChecked = !this.isCheckboxExpressChecked;
        this.isCheckboxStandardChecked = false;
      }
    },
    selectPaymentMethod() {
      if (this.isCheckboxAlipayChecked) {
        this.isCheckboxAlipayChecked = !this.isCheckboxAlipayChecked
        this.isCheckboxCreditCardChecked = false;
        this.isCheckboxAmazonPayChecked = false;
      } else if (this.isCheckboxCreditCardChecked) {
        this.isCheckboxCreditCardChecked = !this.isCheckboxCreditCardChecked;
        this.isCheckboxAmazonPayChecked = false;
        this.isCheckboxAlipayChecked = false
      } else if (this.isCheckboxAmazonPayChecked) {
        this.isCheckboxAmazonPayChecked = !this.isCheckboxAmazonPayChecked;
        this.isCheckboxCreditCardChecked = false;
        this.isCheckboxAlipayChecked = false
      }
      // this.$store.dispatch('selectPaymentMethod', {
      //   isCheckboxAlipayChecked: this.isCheckboxAlipayChecked,
      //   isCheckboxCreditCardChecked: this.isCheckboxCreditCardChecked,
      //   isCheckboxAmazonPayChecked: this.isCheckboxAmazonPayChecked
      // })
    },
    removeProductFromCart(product) {
      this.$store.dispatch("removeProductFromCart", product);
    },
    addCouponCode() {
      this.showEnterCouponCode = !this.showEnterCouponCode
      this.showCouponCodeAlert = false;
    },
    applyCouponCode() {
      let total = this.$store.getters.getCartTotalPrice;
      if (this.couponCode === '') {
        total = this.cartTotalPrice;
      } else if (this.couponCode === 'MED') {
        total = this.cartTotalPrice - (this.cartTotalPrice * 0.1).toFixed(3);
        this.showCouponCodeAlert = false;
      } else {
        // eslint-disable-next-line no-unused-vars
        total = this.cartTotalPrice;
        this.showCouponCodeAlert = true;
      }
    },
    goToCheckout() {
      this.showShippingMethodAlert = !this.isCheckboxStandardChecked && !this.isCheckboxExpressChecked
      this.showPaymentMethodAlert = !this.isCheckboxAlipayChecked && !this.isCheckboxCreditCardChecked && !this.isCheckboxAmazonPayChecked
      if (!this.showShippingMethodAlert && !this.showPaymentMethodAlert) {
        this.$router.push('/checkout')
      }
    }
  },
};
</script>

<style scoped>
.title {
  margin-top: 7%;
  margin-bottom: 6%;
  letter-spacing: 2px;
  font-weight: 100;
}


.account-input {
  border: none;
  border-bottom: 1px solid #000000;
  outline: none;
}

.address-alert {
  color: red;
  font-size: 14px;
  float: left
}

.account-pgf {
  margin-bottom: 0;
  float: left;
  font-family: "JetBrains Mono Light", sans-serif;
}

.shipping-price-standard {
  margin-left: 70px;
}

.shipping-price-express {
  margin-left: 55px;
}

.payment-method,
.shipping-method {
  position: relative;
  float: right;
}

.shipping, .payment, .order-summary {
  width: 100%;
  display: grid;
  background-color: #ffffff;
  text-align: start;
}
.shipping, .payment {
  border-bottom: solid 1px #333;
}
.billing-address, .my-address,
#address-title, .summary-title {
  letter-spacing: 2px;
}

.coupon-code-input {
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  margin-left: 70px;
}

.coupon-code-span {
  cursor: pointer;
}

.coupon-code-alert {
  position: absolute;
  font-size: 14px;
  color: red;
  transform: translateX(118%);
}

.edit-card {
  float: right;
  display: grid;
  cursor: pointer
}

.city-address, #street-number,
#postcode, #postcode-billing {
  display: grid;
  position: absolute;
  float: left;
  font-size: 16px;
}

.city-address {
  margin-top: 40px;
}

#postcode-billing,
#street-number {
  margin-top: 65px;
}

#postcode {
  margin-top: 90px;
}

#address-form {
  height: 170px;
}

.my-address {
  float: left;

}

#billing-address-card {
  height: 150px;
}

.payment-method-alert,
.shipping-method-alert {
  position: absolute;
  font-size: 14px;
  color: red;
  transform: translateY(230%);
}

.first-credit-card {
  margin-left: 50px;
  margin-right: 8px;
}

.alipay-img {
  margin-left: 90px;

}

.coupon-code-button {
  border: none;
  border-bottom: 1px solid black;
  background-color: white;
  margin-left: 30px;
}

.coupon-code-button:hover {
  color: #6c6c6c;
}

.footer-back {
  text-decoration: none;
  color: black;
  width: max-content;
  transform: translateY(70%);
}

.footer-back:hover {
  color: #656565;
}

.footer-checkout {
  margin-left: 82%;
  width: max-content;
}

.service-comp {
  margin-top: 12%;
}

</style>
