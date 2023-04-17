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
  constructor(type) {
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    this.type = (type = false) ? 'reverse' : 'direct'
  }
  encrypt(string, key) {
    if (!string || !key) throw new Error('Incorrect arguments!')
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
    if (this.type === 'direct') {
      return cryptedString.join('').toUpperCase()
    } else {
      return cryptedString.reverse().join('').toUpperCase()
    }
  }
  decrypt(string, key) {
    if (!string || !key) throw new Error('Incorrect arguments!')
    let str = string.toLowerCase().replace(/ /g, '')
    let stringIndexes = []
    let keyIndexes = []
    let cipherIndexes = []
    let deCryptedString = []

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
      if (typeof stringIndexes[i] === 'number') {
        let num = stringIndexes[i] - (Number(keyIndexes[i]) % 26)
        if (num > 0) {
          cipherIndexes.push(num)
        } else {
          num = (num + 26) % 26
          cipherIndexes.push(num)
        }
      } else {
        cipherIndexes.push(stringIndexes[i])
      }
    }

    for (let i = 0; i < cipherIndexes.length; i++) {
      typeof cipherIndexes[i] === 'number'
        ? deCryptedString.push(this.alphabet[cipherIndexes[i]])
        : deCryptedString.push(cipherIndexes[i])
    }

    let nonCryptedStr = string.split('')
    for (let i = 0; i < nonCryptedStr.length; i++) {
      if (nonCryptedStr[i] === ' ') {
        deCryptedString.splice(i, 0, ' ')
      }
    }

    if (this.type === 'direct') {
      return deCryptedString.join('').toUpperCase()
    } else {
      return deCryptedString.reverse().join('').toUpperCase()
    }
  }
}


module.exports = {
  VigenereCipheringMachine,
}

console.log(typeof 0)
