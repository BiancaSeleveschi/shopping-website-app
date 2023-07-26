<template>
  <div class="bg bg-black w-100 footer-page">
    <div class="border border-white"></div>
    <div id="content-footer">
      <div class="contact-service-div">
        <h5 class="fw-bold contact-service-title contact-title">Contact us</h5>
        <ul style="list-style: none">
          <li>📧 service@meduzza.com</li>
          <li>📞 +49 (0) 61 42 83 54 400</li>
          <li>📞 +49 897 400 458 40</li>
        </ul>
      </div>
      <div class="contact-service-div">
        <h5 class="fw-bold contact-service-title">Legal notice</h5>
        <router-link to="/privacy/policy" class="nav-link link">Privacy Policy</router-link>
        <router-link to="/terms" class="nav-link link">Terms and Conditions</router-link>
        <router-link to="/cookie" class="nav-link link">Cookie Statement</router-link>
      </div>
      <div class="contact-service-div">
        <h5 class="fw-bold contact-service-title">Service</h5>
        <ol>
          <li>
            <router-link to="/service" class="nav-link link">Delivery</router-link>
          </li>
          <li>
            <router-link to="/service" class="nav-link link">Payment methods</router-link>
          </li>
          <li>
            <router-link to="/service" class="nav-link link">Return</router-link>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
}
</script>

<style scoped>
#content-footer {
  display: flow;
  position: relative;
}

.contact-service-div {
  display: inline-block;
  padding: 40px;
  color: white;
}

.link {
  text-align: start;
}

li {
  text-align: start;

}

.nav-link:hover {
  color: gray;
}

@media (max-width: 576px) {
  .contact-service-div {
    font-size: 12px;
    float: left;
    text-align: left;
    width: 100%;
    padding: 7px;
    display: block;
    margin-left: 15px;
  }

  .contact-title {
    margin-top: 15px;
  }

  li {
    margin-left: -20px;
  }

  .contact-service-title {
    font-size: 14px;
  }
}
</style>