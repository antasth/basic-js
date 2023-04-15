const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
  let zeroArr = []
  let res = []
  matrix.forEach((item) => {
    for (let i = 0; i < item.length; i++) {
      delete item[zeroArr[i]]
      if (item[i] === 0) {
        zeroArr.push(i)
      }
    }
  })
  matrix.forEach((item) => {
    res = [...res, ...item]
  })
  res = res.filter((item) => typeof item !== 'undefined')
  return res.reduce((acc, curr) => {
    if (typeof curr !== 'undefined') return acc + curr
  }, 0)
}

module.exports = {
  getMatrixElementsSum,
}

