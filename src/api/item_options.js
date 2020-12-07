class ItemOption {
  constructor(id, name, state) {
    this.id = id
    this.name = name
    this.state = state
  }
}

export default {
  getAll() {
    return _item_options
  },
}

const _item_options = [
  { "id": 1, "name": "Full Options", "state": true },
  { "id": 2, "name": "Semi Full Options", "state": true },
  { "id": 3, "name": "+Luck", "state": true },
]
