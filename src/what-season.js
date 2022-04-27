const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
const season = ["winter", "spring", "summer", "autumn"];

function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) {
    throw Error("Invalid date!");
  } else {
    const monthIndex = Math.floor(((date.getMonth() + 1) / 3) % 4);
    return season[monthIndex];
  }
}

module.exports = {
  getSeason,
};
