// Import json with list of users
const combo = require('./../data/db2.json')
// Create controller for GET request to '/users/all'
exports.comboGetAll = async (req, res) => {
  // res.send('There will be dragons, not posts.')
  res.json(combo.combo)
}