const router = require("express").Router()
const authenticateToken = require("../../middleware/authenticate")
const requestController = require("../controllers/requestController")
router.post("/createRequest",requestController.createRequest)
router.get("/getAllService", authenticateToken, requestController.getAllService);
module.exports = router