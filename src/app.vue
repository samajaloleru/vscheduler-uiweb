<template >
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<!-- App specific objects  -->
<script type="text/javascript">
module.exports = {
  name: "app"
};
</script>

<!-- App specific stylings  -->

<style lang="scss">
// @import "assets/tachyons/tachyons.scss";
</style>


<style media="screen">
/* @import "assets/css/open-iconic.min.css"; */
@import "assets/css/bootstrap.css";
@import "assets/css/style.css";
@import "assets/css/responsive.css";

@import url("https://fonts.googleapis.com/css?family=Quicksand");
body {
  font-family: "Quicksand", sans-serif;
}
/* body {font-family: 'Titillium Web', sans-serif;} */
</style>
