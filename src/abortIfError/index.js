const throwErr = msg => {
  throw new Error(msg)
}

const sugarErr = (val, method) =>
  throwErr(
    `ERROR: You tried to sugar the method ${method} on ${val}, but this method does not exist on ${val}`
  )

const abortIfError = (val, method) =>
  !val[method] ? sugarErr(val, method) : true

module.exports = abortIfError
