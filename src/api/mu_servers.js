const _mu_servers = [
  { "id": 1, "name": "MU PVP", "version": "99b + S2", "website": "https://muonlinepvp.net", "coins": "WCoins", "created": Date.now() },
  { "id": 2, "name": "MU Titanio", "version": "S6", "website": "https://mutitanio.com/", "coins": "WCoins", "created": Date.now() },
]

class MUServer {
  constructor(id, name, version, website, coins, created) {
    this.id = id
    this.name = name
    this.version = version
    this.website = website
    this.coins = coins
    this.created = created
  }
}

export default {
  getAll(cb) {
    setTimeout(() => cb(_mu_servers), 100)
  },
  findMUServerbyId(mu_server_id, cb) {
    let mu_server = new MUServer
    mu_server = _mu_servers.find(({ id }) => id == mu_server_id)
    setTimeout(() => cb(mu_server), 100)
    // console.log('mu_server_api', mu_server)
  },
}
