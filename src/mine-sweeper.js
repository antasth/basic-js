const { NotImplementedError } = require('../extensions/index.js')

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

// matrix = [
//   [true, false, false],
//   [false, true, false],
//   [false, false, false],
// ]
function minesweeper(/*matrix */) {
  throw new NotImplementedError('Not implemented');

  // matrix.forEach((item) => {
  //   for (let i = 0; i < item.length; i++) {
  //     item[i] === true ? (item[i] = 1) : (item[i] = 0)
  //   }
  // })
  // matrix.forEach(item => {
  //   for(let i =0; i< item.length; i++) {

  //   }
  // })
  // console.log(matrix)
}
// minesweeper(matrix)

module.exports = {
  minesweeper,
}
