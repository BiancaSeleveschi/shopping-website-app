<template>
  <div>
    <div class="content">
      <h1 class="p-5 fw-bolder about-title">About us</h1>
      <div class="about-text">
        <p class="mt-4 fs-5">
          Since our founding in 2006, we at dress-for-less strive to offer our
          customers new styles at the best prices day after day.
        </p>
        <p class="fs-5">
          Fashion is always in focus with our selection of international labels
          and top brands, including<span class="fw-bold">
            Gucci, Valentino, Dolce & Gabbana, Versace, Alexander Mqueen and
            Dutti.
          </span>
          Every day our customers can save up to 70% on quality basics, fashion
          classics and trending styles. In addition to women’s and men’s
          clothing we also carry a large selection of shoes and accessories.
        </p>
        <p class="fs-5">
          The best part? Every day there are new pieces to shop in our outlet!
        </p>
        <p class="fs-5">
          Our technology partner EXASOL AG passionately and wholeheartedly
          assists us with improving your shopping experience. We adapt our
          choice of products to your individual needs by analysing data and
          information at an incomparable speed - 24/7.
        </p>
      </div>

      <div class="border border-dark"></div>
      <div class="mt-3 bottom-content">
        <div class="contact-service">
          <h5 class="fw-semibold">Contact us</h5>
          <ul style="list-style: none">
            <li>📧 service@meduzza.com</li>
            <li>📞 +49 (0) 61 42 83 54 400</li>
            <li>📞 +49 897 400 458 40</li>
          </ul>
        </div>
        <div class="contact-service">
          <h5 class="fw-semibold">Legale notice</h5>
          <router-link to="/privacy/policy" class="nav-link link"
            >Privacy Policy</router-link
          >
          <router-link to="/terms" class="nav-link link"
            >Terms and Conditions</router-link
          >
          <router-link to="/cookie" class="nav-link link"
            >Cookie Statement</router-link
          >
        </div>
        <div class="contact-service">
          <router-link to="/service" class="nav-link">
            <h5 class="fw-semibold">Service</h5>
          </router-link>
          <ol>
            <li>Delivery</li>
            <li>Payment methods</li>
            <li>Return</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style scoped>
.content {
  position: absolute;
  display: grid;
  top: 65%;
}
.about-text {
  margin-bottom: 160px;
  margin-left: 300px;
  margin-right: 300px;
}
.border {
  width: 700px;
  margin-left: 500px;
  margin-right: 500px;
}
.contact-service {
  display: inline-block;
  margin-left: 50px;
  margin-right: 50px;
  height: 200px;
}
.link {
  text-align: start;
}
.nav-link:hover {
  color: gray;
}
li {
  text-align: start;
}
</style>
