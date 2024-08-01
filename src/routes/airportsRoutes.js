const express = require('express');
const airportController = require('../controllers/airportController');
const router = express.Router();
router.get('/airports', airportController.getAllAirports);
module.exports = router;
