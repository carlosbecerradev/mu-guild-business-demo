import user_account_api from './user_accounts'
import orders from './orders'

class OrderHistory {
  constructor(id, order, guild_mate, price, observation, created) {
    this.id = id
    this.order = order
    this.guild_mate = guild_mate
    this.price = price
    this.observation = observation
    this.created = created
  }
}

export default {
  getAllByMUServerIdAndUserAccountNickname(mu_server_id, user_account_nickname) {
    return _order_history.filter(order_history_item => order_history_item.order.mu_server.id == mu_server_id && order_history_item.order.user_account.nickname == user_account_nickname)
  },
  save(finishOrder) {
    const newFinishOrder = new OrderHistory(this.getNewId(), finishOrder.order, user_account_api.getDtoByNickname(finishOrder.guildMate), finishOrder.price, finishOrder.observation, Date.now())
    orders.finishOrder(finishOrder.order.id)
    _order_history.push(newFinishOrder)
  },
  getNewId() {
    return (_order_history[_order_history.length - 1].id + 1)
  },
}

const _order_history = [
  {
    "id": 97,
    "order": {
      "id": 97,
      "item": {
        "id": 1,
        "name": "Black Dragon Set",
        "item_category": { "id": 1, "name": "Set", "state": true },
        "state": true
      },
      "item_level": 13,
      "item_options": { "id": 1, "name": "Full Options", "state": true },
      "observation": "lorem ipsum dolor color",
      "user_account": { "id": 2, "nickname": "Administrator" },
      "mu_server": { "id": 1, "name": "MU PVP", "state": true },
      "state": false,
      "created": 1606867595276
    },
    "guild_mate": { "id": 1, "nickname": "Charspunk" },
    "price": "10k coins",
    "observation": "It wasn't free",
    "created": 1606867641618
  },
  {
    "id": 98,
    "order": {
      "id": 98,
      "item": {
        "id": 4,
        "name": "Wing of Illusion",
        "item_category": { "id": 2, "name": "Wings", "state": true },
        "state": true
      },
      "item_level": 13,
      "item_options": { "id": 1, "name": "Full Options", "state": true },
      "observation": "lorem ipsum dolor color",
      "user_account": { "id": 1, "nickname": "Charspunk" },
      "mu_server": { "id": 1, "name": "MU PVP", "state": true },
      "state": false,
      "created": 1606867595276
    },
    "guild_mate": { "id": 2, "nickname": "Administrator" },
    "price": "0",
    "observation": "It was free",
    "created": 1606867641618
  },
  {
    "id": 99,
    "order": {
      "id": 99,
      "item": {
        "id": 1,
        "name": "Black Dragon Set",
        "item_category": { "id": 1, "name": "Set", "state": true },
        "state": true
      },
      "item_level": 13,
      "item_options": { "id": 1, "name": "Full Options", "state": true },
      "observation": "lorem ipsum dolor color",
      "user_account": { "id": 2, "nickname": "Administrator" },
      "mu_server": { "id": 2, "name": "MU Titanio", "state": true },
      "state": false,
      "created": 1606867595276
    },
    "guild_mate": { "id": 1, "nickname": "Charspunk" },
    "price": "10k coins",
    "observation": "It wasn't free",
    "created": 1606867641618
  },
  {
    "id": 100,
    "order": {
      "id": 100,
      "item": {
        "id": 4,
        "name": "Wing of Illusion",
        "item_category": { "id": 2, "name": "Wings", "state": true },
        "state": true
      },
      "item_level": 13,
      "item_options": { "id": 1, "name": "Full Options", "state": true },
      "observation": "lorem ipsum dolor color",
      "user_account": { "id": 1, "nickname": "Charspunk" },
      "mu_server": { "id": 2, "name": "MU Titanio", "state": true },
      "state": false,
      "created": 1606867595276
    },
    "guild_mate": { "id": 2, "nickname": "Administrator" },
    "price": "0",
    "observation": "It was free",
    "created": 1606867641618
  },
]
