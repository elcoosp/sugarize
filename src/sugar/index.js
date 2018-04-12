const abortIfError = require('../abortIfError')

const sugar = method => val => abortIfError(val, method) && val[method]()

module.exports = sugar
