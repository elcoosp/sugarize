const sugarize = require('./index.js')

test('should return an array of sugar function with partial application of the method names passed as arguments', () => {
  const sugarizedFuncs = sugarize('toUpperCase', 'toLowerCase')

  sugarizedFuncs.map((func, i) => {
    i === 0 && expect(func('str')).toEqual('STR')
    i === 1 && expect(func('STR')).toEqual('str')
  })
})
