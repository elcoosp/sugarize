const sugarSlow = method => (...args) => val => val[method](...args)

module.exports = sugarSlow
