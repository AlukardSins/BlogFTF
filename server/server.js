const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

// DB Config file
const dbConfig = require('./db/config')

// Defining PORT
const port = process.env.PORT || 3000

// Routes

// Connecting mongoDB
mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(
    () => {
      console.log('Database connected sucessfully')
    },
    (err) => {
      console.log(`Database not connected, with error: \t${err.status}`)
    }
  )

// Initialize express server
const app = express()

// Middleware chain config
app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

// RESTful API routes

// Start listening
app.listen(port, () => {
  console.log(`Conected to port ${port}`)
})
