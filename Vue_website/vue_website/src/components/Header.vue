<template>
  <div class="row">
    <div class="col-md-12">
      <img class="home-page-icon" src="../assets/Icon-Placeholder.png"/>
      <p>Home</p>
      <p>Help</p>
      <p>Contact</p>
      <!-- <img class="user-icon" src="../assets/user.svg"/> -->
    </div>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  background-color:#3C4F76;
  display: flex;
  justify-content: flex-end;
  order: 3;
  width:100%;
}

 .home-page-icon {
  margin-right: 45em;
  padding-top: 1em;
  bottom:0;
  width: 3.5em;
  height: 3.5em;
}

.row p {
  display: inline-flex;
  flex-grow: 1;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 5px 5px;
  text-align: right;
  padding: 10px;
  color: white;
  opacity: 85%;
  vertical-align: .5em;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.user-icon {
  padding-right: 1em;
  width: 2em;
  height: 2em;
}

</style>
