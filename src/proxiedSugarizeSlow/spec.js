const proxiedSugarizeSlow = require('./index.js')

test('should return sugarSlow functions for the destructured properties', () => {
  const { toUpperCase, repeat } = proxiedSugarizeSlow
  expect(toUpperCase()('abc')).toBe('ABC')
  expect(repeat(2)('abc')).toBe('abcabc')
})
