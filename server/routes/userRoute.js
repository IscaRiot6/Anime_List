const userController = require('../controllers/userController')
const router = require('express').Router()

router.post('/signup', userController.signupUser)
router.post('/login', userController.loginUser)
router.post('/verify', userController.verifyUser)

module.exports = router
