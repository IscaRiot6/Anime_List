const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const { MONGO_URI } = process.env
mongoose.set('strictQuery', false)

async function main () {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Successfully connected to database')
  } catch (error) {
    console.error(error)
  }
}

main()

module.exports = mongoose
