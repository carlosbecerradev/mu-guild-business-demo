import Vue from 'vue'
import Vuex from 'vuex'
import user_accounts from './user_accounts'
import mu_servers from './mu_servers'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user_accounts,
    mu_servers,
  }
})
