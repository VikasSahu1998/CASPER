const express = require('express');
const adminController = require('../controllers/adminController');
const authenticateToken = require('../../middleware/authenticate'); // Adjust the path as necessary
const router = express.Router();

// Login route
router.post('/adminLogin', adminController.loginAdmin);


module.exports = router;
