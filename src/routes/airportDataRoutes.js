const express = require('express');
const router = express.Router();
const airportController = require('../controllers/airportDataController'); // Ensure this path is correct

router.get('/airportData', airportController.getAirports);

module.exports = router;
