class ItemOption {
  constructor(id, name, state) {
    this.id = id
    this.name = name
    this.state = state
  }
}

export default {
  getAll(cb) {
    setTimeout(() => cb(_item_options), 100)
  },
  getbyId(item_coption_id, cb) {
    let itemOption = new ItemOption
    itemOption = _item_options.find(({ id }) => id == item_coption_id)
    setTimeout(() => cb(itemOption), 100)
    console.log('item_options_api-findbyId', itemOption)
  },
}

const _item_options = [
  { "id": 1, "name": "Full Options", "state": true },
  { "id": 2, "name": "Semi Full Options", "state": true },
  { "id": 3, "name": "+Luck", "state": true },
]
