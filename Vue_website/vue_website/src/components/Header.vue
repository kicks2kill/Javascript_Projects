<template>
  <div class="row">
    <div class="col-md-12">
      <img class="home-page-icon" src="../assets/Icon-Placeholder.png"/>
      <p>Home</p>
      <p>Help</p>
      <p>Contact</p>
      <img class="user-icon" src="../assets/user.svg"/>
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
  margin-right: 48em;
  margin-top:1em;
  bottom:0;
  padding: 0;
  width: 4em;
  height: 4em;
}

.row p {
  display: inline-flex;
  flex-grow: 1;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 10px 5px;
  text-align: right;
  padding: 5px;
  color: white;
  opacity: 85%;
}

.user-icon {
  width: 2em;
  height: 2em;
  margin: 1.5em 1em -.3em 0;
}

</style>
