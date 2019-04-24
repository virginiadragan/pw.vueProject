import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      pizza : [],
      topping : [],
      showToppingWindow : false
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
            console.log(state.showToppingWindow)
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
            console.log(state.showToppingWindow)
            return state.showToppingWindow
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