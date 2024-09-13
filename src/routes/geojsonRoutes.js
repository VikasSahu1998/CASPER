const express = require('express');
const router = express.Router();
const GeoJsonController = require('../controllers/geojsonController');
 
// Define the route to get the GeoJSON file
router.get('/:filename', GeoJsonController.getGeoJsonFile);
 
module.exports = router;