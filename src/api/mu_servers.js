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
  findMUServerbyId(mu_server_id) {
    let mu_server = new MUServer
    setTimeout(
      mu_server = _mu_servers.find(({ id }) => id == mu_server_id)
      , 100)
    console.log('api', mu_server)
    return mu_server
  }
}
