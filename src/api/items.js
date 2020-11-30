class Item {
  constructor(id, name, item_category, state) {
    this.id = id
    this.name = name
    this.item_category = item_category
    this.state = state
  }
}

export default {
  getAll(cb) {
    setTimeout(() => cb(_items), 100)
  },
  getbyId(item_id, cb) {
    let item = new Item
    item = _items.find(({ id }) => id == item_id)
    setTimeout(() => cb(item), 100)
    console.log('items_api-findbyId', item)
  },
}

const _items = [
  {
    "id": 1,
    "name": "Black Dragon Set",
    "item_category": { "id": 1, "name": "Set", "state": true },
    "state": true
  },
  {
    "id": 2,
    "name": "Dark Soul Set",
    "item_category": { "id": 1, "name": "Set", "state": true },
    "state": true
  },
  {
    "id": 3,
    "name": "Red Spirit Set",
    "item_category": { "id": 1, "name": "Set", "state": true },
    "state": true
  },
  {
    "id": 4,
    "name": "Wing of Illusion",
    "item_category": { "id": 2, "name": "Wings", "state": true },
    "state": true
  },
  {
    "id": 5,
    "name": "Wing of Dimension",
    "item_category": { "id": 2, "name": "Wings", "state": true },
    "state": true
  },
  {
    "id": 6,
    "name": "Wing of Eternal",
    "item_category": { "id": 2, "name": "Wings", "state": true },
    "state": true
  },
  {
    "id": 7,
    "name": "Vicious Dragon Set",
    "item_category": { "id": 3, "name": "Set Ancient", "state": true },
    "state": true
  },
  {
    "id": 8,
    "name": "Aruane Guardian Set",
    "item_category": { "id": 3, "name": "Set Ancient", "state": true },
    "state": true
  },
  {
    "id": 9,
    "name": "Muren Storm Crow Set",
    "item_category": { "id": 3, "name": "Set Ancient", "state": true },
    "state": true
  },
  {
    "id": 10,
    "name": "Hades's Sphinx",
    "item_category": { "id": 4, "name": "Set Lucky", "state": true },
    "state": true
  },
  {
    "id": 11,
    "name": "Dione's Silk",
    "item_category": { "id": 4, "name": "Set Lucky", "state": true },
    "state": true
  },
  {
    "id": 12,
    "name": "Moros's Scale",
    "item_category": { "id": 4, "name": "Set Lucky", "state": true },
    "state": true
  },
]
