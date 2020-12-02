import order_history_api from '@/api/order_history'

const state = {
  my_mu_server_order_history: [],
}

const actions = {
  fetchMyMUServerOrderHistoryByMuServerIdAndUserAccountLoggedIn({ commit }, { mu_server_id, user_account_nickname }) {
    commit('receive_my_mu_server_order_history', order_history_api.getAllByMUServerIdAndUserAccountNickname(mu_server_id, user_account_nickname))
  }
}

const mutations = {
  receive_my_mu_server_order_history(state, my_mu_server_order_history) {
    state.my_mu_server_order_history = my_mu_server_order_history
  },

}

const getters = {
  getMyMUServerOrderHistory(state) {
    return state.my_mu_server_order_history
  },
}

export default {
  state,
  actions,
  mutations,
  getters
}
