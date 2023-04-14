const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!")
  let res = []

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-prev':
        if (i > 0 && i !== arr.length) {
          res.pop()
        }
        break
      case '--discard-next':
        if (i > 0 && i !== arr.length) {
          arr[i + 1] = 'discarded'
        }
        break
      case '--double-next':
        if (i + 1 !== arr.length) {
          res.push(arr[i + 1])
        }
        break
      case '--double-prev':
        if (i > 0 && arr[i] !== 'discarded') {
          res.push(arr[i - 1])
        }
        break
      default:
        res.push(arr[i])
        break
    }
  }
  return res.filter((item) => item !== 'discarded')
}

module.exports = {
  transform,
}
