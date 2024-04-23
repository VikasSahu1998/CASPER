const router = require("express").Router()
const requestController = require("../controllers/requestController")
router.post("/createRequest",requestController.createRequest)
module.exports = router