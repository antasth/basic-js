const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
  const team = members.filter((item) => typeof item === 'string')
  const teamNames = []
  team.forEach((item) => {
    teamNames.push(item.trim())
  })
  let teamName = []
  teamNames.forEach((element) => {
    teamName.push(element.substr(0, 1).toUpperCase())
  })
  return teamName.sort().join('')
}

module.exports = {
  createDreamTeam,
}
