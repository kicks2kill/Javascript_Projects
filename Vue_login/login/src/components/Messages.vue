<template>
  <div class="messages">
    <h4>Mesages</h4>
    <ul v-for="message in messages">
      <li>{{message}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: ["h", "1"]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
