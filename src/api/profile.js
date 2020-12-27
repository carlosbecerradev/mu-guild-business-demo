import user_account_api from './user_accounts'

class Profile {
  constructor(id, username, nickname) {
    this.id = id
    this.username = username
    this.nickname = nickname
  }
}

export default {
  getProfile(username) {
    const userAccount = user_account_api.getByUsername(username)
    const profile = new Profile(userAccount.id, userAccount.username, userAccount.nickname)
    return profile
  },
}
