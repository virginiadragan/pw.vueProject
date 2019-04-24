<template>
  <div class="navbar">
    <b-navbar toggleable="lg"  type="light" >
      <b-navbar-brand href="#">Brand</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Pizza</b-nav-item>
          <b-nav-item href="#">Sucuri</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>
<style scoped>
.navbar {
 background-image: url(../assets/bg.jpg);
 margin-bottom: 10px;
}
</style>