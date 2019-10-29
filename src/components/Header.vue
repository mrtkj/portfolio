<template>
  <div class="header">
    <b-navbar
      class="header-navbar"
      toggleable="lg"
      type="dark"
      variant="default"
    >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" class="w-100" is-nav>
        <b-navbar-nav :align="'center'" class="w-100">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/about">Skills</b-nav-item>
          <b-nav-item to="/about">Works</b-nav-item>
          <b-nav-item to="/about">Portfolio</b-nav-item>
          <b-nav-item to="/about">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header-navbar {
  background-color: rgb(51, 47, 71);
}
</style>
