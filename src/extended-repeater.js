const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let string = String(str)
  let stringRepeat = options.repeatTimes ? options.repeatTimes : 1
  let addition = options.hasOwnProperty('addition')
    ? String(options.addition)
    : ''
  let additionRepeat = options.additionRepeatTimes
    ? options.additionRepeatTimes
    : 1
  let separator = options.separator ? options.separator : '+'
  let additionSeparator = options.additionSeparator
    ? options.additionSeparator
    : '|'
  let repeatString = ''
  let res = ''
  for (let i = 1; i <= additionRepeat; i++) {
    i === additionRepeat
      ? (repeatString += addition)
      : (repeatString += addition + additionSeparator)
  }
  string += repeatString

  for (let i = 1; i <= stringRepeat; i++) {
    i === stringRepeat ? (res += string) : (res += string + separator)
  }
  return res
}

module.exports = {
  repeater,
}
