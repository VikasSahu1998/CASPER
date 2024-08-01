const express = require('express');
const router = express.Router();
const nocasController = require('../controllers/nocasController');
const authenticateToken = require('../../middleware/authenticate');
const checkNocas = require('../../middleware/nocas');
const checkSubscription = require('../../middleware/subscription');

router.post('/createNocas', authenticateToken, checkSubscription, checkNocas, nocasController.createNocas);
router.post('/createOneTime', authenticateToken, nocasController.createOneTime);
router.get('/getAllNocasData', authenticateToken, nocasController.getAllNocasData);
router.get('/getAllPermissible', nocasController.getAllPermissible);
router.post('/save-screenshot', nocasController.uploadScreenshot, nocasController.saveScreenshot);

module.exports = router;
