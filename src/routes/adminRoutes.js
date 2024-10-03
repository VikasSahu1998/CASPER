const express = require('express');
const adminController = require('../controllers/adminController');
const authenticateToken = require('../../middleware/authenticate'); // Adjust the path as necessary
const router = express.Router();
 
// Login route
router.post('/adminLogin', adminController.loginAdmin);
router.post('/checkAdmin', adminController.checkAdmin); // Ensure this matches your HTTP method
 
module.exports = router;