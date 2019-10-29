<template>
  <div class="header">
    <div>
      <b-navbar
        class="header-navbar"
        toggleable="lg"
        type="dark"
        variant="default"
      >
        <b-navbar-brand href="#">My Portfolio</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
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
