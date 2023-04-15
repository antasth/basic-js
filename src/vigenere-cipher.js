const { NotImplementedError } = require('../extensions/index.js');

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
 
  encrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'


  }
  decrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};

function matrixArray(rows,columns){
  var arr = new Array();
  for(var i=0; i<rows; i++){
    arr[i] = new Array();
    for(var j=0; j<columns; j++){
      arr[i][j] = i+j+1;//вместо i+j+1 пишем любой наполнитель. В простейшем случае - null
    }
  }
  return arr;
}
var myMatrix = matrixArray(3,3);

// console.log(myMatrix);