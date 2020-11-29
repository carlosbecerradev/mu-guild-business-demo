const _user_accounts = [
  { "username": "chars", "password": "12345" },
  { "username": "admin", "password": "12345" }
]

class UserAccount {
  constructor(username, password) {
    this.username = username
    this.password = password
  }
}

export default {
  getAll(cb) {
    setTimeout(() => cb(_user_accounts), 100)
  },
  validateAccount(user_account, cb) {
    let userAccount = new UserAccount
    userAccount = _user_accounts.find(({ username, password }) => username === user_account.username && password === user_account.password)
    setTimeout(() => cb(userAccount), 100)
    console.log('user_accounts_api', userAccount)
  }
}
