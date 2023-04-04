<template>
  <div class="checkout-page">
    <h1 class="title">Checkout</h1>
    <AddressForm :address="address" :isAddressSavedInitial="false"/>
    <BillingAddressForm :address="billingAddress" :isBillingAddressSavedInitial="false" />
    <div class="summary-card border border-2 m-auto w-50 pt-3 px-5 rounded rounded-4">
      <div class="p-4 m-auto shipping">
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
          <span class="shipping-price-express"> ${{ expressShippingPrice }} </span></span>
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
          <span class="payment-method my-2">FREE </span>
        </div>
        <div>
          <input v-model="isCheckboxAmazonPayChecked" @click="selectPaymentMethod" type="checkbox" name="example"
                 value="1"/>
          Amazon Pay
          <img
              src="https://www.dolcegabbana.com/on/demandware.static/-/Sites/default/dwf3851a2f/DG/AmazonPayM.png"
              class="mx-5"/>
          <span class="payment-method">FREE </span>
        </div>
      </div>
      <div class="p-4 m-auto order-summary text">
        <h4 class="fw-bold mb-5 ">ORDER SUMMARY</h4>
        <div v-show="couponCode === couponCodeName">
          <p class=" text-success">You saved: ${{ savedMoney }}</p>
        </div>
        <p>Subtotal:
          <span :class="{'text-decoration-line-through' : couponCode === couponCodeName}">${{ subtotal }}  </span>
          <span> {{ couponCode === couponCodeName ? subtotalAfterCouponCode : '' }}</span>
        </p>
        <div class="mb-3">
          <div v-if="!showEnterCouponCode">
            <span class="coupon-code-span" @click="enterCouponCode">+ Enter coupon code</span>
          </div>
          <div v-else>
            <span class="coupon-code-span" @click="enterCouponCode">- Enter coupon code</span>
            <input v-model="couponCode" class="coupon-code-input " type="text" v-on:keyup.enter='applyCouponCode'/>
            <button v-if="!isCouponCodeApplied" @click="applyCouponCode"
                    class="coupon-code-button">Apply
            </button>
            <button v-else class="coupon-code-button" @click="removeCoupon">Remove</button>
          </div>
          <p v-if="isCouponCodeInvalid" class="coupon-code-alert">The coupon code is not valid.</p>
        </div>
        <p>{{ isCheckboxExpressChecked ? ' Shipping: $' : 'Shipping:' }}
          <span :class="[ shippingFinalCost === 0 ? 'text-success' : 'text-dark']">
            {{ shippingFinalCost === 0 ? 'Free' : shippingFinalCost }}
          </span>
        </p>
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
        <button to="payment" class="p-1" id="footer-payment" @click="goToCheckout">Pay Now</button>
      </div>
    </div>
    <Footer class="service-comp "/>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import AddressForm from "@/components/AddressForm";
import BillingAddressForm from "@/components/BillingAddressForm";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Checkout",
  components: { BillingAddressForm, AddressForm, Footer},
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
      billingAddress: {
        address: '',
        town: '',
        postcode: '',
      },
      cart: this.$store.state.user.cart,
      isLoggedIn: this.$store.state.user.isLogged,
      isAddressSavedFormOpened2: true,
      showEnterCouponCode: false,
      isCouponCodeInvalid: false,
      showShippingMethodAlert: false,
      showPaymentMethodAlert: false,
      isCheckboxStandardChecked: false,
      isCheckboxExpressChecked: false,
      isCheckboxAlipayChecked: false,
      isCheckboxCreditCardChecked: false,
      isCheckboxAmazonPayChecked: false,

      isCouponCodeApplied: false,
      addressIsSaved: false,
      couponCode: '',
      subtotal: this.$store.getters.getCartTotalPrice,
      couponCodeName: 'MED',
    };
  },
  computed: {
    isAddressSavedFormOpened() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.isAddressSavedFormOpened2 = !this.isAddressSavedFormOpened2;
    },
    expressShippingPrice() {
      let expressShippingPrice = 35;
      return expressShippingPrice.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
      ;
    },
    shippingFinalCost() {
      let shippingCost;
      if (this.isCheckboxStandardChecked) {
        shippingCost = 0
      } else if (this.isCheckboxExpressChecked) {
        shippingCost = this.expressShippingPrice;
      }
      return shippingCost
    },
    subtotalAfterCouponCode() {
      let price = parseFloat(this.subtotal.replace('.', ''));
      let total = price - parseFloat(this.savedMoney);
      return '$' + total
    },
    savedMoney() {
      let total;
      let price = parseFloat(this.subtotal.replace('.', ''));
      total = (price - (price * 0.9)).toFixed(2)
      return total.replace('.', ',')
    },
    cartTotalPrice() {
      let total;
      let price = parseFloat(this.subtotal.replace('.', ''));
      if (this.isCheckboxStandardChecked || this.isCheckboxExpressChecked && !this.showEnterCouponCode) {
        total = price + parseFloat(this.shippingFinalCost);
      } else if (this.couponCode !== this.couponCodeName && (this.isCheckboxStandardChecked || this.isCheckboxExpressChecked)) {
        total = price + parseFloat(this.shippingFinalCost);
      } else if (this.couponCode === this.couponCodeName && (this.isCheckboxStandardChecked || this.isCheckboxExpressChecked)) {
        total = price - parseFloat(this.savedMoney) + parseFloat(this.shippingFinalCost);
      } else if ((this.couponCode === this.couponCodeName) && (!this.isCheckboxStandardChecked && !this.isCheckboxExpressChecked)) {
        total = price - parseFloat(this.savedMoney);
      } else {
        total = price
      }
      return total.toLocaleString('pt-BR', {maximumFractionDigits: 2});
      ;
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
      } else if (this.isCheckboxExpressChecked) {
        this.isCheckboxExpressChecked = !this.isCheckboxExpressChecked;
        this.isCheckboxStandardChecked = false;
      }
    },
    selectPaymentMethod() {
      // this.isCheckboxAlipayChecked = !this.isCheckboxCreditCardChecked && !this.isCheckboxAmazonPayChecked;
      // this.isCheckboxCreditCardChecked = !this.isCheckboxAlipayChecked && !this.isCheckboxAmazonPayChecked;
      // this.isCheckboxAmazonPayChecked = !this.isCheckboxAlipayChecked && !this.isCheckboxCreditCardChecked;
      if (this.isCheckboxAlipayChecked) {
        this.isCheckboxAlipayChecked = !this.isCheckboxAlipayChecked
        this.isCheckboxCreditCardChecked = false;
        this.isCheckboxAmazonPayChecked = false;
      }
      if (this.isCheckboxCreditCardChecked) {
        this.isCheckboxCreditCardChecked = !this.isCheckboxCreditCardChecked;
        this.isCheckboxAmazonPayChecked = false;
        this.isCheckboxAlipayChecked = false
      }
      if (this.isCheckboxAmazonPayChecked) {
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
    enterCouponCode() {
      this.showEnterCouponCode = !this.showEnterCouponCode
    },
    applyCouponCode() {
      let total;
      let price = parseFloat(this.subtotal.replace('.', ''));
      if (!this.showEnterCouponCode) {
        total = price
      } else if (this.showEnterCouponCode && (this.couponCode !== 'MED' && this.couponCode !== '')) {
        this.isCouponCodeInvalid = true;
        total = price
      } else {
        this.isCouponCodeInvalid = false;
        total = price - (price * 0.1)
      }
      this.isCouponCodeApplied = true;
      return total
    },
    removeCoupon() {
      this.couponCode = "";
      if (this.couponCode === "") {
        this.isCouponCodeInvalid = false;
      }
      this.isCouponCodeApplied = false;
    },
    goToCheckout() {
      this.showShippingMethodAlert = !this.isCheckboxStandardChecked && !this.isCheckboxExpressChecked
      this.showPaymentMethodAlert = !this.isCheckboxAlipayChecked && !this.isCheckboxCreditCardChecked && !this.isCheckboxAmazonPayChecked
      if (!this.showShippingMethodAlert && !this.showPaymentMethodAlert) {
        this.$router.push('/payment')
      }
    }
  },
};
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

.checkout-page {
  font-family: "Malgun Gothic Semilight";
}

.title {
  margin-top: 6%;
  margin-bottom: 6%;
  letter-spacing: 2px;
  font-weight: 100;
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
  margin-left: 80px;
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

#footer-payment {
  display: grid;
  margin-left: 80%;
  width: 20%;
  border: 1px solid black;
  text-decoration: none;
  text-align: center;
  color: #ffffff;
  background-color: #000000;
}

.service-comp {
  margin-top: 12%;
}

</style>
