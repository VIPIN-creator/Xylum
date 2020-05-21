// Import express framework
const express = require('express')
// Import middleware
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const compression = require('compression')
const helmet = require('helmet')
const cors = require('cors')
// Import routes
const indoorRouter = require('./routes/indoor-route')
const outdoorRouter = require('./routes/outdoor-route')
const comboRouter = require('./routes/combo-route')
const fruitRouter = require('./routes/fruit-route')

// Setup default port
const PORT = process.env.PORT || 4000
// Create express app
const app = express()
// Implement middleware
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(bodyParser.json())
if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
    app.get('*', (req, res) => {
      res.sendFile('build/index.html', { root: __dirname })
  })
}

// Implement route for '/users' endpoint
// ! Note:
// '/users' will prefix all post routes
// with '/users' => '/all' will become '/users/all'
app.use('/indoor',indoorRouter)
app.use('/outdoor',outdoorRouter)
app.use('/combo',comboRouter)
app.use('/fruit',fruitRouter)

// Implement route for errors
app.use((err, req, res, next) => {
   console.error(err.stack)
   res.status(500).send('Something broke!')
})
// Start express app
app.listen(PORT, function() { console.log(`Server is running on: ${PORT}`)
})