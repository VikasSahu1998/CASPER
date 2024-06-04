const authenticateToken = require("../../middleware/authenticate");
const checkNocas = require("../../middleware/nocas");
const checkSubscription = require("../../middleware/subscription")
const router = require("express").Router()
const nocasController = require("../controllers/nocasController");

router.post("/createNocas",authenticateToken,checkSubscription,checkNocas, nocasController.createNocas);

router.post("/createOneTime",authenticateToken, nocasController.createOneTime);
router.get("/getAllNocasData", authenticateToken, nocasController.getAllNocasData);
router.get("/getAllPermissible", nocasController.getAllpermissible);

module.exports = router;
