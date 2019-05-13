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
    <div  id="emptyCar">
			<img style="margin-left:15px" src="../assets/car.png">
			<label for="totalPriceEmpty" class="abc">Total:</label>
			<span id="totalPriceEmpty">0</span>
			<button id="makeOrderbtn" type="button" >Comanda</button>
      <div id = "fullCar1" v-for = "(order, index) in ordersList">
        <span>{{order.name}}</span> 
        <button type="button" class="close" v-on:click="deleteOrder(index)" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <br>    
        <span class="active">
          <button class="minusAditionalIngredients" v-on:click = "remove(index)">-</button>
          <input type="text" class="inp" v-model = "pizzaCant[index]">
          <button class="plusAditionalIngredients" v-on:click = "add(index)">+</button>
        </span> 
        <span>pret: {{order.price}} lei</span>
      </div>
		</div>
      
  </div>
</template>

<script>
export default {
  name: 'Menu',
  computed:{
    ordersList: function(){
      return this.$store.getters.getOrdersList
    },
    pizzaCant: function(){
      return this.$store.getters.getPizzaCant
    }
  },
  methods: {
    add: function(index){
      this.pizzaCant[index] += 1
      console.log(this.pizzaCant)
    },
    remove: function(index){
      if(this.pizzaCant[index]== 1)
        this.pizzaCant[index] = 1
      else{
        this.pizzaCant[index]-- 
      }        
    },
    deleteOrder(index){
      this.ordersList.splice(index,1)
    }
  }
}

</script>
<style scoped>
.navbar {
 background-image: url(../assets/bg.jpg);
 margin-bottom: 10px;
}
#emptyCar{
  padding-top: 15px;
	background-color:#A9A9A9; 
	width: 250px;
	height: 80px;
	font-size: 15px;
	position: absolute;
	z-index: 1000000;
	right: 1%;
	top: 0.2%;
}
button .minusAditionalIngredients, .plusAditionalIngredients{
	background-color:#A9A9A9;
	border: 1px solid #A9A9A9; 
	font-size: 20px;
}
button .plusAditionalIngredients, .minusAditionalIngredients{
	background-color:#A9A9A9;
	border: 1px solid #A9A9A9; 
	font-size: 27px;
}
.inp{
	width: 26px;
	height: 26px;
	text-align: center;
	font-size: 15px;
	background-color:#A9A9A9; 
	border: 1px solid #A9A9A9; 
}
#fullCar1{
	z-index: 10;
	background-color:#A9A9A9; 
	width: 250px;
	height: 70px;
	font-size: 15px;
	position: relative;
	display: block;
	padding-left: 7px;
	padding-right: 7px;
	margin-right: 1%;
}
</style>