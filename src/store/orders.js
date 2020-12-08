import orders_api from '@/api/orders'

const state = {
  mu_server_orders: [],
  my_mu_server_orders: [],
  current_order: {},
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
    this.dispatch('resetMUServerModal')
    this.dispatch('fetchMUServerOrdersByMuServerId', order.muServerId)
    this.dispatch('fetchMUServerOrdersByMuServerIdAndUserAccountLoggedIn', { mu_server_id: order.muServerId, user_account_nickname: order.nickname })
  },
  fetchOrder({ commit }, order_id) {
    commit('RECEIVE_ORDER', orders_api.getById(order_id))
  },
  editOrder({ getters }, order) {
    order.id = getters['getCurrentOrder'].id
    orders_api.edit(order)
    this.dispatch('resetMUServerModal')
    this.dispatch('fetchMUServerOrdersByMuServerId', getters['getCurrentMUServer'].id)
    this.dispatch('fetchMUServerOrdersByMuServerIdAndUserAccountLoggedIn', { mu_server_id: getters['getCurrentMUServer'].id, user_account_nickname: getters['getNickname'] })
  },
  deleteOrder({ getters }) {
    let order_id = getters['getCurrentOrder'].id
    orders_api.delete(order_id)
    this.dispatch('resetMUServerModal')
    this.dispatch('fetchMUServerOrdersByMuServerId', getters['getCurrentMUServer'].id)
    this.dispatch('fetchMUServerOrdersByMuServerIdAndUserAccountLoggedIn', { mu_server_id: getters['getCurrentMUServer'].id, user_account_nickname: getters['getNickname'] })
  },
}

const mutations = {
  recieve_mu_server_orders(state, mu_server_orders) {
    state.mu_server_orders = mu_server_orders
  },
  receive_my_mu_server_orders(state, my_mu_server_orders) {
    state.my_mu_server_orders = my_mu_server_orders
  },
  RECEIVE_ORDER(state, order) {
    state.current_order = order
  },
}

const getters = {
  getMUServerOrders(state) {
    return state.mu_server_orders
  },
  getMyMUServerOrders(state) {
    return state.my_mu_server_orders
  },
  getCurrentOrder: state => state.current_order,
}

export default {
  state,
  actions,
  mutations,
  getters
}
