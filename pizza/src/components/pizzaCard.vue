<template>
  <div>
  <b-card v-for = "(onePizza, index) in pizza"
    :title="onePizza.name"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="width: 340px;"
    class="mb-2"
  >
    <b-card-text>
      <span v-for = "element in onePizza.ingredients">
        {{element}}
      </span>
     
    </b-card-text>
    <radioBtn></radioBtn>
    <b-button href="#" variant="light" v-on:click = "showToppings">Add topping</b-button>
    <b-button href="#" variant="danger">Add to car</b-button>
  </b-card>
  <toppingWindow v-if = "showWindow"> </toppingWindow>
</div>
</template>

<script>
import radioBtn from '@/components/radioSelect'
import toppingWindow from '@/components/toppingWindow'
export default {
  name: 'pizzaCard',
  components: {
      radioBtn,
      toppingWindow
  },
  computed: {
    pizza: function() {
      return this.$store.getters.getPizza
    } ,
    showWindow (){
        return this.$store.getters.getShowTW
    }
  },
  mounted () {
    this.$store.dispatch('fetchPizza').then(() => {})
  },
  methods: {
    showToppings: function(){
      this.$store.commit('setShowTW', true)
    }
  }
}
</script>
<style scoped>
.mb-2{
  display: inline-block;
  margin-left: 20px;
}
</style>