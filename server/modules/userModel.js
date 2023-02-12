const mongoose = require('./connection')

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true, //checks for other data
    required: true, //forces input
    trim: true //trims unneeded white space
  },
  username: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user',
    enum: ['user', 'admin']
  }
})

const User = mongoose.model('User', UserSchema)

module.exports = User
