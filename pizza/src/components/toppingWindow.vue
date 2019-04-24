<template>
    <div class="toppingWindow">
        <ul class="additionalIngredients" v-for = "(element, index) in toppings">	
            <li>
                <div class="name">{{element.name}}</div>
                <div class="price">{{element.price}}</div>
                <span class="active">
                    <button class="minusAditionalIngredients">-</button>
                    <input type="text" class="inp" readonly value="0">
                    <button class="plusAditionalIngredients">+</button>
                </span>
            </li>			
        </ul>
        
        <label for="priceAditionalIngredients" class="abc">Pret adaos:</label>
        <span class="priceAditionalIngredients">0</span>
        <br>
        <button id="okBtn" v-on:click = "closeToppings">OK</button>
    </div>
</template>
<script>
export default {
    name: 'toppingWindow',
    computed: {
        toppings: function() {
            return this.$store.getters.getTopping
        }
    },
    mounted () {
        this.$store.dispatch('fetchTopping').then(() => {})
    },
    methods: {
        closeToppings: function(){
            this.$store.commit('setShowTW', false)
        }
    }
}
</script>
<style scoped>
.toppingWindow{
    background-color:#A9A9A9; 
    z-index: 1000000;
    display: block;
    position: fixed;
    left: 15%;
    right: 15%;
    bottom: 15%;
    top: 15%;	
    padding: 5%;
}
.inp{
	width: 26px;
	height: 26px;
	text-align: center;
	font-size: 15px;
	background-color:#A9A9A9; 
	border: 1px solid #A9A9A9; 
}
li{
	list-style-type: none;
	font-size: 15px;
   
}
div .name, .price{
	width: 35%;
	display: inline-block;
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
.abc{
	margin-left: 42%;
}
#okBtn{
	margin-left: 45%;
}

</style>