const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  let arr = []
  let res = []
  domains.forEach((element) => {
    arr.push(element.split('.').reverse())
  })

  arr.forEach((item) => {
    let x = ''
    for (let i = 0; i < item.length; i++) {
      res.push(x + '.' + item[i])
      x = res[i]
    }
  })
  const resItems = [...new Set(res)]
  console.log(res)
  const obj = resItems.reduce((object, value) => {
    return { ...object, [value]: res.filter((item) => item === value).length }
  }, {})
  return obj
}


module.exports = {
  getDNSStats,
}
