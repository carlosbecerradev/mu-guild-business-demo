import user_accounts_api from '@/api/user_accounts'
import router from '@/router'

const state = {
  all: [],
  username: null,
}

const actions = {
  getAllUserAccounts({ commit }) {
    user_accounts_api.getAll(users_account => {
      commit('recieve_user_accounts', users_account)
    })
  },
  login({ commit }, user_account) {
    user_accounts_api.validateAccount(user_account, userAccount => {
      if (userAccount != null) {
        localStorage.setItem('username', user_account.username)
        commit('set_username', user_account.username)
        router.push('/')
        console.log('user_acounts_store', userAccount)
      }
    })
  },
  logout({commit}) {
    localStorage.removeItem('username')
    commit('set_username', null)
    router.push('/login')
  },
  isAuthenticated({commit}) {
    if(localStorage.getItem('username')){
      commit('set_username', localStorage.getItem('username'))
    }
  }
}

const mutations = {
  recieve_user_accounts(state, user_accounts) {
    state.all = user_accounts
  },
  set_username(state, payload){
    state.username = payload
  },
}

const getters = {
  allUserAccounts(state) {
    return state.all
  },
  getUsername(state){
    return state.username
  },
}

export default {
  state,
  actions,
  mutations,
  getters
}
