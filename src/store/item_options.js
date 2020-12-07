import item_options__api from '@/api/item_options'

const state = {
  item_options_list: [],
  item_options: {},
}

const actions = {
  fetchAllItemOptions({ commit }) {
    commit('RECEIVE_ITEMS_OPTIONS', item_options__api.getAll())
  }
}

const mutations = {
  RECEIVE_ITEMS_OPTIONS(state, all_item_options) {
    state.item_options_list = all_item_options
  },
}

const getters = {
  getItemOptionsList: state => state.item_options_list,
}

export default {
  state,
  actions,
  mutations,
  getters
}
