<template>
  <div class="container">
    <div>
      <label>Name</label>
      <input
          type="text"
          v-model="name"
          name="name"
          placeholder="Your Name"
      >
      <label>Email</label>
      <input
          type="email"
          v-model="email"
          name="email"
          placeholder="Your Email"
      >
      <p class="ms-1 alert-contact " v-show="isEmailInputEmpty">Enter your email address</p>
      <label class="mt-2">Message</label>
      <textarea
          name="message"
          v-model="message"
          cols="30" rows="5"
          placeholder="Message">
          </textarea>
      <p class="ms-1 alert-contact" v-show="isMessageTextareaEmpty">Enter a message</p>
      <button class="btn btn-dark px-4 mt-2" @click="sendEmail">Send</button>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Contact",
  data() {
    return {
      email: '',
      message: '',
      name: '',
      isEmailInputEmpty: false,
      isMessageTextareaEmpty: false,
    }
  },
  methods: {
    sendEmail() {
      try {
        this.isEmailInputEmpty = this.email === '';
        this.isMessageTextareaEmpty = this.message === '';
        if (!this.isEmailInputEmpty && !this.isMessageTextareaEmpty) {
          emailjs.send('service_20w2uzf', 'template_rcjw86l',
              {
                from_name: this.name,
                from_email: this.email,
                message: this.message
              }, '9B6JS9bqMJz1wQsZ1')
          this.$router.push('/message/sent/confirmation');
        }
      } catch (error) {
        console.log({error})
      }
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
}
</script>


<style scoped>
* {
  box-sizing: border-box;
}

.container {
  display: block;
  margin-top: 10%;
  margin-bottom: 10%;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 40%;
  height: 500px;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.alert-contact {
  color: red;
  float: left;
  margin-top: -16px;
  font-size: 14px;
  position: absolute;
}

@media (max-width: 576px) {
  .container {
    width: 90%;
    margin-top: 32%;
    font-size: 14px;
  }

  .btn {
    font-size: 14px;
  }

  .alert-contact {
    font-size: 13px;
  }
}
</style>