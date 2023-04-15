const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.depth = 1
    this.result = []
  }
  calculateDepth(arr) {
    this.result = []
    function findArray(item) {
      return Array.isArray(item)
    }
    if (arr.some(findArray)) {
      this.depth++
      arr = arr.flat()
      this.calculateDepth(arr)
    }
    this.result.push(this.depth)
    this.depth = 1
    return Math.max.apply(null, this.result)
  }
}

module.exports = {
  DepthCalculator,
}
