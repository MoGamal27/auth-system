const express = require('express')
const router = express.Router()
const deviceController = require('../controllers/deviceController')


router.post('/device', deviceController.deviceTrustStatus)
router.post('/trust-device', deviceController.trustDevice)

module.exports = router

