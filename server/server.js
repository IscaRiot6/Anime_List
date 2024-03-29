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
// const profileRoute = require('./routes/profileRoute')

app.use('/user', userRoute)
app.use('/anime', anilistRoute)
// app.use('/profile', profileRoute)

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})

// app.use(express.json())
//  const { email, username, password } = req.body;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../anilist/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve('../anilist', 'build', 'index.html'))
  })
}
