const express = require('express')
const mongoose = require('./modules/connection')

const app = express()
const port = process.env.PORT || 6000

// Bodyparser Middleware
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})

// app.use(express.json())
