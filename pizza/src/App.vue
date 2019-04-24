
<template>
  <div id="app">
    <Menu></Menu>
    <pizzaCard></pizzaCard>
    <router-view/>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
import pizzaCard from '@/components/pizzaCard'
export default {
  name: 'App',
  components: {
    Menu,
    pizzaCard
  }
}
</script>

<style>
body {
  background-image: url(assets/backgroung.jpg);
  background-repeat: no-repeat;
  background-size: cover; 
}
#app { 
  margin-left: 5%;
  margin-right: 5%;
}

</style>
