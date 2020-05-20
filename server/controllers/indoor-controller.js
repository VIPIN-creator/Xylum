// Import json with list of users
const indoor = require('./../data/db2.json')
// Create controller for GET request to '/users/all'
exports.indoorGetAll = async (req, res) => {
  // res.send('There will be dragons, not posts.')
  res.json(indoor.indoor)
}