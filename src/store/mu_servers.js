import mu_servers_api from '@/api/mu_servers'

const state = {
  all: [],
  mu_server: null,
}

const actions = {
  getAllMUServers({ commit }){
    mu_servers_api.getAll(mu_servers => {
      commit('recieve_mu_servers', mu_servers)
    })
  },
  async fetchMUServer({commit}, id){
    try {
      let response = await mu_servers_api.findMUServerbyId(id)
      console.log('store', response)
      commit('recieve_mu_server', response)
    } catch (error) {
      console.log(error)
    }
  },
}

const mutations = {
  recieve_mu_servers(state, mu_servers){
    state.all = mu_servers
  },
  recieve_mu_server(state, mu_server){
    state.mu_server = mu_server
  },
}

const getters = {
  allMUServers(state){
    return state.all
  },
  getCurrentMUServer(state){
    return state.mu_server
  },
}

export default {
  state,
  actions,
  mutations,
  getters
}
