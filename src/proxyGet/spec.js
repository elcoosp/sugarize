const proxyGet = require('./index.js')

test('should a proxy with the get method passed as argument for the handler', () => {
  expect(proxyGet((obj, prop) => 3).abc).toEqual(3)
})
