<template>
  <div class="header">
    <b-navbar class="navbar" toggleable="lg" type="dark" variant="default">
      <b-navbar-brand to="/">My portfolio</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/test1">test1</b-nav-item>
          <b-nav-item to="/test2">test2</b-nav-item>
          <b-nav-item to="/test3">test3</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.navbar {
  background-color: rgb(54, 54, 80)
}
</style>
