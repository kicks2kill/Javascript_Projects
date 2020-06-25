<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <!-- <Footer class=" absolute bottom-0 ml-64" /> -->
  </div>
</template>

<script>

// import Footer from './components/Footer.vue'
import Header from './components/Header.vue'


export default {
  name: 'App',
  components: {
    // Footer,
    Header,
  },
}
</script>

<style>

</style>
