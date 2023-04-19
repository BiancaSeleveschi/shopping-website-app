<template>
  <div class="cards-page">
    <h2 id="title">My account</h2>
    <div class="border-top pt-5 w-100">
      <NavProfile class="outer-card"/>
    </div>
    <div class="d-inline-bloc bg-secondary bg-opacity-10 cards">
      <div v-if="noCardSaved && !showCardDetails">
        <img src="https://www.fashiondays.ro/images/cardLogos/IconNoCards.svg"
             class="m-auto py-5"/>
        <h5 class="mb-5">Your list of cards is empty</h5>
      </div>

      <div v-if="!noCardSaved">
        <h2 class="m-auto bg-white mx-5 p-3 my-5">Your cards</h2>
        <div v-for="(card, index) in cards" :key="index"
             class="bg-secondary bg-opacity-75 text-black rounded rounded-2 p-3 my-3 m-auto " id="card-div">
          <h5 class=" pt-2">{{ card.cardholderName }}</h5>
          <div class="d-block bg-secondary bg-opacity-25 px-1 ms-3 pt-2 w-75 card-content">
            <span>CARD NUMBER</span>
            <p> **** **** **** {{ card.cardNumber.slice(-4) }}</p>
          </div>
          <div class="d-inline-block bg-secondary bg-opacity-25 px-1 me-3 w-75 card-content">
            <span>EXPIRATION DATE</span>
            <p>{{ card.month }}/{{ card.year }}</p>
          </div>
          <div class="d-inline-block  bg-secondary bg-opacity-25 px-2 me-2 card-content">
            <span>CVV</span>
            <p class="ms-1">***</p>
          </div>
          <button @click="removeCard(index)" class="btn btn-danger my-1">Remove</button>
        </div>
      </div>
      <div v-if="showCardDetails">
        <CardDetails :isDisposableCard="false" @closeCardDetails="closeCardDetails"/>
      </div>
      <button v-show="!showCardDetails" @click="addNewCard"
              class="btn btn-dark m-auto my-5 p-2 px-3 card-button"> Add New Card
      </button>
    </div>
  </div>
</template>

<script>
import CardDetails from "@/components/CardDetails";
import NavProfile from "@/components/NavProfile";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Cards",
  components: {NavProfile, CardDetails},
  data() {
    return {
      cards: this.$store.state.user.cards,
      cardIndex: -1,
      showCardDetails: false,
    }
  },
  computed: {
    noCardSaved() {
      return this.$store.getters.getUserCardCount === 0;
    },
  },
  methods: {
    addNewCard() {
      this.showCardDetails = !this.showCardDetails
    },
    removeCard(index) {
      this.$store.dispatch('removeCard', index);
    },
    closeCardDetails() {
      this.showCardDetails = false;
    }
  },
}
</script>

<style scoped>

#title {
  font-family: "Malgun Gothic Semilight", sans-serif;
  margin-top: 90px;
  margin-bottom: 90px;
  letter-spacing: 2px;
}

#card-div {
  width: 470px;
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

.card-button {
  width: 170px;
  border-radius: 0;
}

.cards-page {
  margin-bottom: 200px;
}

.card-content {
  font-size: 18px;
  text-align: start;
  position: relative;
  display: flex;
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

.cards {
  display: grid;
  width: 65%;
  height: max-content;
  padding-bottom: 5%;
  margin-right: 60px;
  margin-bottom: 100px;
  border: 1px solid grey;
  float: right;
}
</style>