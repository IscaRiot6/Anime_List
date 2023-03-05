const User = require('../modules/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Function for rendering user profile page
const getProfilePage = async (req, res) => {
  console.log(req.body)
  try {
    const user = await User.findById(payload.id).select('-password')
    console.log(payload)
    res.json(user)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server error')
  }
}

// Function for updating user account details
const updateAccountDetails = async (req, res) => {
  try {
    const { email, username, password } = req.body
    const user = await User.findById(req.user._id)
    if (!user) {
      return res.status(400).json({ message: 'User not found' })
    }

    // Check if email or username is already in use by another user
    const existingUser = await User.findOne({ $or: [{ email }, { username }] })
    if (existingUser && existingUser._id.toString() !== user._id.toString()) {
      return res
        .status(400)
        .json({ message: 'Email or username is already in use' })
    }

    // Update user details
    user.email = email
    user.username = username
    if (password) {
      user.password = await bcrypt.hash(password, 10)
    }
    await user.save()

    res.json({ message: 'Account details updated successfully' })
  } catch (err) {
    console.error(err)
    res.status(500).send('Server error')
  }
}

// Function for logging out user
const logout = (req, res) => {
  res.clearCookie('jwt')
  res.redirect('/')
}

module.exports = {
  getProfilePage,
  updateAccountDetails,
  logout
}
