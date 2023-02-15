const mongoose = require('./connection')

const AnilistSchema = new mongoose.Schema(
  {
    title: { type: String, required: false },
    description: { type: String },
    genre: { type: [String], required: true },
    imageUrl: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
)

const Anilist = mongoose.model('Anilist', AnilistSchema)

module.exports = Anilist
