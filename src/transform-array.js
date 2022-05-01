const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      newArr.push(arr[i]);
    } else {
      switch (arr[i]) {
        case '--discard-next':
          i = i + 2;
          break;
        case '--discard-prev':
          if (newArr.length) {
            newArr.pop();
          }
          break;
        case '--double-next':
          if (arr[i + 1] && typeof arr[i + 1] === 'number') {
            newArr.push(arr[i + 1]);
          }
          break;
        case '--double-prev':
          if (arr[i - 1]) {
            newArr.push(arr[i - 1]);
          }
          break;
        default:
          newArr.push(arr[i]);
      }
    }
  }
  return newArr;
}

module.exports = {
  transform
};
