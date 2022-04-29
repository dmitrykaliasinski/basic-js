const { NotImplementedError } = require("../extensions/index.js");

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
  const nArray = n.toString();
  let someNumbers = [];
  for (let i = 0; i < nArray.length; i++) {
    someNumbers.push(nArray.slice(0, i) + nArray.slice(i + 1));
  }
  return Math.max(...someNumbers);
}

module.exports = {
  deleteDigit,
};
