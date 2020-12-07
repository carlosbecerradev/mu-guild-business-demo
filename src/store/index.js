import Vue from 'vue'
import Vuex from 'vuex'
import user_accounts from './user_accounts'
import mu_servers from './mu_servers'
import orders from './orders'
import order_history from './order_history'
import items from './items'
import item_options from './item_options'
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
    orders,
    order_history,
    items,
    item_options,
  }
})
