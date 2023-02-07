const express = require('express')
const mongoose = require('./modules/connection')

const app = express()
const port = process.env.PORT || 6000
const jwt = require('jsonwebtoken')

const User = require('./modules/userModel')
const Anilist = require('./modules/anilistModel')
const bcrypt = require('bcrypt')

// Bodyparser Middleware
const bodyparser = require('body-parser')
app.use(bodyparser.json())

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

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})

// app.use(express.json())
//  const { email, username, password } = req.body;
