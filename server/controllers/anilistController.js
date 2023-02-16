const Anilist = require('../modules/anilistModel')

const addAnime = async (req, res) => {
  let newAnime = new Anilist({
    title: req.body.title,
    description: req.body.description,
    genre: req.body.genre,
    imageUrl: req.body.imageUrl,
    user: req.body.user
  })
  await newAnime.save()
  let animes = await Anilist.find({ user: req.body.user })
  res.send({ msg: animes })
}

const getAnime = async (req, res) => {
  let animes = await Anilist.find({ user: req.params._id })
  res.send(animes)
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
