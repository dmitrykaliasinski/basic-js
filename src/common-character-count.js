const { NotImplementedError } = require("../extensions/index.js");

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
  const arr1 = s1.split("").sort();
  const arr2 = s2.split("").sort();
  let count = 0;
  let sameChar = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      if (sameChar.includes(arr1[i])) {
        continue;
      } else {
        sameChar.push(arr1[i]);
        let min = Math.min(
          arr1.filter((item) => item === s1[i]).length,
          arr2.filter((item) => item === s1[i]).length
        );
        count += min;
      }
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};
