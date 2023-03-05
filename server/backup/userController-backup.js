const User = require('../modules/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signupUser = async (req, res) => {
  if (!req.body.email || !req.body.username || !req.body.password) {
    res.send({ message: 'Please complete all the fields' })
  } else {
    // Check if user exists
    let user = await User.findOne({ email: req.body.email })
    if (user) {
      res.send({ message: 'User already exists' })
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
}

const loginUser = async (req, res) => {
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
}

const verifyUser = async (req, res) => {
  //decrypt the token and get ID
  jwt.verify(req.body.token, process.env.TOKEN_KEY, async (err, payload) => {
    if (payload) {
      let user = await User.findOne({ _id: payload.id })
      res.send(user)
      // console.log(user)
    } else {
      res.send({ message: 'session expired' })
    }
  })
}

module.exports = {
  signupUser,
  loginUser,
  verifyUser
}

// return res.status(400).json({ message: 'User already exists' })
