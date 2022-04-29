const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();

  let res = str.slice(1, str.length - 1);
  for (let i = 0; i < str.length; i++) {
    const arr = str.split('');
    delete arr[i];
    const num = +arr.join('')
    if (num > res) {
      res = num;
    }
  }

  return res;
}

module.exports = {
  deleteDigit
};
