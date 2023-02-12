const express = require('express')
const mongoose = require('./modules/connection')

const app = express()
const port = process.env.PORT || 8000

const User = require('./modules/userModel')
const Anilist = require('./modules/anilistModel')

// Bodyparser Middleware
const bodyparser = require('body-parser')
app.use(bodyparser.json())

// Pick which application has access to the server (every app)
const cors = require('cors')
app.use(
  cors({
    origin: '*'
  })
)

const userRoute = require('./routes/userRoute')
const anilistRoute = require('./routes/anilistRoute')

app.use('/user', userRoute)
app.use('/anime', anilistRoute)

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})

// app.use(express.json())
//  const { email, username, password } = req.body;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
