# Sugarize

[![Greenkeeper badge](https://badges.greenkeeper.io/elcoosp/sugarize.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/elcoosp/sugarize.svg?branch=master)](https://travis-ci.org/elcoosp/sugarize)

Sugarize method calls instead of creating functions specially for piping

## Install

`npm i -S sugarize`

## Basic usage

```javascript
const { sugarizeSlow, sugarize } = require('sugarize')

const pipeAllTheThings = (...fns) => a => fns.reduce((acc, f) => f(acc), a)

const [up, low, rep] = sugarizeSlow('toUpperCase', 'toLowerCase', 'repeat')
const a = pipeAllTheThings(up(), low(), rep(3))('str')
a // ​​​​​strstrstr​​​​​

const [upper, lower] = sugarize('toUpperCase', 'toLowerCase')
const b = pipeAllTheThings(upper, lower)('str')
b // str

const c = pipeAllTheThings(...sugarize('toUpperCase', 'toLowerCase'))('str')
c // str
```
