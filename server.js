const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
require('dotenv').config()

// Bodyparser Middleware
app.use(bodyParser.json())

const port = process.env.PORT || 6000
app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})

app.use(express.json())

const { MONGO_URI } = process.env
mongoose.set('strictQuery', false)

async function main () {
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

main()
  .then(() => {
    console.log('Successfully connected to database')
  })
  .catch(err => console.log(err))

module.exports = mongoose
