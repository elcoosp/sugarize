const sugarSlow = require('../sugarSlow')
const sugarizeSlow = (...methods) => methods.map(sugarSlow)
module.exports = sugarizeSlow
