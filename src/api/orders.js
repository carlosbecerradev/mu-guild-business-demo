import user_account_api from './user_accounts'
import mu_servers_api from './mu_servers'

class Order {
  constructor(id, item, item_level, item_options, observation, user_account, mu_server, state, created) {
    this.id = id
    this.item = item
    this.item_level = item_level
    this.item_options = item_options
    this.observation = observation
    this.user_account = user_account
    this.state = state
    this.created = created
    this.mu_server = mu_server
  }
}

export default {
  getAllByMUServerIdAndStateTrue(mu_server_id) {
    return _orders.filter(order => order.mu_server.id == mu_server_id && order.state == true).sort((a, b) => a - b)
  },
  getAllByMUServerIdAndUserAccountNicknameAndStateTrue(mu_server_id, user_account_nickname) {
    return _orders.filter(order => order.mu_server.id == mu_server_id && order.user_account.nickname == user_account_nickname && order.state == true).sort((a, b) => a - b)
  },
  save(order) {
    const newOrder = new Order(this.getNewId(), order.item, order.itemLevel, order.itemOptions, order.observation, user_account_api.getDtoByNickname(order.nickname), mu_servers_api.getDtoById(order.muServerId), true, Date.now())
    _orders.push(newOrder)
  },
  getNewId() {
    return (_orders[_orders.length - 1].id + 1)
  },
  getById(id) {
    return _orders.find(order => order.id == id)
  },
  edit(order) {
    let _order = new Order
    _order = this.getById(order.id)
    _order.item = order.item
    _order.item_level = order.itemLevel
    _order.item_options = order.itemOptions
    _order.observation = order.observation
  },
  delete(order_id) {
    _orders.splice(_orders.findIndex(order => order.id == order_id), 1)
  },
  finishOrder(order_id) {
    this.getById(order_id).state = false
  },
}

const _orders = [
  {
    "id": 1,
    "item": {
      "id": 1,
      "name": "Black Dragon Set",
      "item_category": {
        "id": 1,
        "name": "Set",
        "state": true
      },
      "state": true
    },
    "item_level": 13,
    "item_options": { "id": 1, "name": "Full Options", "state": true },
    "observation": "lorem ipsum dolor color",
    "user_account": {
      "id": 2,
      "nickname": "Administrator"
    },
    "mu_server": { "id": 1, "name": "MU PVP", "state": true },
    "state": true,
    "created": Date.now()
  },
  {
    "id": 2, "item": { "id": 1, "name": "Black Dragon Set", "item_category": { "id": 1, "name": "Set", "state": true }, "state": true }
    , "item_level": 0, "item_options": { "id": 2, "name": "Semi Full Options", "state": true }, "observation": null
    , "user_account": { "id": 2, "nickname": "Administrator" }
    , "mu_server": { "id": 1, "name": "MU PVP", "state": true }, "state": true, "created": Date.now()
  },
  {
    "id": 3, "item": { "id": 2, "name": "Dark Soul Set", "item_category": { "id": 1, "name": "Set", "state": true }, "state": true }
    , "item_level": 13, "item_options": { "id": 1, "name": "Full Options", "state": true }, "observation": null
    , "user_account": { "id": 2, "nickname": "Administrator" }
    , "mu_server": { "id": 1, "name": "MU PVP", "state": true }, "state": true, "created": Date.now()
  },
  {
    "id": 4, "item": { "id": 2, "name": "Dark Soul Set", "item_category": { "id": 1, "name": "Set", "state": true }, "state": true }
    , "item_level": 0, "item_options": { "id": 2, "name": "Semi Full Options", "state": true }, "observation": null
    , "user_account": { "id": 1, "nickname": "Charspunk" }
    , "mu_server": { "id": 1, "name": "MU PVP", "state": true }, "state": true, "created": Date.now()
  },
  {
    "id": 5, "item": { "id": 3, "name": "Red Spirit Set", "item_category": { "id": 1, "name": "Set", "state": true }, "state": true }
    , "item_level": 13, "item_options": { "id": 1, "name": "Full Options", "state": true }, "observation": null
    , "user_account": { "id": 1, "nickname": "Charspunk" }
    , "mu_server": { "id": 1, "name": "MU PVP", "state": true }, "state": true, "created": Date.now()
  },
  {
    "id": 6, "item": { "id": 3, "name": "Red Spirit Set", "item_category": { "id": 1, "name": "Set", "state": true }, "state": true }
    , "item_level": 0, "item_options": { "id": 2, "name": "Semi Full Options", "state": true }, "observation": null
    , "user_account": { "id": 1, "nickname": "Charspunk" }
    , "mu_server": { "id": 1, "name": "MU PVP", "state": true }, "state": true, "created": Date.now()
  },
  {
    "id": 7, "item": { "id": 4, "name": "Wing of Illusion", "item_category": { "id": 2, "name": "Wings", "state": true }, "state": true }
    , "item_level": 13, "item_options": { "id": 1, "name": "Full Options", "state": true }, "observation": null
    , "user_account": { "id": 2, "nickname": "Administrator" }
    , "mu_server": { "id": 1, "name": "MU PVP", "state": true }, "state": true, "created": Date.now()
  },
  {
    "id": 8, "item": { "id": 4, "name": "Wing of Illusion", "item_category": { "id": 2, "name": "Wings", "state": true }, "state": true }
    , "item_level": 0, "item_options": { "id": 2, "name": "Semi Full Options", "state": true }, "observation": null
    , "user_account": { "id": 2, "nickname": "Administrator" }
    , "mu_server": { "id": 1, "name": "MU PVP", "state": true }, "state": true, "created": Date.now()
  },
  {
    "id": 9, "item": { "id": 5, "name": "Wing of Dimension", "item_category": { "id": 2, "name": "Wings", "state": true }, "state": true }
    , "item_level": 0, "item_options": { "id": 2, "name": "Semi Full Options", "state": true }, "observation": null
    , "user_account": { "id": 1, "nickname": "Charspunk" }
    , "mu_server": { "id": 1, "name": "MU PVP", "state": true }, "state": true, "created": Date.now()
  },
  {
    "id": 10, "item": { "id": 5, "name": "Wing of Dimension", "item_category": { "id": 2, "name": "Wings", "state": true }, "state": true }
    , "item_level": 13, "item_options": { "id": 1, "name": "Full Options", "state": true }, "observation": null
    , "user_account": { "id": 2, "nickname": "Administrator" }
    , "mu_server": { "id": 1, "name": "MU PVP", "state": true }, "state": true, "created": Date.now()
  },
  {
    "id": 11, "item": { "id": 6, "name": "Wing of Eternal", "item_category": { "id": 2, "name": "Wings", "state": true }, "state": true }
    , "item_level": 13, "item_options": { "id": 1, "name": "Full Options", "state": true }, "observation": null
    , "user_account": { "id": 2, "nickname": "Administrator" }
    , "mu_server": { "id": 1, "name": "MU PVP", "state": true }, "state": true, "created": Date.now()
  },
  {
    "id": 12, "item": { "id": 6, "name": "Wing of Eternal", "item_category": { "id": 2, "name": "Wings", "state": true }, "state": true }
    , "item_level": 0, "item_options": { "id": 2, "name": "Semi Full Options", "state": true }, "observation": null
    , "user_account": { "id": 1, "nickname": "Charspunk" }
    , "mu_server": { "id": 2, "name": "MU Titanio", "state": true }, "state": true, "created": Date.now()
  },
  {
    "id": 13, "item": { "id": 7, "name": "Vicious Dragon Set", "item_category": { "id": 3, "name": "Set Ancient", "state": true }, "state": true }
    , "item_level": 0, "item_options": { "id": 2, "name": "Semi Full Options", "state": true }, "observation": null
    , "user_account": { "id": 1, "nickname": "Charspunk" }
    , "mu_server": { "id": 1, "name": "MU PVP", "state": true }, "state": true, "created": Date.now()
  },
  {
    "id": 14, "item": { "id": 7, "name": "Vicious Dragon Set", "item_category": { "id": 3, "name": "Set Ancient", "state": true }, "state": true }
    , "item_level": 13, "item_options": { "id": 3, "name": "+Luck", "state": true }, "observation": null
    , "user_account": { "id": 2, "nickname": "Administrator" }
    , "mu_server": { "id": 1, "name": "MU PVP", "state": true }, "state": true, "created": Date.now()
  },
  {
    "id": 15, "item": { "id": 8, "name": "Aruane Guardian Set", "item_category": { "id": 3, "name": "Set Ancient", "state": true }, "state": true }
    , "item_level": 0, "item_options": { "id": 2, "name": "Semi Full Options", "state": true }, "observation": null
    , "user_account": { "id": 1, "nickname": "Charspunk" }
    , "mu_server": { "id": 1, "name": "MU PVP", "state": true }, "state": true, "created": Date.now()
  },
  {
    "id": 16, "item": { "id": 8, "name": "Aruane Guardian Set", "item_category": { "id": 3, "name": "Set Ancient", "state": true }, "state": true }
    , "item_level": 13, "item_options": { "id": 3, "name": "+Luck", "state": true }, "observation": null
    , "user_account": { "id": 2, "nickname": "Administrator" }
    , "mu_server": { "id": 1, "name": "MU PVP", "state": true }, "state": true, "created": Date.now()
  },
  {
    "id": 17, "item": { "id": 9, "name": "Muren Storm Crow Set", "item_category": { "id": 3, "name": "Set Ancient", "state": true }, "state": true }
    , "item_level": 13, "item_options": { "id": 2, "name": "Semi Full Options", "state": true }, "observation": null
    , "user_account": { "id": 2, "nickname": "Administrator" }
    , "mu_server": { "id": 1, "name": "MU PVP", "state": true }, "state": true, "created": Date.now()
  },
  {
    "id": 18, "item": { "id": 9, "name": "Muren Storm Crow Set", "item_category": { "id": 3, "name": "Set Ancient", "state": true }, "state": true }
    , "item_level": 0, "item_options": { "id": 2, "name": "Semi Full Options", "state": true }, "observation": null
    , "user_account": { "id": 1, "nickname": "Charspunk" }
    , "mu_server": { "id": 1, "name": "MU PVP", "state": true }, "state": true, "created": Date.now()
  },
  {
    "id": 19, "item": { "id": 10, "name": "Hades's Sphinx", "item_category": { "id": 4, "name": "Set Lucky", "state": true }, "state": true }
    , "item_level": 13, "item_options": { "id": 1, "name": "Full Options", "state": true }, "observation": null
    , "user_account": { "id": 2, "nickname": "Administrator" }
    , "mu_server": { "id": 1, "name": "MU PVP", "state": true }, "state": true, "created": Date.now()
  },
  {
    "id": 20, "item": { "id": 10, "name": "Hades's Sphinx", "item_category": { "id": 4, "name": "Set Lucky", "state": true }, "state": true }
    , "item_level": 13, "item_options": { "id": 1, "name": "Full Options", "state": true }, "observation": null
    , "user_account": { "id": 1, "nickname": "Charspunk" }
    , "mu_server": { "id": 1, "name": "MU PVP", "state": true }, "state": true, "created": Date.now()
  },
  {
    "id": 21, "item": { "id": 11, "name": "Dione's Silk", "item_category": { "id": 4, "name": "Set Lucky", "state": true }, "state": true }
    , "item_level": 13, "item_options": { "id": 1, "name": "Full Options", "state": true }, "observation": null
    , "user_account": { "id": 1, "nickname": "Charspunk" }
    , "mu_server": { "id": 1, "name": "MU PVP", "state": true }, "state": true, "created": Date.now()
  },
  {
    "id": 22, "item": { "id": 11, "name": "Dione's Silk", "item_category": { "id": 4, "name": "Set Lucky", "state": true }, "state": true }
    , "item_level": 13, "item_options": { "id": 1, "name": "Full Options", "state": true }, "observation": null
    , "user_account": { "id": 1, "nickname": "Charspunk" }
    , "mu_server": { "id": 1, "name": "MU PVP", "state": true }, "state": true, "created": Date.now()
  },
  {
    "id": 23, "item": { "id": 12, "name": "Moros's Scale", "item_category": { "id": 4, "name": "Set Lucky", "state": true }, "state": true }
    , "item_level": 0, "item_options": { "id": 1, "name": "Full Options", "state": true }, "observation": null
    , "user_account": { "id": 2, "nickname": "Administrator" }
    , "mu_server": { "id": 1, "name": "MU PVP", "state": true }, "state": true, "created": Date.now()
  },
  {
    "id": 24, "item": { "id": 12, "name": "Moros's Scale", "item_category": { "id": 4, "name": "Set Lucky", "state": true }, "state": true }
    , "item_level": 13, "item_options": { "id": 1, "name": "Full Options", "state": true }, "observation": null
    , "user_account": { "id": 1, "nickname": "Charspunk" }
    , "mu_server": { "id": 1, "name": "MU PVP", "state": true }, "state": true, "created": Date.now()
  },
]
