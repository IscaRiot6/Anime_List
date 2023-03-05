const express = require('express')
const router = express.Router()
const profileController = require('../controllers/profileController')

// Route for user profile page
router.get('/', profileController.getProfilePage)

// Route for updating user account details
router.put('/', profileController.updateAccountDetails)

// Route for logging out
router.post('/logout', profileController.logout)

module.exports = router
