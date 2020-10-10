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
    const r = new BigNumber(a).plus(b)

    // @Test Logger
    console.log(`【加法】-处理前：${a + b}, 处理后：${r}`)

    return +r.toString()
  }

  /**
   * 减法 用例：0.12 - 0.1 ?= 0.02
   */
  static minus(a, b) {
    const r = new BigNumber(a).minus(b)

    // @Test Logger
    console.log(`【减法】-处理前：${a - b}, 处理后：${r}`)

    return +r.toString()
  }

  /**
   * 乘法 用例：1.15 * 100 ?= 115
   */
  static mul(a, b) {
    const r = new BigNumber(a).multipliedBy(b)

    // @Test Logger
    console.log(`【乘法】-处理前：${a * b}, 处理后：${r}`)

    return +r.toString()
  }

  /**
   * 除法 用例： 0.15 / 0.1 ?= 1.5
   */
  static div(a, b) {
    const r = new BigNumber(a).dividedBy(b)

    // @Test Logger
    console.log(`【除法】-处理前：${a / b}, 处理后：${r} `)

    return +r.toString()
  }
}

MyBigNumber.plus(0.1, 0.2) // 【加法】-处理前：0.30000000000000004, 处理后：0.3
MyBigNumber.minus(0.12, 0.1) // 【减法】-处理前：0.01999999999999999, 处理后：0.02
MyBigNumber.mul(1.15, 100) // 【乘法】-处理前：114.99999999999999, 处理后：115
MyBigNumber.div(0.15, 0.1) // 【除法】-处理前：1.4999999999999998, 处理后：1.5
