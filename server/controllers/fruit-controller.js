// Import json with list of users
const fruit = require('./../data/db2.json')
// Create controller for GET request to '/users/all'
exports.fruitGetAll = async (req, res) => {
  // res.send('There will be dragons, not posts.')
  res.json(fruit.fruit)
}