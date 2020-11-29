import Vue from 'vue'
import Vuex from 'vuex'
import user_accounts from './user_accounts'
import mu_servers from './mu_servers'
// ui helpers
import mu_server_ui from './mu_server_ui'

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
    mu_server_ui,
  }
})
