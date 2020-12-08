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
  },
  getByUsername(username) {
    return _user_accounts.find(user_account => user_account.username == username)
  },
  getDtoByNickname(nickname) {
    return _user_accounts_dto.find(user_account => user_account.nickname == nickname)
  },
}

const _user_accounts = [
  { "id": 1, "username": "chars", "password": "12345", "nickname": "Charspunk" },
  { "id": 2, "username": "admin", "password": "12345", "nickname": "Administrator" },
]

const _user_accounts_dto = [
  { "id": 1, "nickname": "Charspunk" },
  { "id": 2, "nickname": "Administrator" },
]
