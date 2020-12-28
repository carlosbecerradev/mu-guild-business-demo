import profile_api from '@/api/profile'

const state = {
  profile: {},
}

const actions = {
  fetchProfile({ commit }) {
    const username = localStorage.getItem('username')
    commit('RECEIVE_PROFILE', profile_api.getProfile(username))
  },
}

const mutations = {
  RECEIVE_PROFILE(state, profile) {
    state.profile = profile
  },
}

const getters = {
  getProfile: state => state.profile,
}

export default {
  state,
  actions,
  mutations,
  getters
}
