import orders_api from '@/api/orders'
import router from '@/router'

const state = {
  mu_server_orders: [],
  my_mu_server_orders: [],
}

const actions = {
  fetchMUServerOrdersByMuServerId({ commit }, mu_server_id) {
    commit('recieve_mu_server_orders', orders_api.getAllByMUServerIdAndStateTrue(mu_server_id))
  },
  fetchMUServerOrdersByMuServerIdAndUserAccountLoggedIn({ commit }, { mu_server_id, user_account_nickname }) {
    commit('receive_my_mu_server_orders', orders_api.getAllByMUServerIdAndUserAccountNicknameAndStateTrue(mu_server_id, user_account_nickname))
  },
  newOrder({ getters }, order) {
    order.nickname = getters['getNickname']
    order.muServerId = getters['getCurrentMUServer'].id
    orders_api.save(order)
    this.dispatch('resetModal')
    this.dispatch('fetchMUServerOrdersByMuServerId', order.muServerId)
    this.dispatch('fetchMUServerOrdersByMuServerIdAndUserAccountLoggedIn', { mu_server_id: order.muServerId, user_account_nickname: order.nickname })
  },
}

const mutations = {
  recieve_mu_server_orders(state, mu_server_orders) {
    state.mu_server_orders = mu_server_orders
  },
  receive_my_mu_server_orders(state, my_mu_server_orders) {
    state.my_mu_server_orders = my_mu_server_orders
  },
}

const getters = {
  getMUServerOrders(state) {
    return state.mu_server_orders
  },
  getMyMUServerOrders(state) {
    return state.my_mu_server_orders
  },
}

export default {
  state,
  actions,
  mutations,
  getters
}
