const BigNumber = require('bignumber.js')

/**
 * JavaScript中的加减乘除的精度的问题
 * 基于bignumber.js
 */

class MyBigNumber {
  /**
   * 加法 用例： 0.1 + 0.2 ?= 0.3
   */
  static plus(a, b) {
    return +new BigNumber(a).plus(b).toString()
  }

  /**
   * 减法 用例：0.12 - 0.1 ?= 0.02
   */
  static minus(a, b) {
    return +new BigNumber(a).minus(b).toString()
  }

  /**
   * 乘法 用例：1.15 * 100 ?= 115
   */
  static mul(a, b) {
    return +new BigNumber(a).multipliedBy(b).toString()
  }

  /**
   * 除法 用例： 0.15 / 0.1 ?= 1.5
   */
  static div(a, b) {
    return +new BigNumber(a).dividedBy(b).toString()
  }
}

module.exports = MyBigNumber
