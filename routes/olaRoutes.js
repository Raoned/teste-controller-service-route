const express = require("express");
const router = express.Router();
const olaController = require("../controller/olaController");

router.get("/ola", olaController.falarOla);

module.exports = router;
