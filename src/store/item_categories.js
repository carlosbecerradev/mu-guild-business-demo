import item_categories_api from '@/api/item_categories'

const state = {
  item_categories_list: [],
}

const actions = {
  fetchItemCategories({ commit }) {
    commit('RECEIVE_ITEM_CATEGORIES', item_categories_api.getAll())
  },
}

const mutations = {
  RECEIVE_ITEM_CATEGORIES(state, item_categories) {
    state.item_categories_list = item_categories
  },
}

const getters = {
  getItemCategories: state => state.item_categories_list,
}

export default {
  state,
  actions,
  mutations,
  getters
}
