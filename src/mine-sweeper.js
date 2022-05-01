const { NotImplementedError } = require('../extensions/index.js');

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
function minesweeper(matrix) {
  const result = new Array(matrix.length).fill(null).map((row, index) => new Array(matrix[index].length));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let count = 0;
      let newArr = [matrix[i][j - 1], matrix[i][j + 1]];
      if (i - 1 >= 0) {
        newArr.push(matrix[i - 1][j + 1]);
        newArr.push(matrix[i - 1][j]);
        newArr.push(matrix[i - 1][j - 1]);
      }
      if (i + 1 < matrix.length) {
        newArr.push(matrix[i + 1][j + 1]);
        newArr.push(matrix[i + 1][j]);
        newArr.push(matrix[i + 1][j - 1]);
      }
      for (let h = 0; h < newArr.length; h++) {
        if (newArr[h] === true) {
          count++;
        }
      }
      result[i][j] = count;
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
