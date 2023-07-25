<template>
  <div>
    <div class="content-about">
      <h1 class=" title fw-bolder">About us</h1>
      <div class="about-text">
        <p>
          Since our founding in 2006, we at dress-for-less strive to offer our
          customers new styles at the best prices day after day.
        </p>
        <p>
          Fashion is always in focus with our selection of international labels
          and top brands, including<span class="fw-bold">
            Gucci, Valentino, Dolce & Gabbana, Versace, Alexander Mqueen and
            Dutti.
          </span>
          Every day our customers can save up to 70% on quality basics, fashion
          classics and trending styles. In addition to women’s and men’s
          clothing we also carry a large selection of shoes and accessories.
        </p>
        <p>
          The best part? Every day there are new pieces to shop in our outlet!
        </p>
        <p>
          Our technology partner EXASOL AG passionately and wholeheartedly
          assists us with improving your shopping experience. We adapt our
          choice of products to your individual needs by analysing data and
          information at an incomparable speed - 24/7.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {firebase} from "@/firebaseInit";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "About",
  mounted(){
    console.log(firebase.auth().currentUser)
  }
};
</script>

<style scoped>

li {
  text-align: start;
}

.content-about {
  margin-top: 7%;
  display: grid;
}
.title {
  padding-top: 2%;
}
.about-text {
  display: grid;
  padding-bottom: 15%;
  padding-top: 3%;
  width: 60%;
  margin:auto;
  font-size: 18px;
}
@media (max-width: 576px) {
  .about-text {
  font-size: 12px;
    width: 80%;
    padding-top: 0;
  }
  .title {
    margin-top: 22%;
    padding-bottom: 5%;
  }
}
</style>
