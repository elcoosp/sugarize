const abortIfError = require('./index.js')

test('should throw a custom error if the method does not exist on the provided value', () => {
  const foo = {}
  expect(() => abortIfError(foo, 'bar')).toThrowError()
})
