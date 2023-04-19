<template>
  <div><h2 id="title">My account</h2>
    <div class="border-top pt-5 w-100">
      <NavProfile class="outer-card"/>
    </div>
  </div>
</template>

<script>
import NavProfile from "@/components/NavProfile";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Orders",
  components: {NavProfile},
}
</script>

<style scoped>
#title {
  margin-top: 90px;
  margin-bottom: 90px;
  letter-spacing: 2px;
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
</style>