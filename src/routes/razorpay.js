const express = require("express");
const router = express.Router();
const subscriptionController = require("../controllers/subscriptionController");

// Handle payment verification callback from Razorpay
router.post("/razor/PayVerification", subscriptionController.handlePaymentVerification);

module.exports = router;