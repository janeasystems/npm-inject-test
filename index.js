var addRemoteTarball = require("./node_modules/npm/lib/cache/add-remote-tarball.js")

require.cache[require.resolve('./node_modules/npm/lib/cache/add-remote-tarball.js')].exports = function (u, tmp, shasum, auth, cb) {
  console.error("u:", u)
  console.error("tmp:", tmp)
  console.error("shasum:", shasum)
  console.error("auth:", auth)
  console.error("cb:", cb)

  addRemoteTarball(u, tmp, shasum, auth, cb)
}

console.error("Injected NPM. Invoking.")

require('./node_modules/npm/bin/npm-cli.js')
