const sugar = require('../sugar')
const proxyGet = require('../proxyGet')

const proxiedSugarizeSlow = proxyGet((_, prop) => sugar(prop))

module.exports = proxiedSugarizeSlow
