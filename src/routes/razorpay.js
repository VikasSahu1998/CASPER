const express = require("express");
const router = express.Router();
const subscriptionController = require("../controllers/subscriptionController");
router.post("/razor/PayVerification", subscriptionController.handlePaymentVerification);

module.exports = router;