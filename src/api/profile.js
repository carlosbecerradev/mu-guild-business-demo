import user_account_api from './user_accounts'
import orders_api from './orders'
import order_history_api from './order_history'

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
  existNickname(newNickname) {
    const userAccountDto = user_account_api.getDtoByNickname(newNickname)
    return userAccountDto != null ? true : false
  },
  changeNickname(username, newNickname) {
    const userAccount = user_account_api.getByUsername(username)
    const userAccountDto = user_account_api.getDtoByNickname(userAccount.nickname)
    orders_api.getAllByUserAccountNickname(userAccount.nickname).map(order => order.user_account.nickname = newNickname)
    order_history_api.getAllByUserAccountNickname(userAccount.nickname).map(order_history_item => order_history_item.order.user_account.nickname = newNickname)
    order_history_api.getAllByGuildMateNickname(userAccount.nickname).map(order_history_item => order_history_item.guild_mate.nickname = newNickname)
    userAccount.nickname = newNickname
    userAccountDto.nickname = newNickname
  },
}
