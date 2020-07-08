import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import 'bulma/css/bulma.css';

Vue.config.productionTip = false

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cart: []
  },

  mutations: {
    addToCart(state, item) {
      state.cart.push(item);
    },

    removeFromCart(state, itemCode) {
      let index = -1;
      for(let i = 0; i < state.cart.length; i++) {
        const item = state.cart[i];
        if(item.itemCode === itemCode) {
          index = i;
          break;
        }
      }

      state.cart = state.cart.splice(index);
    },

    emptyCart(state) {
      state.cart = [];
    }
  }
});

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
