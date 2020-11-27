import mu_servers_api from '@/api/mu_servers'

const state = {
  all: [],
}

const actions = {
  getAllMUServers({ commit }){
    mu_servers_api.getAll(mu_servers => {
      commit('recieve_mu_servers', mu_servers)
    })
  },
}

const mutations = {
  recieve_mu_servers(state, mu_servers){
    state.all = mu_servers
  }
}

const getters = {
  allMUServers(state){
    return state.all
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
