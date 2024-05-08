const authenticateToken = require("../../middleware/authenticate")
const checkSubscription = require("../../middleware/subscription")
const router = require("express").Router()
const subscriptionController = require("../controllers/subscriptionController")


router.post("/addSubscription",authenticateToken,checkSubscription,subscriptionController.addUserSubscription)
router.post("/getSubscription",authenticateToken,subscriptionController.getUserSubscription)
router.get("/checkSubscriptions",authenticateToken,subscriptionController.checkSubscriptions)


module.exports = router