import Vue from 'vue'
import Vuex from 'vuex'
import Product from '@/product'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    forProduct:Product,
    inCart: []
  },
  getters: {
    forProduct: state => state.forProduct,
    inCart: state => state.inCart
  },
  mutations: {
    ADD_TO_CART (state, id) {
      //@ts-ignore
      state.inCart.push(id)
    },
    REMOVE_ITEM_CART (state, index) {
      state.inCart.splice(index, 1)
    },
    INC_QUANTITY (state, index) {
      state.inCart.splice(index, 1)
    },
  },
  actions: {
      addToCart (context, id) {
        context.commit('ADD_TO_CART', id)
      },
    removeFromCart (context, id) {
      context.commit('REMOVE_ITEM_CART', id)
    },
    incQuantity(context, id) {
      context.commit('INC_QUANTITY', id)
    }
  },
  
})
