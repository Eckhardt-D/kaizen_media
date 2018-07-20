<template>
  <div class="home">
    <div class="titleHolder">
      <h1>Where we develop <span>everything</span></h1>
      <b-btn to="/packages" class="btn-light mt-3">Packages</b-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  background-image: url("https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  .titleHolder {
    text-align: center;
    padding-top: 35vh;
    color: white;
    span {
      font-weight: bold;
    }
  }
}
</style>
