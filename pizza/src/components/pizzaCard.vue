<template>
  <div>
    <b-card v-for = "(onePizza, index) in pizza"
      :title="onePizza.name"
      :img-src="require('../'+onePizza.image)"
      img-alt="Image"
      img-top
      tag="article"
      style="width: 340px;"
      class="mb-2"
    >
    <b-card-text class="pizzaIngredients">
      <span v-for = "(element, index) in onePizza.ingredients">
        {{element}}
      </span>
     
    </b-card-text>
            <b-form-group label="Marime:">
            <b-form-radio-group
            v-model="selected"
            v-on:change="calcPrice(index)"
            :options="optionsM"
            name="radio-inline"
            ></b-form-radio-group>
        </b-form-group>
        <b-form-group label="Forma:">
            <b-form-radio-group
            v-model="selected1"
            :options="optionsF"
            name="radio-inline"
            ></b-form-radio-group>
        </b-form-group>
        <b-form-group label="Tipul:">
            <b-form-radio-group
            :options="optionsT"
            name="radio-inline"
            ></b-form-radio-group>
        </b-form-group>
        Total price:<span class="pricePizza">{{price[index]}}</span>
    <br>
    <b-button href="#" variant="light" v-on:click = "showToppings()">Add topping</b-button>
    <b-button href="#" variant="danger" v-on:click = "addNewOrder(onePizza.name, index)">Add to car</b-button>
  </b-card>
  <toppingWindow v-if = "showWindow"> </toppingWindow>
</div>
</template>

<script>
import radioBtn from '@/components/radioSelect'
import toppingWindow from '@/components/toppingWindow'
export default {
  name: 'pizzaCard',
  data() {
    return {
      price:[0,0,0,0,0,0,0,0,0],
      selected: 0,
      selected1: 'Rotund',
      optionsM: [
        { text: 'S', value: 65 },
        { text: 'L', value: 85 },
        { text: 'XL', value: 100 }
      ],
      optionsF: [
        { text: 'Rotund', value: 'Rotund'},
        { text: 'Oval', value: 'Oval' }
      ],
      optionsT: [
        { text: 'Subtire'},
        { text: 'Gros' }
      ]
    }
  },
  components: {
      toppingWindow,
      radioBtn
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
    },
    calcPrice: function(index){
      this.price[index] = this.selected + this.$store.getters.getToppingPrice
      console.log(this.price)
    },
    addNewOrder: function(pizzaName, index){
      this.$store.commit('setOrdersList', {name:pizzaName, price:this.price[index]})
      this.$store.commit('setPizzaCant', 1)
    }
  },
  created(){

  }
}
</script>
<style scoped>
.mb-2{
  display: inline-block;
  margin-left: 10px;
  width: 365px !important;
}
.pizzaIngredients{
  width: 340px;
}
</style>