const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

class VigenereCipheringMachine {
  constructor() {
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  }
  encrypt(string, key) {
    let str = string.toLowerCase().replace(/ /g, '')
    let stringIndexes = []
    let keyIndexes = []
    let cipherIndexes = []
    let cryptedString = []
    str.split('').forEach((element) => {
      this.alphabet.includes(element)
        ? stringIndexes.push(this.alphabet.indexOf(element))
        : stringIndexes.push(element)
    })
    key
      .toLowerCase()
      .split('')
      .forEach((element) => {
        this.alphabet.includes(element)
          ? keyIndexes.push(this.alphabet.indexOf(element))
          : keyIndexes.push(element)
      })

    while (keyIndexes.length < stringIndexes.length) {
      keyIndexes = [...keyIndexes, ...keyIndexes]
    }
    keyIndexes = keyIndexes.splice(0, stringIndexes.length)

    for (let i = 0; i < stringIndexes.length; i++) {
      typeof stringIndexes[i] === 'number'
        ? cipherIndexes.push((stringIndexes[i] + Number(keyIndexes[i])) % 26)
        : cipherIndexes.push(stringIndexes[i])
    }

    for (let i = 0; i < cipherIndexes.length; i++) {
      typeof cipherIndexes[i] === 'number'
        ? cryptedString.push(this.alphabet[cipherIndexes[i]])
        : cryptedString.push(cipherIndexes[i])
    }

    let nonCryptedStr = string.split('')
    for (let i = 0; i < nonCryptedStr.length; i++) {
      if (nonCryptedStr[i] === ' ') {
        cryptedString.splice(i, 0, ' ')
      }
    }
    return cryptedString.join('').toUpperCase()
  }
  decrypt() {
    throw new NotImplementedError('Not implemented')
    // remove line with error and write your code here
  }
}

const directMachine = new VigenereCipheringMachine()
directMachine.encrypt('Samelengthkey', 'Samelengthkey')

module.exports = {
  VigenereCipheringMachine,
}

console.log(typeof 0)
