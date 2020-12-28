import profile_api from '@/api/profile'
import Vue from 'vue'

const state = {
  profile: {},
  new_nickname: "",
}

const actions = {
  fetchProfile({ commit }) {
    const username = localStorage.getItem('username')
    commit('RECEIVE_PROFILE', profile_api.getProfile(username))
  },
  validNickname({ commit }, newNickname) {
    if (newNickname == "" || newNickname.length < 1) {
      return
    }
    if (newNickname.length < 16) {
      if (!profile_api.existNickname(newNickname)) {
        commit('SET_NICKNAME', newNickname)
      } else {
        commit('SET_NICKNAME', "")
        Vue.noty.warning("This nickname already exist!")
      }
    } else {
      commit('SET_NICKNAME', "")
      Vue.noty.warning("The nickname must not be longer than 16 characters")
    }
  },
  changeUserAccountNickname({ commit, state }) {
    if (state.new_nickname != "") {
      profile_api.changeNickname(localStorage.getItem('username'), state.new_nickname)
      Vue.noty.success("Your nickname was changed")
      this.dispatch('isAuthenticated')
    }
    this.dispatch('fetchProfile')
    commit('SET_NICKNAME', "")
  },
}

const mutations = {
  RECEIVE_PROFILE(state, profile) {
    state.profile = profile
  },
  SET_NICKNAME(state, newNickname) {
    state.new_nickname = newNickname
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
