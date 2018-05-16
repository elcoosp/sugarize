const sugarSlow = require('../sugarSlow')
const proxyGet = require('../proxyGet')

const proxiedSugarizeSlow = proxyGet((_, prop) => sugarSlow(prop))

module.exports = proxiedSugarizeSlow
