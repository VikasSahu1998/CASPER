const router = require("express").Router()
const otpcontroller = require('../controllers/otpController')
const authenticateToken = require("../../middleware/authenticate")
router.post('/sendOtp', otpcontroller.sendOtp);
router.post('/validateOtp',otpcontroller.validateOtp);

module.exports = router;


