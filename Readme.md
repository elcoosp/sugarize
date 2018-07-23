# Sugarize

[![Greenkeeper badge](https://badges.greenkeeper.io/elcoosp/sugarize.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/elcoosp/sugarize.svg?branch=master)](https://travis-ci.org/elcoosp/sugarize)

Sugarize method calls instead of creating functions specially for piping.

## Install

`npm i -S sugarize`

## Basic usage

```javascript
const { sugarizeSlow, sugarize } = require('sugarize')

const pipe = (...fns) => a => fns.reduce((acc, f) => f(acc), a)

const [up, low, rep] = sugarizeSlow('toUpperCase', 'toLowerCase', 'repeat')
const a = pipe(
  up(),
  low(),
  rep(3)
)('str')
a // ​​​​​strstrstr​​​​​

const [upper, lower] = sugarize('toUpperCase', 'toLowerCase')
const b = pipe(
  upper,
  lower
)('str')
b // str

const c = pipe(...sugarize('toUpperCase', 'toLowerCase'))('str')
c // str
```

This works with any custom method, since the sugar function return a new function ready to call the given method with arguments (in the case of the sugarSlow version).

```javascript
const doThing = sugarSlow('doThing')
const makeBar = sugar('makeBar')
const obj = {
  doing: undefined,
  making: undefined,
  doThing(something) {
    this.doing = `Doing ${something}`
    return this
  },
  makeBar() {
    this.making = 'Making bar'
    return this
  }
}

pipe(doThing('sport'), makeBar)(obj)
//​​​ { doing: 'Doing sport',​​​​​
​​​​​// making: 'Making bar',​​​​​
​​​​​// doThing: [λ: doThing],​​​​​
​​​​​// makeBar: [λ: makeBar] }​​​​​
```

## Or with proxy version

This version produce exactly the same result but use a proxy behind, so it is not safe to use for production purpose.

```javascript
const { proxiedSugarizeSlow, proxiedSugarize } = require('sugarize')

const { toUpperCase, toLowerCase } = proxiedSugarize // Just extract the method call you need
const a = pipe(
  toUpperCase,
  toLowerCase
)('str')
// str

const { map, repeat, toUpperCase, join } = proxiedSugarizeSlow
const a = pipe(
  map(repeat(2)),
  join(''),
  toUpperCase()
)(['s', 't', 'r'])
// SSTTRR
```
