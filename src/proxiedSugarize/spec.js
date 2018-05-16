const proxiedSugar = require('./index.js')

test('should return sugar functions for the destructured properties', () => {
  const { toUpperCase } = proxiedSugar
  expect(toUpperCase('abc')).toBe('ABC')
})
