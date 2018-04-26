const sugarSlow = require('./index.js')

test('should call the first argument as a method on the third argument', () => {
  expect(sugarSlow('toUpperCase')()('str')).toEqual('STR')
})

test('should call the first arg as a method on the third arg with the second arg as args of the method call', () => {
  expect(sugarSlow('repeat')(3)('str')).toEqual('strstrstr')
})

test('should call the first arg as a method on the third arg with the second multiple args as args of the method call', () => {
  expect(sugarSlow('split')('.', 3)('str.t.t.o')).toEqual(['str', 't', 't'])
})

test('should throw an error if the method does not exist on the third arg', () => {
  expect(() => sugarSlow('toUpperCgergfzfezase')()('str')).toThrow()
})
