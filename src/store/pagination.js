const state = {
  pagination: {
    data: [],
    currentPage: 0,
    elementsPerPage: 5,
    page: [],
  },
}

const actions = {
  createPage({ state }) {
    state.pagination.page = state.pagination.data.slice(
      state.pagination.currentPage * state.pagination.elementsPerPage,
      state.pagination.currentPage * state.pagination.elementsPerPage + state.pagination.elementsPerPage
    );

    // if we have 0 visible todos, go back a page
    if (state.pagination.page.length == 0 && state.pagination.currentPage > 0) {
      this.dispatch('updatePage', state.pagination.currentPage - 1)
    }
  },
  updatePage({ state }, pageNumber) {
    state.pagination.currentPage = pageNumber;
    this.dispatch('createPage')
  },
}

const mutations = {
  UPDATE_DATA(state, new_data) {
    state.pagination.data = new_data
  },
}

const getters = {
  getPagination: state => state.pagination,
}

export default {
  state,
  actions,
  mutations,
  getters
}
