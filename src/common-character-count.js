const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;

  const o1 = s1.split('').reduce((accum, char) => {
    if (accum[char]) {
      accum[char] = accum[char] + 1
    } else {
      accum[char] = 1
    }
    return accum
  }, {});

  const o2 = s2.split('').reduce((accum, char) => {
    if (accum[char]) {
      accum[char] = accum[char] + 1
    } else {
      accum[char] = 1
    }
    return accum
  }, {});

  for (let key in o1) {
    const num1 = o1[key] ? o1[key] : 0;
    const num2 = o2[key] ? o2[key] : 0;
    if(num1 < num2){
      count = count + num1
    } else {
      count = count + num2
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
