<template>
  <div class="messages">
    <h4 class="display-1">Messages</h4>
    <v-list>
      <v-list-tile>
      <v-list-tile-content>
        <v-list-tile-title v-text="message"></v-list-tile-title>
      </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: ["h", "1", "something else"]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
