const MyBigNumber = require('./MyBigNumber')
const assert = require('assert')

console.log(MyBigNumber.plus(0.1, 0.2) === 0.3) // true
console.log(MyBigNumber.minus(0.12, 0.1) === 0.02) // true
console.log(MyBigNumber.mul(1.15, 100) === 115) // true
console.log(MyBigNumber.div(0.15, 0.1) === 1.5) // true
