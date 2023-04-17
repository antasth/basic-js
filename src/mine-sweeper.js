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

matrix = [
  [true, false, false],
  [false, true, false],
  [false, false, false],
]

function minesweeper(matrix) {
  throw new NotImplementedError('Not implemented')
  // remove line with error and write your code here
  // let width = matrix[0].length
  // let heigth = matrix.length
  // let res = []

  // // for (i = 0; i < width; i++) {
  // //   res[i] = new Array()
  // //   for (j = 0; j < heigth; j++) {
  // //     res[i][j] = 0
  // //   }
  // // }

  // for (let i = 0; i < width; i++) {
  //   for (let j = 0; j < heigth; j++) {
  //     // console.log(matrix[i][j])
  //     // adjacentBombs(i, j)
  //     console.log(adjacentBombs(i, j))
  //   }
  // }

  // function adjacentBombs(row, col) {
  //   let i, j, count
  //   count = 0

  //   for (i = row - 1; i < row + 1; i++) {
  //     for (j = col - 1; j < col + 1; j++) {
  //       // if (i > 0 && j > 0 && matrix[i][j]) {
  //       if (i > 0 && j > 0 && matrix[i][j] !== undefined) {
  //         //   if (i == row && j == col) continue
  //         //   // console.log(matrix[i][j])
  //         //   count++
  //         // }
  //         console.log(matrix[i][j])
  //       }
  //     }
  //   }
  //   // return count
  // }

  // return res
}
// console.log(minesweeper(matrix))

module.exports = {
  minesweeper,
}
