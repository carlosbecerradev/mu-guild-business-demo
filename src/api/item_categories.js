class ItemCategory {
  constructor(id, name, state) {
    this.id = id
    this.name = name
    this.state = state
  }
}

export default {
  getAll(cb) {
    setTimeout(() => cb(_item_categories), 100)
  },
  getbyId(item_category_id, cb) {
    let itemCategory = new ItemCategory
    itemCategory = _item_categories.find(({ id }) => id == item_category_id)
    setTimeout(() => cb(itemCategory), 100)
    console.log('item_categories_api-findbyId', itemCategory)
  },
}

const _item_categories = [
  { "id": 1, "name": "Set", "state": true },
  { "id": 2, "name": "Wings", "state": true },
  { "id": 3, "name": "Set Ancient", "state": true },
  { "id": 4, "name": "Set Lucky", "state": true },
]
