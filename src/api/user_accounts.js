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
  validateAccount(user_account) {
    let result
    setTimeout(
      result = _user_accounts.filter(({ username, password }) => username === user_account.username && password === user_account.password)
      , 100)
      console.log('result', result)
    if (result.length != 0) {
      let userAccount = new UserAccount(result[0].username, result[0].password)
      console.log('userAccount', userAccount)
      return userAccount
    }
    return null
  }
}
