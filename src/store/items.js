import items_api from '@/api/items'

const state = {
  item_list: [],
  item: {},
}

const actions = {
  fetchItems({ commit }) {
    commit('RECEIVE_ITEMS', items_api.getAll())
  },
}

const mutations = {
  RECEIVE_ITEMS(state, items) {
    state.item_list = items
  },
}

const getters = {
  getItems: state => state.item_list,
}

export default {
  state,
  actions,
  mutations,
  getters
}
