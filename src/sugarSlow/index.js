const abortIfError = require('../abortIfError')

const sugarSlow = method => (...args) => val =>
  abortIfError(val, method) && val[method](args)

module.exports = sugarSlow
