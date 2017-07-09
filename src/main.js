// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import mint from '@/library/mint'

Vue.config.productionTip = false

import UtilJS from './assets/js/util.js'

Vue.prototype.util=UtilJS


Vue.use(VueAxios, axios)

Vue.use(Vuex)

const store= new Vuex.Store({
  state: {
    banner: [],
    showList: [],
    recommendList: [],
    skinColor: localStorage.skinColor || 'fd4c5d',
    searchbarShow: false
  },
  mutations: {
    changeColor(state,color) {
      state.skinColor= color;
    }
  },
  actions: {

  }
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

