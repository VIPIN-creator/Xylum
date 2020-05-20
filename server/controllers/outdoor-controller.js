// Import json with list of users
const outdoor = require('./../data/db2.json')
// Create controller for GET request to '/users/all'
exports.outdoorGetAll = async (req, res) => {
  // res.send('There will be dragons, not posts.')
  res.json(outdoor.outdoor)
}