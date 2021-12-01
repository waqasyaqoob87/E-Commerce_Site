import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex)
const state = {
  currentval: "this is value ",
  jewelery: [],
  electronics: [],
  womencloth :[],
  mencloth :[],
  allcategories: [],
  allproducts : [],
  product : [],
  allcarts : []

},

  getters = {
    allcategories: (state) => {
      return state.allcategories
    },
    jewelery: (state) => {
      return state.jewelery
    },
    electronics: (state) => {
      return state.electronics
    },
    womencloth: (state) => {
      return state.womencloth
    },
    mencloth: (state) => {
      return state.mencloth
    },
    allproducts: (state) => {
      return state.allproducts
    },
    product: (state) => {
      return state.currentval
    },
    allcarts: (state) => {
      return state.currentval
    }
  },
  actions = {
    async allcategories({ commit }) {
      const response = await axios.get(' https://fakestoreapi.com/products/categories');
      commit('setallcategories', response.data);
    },
    async allproducts({ commit }) {
      const response = await axios.get(' https://fakestoreapi.com/products');
      commit('setallproducts', response.data);
    },
    async product({ commit },payload) {
      // console.log(commit);
      const response = await axios.get(` https://fakestoreapi.com/products/${payload}`);
      commit('setproduct', response.data);
    },
    async jewelery({ commit }) {
      const response = await axios.get(' https://fakestoreapi.com/products/category/jewelery');
      commit('setjewelery', response.data);
    },
    async electronics({ commit }) {
      const response = await axios.get(" https://fakestoreapi.com/products/category/electronics");
      commit('setelectronics', response.data);
    },
      async womencloth({ commit }) {
        const response = await axios.get(" https://fakestoreapi.com/products/category/women's clothing");
        commit('setwomencloth', response.data);
      },
      async mencloth({ commit }) {
        const response = await axios.get(" https://fakestoreapi.com/products/category/men's clothing");
        commit('setmencloth', response.data);
      },
      async allcarts({ commit }) {
        const response = await axios.get(" https://fakestoreapi.com/carts");
        commit('allcarts', response.data);
      }
     
  },
  mutations = {

    setallcategories: (state, allcategories) => (state.allcategories = allcategories),
    setallproducts: (state, allproducts) => (state.allproducts = allproducts),
    setproduct: (state, product) => (state.product = product),
    setjewelery: (state, jewelery) => (state.jewelery = jewelery),
    setelectronics: (state, electronics) => (state.electronics = electronics),
    setmencloth: (state, mencloth) => (state.mencloth = mencloth),
    setwomencloth: (state, womencloth) => (state.womencloth = womencloth),
    allcarts: (state, allcarts) => (state.allcarts = allcarts),
    

  }
export default new Vuex.Store({

  state,
  getters,
  actions,
  mutations

})