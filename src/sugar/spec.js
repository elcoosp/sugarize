const sugar = require('./index.js')

test('should call the first argument as a method on the second argument', () => {
  expect(sugar('toUpperCase')('str')).toEqual('STR')
})

test('should throw an error if the method does not exist on the second arg', () => {
  expect(() => sugar('toUpperCgergfzfezase')('str')).toThrow()
})
