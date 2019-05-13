import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      pizza : [],
      topping : [],
      showToppingWindow : false,
      toppingPrice: 0,
      selectValue: 0,
      ordersList:[],
      pizzaCant:[]
    },
    mutations: {   
        setPizza (state, pizza) {
          state.pizza = pizza
        },
        setTopping (state, topping) {
          state.topping = topping
        },
        setShowTW (state, showToppingWindow){
            state.showToppingWindow = showToppingWindow
        },
        setToppingPrice(state, toppingPrice){
            state.toppingPrice = toppingPrice
        },
        setOrdersList(state, ordersList){
            state.ordersList.push(ordersList) 
        },
        setPizzaCant(state, pizzaCant){
            state.pizzaCant.push(pizzaCant) 
        },
        setPizzaCantModific(state, pizzaCant, index){
            state.pizzaCant[index] = pizzaCant
        }
    },
    getters: {
        getPizza (state) {
          return state.pizza
        },
        getTopping (state) {
          return state.topping
        },
        getShowTW (state){
            return state.showToppingWindow
        },
        getToppingPrice (state){
            return state.toppingPrice
        },
        getOrdersList(state){
            return state.ordersList
        },
        getPizzaCant(state){
            return state.pizzaCant 
        }
      
    },
    actions: {
        fetchPizza (context){
            fetch('http://localhost:3000/interface')
            .then(response => {
                return response.json()
            })
            .then(data => {
                context.commit('setPizza', data)
                console.log("json" + data)
            })
        },
        fetchTopping (context){
            fetch('http://localhost:3000/ingredient')
            .then(response => {
                return response.json()
            })
            .then(data => {
                context.commit('setTopping', data)
            })
        }
        
    }
})
export default store