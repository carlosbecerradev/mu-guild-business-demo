const state = {
  mu_server_navigation_list: ["Orders", "My Orders", "Order History"],
  mu_server_navigation_list_item_selected: null,
  mu_server_modal: {
    state: false,
  },
}

const actions = {
  changeMUServerNavigationListItem({ commit }, mu_server_navigation_list_item_selected) {
    commit('change_mu_server_navigation_list_item_selected', mu_server_navigation_list_item_selected)
  },
  setInitialMUServerNavigationListItemSelected({ commit, state }) {
    commit('change_mu_server_navigation_list_item_selected', state.mu_server_navigation_list[0])
  },
  toggleMUServerModal({ commit }) {
    commit('toggle_mu_server_modal')
  }
}

const mutations = {
  set_mu_server_navigation_list(state, mu_server_navigation_list) {
    state.mu_server_navigation_list = mu_server_navigation_list
  },
  change_mu_server_navigation_list_item_selected(state, mu_server_navigation_list_item_selected) {
    state.mu_server_navigation_list_item_selected = mu_server_navigation_list_item_selected
  },
  toggle_mu_server_modal(state) {
    state.mu_server_modal.state = !state.mu_server_modal.state
  },
}

const getters = {
  getMUServerNavigationList(state) {
    return state.mu_server_navigation_list
  },
  getMUServerNavigationListItemSelected(state) {
    return state.mu_server_navigation_list_item_selected
  },
  getMUServerModal(state) {
    return state.mu_server_modal
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
