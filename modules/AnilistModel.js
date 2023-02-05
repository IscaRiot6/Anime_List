const mongoose = require('./connection')

const AnilistSchema = new mongoose.schema({
  title: { type: String, required: true },
  description: { type: String },
  genre: { type: [String], required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

const Anilist = mongoose.model('Anilist', AnilistSchema)

module.exports = Anilist
