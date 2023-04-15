const { NotImplementedError } = require('../extensions/index.js')

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

function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!'
  if (date instanceof Date == false || Object.getOwnPropertyNames(date).length)
    throw new Error('Invalid date!')
    
  const seasons = [
    {
      season: 'winter',
      begin: new Date(Date.UTC(date.getFullYear(), 0, 1)),
      end: new Date(Date.UTC(date.getFullYear(), 2, 1)),
    },
    {
      season: 'winter',
      begin: new Date(Date.UTC(date.getFullYear(), 11, 1)),
      end: new Date(Date.UTC(date.getFullYear() + 1, 0, 1)),
    },
    {
      season: 'spring',
      begin: new Date(Date.UTC(date.getFullYear(), 2, 1)),
      end: new Date(Date.UTC(date.getFullYear(), 5, 1)),
    },
    {
      season: 'summer',
      begin: new Date(Date.UTC(date.getFullYear(), 5, 1)),
      end: new Date(Date.UTC(date.getFullYear(), 8, 1)),
    },
    {
      season: 'autumn',
      begin: new Date(Date.UTC(date.getFullYear(), 8, 1)),
      end: new Date(Date.UTC(date.getFullYear(), 11, 1)),
    },
  ]
  return seasons.find((item) => date > item.begin && date < item.end).season
}

module.exports = {
  getSeason,
}
