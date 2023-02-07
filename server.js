const express = require('express')
const mongoose = require('./modules/connection')

const app = express()
const port = process.env.PORT || 8000
const jwt = require('jsonwebtoken')

const User = require('./modules/userModel')
const Anilist = require('./modules/anilistModel')
const bcrypt = require('bcrypt')

// Bodyparser Middleware
const bodyparser = require('body-parser')
app.use(bodyparser.json())

// Pick which application has acces to the server
const cors = require('cors')
app.use(
  cors({
    origin: '*'
  })
)

app.post('/signup', async (req, res) => {
  if (!req.body.email || !req.body.username || !req.body.password) {
    res.send({ message: 'Please complete all the fields' })
  } else {
    // Check if user exists
    let user = await User.findOne({ email: req.body.email })
    if (user) {
      return res.status(400).json({ message: 'User already exists' })
    } else {
      // Create hash and salt
      bcrypt.hash(req.body.password, 10, async (err, hash) => {
        if (hash) {
          let newUser = new User({
            email: req.body.email,
            username: req.body.username,
            password: hash
          })
          // Save user
          await newUser.save()
          res.send({ message: true })
        } else {
          console.log(err)
          res.send({ message: false })
        }
      })
    }
  }
})

app.post('/login', async (req, res) => {
  // Check if user exists
  let user = await User.findOne({ username: req.body.username })
  if (user) {
    bcrypt.compare(req.body.password, user.password, function (err, result) {
      if (result) {
        let token = jwt.sign({ id: user._id }, process.env.TOKEN_KEY, {
          expiresIn: process.env.TOKEN_EXPIRES_IN
        })
        res.send({ token })
      } else {
        res.send({ message: 'Wrong password' })
      }
    })
  } else {
    return res.status(400).json({ message: 'Wrong username' })
  }
})

app.post('/verify', async (req, res) => {
  //decrypt the token and get ID
  jwt.verify(req.body.token, process.env.TOKEN_KEY, async (err, payload) => {
    if (payload) {
      let user = await User.findOne({ _id: payload.id })
      res.send(user)
    } else {
      res.send({ message: 'session expired' })
    }
  })
})

// app.post('/verify', async (req, res) => {
//   jwt.verify(req.body.token, process.env.TOKEN_KEY, async (err, decoded) => {
//     if (err) {
//       res.send({ message: 'session expired' })
//     } else {
//       let userId = decoded.id
//       // use the id to get the data of the user
//       let user = await User.findOne({ _id: userId })
//       let token = jwt.sign({ id: user._id }, process.env.TOKEN_KEY, {
//         expiresIn: process.env.TOKEN_EXPIRES_IN
//       })
//       // return the user
//       let data = {
//         username: user.username,
//         token: token
//       }
//       res.send(data)
//     }
//   })
// })

app.post('/anime', async (req, res) => {
  let newAnime = new Anilist({
    title: req.body.title,
    genre: req.body.genre,
    user: req.body.user
  })
  await newAnime.save()
  res.send({ message: 'Anime has been added successfully' })
})

app.get('/anime', async (req, res) => {
  let animes = await Anilist.find({ user: req.params.id })
  res.send({ list: animes })
})

app.delete('/anime/:id', async (req, res) => {
  await Anilist.findOneAndDelete({ _id: req.params.id })
  res.send({ message: 'Anime deleted' })
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})

// app.use(express.json())
//  const { email, username, password } = req.body;
