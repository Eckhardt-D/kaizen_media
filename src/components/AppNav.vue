<template>
    <b-navbar class="transparent-nav" toggleable="md" type="dark" variant="info">
    <b-navbar-brand to="/"><img height="40px" src="../assets/kaizenmedia.png" alt="Kaizen Media"></b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item to="/portfolio">Portfolio</b-nav-item>
            <b-nav-item to="/contact">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>
export default {
  name: "AppNav"
};
</script>

<style lang="scss" scoped>
.transparent-nav {
  z-index: 10;
  background: rgba(0,0,0,0.5) !important;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
</style>
