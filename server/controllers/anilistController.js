const Anilist = require('../modules/anilistModel')

const addAnime = async (req, res) => {
  let newAnime = new Anilist({
    title: req.body.title,
    genre: req.body.genre,
    user: req.body.user
  })
  await newAnime.save()
  res.send({ message: 'Anime has been added successfully' })
}

const getAnime = async (req, res) => {
  let animes = await Anilist.find({ user: req.params.id })
  res.send({ list: animes })
}

const deleteAnime = async (req, res) => {
  await Anilist.findOneAndDelete({ _id: req.params.id })
  res.send({ message: 'Anime deleted' })
}

module.exports = {
  addAnime,
  getAnime,
  deleteAnime
}
