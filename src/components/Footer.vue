<template>
  <div class="bg bg-black w-100 footer-page">
    <div class="border border-white"></div>
    <div id="content-footer">
      <div class="contact-service mt-3 mx-4">
        <h5 class="fw-bold">Contact us</h5>
        <ul style="list-style: none">
          <li>📧 service@meduzza.com</li>
          <li>📞 +49 (0) 61 42 83 54 400</li>
          <li>📞 +49 897 400 458 40</li>
        </ul>
      </div>
      <div class="contact-service mt-3 mx-4">
        <h5 class="fw-bold">Legal notice</h5>
        <router-link to="/privacy/policy" class="nav-link link">Privacy Policy</router-link>
        <router-link to="/terms" class="nav-link link">Terms and Conditions</router-link>
        <router-link to="/cookie" class="nav-link link">Cookie Statement</router-link>
      </div>
      <div class="contact-service mt-3 mx-4">
        <h5 class="fw-bold">Service</h5>
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

.contact-service {
  display: inline-block;
  height: 200px;
  color: white;
}

.link {
  text-align: start;
}

.nav-link:hover {
  color: gray;
}

@media (max-width: 576px) {
  .footer-page, .contact-service {
    font-size: 12px;
    margin-right: 10px;
  }
}
li {
  text-align: start;
}
</style>