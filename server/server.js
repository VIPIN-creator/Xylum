// Import express framework
import express, { json, urlencoded } from 'express'
// Import middleware
import { json as _json } from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'
// Import routes
import indoorRouter from './routes/indoor-route'
import outdoorRouter from './routes/outdoor-route'
import comboRouter from './routes/combo-route'
import fruitRouter from './routes/fruit-route'

// Setup default port
const PORT = process.env.PORT || 4000
// Create express app
const app = express()
// Implement middleware
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cookieParser())
app.use(_json())
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