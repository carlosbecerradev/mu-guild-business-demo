const state = {
  mu_server_navigation_list: ["Orders", "My Orders", "Order History"],
  mu_server_navigation_list_item_selected: null,
  mu_server_modal: {
    order: {
      new: false,
      finish: false,
      edit: false,
      delete: false,
    },
    currentName: null,
    currentAction: null,
    order_id: 0,
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
  toggleMUServerModal({ commit }, { name, action }) {
    commit('toggle_mu_server_modal')
    commit('change_mu_server_modal_name_and_action', { name, action })
  },
  setOrderId({ commit }, id) {
    commit('receive_order_id', id)
  },
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
  change_mu_server_modal_name_and_action(state, { name, action }) {
    state.mu_server_modal.currentName = name
    state.mu_server_modal.currentAction = action
    state.mu_server_modal[name][action] = !state.mu_server_modal[name][action]
  },
  receive_order_id(state, order_id) {
    state.mu_server_modal.order_id = order_id
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
