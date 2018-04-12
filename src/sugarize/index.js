const sugar = require('../sugar')
const sugarize = (...methods) => methods.map(sugar)
module.exports = sugarize
