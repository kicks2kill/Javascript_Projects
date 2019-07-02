<template>
  <div id="container">
    <div id="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters and Mixins</h1>
        <p>{{ text | toUppercase}}</p>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      text: 'Hello There!'
    }
  },
  filters: {
    toUppercase(value){
      return value.toUpperCase();
    }
  }
}
</script>

<style>

</style>
