<template>
  <div class="message-confirmation-page">
    <h4 class="text">Thank you for reaching out to us! </h4>
    <h4 class="text"> Your message has been sent to our contact team.</h4>
    <h4 class="text"> We appreciate your inquiry and aim to provide you with a timely response. Our team will get back
      to you as soon as possible.</h4>
    <h4 class="text"> Thank you for your patience!</h4>
  </div>
</template>

<script>
export default {
  name: "MessageSentConfirmation"
}
</script>

<style scoped>
.message-confirmation-page {
  font-family: "Malgun Gothic Semilight", sans-serif;
  margin-top: 18%;
  position: relative;
  padding-bottom: 400px;
}

@media (max-width: 576px) {
  .text {
    font-size: 14px;
    width: 90%;
    margin: auto;
  }
  .message-confirmation-page {
    margin-top: 45%;
  }
}
</style>