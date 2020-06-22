<template>
  <div id="app">
       <v-card
      class="overflow-hidden"
    >
    <v-app-bar 
    absolute
    color= "indigo darken-2"
    dark
    shrink-on-scroll
    >
    <v-tool-bar-title>Welcome {{users}}</v-tool-bar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon>
        <v-icon>mdi-heart</v-icon>
    </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-app-bar>
    <v-sheet id="scrolling-techniques" class="overflow-y-auto" max-height="400">
      <v-container style="height:1080px;"></v-container>
    </v-sheet>
    </v-card>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  }, data () {
    return {
      users: ""
    }
  },
   methods: {
     async getUsers() {
        this.users = (await this.$store.dispatch("getUsers", this.$route.params.id)).data;
    
     }
  }
}
</script>

<style>

</style>
