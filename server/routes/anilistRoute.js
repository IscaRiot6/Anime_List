const anilistController = require('../controllers/anilistController')
const router = require('express').Router()

router.post('/', anilistController.addAnime)
router.get('/:_id', anilistController.getAnime)
router.delete('/:id', anilistController.deleteAnime)

module.exports = router
